import { createRouter, createWebHashHistory } from 'vue-router';

import HomePage from './components/HomePage.vue';
import ProblemList from './components/ProblemList.vue';
import UploadProblem from './components/UploadProblem.vue';
import MathProblems from './components/problems/MathProblems.vue';

const routes = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/list", component: ProblemList},
    { path: "/upload", component: UploadProblem},
    { path: "/mathproblems", component: MathProblems},

    
  ],
});

export default routes;
