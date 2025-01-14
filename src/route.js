import { createRouter, createWebHashHistory } from 'vue-router';

import HomePage from './components/HomePage.vue';
import ProblemList from './components/problems/ProblemList.vue';
import UploadProblem from './components/problems/UploadProblem.vue';
import MathProblems from './components/problems/MathProblems.vue';
import EditProblem from './components/problems/EditProblem.vue';

const routes = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/list", component: ProblemList},
    { path: "/upload", component: UploadProblem},
    { path: "/mathproblems", component: MathProblems},
    { path: "/edit", component: EditProblem}

    
  ],
});

export default routes;
