import {useRouter} from 'next/router';
import {Box} from '@twilio-paste/core/box';
import {Label} from '@twilio-paste/core/label';
import {Select, Option} from '@twilio-paste/core/select';

const TokenSelector = () => {
  const router = useRouter();
  const [value, setValue] = React.useState();
  const currentPage = router.pathname.replace('/', '');

  const handleChange = event => {
    setValue(event.target.value);
    router.push(event.target.value);
  };

  return (
    <Box as="nav" backgroundColor="colorBackground" padding="space60">
      <Label htmlFor="token-category-selector">Token category:</Label>
      <Select id="token-category-selector" onChange={handleChange} value={currentPage}>
        <Option value="background-color">Background Color</Option>
        <Option value="border-color">Border Color</Option>
        <Option value="border-width">Border Width</Option>
        <Option value="box-shadow">Box Shadow</Option>
        <Option value="color">Color</Option>
        <Option value="font">Font</Option>
        <Option value="font-size">Font Size</Option>
        <Option value="font-weight">Font Weight</Option>
        <Option value="line-height">Line Height</Option>
        <Option value="radii">Radii</Option>
        <Option value="sizing">Sizing</Option>
        <Option value="spacing">Spacing</Option>
        <Option value="text-color">Text Color</Option>
        <Option value="z-index">zIndex</Option>
        {
          // TODO: pull token option values dynamically
        }
      </Select>
    </Box>
  );
};

export {TokenSelector};
