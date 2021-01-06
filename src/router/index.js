import { createRouter, createWebHistory } from "vue-router";
import SignUp from "../views/SignUp.vue";
import SignIn from "../views/SignIn.vue";
import CategoryIndex from "../views/category/Index.vue";
import CategoryCreate from "../views/category/Create.vue";
import CategoryEdit from "../views/category/Edit.vue";
import TaskIndex from "../views/task/Index.vue";
import TaskCreate from "../views/task/Create.vue";
import TaskEdit from "../views/task/Edit.vue";

const routes = [
  {
    path: "/",
    redirect: { name: "CategoryIndex" },
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/categories",
    name: "CategoryIndex",
    component: CategoryIndex,
  },
  {
    path: "/categories/create",
    name: "CategoryCreate",
    component: CategoryCreate,
  },
  {
    path: "/categories/:categoryId/edit",
    name: "CategoryEdit",
    component: CategoryEdit,
  },
  {
    path: "/categories/:categoryId",
    component: TaskIndex,
    children: [
      {
        path: "tasks",
        name: "TaskIndex",
        component: TaskIndex,
      },
      {
        path: "tasks/create",
        name: "TaskCreate",
        component: TaskCreate,
      },
      {
        path: "tasks/:taskId/edit",
        name: "TaskEdit",
        component: TaskEdit,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
