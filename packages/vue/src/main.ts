import { createApp } from "vue";
import App from "./App.vue";
import "uno.css";

export const testCaseComponents = import.meta.globEager("./cases/**/*.vue");

createApp(App).mount("#app");
