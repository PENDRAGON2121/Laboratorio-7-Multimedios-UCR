import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

// Define the routes for the application.
// Each route object specifies the path, name, component, and optionally children routes.
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "landing", // Name for the group of routes using LandingLayout
    component: () => import("@/layouts/LandingLayout.vue"), // Main layout for public pages
    children: [
      {
        path: "", // Empty path makes this the default child route for "/"
        name: "home",
        component: HomeView, // Component for the home page
      },
      {
        path: "about", // Path relative to the parent (e.g., /about)
        name: "about",
        // Route-level code-splitting:
        // This generates a separate chunk (About.[hash].js) for this route,
        // which is lazy-loaded when the route is visited, improving initial load time.
        component: () => import("../views/AboutView.vue"), // Component for the about page
      },
      {
        path: "features",
        name: "features",
        component: () => import("../views/FeaturesView.vue"), // Component for the features page
      },
      {
        path: "pricing",
        name: "pricing",
        component: () => import("../views/PricingView.vue"), // Component for the pricing page
      },
      {
        path: "contact",
        name: "contact",
        component: () => import("../views/ContactView.vue"), // Component for the contact page
      },
      {
        path: "item/:id", // Dynamic route parameter: ':id' captures a segment of the URL.
        name: "item",
        /**
         * Props function to pass route params as component props.
         * This function receives the current route object.
         * @param route - The current route object provided by Vue Router.
         * @returns An object containing props to be passed to the ItemView component.
         */
        props: (route) => {
          // The '+' converts the string 'id' from route.params to a number.
          return {
            id: +route.params.id,
          };
        },
        component: () => import("../views/ItemView.vue"), // Component for displaying a single item
      },
    ],
  },
  {
    // Note: The path is '/auth' but the name is 'login'. This might be intentional if '/auth'
    // is a general path for authentication that defaults to login, or it could be a slight mismatch.
    // For clarity, if this route is solely for login, path: "/login" might be more direct.
    path: "/auth",
    name: "login", // Route name for the login page
    // This route directly loads the LoginView. If AuthLayout is intended for this view,
    // LoginView itself should include or use AuthLayout.
    component: () => import("../views/LoginView.vue"), // Component for the login page
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/RegisterView.vue"), // Component for the registration page
  },
];

// Create the router instance.
const router = createRouter({
  // Use HTML5 history mode for cleaner URLs (no # in the URL).
  // import.meta.env.BASE_URL is typically provided by the build tool (e.g., Vite)
  // and represents the base public path of the application.
  history: createWebHistory(import.meta.env.BASE_URL),
  // Provide the defined routes to the router.
  routes,
});

// Export the router instance to be used in main.ts.
export default router;
