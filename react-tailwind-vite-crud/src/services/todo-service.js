import apiClient from "../libs/api-client";

export async function getTodoes() {
    return await apiClient.get('/api/todoes');
};

export async function getTodo(id) {
    return await apiClient.get(`/api/todoes/${id}`);
};

export async function createTodo(task) {
    return await apiClient.post('/api/todoes', { task });
};

export async function updateTodo(id, data) {
    return await apiClient.put(`/api/todoes/${id}`, data)
};

export async function deleteTodo(id) {
    return await apiClient.delete(`/api/todoes/${id}`)
};