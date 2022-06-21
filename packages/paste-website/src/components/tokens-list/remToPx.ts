// // Based on root font-size being 16px
const PX_PER_REM = 16;

export enum ReturnValueType {
  NUMBER = 'number',
  STRING = 'string',
}

interface remToPx {
  (rem: string | number, type: ReturnValueType.STRING): string;
  (rem: string | number, type: ReturnValueType.NUMBER): number;
  (rem: string | number, type: undefined): number;
}

export const remToPx = (rem: string | number, type = ReturnValueType.NUMBER) => {
  const remValue = typeof rem === 'string' ? Number.parseFloat(rem.replace('rem', '')) : rem;
  // We round because decimal px values can cause issues.
  const pxValue = Math.round(remValue * PX_PER_REM);

  return type === 'number' ? pxValue : `${pxValue}px`;
};
