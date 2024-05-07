// ==|== Imports ===================================================================================
import { createRouter, createWebHistory } from 'vue-router';

// ==|== Routes ====================================================================================
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomePage.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutPage.vue')
  },
  {
    path: '/instructor',
    name: 'Instructor',
    component: () => import('@/views/InstructorView.vue')
  },
  {
    path: '/pilots',
    name: 'Pilots',
    component: () => import('@/views/PilotsView.vue')
  },
  {
    path: '/pilots/:id',
    name: 'Pilot',
    component: () => import('@/views/PilotView.vue'),
    children: [
      {
        path: 'stats',
        name: 'PilotStats',
        component: () => import('@/views/PilotStatsView.vue')
      },
      {
        path: 'flights',
        name: 'PilotFlights',
        component: () => import('@/views/PilotFlightView.vue')
      }
    ]
  },
  {
    path: '/style-guide',
    name: 'StyleGuide',
    component: () => import('@/views/StyleGuidePage.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('@/views/ErrorPage.vue')
  }
];

// ==|== Router ====================================================================================
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

// ==|== Export ====================================================================================
export default router;
