import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  // Pin the workspace root to this app directory so Next.js does not
  // infer the wrong root from a parent package-lock.json (silences the
  // "multiple lockfiles" warning).
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
