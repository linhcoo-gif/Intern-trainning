import { useEffect, useState } from "react";
import useLoading from "./useLoading";

const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
};

export default function UseLoadingWithuseeffect() {
    const { isLoading, error, execute } = useLoading(fetchPosts);

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        execute().then((data) => {
            setPosts(data);
        });
    }, [execute]);

    return (
        <div>
            {" "}
            <div>
                {isLoading && <p>Đang tải bài viết...</p>}
                {error && <p>Lỗi: {error.message}</p>}
                <ul>
                    {posts.map((post: any) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
