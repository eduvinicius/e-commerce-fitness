import axios from 'axios'

import { ItemsData } from '../interfaces/ItemData';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const getSups = () => api.get<ItemsData[]>('/sups');
export const getEquips = () => api.get<ItemsData[]>('/equips');
export const getAnt = () => api.get<ItemsData[]>('/ant');

export default api;
