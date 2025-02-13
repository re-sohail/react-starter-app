import api from './api';

export const fetcher = url => api.get(url).then(res => res.data);
