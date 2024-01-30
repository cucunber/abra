export const SYS_UNITS = {
    bytes: 0,
    kiB: 1,
    MiB: 2,
    GiB: 3,
    TiB: 4
} as const

export const HZ_UNITS = {
  hz: 0,
  khz: 1,
  mhz: 2,
  ghz: 3,
} as const

export function convertUnitsToBytes(units: number, from?: typeof SYS_UNITS[keyof typeof SYS_UNITS]) {
  if (!+units) return 0;

  const k = Math.pow(1024, from ?? SYS_UNITS.bytes);

  return units * k;
}

export function convertBytesToUnits(bytes: number, to?: typeof SYS_UNITS[keyof typeof SYS_UNITS]){
  if (!+bytes) return 0;

  const k = Math.pow(1024, to ?? SYS_UNITS.MiB);

  return bytes / k;
}

export function convertUnitsToHz(units: number, from?: typeof HZ_UNITS[keyof typeof HZ_UNITS]) {
  if(!units) return 0;

  const k = Math.pow(1000, from ?? HZ_UNITS.hz);

  return units * k;
}

export function convertHzToUnits(hz: number, to?: typeof HZ_UNITS[keyof typeof HZ_UNITS]){
  if (!+hz) return 0;

  const k = Math.pow(1000, to ?? HZ_UNITS.mhz);

  return hz / k;
}