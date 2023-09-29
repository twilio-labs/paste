type CircleGeometryProps = Pick<React.SVGProps<SVGCircleElement>, "cx" | "cy" | "r">;

const circleRadius = 45;
export const circleGeometry: CircleGeometryProps = {
  cx: 50,
  cy: 50,
  r: circleRadius,
};

/*
 * This is the circumference of the drawn SVG circle in <length> units
 *  C = 2𝜋r // ~282.7
 *  const circumference = Math.PI * 2 * circleRadius; // the same calculation in JavaScript
 */

/*
 * We set the stroke dash array value to describe how to draw the stroke:
 *  If the stroke dash array is set to "1" the stroke will be drawn as discrete dashes whose length is equal to the length of the stroke segments.
 *  By setting the stroke dash array to be the circle circumference, we are drawing a stroke that looks continuous but is actually discrete (e.g. countable).
 *  We can then use the offset to "hide" parts of the total stroke, calculated as a percentage of the circle circumference.
 *  We can think of the stroke then as being measured in the same "units" that describe the circle's geometry, which makes styling the SVG simpler.
 */
export const circleCircumference = Math.PI * 2 * circleRadius;
