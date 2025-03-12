import axios from "axios";

const API_URL = "http://localhost:3001/todos";

export const getTodos = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addTodo = async (todo: { title: string; completed: boolean }) => {
    const response = await axios.post(API_URL, todo);
    return response.data;
};

export const updateTodo = async (
    id: number,
    todo: { title: string; completed: boolean }
) => {
    const response = await axios.put(`${API_URL}/${id}`, todo);
    return response.data;
};

export const deleteTodo = async (id: number) => {
    await axios.delete(`${API_URL}/${id}`);
};
