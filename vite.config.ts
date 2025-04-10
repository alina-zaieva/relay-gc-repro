import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      plugins: [
        [
          "@swc/plugin-relay",
          {
            rootDir: __dirname,
            artifactDirectory: "src/__generated__",
            language: "typescript",
            eagerEsModules: true,
          },
        ],
      ],
    }),
  ],
});
