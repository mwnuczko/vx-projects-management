import Vuex from 'vuex';

import combineModules from './utils/combine-modueles';
// modules
import core from './modules/core';
import users from './modules/users';
import projects from './modules/projects';
import usersProjects from './modules/usersProjects';

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  strict: debug,
  ...combineModules([
    core,
    users,
    projects,
    usersProjects,
  ]),
});
