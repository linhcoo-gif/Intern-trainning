import { useState, useCallback } from "react";

const useLoading = () => {
    const [isLoading, setIsLoading] = useState(false);

    const startLoading = useCallback(() => {
        setIsLoading(true);
    }, []);

    const finishLoading = useCallback(() => {
        setIsLoading(false);
    }, []);

    // Thêm helper để tự động quản lý loading khi chạy Promise
    const withLoading = useCallback(
        async <T>(promise: Promise<T>): Promise<T> => {
            startLoading();
            try {
                return await promise;
            } finally {
                finishLoading();
            }
        },
        []
    );

    return { isLoading, startLoading, finishLoading, withLoading };
};

export default useLoading;
