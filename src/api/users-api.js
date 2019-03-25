import DataApiService from './data-api.service';

const api = new DataApiService('/api/users', { key: 'users' });

export default api;
