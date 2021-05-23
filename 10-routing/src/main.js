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
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      alias: '/user',
      beforeEnter(to, from, next) {
        console.log('Users beforeEnter');
        next();
      }
    },
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

// Navigation Guard
router.beforeEach((to, from, next) => {
  /*if (to.name === 'team-members') {
    next(); // can be next(false) or next('/route')
  } else {
    // stuck on 'team route'
    next({ name: 'team-members', params: { teamId: 't2' } });
  }*/
  console.log('Global beforeEach');
  next();
});

router.afterEach((to, from) => {
  // sending analytics data
  console.log('Global afterEach');
  console.log(to, from);
});

const app = createApp(App);
app.use(router);

app.mount('#app');
