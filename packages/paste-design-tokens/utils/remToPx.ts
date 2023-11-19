// Based on root font-size being 16px
const PX_PER_REM = 16;

type UnitValue = string | number;
type UnitType = "string" | "number";

export const remToPx = (rem: UnitValue, type: UnitType = "number"): UnitValue => {
  const remValue = typeof rem === "string" ? Number.parseFloat(rem.replace("rem", "")) : rem;
  // We round because decimal px values can cause issues.
  const pxValue = Math.round(remValue * PX_PER_REM);

  return type === "number" ? pxValue : `${pxValue}px`;
};
