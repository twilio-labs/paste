/**
 * This function takes an rgb or rgba string, converts to
 * either six digit hex or eight digit hexa string, and
 * returns the hex/hexa string.
 *
 * The approach is straightforward: the function takes in a
 * defined rgb/rgba string, performs a capturing regex & string
 * split to separate out the channels, converts the channel
 * values to integers, and then restringifies them in base16,
 * which is hexadecimal format.
 *
 * The alpha channel is unique in that in rgba it goes from
 * 0 - 1, so the function will first parse that to a float,
 * then multiply by 255, turn the result into an integer, and
 * then convert to a hexadecimal string.
 *
 * The channels are then appended together into the final
 * HEX/HEXA format and returned.
 *
 * The function also ensures that 0 values for color channels
 * are represented in the proper two digit format that hex
 * colors require.
 */

const TEXT_BETWEEN_PARENS_REGEX = /\(([^)]+)\)/;

export const rgbToHex = (rgb: string): string => {
  const rgbString = rgb.match(TEXT_BETWEEN_PARENS_REGEX);
  if (rgbString == null || rgbString.length < 2) {
    throw new Error("Invalid RGB passed into rgbToHex function.");
  }
  const channels = rgbString[1].split(",");
  const rgbChannels = channels.slice(0, 3);

  // Go through each channel and convert to base 16
  let hex = "#";
  rgbChannels.forEach((channel) => {
    const hexValue = Number.parseInt(channel, 10).toString(16);
    hex += hexValue.padStart(2, "0");
  });

  // If an alpha channel is defined, append to hex
  if (channels[3] != null) {
    const alphaChannel = Math.round(Number.parseFloat(channels[3]) * 255).toString(16);
    hex += alphaChannel.padStart(2, "0");
  }

  return hex.toUpperCase();
};
