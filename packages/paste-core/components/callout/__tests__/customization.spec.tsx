import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CustomizationProvider } from '@twilio-paste/customization';

import { Callout, CalloutHeading, CalloutList, CalloutListItem, CalloutText } from '../src';

const CustomizationWrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <CustomizationProvider
    baseTheme="default"
    theme={TestTheme}
    elements={{
      CALLOUT: {
        padding: 'space40',
        variants: {
          neutral: {
            backgroundColor: 'colorBackgroundBodyInverse',
            color: 'colorTextInverse',
          },
          warning: {
            backgroundColor: 'colorBackground',
            color: 'colorTextWarningStrong',
            borderStyle: 'solid',
            borderWidth: 'borderWidth20',
            borderColor: 'colorBorderWarning',
          },
        },
      },
      CALLOUT_HEADING: {
        fontSize: 'fontSize50',
        lineHeight: 'lineHeight50',
      },
      CALLOUT_TEXT: {
        fontSize: 'fontSize30',
        lineHeight: 'lineHeight30',
      },
      CALLOUT_LIST: {
        marginLeft: 'space50',
      },
      CALLOUT_LIST_ITEM: {
        fontSize: 'fontSize30',
        lineHeight: 'lineHeight30',
      },
    }}
  >
    {children}
  </CustomizationProvider>
);

const MyCustomizationWrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <CustomizationProvider
    baseTheme="default"
    theme={TestTheme}
    elements={{
      FOO_CALLOUT: {
        padding: 'space40',
        variants: {
          neutral: {
            backgroundColor: 'colorBackgroundBodyInverse',
            color: 'colorTextInverse',
          },
          warning: {
            backgroundColor: 'colorBackground',
            color: 'colorTextWarningStrong',
            borderStyle: 'solid',
            borderWidth: 'borderWidth20',
            borderColor: 'colorBorderWarning',
          },
        },
      },
      FOO_CALLOUT_HEADING: {
        fontSize: 'fontSize50',
        lineHeight: 'lineHeight50',
      },
      FOO_CALLOUT_TEXT: {
        fontSize: 'fontSize30',
        lineHeight: 'lineHeight30',
      },
      FOO_CALLOUT_LIST: {
        marginLeft: 'space50',
      },
      FOO_CALLOUT_LIST_ITEM: {
        fontSize: 'fontSize30',
        lineHeight: 'lineHeight30',
      },
    }}
  >
    {children}
  </CustomizationProvider>
);

