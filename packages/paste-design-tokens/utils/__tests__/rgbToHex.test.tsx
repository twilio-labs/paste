import { rgbToHex } from '../rgbToHex';

describe('rgbToHex', () => {
  it('should convert RGB to HEX colors', () => {
    // White with spaces
    expect(rgbToHex('rgb(255, 255, 255)')).toBe('#FFFFFF');
    // White no spaces
    expect(rgbToHex('rgb(255,255,255)')).toBe('#FFFFFF');
    // Black
    expect(rgbToHex('rgb(0, 0, 0)')).toBe('#000000');
    // Random colors
    expect(rgbToHex('rgb(165, 155, 145)')).toBe('#A59B91');
    expect(rgbToHex('rgb(255, 214, 141)')).toBe('#FFD68D');
    // Paste colors
    expect(rgbToHex('rgb(235, 86, 86)')).toBe('#EB5656');
    expect(rgbToHex('rgb(0, 20, 137)')).toBe('#001489');
  });

  it('should convert RGBA to HEX colors', () => {
    // White with spaces
    expect(rgbToHex('rgba(255, 255, 255, 0.5)')).toBe('#FFFFFF80');
    // White no spaces
    expect(rgbToHex('rgba(255,255,255,0.01)')).toBe('#FFFFFF03');
    // Black
    expect(rgbToHex('rgba(0, 0, 0,0.999)')).toBe('#000000FF');
    // Random colors
    expect(rgbToHex('rgba(165, 155, 145,0.001)')).toBe('#A59B9100');
    expect(rgbToHex('rgba(255, 214, 141, 0.33)')).toBe('#FFD68D54');
    // Paste colors, no prefixed 0 on Alpha channel
    expect(rgbToHex('rgba(235, 86, 86, .3)')).toBe('#EB56564D');
    expect(rgbToHex('rgba(0, 20, 137, .79)')).toBe('#001489C9');
  });

  it('should convert RGB with an A to HEX colors', () => {
    // Still works because why not
    expect(rgbToHex('rgb(255, 255, 255, 0.5)')).toBe('#FFFFFF80');
  });
});
