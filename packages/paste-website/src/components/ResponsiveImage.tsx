import Image from 'next/future/image';
import type {ImageProps} from 'next/future/image';
import {Box} from '@twilio-paste/box';
import {Paragraph} from '@twilio-paste/paragraph';

const ResponsiveImage: React.FC<ImageProps> = (props) => {
  return (
    <Paragraph>
      <Box display="flex" justifyContent="center">
        <Image placeholder="blur" style={{height: '100%', maxWidth: '100%'}} {...props} />
      </Box>
    </Paragraph>
  );
};

export {ResponsiveImage};
