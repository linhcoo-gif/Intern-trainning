export default function TodoList() {
    return (
        <div>
            <h2>Danh sách Todos</h2>
            <ul>
                {/* {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.title} -{" "}
                        {todo.completed ? "Hoàn thành" : "Chưa xong"}
                        <button onClick={() => removeTodo(todo.id)}>Xóa</button>
                    </li>
                ))} */}
            </ul>
        </div>
    );
}
