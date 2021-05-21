import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList';
import UsersList from './components/users/UsersList';
import UsersFooter from './components/users/UsersFooter';
import TeamMembers from './components/teams/TeamMembers';
import TeamsFooter from './components/teams/TeamsFooter';
import NotFound from './components/NotFound';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        { name: 'team-members', path: ':teamId', component: TeamMembers, props: true },
      ]
    },
    { path: '/users', components: { default: UsersList, footer: UsersFooter }, alias: '/user' },
    { path: '/:notFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'router-active'
});

const app = createApp(App);
app.use(router);

app.mount('#app');
