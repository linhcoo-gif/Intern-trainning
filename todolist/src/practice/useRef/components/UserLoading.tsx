import useLoading from "./useLoading";

const fetchUserData = async () => {
    return new Promise((resolve) =>
        setTimeout(() => resolve("User data loaded"), 2000)
    );
};

const UserComponent = () => {
    const { isLoading, error, execute } = useLoading(fetchUserData);

    return (
        <div>
            <button onClick={() => execute()}>
                {isLoading ? "Đang tải..." : "Tải dữ liệu"}
            </button>
            {error && <p style={{ color: "red" }}>Lỗi: {error.message}</p>}
        </div>
    );
};

export default UserComponent;
