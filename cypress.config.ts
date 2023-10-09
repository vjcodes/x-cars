import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
  },
  env: {
    API_URL: "https://hu-22-react-mockapi-urtjok3rza-wl.a.run.app/",
  },
});
