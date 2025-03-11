import { useEffect, useState } from "react";
import useDebounce from "../hook/useDebounce";

export default function Search() {
    const [query, setQuery] = useState("");
    const debouncedQuery = useDebounce(query, 300);

    useEffect(() => {
        if (debouncedQuery) {
            console.log("Fetching data :: ", debouncedQuery);
        }
    }, [debouncedQuery]);

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Tìm kiếm..."
            />
        </div>
    );
}
