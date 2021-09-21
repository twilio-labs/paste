type CircleGeometryProps = Pick<React.SVGProps<SVGCircleElement>, 'cx' | 'cy' | 'r'>;

const circleRadius = 45;
export const circleGeometry: CircleGeometryProps = {
  cx: 50,
  cy: 50,
  r: circleRadius,
};

export const circleCircumference = Math.PI * 2 * circleRadius;
export const maxStrokeOffset = Math.floor(circleCircumference);
