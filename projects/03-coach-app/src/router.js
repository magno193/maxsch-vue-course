import { createRouter, createWebHistory } from 'vue-router';
import store from './store';

const CoachDetail = () => import('./pages/coaches/CoachDetail.vue');
const CoachRegistration = () => import('./pages/coaches/CoachRegistration.vue');
const ContactCoach = () => import('./pages/requests/ContactCoach.vue');
const RequestsReceived = () => import('./pages/requests/RequestsReceived.vue');
const UserAuth = () => import('./pages/auth/UserAuth.vue');
const CoachesList = () => import('./pages/coaches/CoachesList.vue')
const NotFound = () => import('./pages/NotFound.vue');

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [
        { path: 'contact', component: ContactCoach },
      ]
    },
    { path: '/register', component: CoachRegistration, meta: { requiresAuth: true } },
    { path: '/requests', component: RequestsReceived, meta: { requiresAuth: true } },
    { path: '/auth', component: UserAuth, meta: { requiresAnon: true } },
    { path: '/:notFound(.*)', component: NotFound }
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters['isAuthenticated']) {
    next('/auth');
  } else if (to.meta.requiresAnon && store.getters['isAuthenticated']) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;