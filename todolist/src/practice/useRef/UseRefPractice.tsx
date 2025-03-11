/**
 * useRef
 */

import { useRef } from "react";
import Search from "./components/Search";

// Truy xuất trực tiếp vào dom và ko cần re-render
// lưu trữ giá trị có thể thay đổi nhưng ko gây re-render

export default function UseRefPractice() {
    const inputRef = useRef(null);
    const count = useRef(0);

    function focusInput() {
        inputRef.current.focus();
        count.current++;
    }

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={focusInput}>Focus Input</button>
            <Search />
        </div>
    );
}