describe('Customization', () => {
  it('should set a default element data attribute', () => {
    render(
      <Callout variant="neutral" data-testid="callout">
        <CalloutHeading as="h3">Neutral callout</CalloutHeading>
        <CalloutText data-testid="callout-text">Take a look at this list:</CalloutText>
        <CalloutList as="ul">
          <CalloutListItem>Item one</CalloutListItem>
        </CalloutList>
      </Callout>,
    );

    const callout = screen.getByTestId('callout');
    const heading = screen.getByRole('heading', { name: 'Neutral callout' });
    const text = screen.getByTestId('callout-text');
    const list = screen.getByRole('list');
    const listItem = screen.getByRole('listitem');

    expect(callout.getAttribute('data-paste-element')).toEqual('CALLOUT');
    expect(heading.getAttribute('data-paste-element')).toEqual('CALLOUT_HEADING');
    expect(text.getAttribute('data-paste-element')).toEqual('CALLOUT_TEXT');
    expect(list.getAttribute('data-paste-element')).toEqual('CALLOUT_LIST');
    expect(listItem.getAttribute('data-paste-element')).toEqual('CALLOUT_LIST_ITEM');
  });

  it('should set a custom element data attribute', () => {
    render(
      <Callout variant="neutral" data-testid="callout" element="FOO_CALLOUT">
        <CalloutHeading as="h3" element="FOO_CALLOUT_HEADING">
          Neutral callout
        </CalloutHeading>
        <CalloutText data-testid="callout-text" element="FOO_CALLOUT_TEXT">
          Take a look at this list:
        </CalloutText>
        <CalloutList as="ul" element="FOO_CALLOUT_LIST">
          <CalloutListItem element="FOO_CALLOUT_LIST_ITEM">Item one</CalloutListItem>
        </CalloutList>
      </Callout>,
    );

    const callout = screen.getByTestId('callout');
    const heading = screen.getByRole('heading', { name: 'Neutral callout' });
    const text = screen.getByTestId('callout-text');
    const list = screen.getByRole('list');
    const listItem = screen.getByRole('listitem');

    expect(callout.getAttribute('data-paste-element')).toEqual('FOO_CALLOUT');
    expect(heading.getAttribute('data-paste-element')).toEqual('FOO_CALLOUT_HEADING');
    expect(text.getAttribute('data-paste-element')).toEqual('FOO_CALLOUT_TEXT');
    expect(list.getAttribute('data-paste-element')).toEqual('FOO_CALLOUT_LIST');
    expect(listItem.getAttribute('data-paste-element')).toEqual('FOO_CALLOUT_LIST_ITEM');
  });

  it('should add custom styles to the components', () => {
    render(
      <>
        <Callout variant="neutral" data-testid="neutral-callout">
          <CalloutHeading as="h3">Neutral callout</CalloutHeading>
          <CalloutText data-testid="callout-text">Take a look at this list:</CalloutText>
          <CalloutList as="ul">
            <CalloutListItem>Item one</CalloutListItem>
          </CalloutList>
        </Callout>
        <Callout variant="warning" data-testid="warning-callout">
          <CalloutText>This is a warning callout</CalloutText>
        </Callout>
      </>,
      { wrapper: CustomizationWrapper },
    );

    const neutralCallout = screen.getByTestId('neutral-callout');
    const warningCallout = screen.getByTestId('neutral-callout');
    const heading = screen.getByRole('heading', { name: 'Neutral callout' });
    const text = screen.getByTestId('callout-text');
    const list = screen.getByRole('list');
    const listItem = screen.getByRole('listitem');

    expect(neutralCallout).toHaveStyleRule('padding', '0.75rem');
    expect(neutralCallout).toHaveStyleRule('background-color', 'rgb(18, 28, 45)');
    expect(warningCallout).toHaveStyleRule('background-color', 'rgb(18, 28, 45)');
    expect(heading).toHaveStyleRule('font-size', '1.125rem');
    expect(text).toHaveStyleRule('font-size', '0.875rem');
    expect(list).toHaveStyleRule('margin-left', '1rem');
    expect(listItem).toHaveStyleRule('font-size', '0.875rem');
  });

  it('shoult add custom styles to the components with custom element names', () => {
    render(
      <>
        <Callout variant="neutral" data-testid="neutral-callout" element="FOO_CALLOUT">
          <CalloutHeading as="h3" element="FOO_CALLOUT_HEADING">
            Neutral callout
          </CalloutHeading>
          <CalloutText data-testid="callout-text" element="FOO_CALLOUT_TEXT">
            Take a look at this list:
          </CalloutText>
          <CalloutList as="ul" element="FOO_CALLOUT_LIST">
            <CalloutListItem element="FOO_CALLOUT_LIST_ITEM">Item one</CalloutListItem>
          </CalloutList>
        </Callout>
        <Callout variant="warning" data-testid="warning-callout" element="FOO_CALLOUT">
          <CalloutText element="FOO_CALLOUT_TEXT">This is a warning callout</CalloutText>
        </Callout>
      </>,
      { wrapper: MyCustomizationWrapper },
    );

    const neutralCallout = screen.getByTestId('neutral-callout');
    const warningCallout = screen.getByTestId('neutral-callout');
    const heading = screen.getByRole('heading', { name: 'Neutral callout' });
    const text = screen.getByTestId('callout-text');
    const list = screen.getByRole('list');
    const listItem = screen.getByRole('listitem');

    expect(neutralCallout).toHaveStyleRule('padding', '0.75rem');
    expect(neutralCallout).toHaveStyleRule('background-color', 'rgb(18, 28, 45)');
    expect(warningCallout).toHaveStyleRule('background-color', 'rgb(18, 28, 45)');
    expect(heading).toHaveStyleRule('font-size', '1.125rem');
    expect(text).toHaveStyleRule('font-size', '0.875rem');
    expect(list).toHaveStyleRule('margin-left', '1rem');
    expect(listItem).toHaveStyleRule('font-size', '0.875rem');
  });
});
