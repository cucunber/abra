export const SYS_UNITS = {
    bytes: 0,
    kiB: 1,
    MiB: 2,
    GiB: 3,
    TiB: 4
} as const

export function convertUnitsToBytes(units: number, from?: typeof SYS_UNITS[keyof typeof SYS_UNITS]) {
    if (!+units) return 0;

  const k = Math.pow(1024, from ?? SYS_UNITS.bytes);

  return units * k;
}
