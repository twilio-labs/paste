import * as React from 'react';
import {Heading} from '@twilio-paste/heading';
import {Box} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';
import {ChevronDownIcon} from '@twilio-paste/icons/esm/ChevronDownIcon';
import {
  useDisclosurePrimitiveState,
  DisclosurePrimitive,
  DisclosurePrimitiveContent,
} from '@twilio-paste/disclosure-primitive';
import {Table, Thead, Tbody, Tr, Td, Th} from './table';

export const Toggle: React.FC<{}> = ({children, ...props}) => {
  return (
    <Heading as="h2" variant="heading20">
      <Button variant="reset" size="reset" {...props}>
        <Box
          as="span"
          display="flex"
          transform={props['aria-expanded'] ? 'rotate(0deg)' : 'rotate(-90deg)'}
          transition="all 200ms"
        >
          <ChevronDownIcon decorative size="sizeIcon20" />
        </Box>
        {children}
      </Button>
    </Heading>
  );
};

export interface RoadmapProps {
  data: [
    {
      release: string;
      edges: [
        {
          node: {
            data: {
              Feature: string;
              Public_Description: string;
            };
          };
        }
      ];
    }
  ];
}
const Roadmap: React.FC<RoadmapProps> = ({data}) => {
  return (
    <>
      {data.map((release, index) => {
        const disclosure = useDisclosurePrimitiveState({visible: index === 0});
        return (
          <Box>
            <DisclosurePrimitive {...disclosure} as={Toggle}>
              Release - {release.release}
            </DisclosurePrimitive>
            <DisclosurePrimitiveContent {...disclosure}>
              <Table>
                <Thead>
                  <Tr>
                    <Th style={{width: '250px'}}>Component</Th>
                    <Th>Description</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {release.edges.map(component => {
                    return (
                      <Tr>
                        <Td>{component.node.data.Feature}</Td>
                        <Td>{component.node.data.Public_Description}</Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </DisclosurePrimitiveContent>
          </Box>
        );
      })}
    </>
  );
};
export {Roadmap};
