import state from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export const NAMESPACE = 'PROJECT_LIST';

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
