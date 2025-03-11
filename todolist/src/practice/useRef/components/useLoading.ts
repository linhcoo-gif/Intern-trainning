import { useState, useCallback } from "react";

type UseLoadingReturn<T> = {
    isLoading: boolean;
    error: Error | null;
    execute: (...args: any[]) => Promise<T>;
};

/**
 * Custom hook để quản lý trạng thái loading khi gọi API hoặc thực hiện tác vụ async.
 * @param asyncFunction - Hàm bất đồng bộ cần theo dõi
 * @returns { isLoading, error, execute } - Trạng thái loading, lỗi và hàm thực thi
 */

// Lưu trạng thái isLoading : để biết khi nào bắt đầu và kết thúc
// execute : Bọc 1 hàm async để bật/ tắt loading
// xử lý lỗi

function useLoading<T>(
    asyncFunction: (...args: any[]) => Promise<T>
): UseLoadingReturn<T> {
    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState<Error | null>(null);

    const execute = useCallback(
        async (...args: any[]): Promise<T> => {
            setIsLoading(true);
            setError(null);
            try {
                const result = await asyncFunction(...args);
                return result;
            } catch (err) {
                setError(err as Error);
                throw err;
            } finally {
                setIsLoading(false);
            }
        },
        [asyncFunction]
    );

    return { isLoading, error, execute };
}

export default useLoading;
