import DataApiService from './data-api.service';

const api = new DataApiService('/api/projects', { key: 'projects' });

export default api;
