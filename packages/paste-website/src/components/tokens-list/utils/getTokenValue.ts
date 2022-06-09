const convertToPx = (value: string): string => {
  return `${Number.parseFloat(value.replace('rem', '')) * 16}px`;
};

interface TokenValueProps {
  value: string;
  category: string;
}
const getTokenValue = ({category, value}: TokenValueProps): string => {
  if (category === 'sizing' || category === 'spacing' || category === 'line-height' || category === 'font-size') {
    return `${value} (${convertToPx(value)})`;
  }
  return value;
};
export {getTokenValue};
