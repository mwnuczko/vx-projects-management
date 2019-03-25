import { merge } from 'lodash';

import DataApiService from './data-api.service';
import usersApi from './users-api';
import projectsApi from './projects-api';

const linkApi = new DataApiService('/api/usersProjects', { key: 'usersProjects' });

export default {
  getProjectsByUserIds(userIds) {
    return Promise.all([
      linkApi.getAll(),
      projectsApi.getAll()
    ]).then(([links, projects]) => {
      return merge({}, links, projects);
    });
  },

  getUsersByProjectIds(projectIds) {
    return Promise.all([
      linkApi.getAll(),
      usersApi.getAll()
    ]).then(([links, users]) => {
      return merge({}, links, users);
    });
  }
};
