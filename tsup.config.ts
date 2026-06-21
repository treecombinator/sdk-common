import { defineConfig } from "tsup";

// sdk-common: a single entry — the shared error contract. No runtime dependencies.
// Portable dual ESM + CJS + type declarations.
export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  sourcemap: true,
  target: "es2022",
  outDir: "dist",
});
