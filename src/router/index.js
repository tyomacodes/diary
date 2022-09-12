import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "Home",
    },
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    meta: {
      title: "Login",
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
  {
    path: "/register",
    name: "register",
    meta: {
      title: "Register",
    },
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/RegisterView.vue"),
  },
  {
    path: "/workouts",
    name: "workouts",
    meta: {
      title: "Workouts",
    },
    component: () =>
      import(/* webpackChunkName: "workout" */ "../views/WorkoutView.vue"),
  },
  {
    path: "/exercises",
    name: "exercises",
    meta: {
      title: "Exercises",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "exercises" */ "../views/ExerciseView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Change document titles
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Workout Tracker`;
  next();
});

export default router;
