import { useState, useEffect } from "react";

/**
 * Custom hook để debounce giá trị.
 * @param value Giá trị cần debounce
 * @param delay Thời gian debounce (ms), mặc định là 500ms
 * @returns Giá trị đã debounce
 */
function useDebounce<T>(value: T, delay: number = 500): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(handler); // Cleanup khi component unmount hoặc value thay đổi
    }, [value, delay]);

    return debouncedValue;
}

export default useDebounce;
