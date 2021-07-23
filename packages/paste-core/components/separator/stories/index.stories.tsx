import * as React from 'react';
import {Text} from '@twilio-paste/text';
import {Box} from '@twilio-paste/box';
import {Card} from '@twilio-paste/card';
import {Heading} from '@twilio-paste/heading';
import {Paragraph} from '@twilio-paste/paragraph';
import {Separator} from '@twilio-paste/separator';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Separator',
  component: Separator,
};

export const Horizontal = (): React.ReactNode => {
  return (
    <>
      <Paragraph>Nulla vitae elit libero, a pharetra augue.</Paragraph>
      <Separator orientation="horizontal" verticalSpacing="space70" />
      <Paragraph>Nulla vitae elit libero, a pharetra augue.</Paragraph>
      <Separator orientation="horizontal" verticalSpacing="space70" />
      <Paragraph>Nulla vitae elit libero, a pharetra augue.</Paragraph>
      <Separator orientation="horizontal" verticalSpacing="space70" />
      <Paragraph>Nulla vitae elit libero, a pharetra augue.</Paragraph>
    </>
  );
};

Horizontal.story = {
  name: 'horizontal',
};

export const Vertical = (): React.ReactNode => {
  return (
    <>
      <Box display="flex" marginBottom="space70">
        <Text as="span">Option 1</Text>
        <Separator orientation="vertical" horizontalSpacing="space40" />
        <Text as="span">Option 2</Text>
        <Separator orientation="vertical" horizontalSpacing="space40" />
        <Text as="span">Option 3</Text>
        <Separator orientation="vertical" horizontalSpacing="space40" />
        <Text as="span">Option 4</Text>
        <Separator orientation="vertical" horizontalSpacing="space40" />
        <Text as="span">Option 5</Text>
      </Box>
      <Box display="flex">
        <Card>
          <Heading as="h2" variant="heading20">
            An Example Card
          </Heading>
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, possimus asperiores id dolor aliquid est
            quibusdam laborum hic eligendi cupiditate, nam fuga debitis excepturi quis libero, expedita exercitationem
            provident? Eligendi?
          </Paragraph>
        </Card>
        <Separator orientation="vertical" horizontalSpacing="space70" />
        <Card>
          <Heading as="h2" variant="heading20">
            An Example Card
          </Heading>
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, possimus asperiores id dolor aliquid est
            quibusdam laborum hic eligendi cupiditate, nam fuga debitis excepturi quis libero, expedita exercitationem
            provident? Eligendi?
          </Paragraph>
        </Card>
        <Separator orientation="vertical" horizontalSpacing="space70" />
        <Card>
          <Heading as="h2" variant="heading20">
            An Example Card
          </Heading>
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, possimus asperiores id dolor aliquid est
            quibusdam laborum hic eligendi cupiditate, nam fuga debitis excepturi quis libero, expedita exercitationem
            provident? Eligendi?
          </Paragraph>
        </Card>
      </Box>
    </>
  );
};

Vertical.story = {
  name: 'vertical',
};

export const Responsive = (): React.ReactNode => {
  return (
    <>
      <Paragraph>Nulla vitae elit libero, a pharetra augue.</Paragraph>
      <Separator orientation="horizontal" verticalSpacing={['space20', 'space60', 'space100']} />
      <Paragraph>Nulla vitae elit libero, a pharetra augue.</Paragraph>
      <Separator orientation="horizontal" verticalSpacing={['space20', 'space60', 'space100']} />
      <Paragraph>Nulla vitae elit libero, a pharetra augue.</Paragraph>
      <Separator orientation="horizontal" verticalSpacing={['space20', 'space60', 'space100']} />
      <Paragraph>Nulla vitae elit libero, a pharetra augue.</Paragraph>
      <Box display="flex">
        <Card>
          <Heading as="h2" variant="heading20">
            An Example Card
          </Heading>
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, possimus asperiores id dolor aliquid est
            quibusdam laborum hic eligendi cupiditate, nam fuga debitis excepturi quis libero, expedita exercitationem
            provident? Eligendi?
          </Paragraph>
        </Card>
        <Separator orientation="vertical" horizontalSpacing={['space20', 'space60', 'space190']} />
        <Card>
          <Heading as="h2" variant="heading20">
            An Example Card
          </Heading>
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, possimus asperiores id dolor aliquid est
            quibusdam laborum hic eligendi cupiditate, nam fuga debitis excepturi quis libero, expedita exercitationem
            provident? Eligendi?
          </Paragraph>
        </Card>
        <Separator orientation="vertical" horizontalSpacing={['space20', 'space60', 'space190']} />
        <Card>
          <Heading as="h2" variant="heading20">
            An Example Card
          </Heading>
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, possimus asperiores id dolor aliquid est
            quibusdam laborum hic eligendi cupiditate, nam fuga debitis excepturi quis libero, expedita exercitationem
            provident? Eligendi?
          </Paragraph>
        </Card>
      </Box>
    </>
  );
};

Responsive.story = {
  name: 'responsive',
};
