import { readFileSync } from "fs";

const kernelJs = readFileSync("dist/index.js", "utf-8");

export function readEmbeTSKernel() {
  return `// Kernel code
${kernelJs}
`;
}
