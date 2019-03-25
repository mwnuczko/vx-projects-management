import { map, orderBy } from 'lodash';

const userIds = (state) => {
  return state.result.users;
};

const usersByIdMap = (state) => {
  return state.entities.users;
};

// TODO: users

export default {
  userIds,
  usersByIdMap,
};
