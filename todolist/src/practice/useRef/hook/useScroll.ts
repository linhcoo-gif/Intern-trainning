import { useState, useEffect } from "react";

/**
 * Custom hook để theo dõi vị trí cuộn của cửa sổ hoặc một phần tử cụ thể.
 * @param targetRef - Tham chiếu đến phần tử cần theo dõi (nếu không có, sẽ theo dõi `window`)
 * @returns { x: number, y: number } - Vị trí cuộn theo trục X và Y
 */

// useScroll hoạt động dựa trên tư tưởng theo dõi vị trí cuộn (scroll position) của một phần tử hoặc toàn bộ trang,
// từ đó giúp giao diện phản ứng lại với hành động cuộn của người dùng.

function useScroll(targetRef?: React.RefObject<HTMLElement>) {
    const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const target = targetRef?.current || window;

        const handleScroll = () => {
            setScrollPosition({
                x:
                    target instanceof Window
                        ? window.scrollX
                        : target.scrollLeft,
                y: target instanceof Window ? window.scrollY : target.scrollTop,
            });
        };

        target.addEventListener("scroll", handleScroll);
        handleScroll(); // Cập nhật vị trí ban đầu

        return () => target.removeEventListener("scroll", handleScroll);
    }, [targetRef]);

    return scrollPosition;
}

export default useScroll;
