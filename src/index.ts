import { readEBI } from "./ebi";
import { g } from "./global/global";
import { kmod } from "./kmod/kmod";

const ebi = readEBI();

Object.keys(g).forEach(function (key) {
  // @ts-ignore
  globalThis[key] = g[key];
});

eval(kmod.fs.read(ebi.entrypoint));
