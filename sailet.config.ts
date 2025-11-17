// sailet.config.ts

import { script, step, cmd, $ } from "sailet";

script("build", () => [
  step("Build kernel", () => [
    cmd(
      $`bun build --outdir dist --target node --packages external src/index.ts`
    ),
  ]),
]);
