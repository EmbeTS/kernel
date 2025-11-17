import type { Kmod } from "./kmod/kmod";

declare global {
  function print(message: string): void;
  const ___$kmod: Kmod;
}
