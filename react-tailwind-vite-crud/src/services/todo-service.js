import apiClient from "../libs/api-client";

/**
 * Services that handle CRUD operations by calling API backend service.
 * @module TodoService
 * @author ferrylinton
 */

/** @typedef {import("axios").AxiosResponse} AxiosResponse */

/**
 * @typedef UpdateData
 * @property {string} [task] - Todo's task
 * @property {boolean} [done] - Todo's status
 */

/**
 * Get array of Todo's data
 * @returns {Promise<AxiosResponse>} response
 */
export async function getTodoes() {
    return await apiClient.get('/api/todoes');
}

/**
 * Get Todo's data by ID
 * @param {string} id - Todo's ID
 * @returns {Promise<AxiosResponse>} response
 */
export async function getTodo(id) {
    return await apiClient.get(`/api/todoes/${id}`);
}

/**
 * 
 * @param {string} task - Todo's task 
 * @returns {Promise<AxiosResponse>} response
 */
export async function createTodo(task) {
    return await apiClient.post('/api/todoes', { task });
}

/**
 * Update Todo's  data
 * @param {string} id - Todo's ID
 * @param {UpdateData} data - New data
 * @returns {Promise<AxiosResponse>} response
 */
export async function updateTodo(id, data) {
    return await apiClient.put(`/api/todoes/${id}`, data);
}

/**
 * Delete Todo's data by ID
 * @param {string} id - Todo's ID
 * @returns {Promise<AxiosResponse>} response
 */
export async function deleteTodo(id) {
    return await apiClient.delete(`/api/todoes/${id}`);
}