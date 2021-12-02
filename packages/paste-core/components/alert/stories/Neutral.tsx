import * as React from 'react';
import {Text} from '@twilio-paste/text';
import {Box} from '@twilio-paste/box';
import {Truncate} from '@twilio-paste/truncate';
import {Alert} from '../src';

export const Neutral = (): React.ReactNode => {
  return (
    <>
      <Alert variant="neutral">
        <Text as="div">I am an alert</Text>
      </Alert>
      <Alert variant="neutral">
        <Text as="div">
          <strong>Alert title</strong> I am an alert
        </Text>
      </Alert>
      <Alert variant="neutral">
        <Text as="div">
          Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod. Praesent
          commodo cursus magna.
        </Text>
      </Alert>
      <Box width="size50">
        <Alert variant="neutral">
          <Text as="div">
            Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod. Praesent
            commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat
            porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla. Nulla
            vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem
            malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis
            mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec
            ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.
          </Text>
          <Text as="p">
            <Truncate title="http://www.extremelylongurlthatmightbreakthelayout.com">
              http://www.extremelylongurlthatmightbreakthelayout.com
            </Truncate>
          </Text>
        </Alert>
      </Box>
    </>
  );
};

export const NeutralString = `
import { Alert } from '@twilio-paste/core/alert';
import { Text } from '@twilio-paste/core/alert';


const Neutral: React.FC = () => (
  <>
    <Alert variant="neutral">
      <Text as="div">I am an alert</Text>
    </Alert>
    <Alert variant="neutral">
      <Text as="div">
        <strong>Alert title</strong> I am an alert
      </Text>
    </Alert>
    <Alert variant="neutral">
      <Text as="div">
        Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod. Praesent
        commodo cursus magna.
      </Text>
    </Alert>
    <Box width="size50">
      <Alert variant="neutral">
        <Text as="div">
          Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod. Praesent
          commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat
          porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla. Nulla
          vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem
          malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis
          mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec
          ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.
        </Text>
        <Text as="p">
          <Truncate title="http://www.extremelylongurlthatmightbreakthelayout.com">
            http://www.extremelylongurlthatmightbreakthelayout.com
          </Truncate>
        </Text>
      </Alert>
    </Box>
  </>
);
`;
