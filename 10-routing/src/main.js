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
  linkActiveClass: 'router-active',
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  }
});

// Navgigation Guard
router.beforeEach((to, from, next) => {
  console.log(to, from);
  /*if (to.name === 'team-members') {
    next(); // can be next(false) or next('/route')
  } else {
    // stuck on 'team route'
    next({ name: 'team-members', params: { teamId: 't2' } });
  }*/
  next();
});

const app = createApp(App);
app.use(router);

app.mount('#app');
