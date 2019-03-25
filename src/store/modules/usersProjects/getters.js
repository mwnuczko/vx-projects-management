import { map, filter } from 'lodash';

const userProjectIds = (state) => {
  return state.result.usersProjects;
};

const usersProjectsByIdMap = (state) => {
  return state.entities.usersProjects;
};

const usersProjects = (state, getters) => {
  return map(getters.userProjectIds, (id) => getters.usersProjectsByIdMap[id]);
};

export default {
  userProjectIds,
  usersProjectsByIdMap,
  usersProjects,
};
