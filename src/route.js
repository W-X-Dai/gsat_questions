import { createRouter, createWebHashHistory } from 'vue-router';

import HomePage from './components/HomePage.vue';
import ProblemList from './components/problems/ProblemList.vue';
import UploadProblem from './components/problems/UploadProblem.vue';
import MathProblems from './components/problems/MathProblems.vue';
import EditProblem from './components/problems/EditProblem.vue';
import Logout from "./components/Auth/logout.vue";
import Login from "./components/Auth/login.vue";
import Register from "./components/Auth/register.vue";
import ForgotPassword from './components/Auth/forgotPassword.vue';

const routes = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/list", component: ProblemList},
    { path: "/upload", component: UploadProblem},
    { path: "/mathproblems", component: MathProblems},
    { path: "/edit", component: EditProblem},
    { path: '/login', name: 'Login' ,component: Login },
    { path: '/register', component: Register },
    { path: '/forgotPassword', component: ForgotPassword },
    { path: '/logout', component: Logout },
    /* { path: '/auth/admin', component: Admin } */
  ],
});

export default routes;
