import UsersModule from './index';
import UserList from './pages/UserList';
import EditUser from './pages/EditUser';

export default [
  {
    path: '/users',
    component: UsersModule,
    children: [
      { path: '', component: UserList },
      { path: 'edit/:id', component: EditUser, name: 'editUser' },
    ],
  },
];
