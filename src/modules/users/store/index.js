import state from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export const NAMESPACE = 'EDIT_USERS';

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
