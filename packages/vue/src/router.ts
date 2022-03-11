import {
  createRouter,
  createMemoryHistory,
  type RouterOptions,
} from "vue-router";
import CaseIndex from "./cases/CaseIndex.vue";

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
