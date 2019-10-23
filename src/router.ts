import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'message',
      component: () => import('./views/Message.vue'),
    },
    {
      path: '/notice',
      name: 'notice',
      component: () => import('./views/Notice.vue'),
    },
    {
        path: '/lover',
        name: 'lover',
        component: () => import('./views/Lover.vue'),
    },
    {
        path: '/daily-push',
        name: 'daily-push',
        component: () => import('./views/DailyPush.vue'),
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('./views/Home.vue'),
    },
    {
        path: '/*',
        redirect: '/lover',
    },
  ],
});

export default router;
