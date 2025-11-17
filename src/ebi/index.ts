import { kmod } from "../kmod/kmod";
import type { EBI } from "../types/ebi";

export function readEBI(): EBI {
  const str = kmod.fs.read("/boot/ebi.txt");
  const pairs = str.split(";");

  const ebi = {} as Partial<EBI>;

  pairs.forEach(function (pair) {
    const kv = pair.split("=");

    // @ts-ignore
    ebi[kv[0]] = kv[1];
  });

  return ebi as EBI;
}
