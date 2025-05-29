// Import global styles for the application.
import "./assets/main.css";

// Import necessary functions and components from Vue and local files.
import { createApp } from "vue";
import App from "./App.vue"; // Root application component.
import router from "./router"; // Vue Router instance.

// Create the Vue application instance with the root component App.
const app = createApp(App);

// Register the Vue Router plugin with the application instance.
app.use(router);

// Mount the application to the DOM element with the ID 'app'.
app.mount("#app");
