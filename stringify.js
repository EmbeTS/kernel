import { readFileSync } from "fs";
import path from "path";

const kernelJs = readFileSync(
  path.join(import.meta.dirname, "/dist/index.js"),
  "utf-8"
);

export function readEmbeTSKernel() {
  return `// Kernel code
${kernelJs}
`;
}
