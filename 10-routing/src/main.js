import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './pages/TeamsList';
import UsersList from './pages/UsersList';
import UsersFooter from './pages/UsersFooter';
import TeamMembers from './components/teams/TeamMembers';
import TeamsFooter from './pages/TeamsFooter';
import NotFound from './pages/NotFound';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
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
  console.log('Global beforeEach');

  if (to.meta.needsAuth) {
    console.log('Needs auth!')
  }
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
