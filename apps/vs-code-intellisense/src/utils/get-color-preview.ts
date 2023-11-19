import * as base64 from "base-64";
import * as utf8 from "utf8";

const HEIGHT = 50;
const WIDTH = "100%";

/**
 * Generates markdown to render an svg of the provided color
 * @see https://github.com/mattbierner/vscode-color-info/blob/cf3b476920ec9bf3bee061c4901f352010afcc89/src/displays/preview_display.ts#L19-L29
 */
export const getColorPreview = (value: string): string => {
  const src = `<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" style="background-color: white;"
	 width="${WIDTH}" height="${HEIGHT}px" viewBox="0 0 ${WIDTH} ${HEIGHT}" xml:space="preserve">
        <rect width="${WIDTH}" height="${HEIGHT}" fill="${value}" fill-opacity="1" />
        <polygon points="0,0 ${WIDTH},0 ${WIDTH},${HEIGHT}" fill="${value}" />
        <rect width="${WIDTH}" height="${HEIGHT}" fill-opacity="0" stroke="gray" strokeWidth="1" />
</svg>`;
  const dataUri = `data:image/svg+xml;charset=UTF-8;base64,${base64.encode(utf8.encode(src))}`;
  return `![](${dataUri})`;
};
