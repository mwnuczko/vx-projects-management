import ProjectsModule from './index';
import ProjectList from './pages/ProjectList';
import EditProject from './pages/EditProject';

export default [
  {
    path: '/projects',
    component: ProjectsModule,
    children: [
      { path: '', component: ProjectList },
      { path: 'edit/:id', component: EditProject, name: 'editProject' },
    ],
  },
];
