import * as React from 'react';
import {screen, render} from '@testing-library/react';
// @ts-ignore typescript doesn't like js imports
import axe from '../../../../../.jest/axe-helper';
import {CustomizationProvider} from '@twilio-paste/customization';
import {ChatMessage, ChatMessageMeta, ChatMessageMetaItem} from '../src';

const CustomizationWrapper: React.FC = ({children}) => (
  <CustomizationProvider
    baseTheme="default"
    theme={TestTheme}
    elements={{
      CHAT_MESSAGE_META: {
        columnGap: 'space50',
        variants: {
          inbound: {justifyContent: 'flex-start'},
          outbound: {justifyContent: 'flex-end'},
        },
      },
      CHAT_MESSAGE_META_ITEM: {
        color: 'colorText',
        columnGap: 'space0',
      },
    }}
  >
    {children}
  </CustomizationProvider>
);

const CustomizationFooWrapper: React.FC = ({children}) => (
  <CustomizationProvider
    baseTheme="default"
    theme={TestTheme}
    elements={{
      foo_meta: {
        columnGap: 'space50',
        variants: {
          inbound: {justifyContent: 'flex-start'},
          outbound: {justifyContent: 'flex-end'},
        },
      },
      foo_meta_item: {
        color: 'colorText',
        columnGap: 'space0',
      },
    }}
  >
    {children}
  </CustomizationProvider>
);

describe('ChatMessageMeta', () => {
  it('should render', () => {
    render(
      <ChatMessage variant="inbound">
        <ChatMessageMeta aria-label="sent at 5:04pm">
          <ChatMessageMetaItem>5:04pm</ChatMessageMetaItem>
        </ChatMessageMeta>
      </ChatMessage>
    );
    expect(screen.getByText('5:04pm')).toBeDefined();
  });

  it('should have aria-label when pass the aria-label prop', () => {
    render(
      <ChatMessage variant="inbound">
        <ChatMessageMeta data-testid="test-meta" aria-label="said by Gibby Radki at 5:04pm">
          <ChatMessageMetaItem>Gibby Radki</ChatMessageMetaItem>
          <ChatMessageMetaItem>5:04pm</ChatMessageMetaItem>
        </ChatMessageMeta>
      </ChatMessage>
    );
    expect(screen.getByTestId('test-meta')).toHaveAttribute('aria-label', 'said by Gibby Radki at 5:04pm');
  });

  it('should have justifyContent flex-end if there is one child', () => {
    render(
      <ChatMessage variant="inbound">
        <ChatMessageMeta data-testid="test-meta" aria-label="sent at 5:04pm">
          <ChatMessageMetaItem>5:04pm</ChatMessageMetaItem>
        </ChatMessageMeta>
      </ChatMessage>
    );
    expect(screen.getByTestId('test-meta')).toHaveStyleRule('justify-content', 'flex-end');
  });

  it('should have justifyContent space-between if there is more than one child', () => {
    render(
      <ChatMessage variant="inbound">
        <ChatMessageMeta data-testid="test-meta" aria-label="said by Gibby Radki at 5:04pm">
          <ChatMessageMetaItem>Gibby Radki</ChatMessageMetaItem>
          <ChatMessageMetaItem>5:04pm</ChatMessageMetaItem>
        </ChatMessageMeta>
      </ChatMessage>
    );
    expect(screen.getByTestId('test-meta')).toHaveStyleRule('justify-content', 'space-between');
  });

  it('should have textAlign right if there is one child', () => {
    render(
      <ChatMessage variant="inbound">
        <ChatMessageMeta data-testid="test-meta" aria-label="sent at 5:04pm">
          <ChatMessageMetaItem>5:04pm</ChatMessageMetaItem>
        </ChatMessageMeta>
      </ChatMessage>
    );
    expect(screen.getByTestId('test-meta')).toHaveStyleRule('text-align', 'right');
  });

  it('should not set textAlign if there is more than one child', () => {
    render(
      <ChatMessage variant="inbound">
        <ChatMessageMeta data-testid="test-meta" aria-label="said by Gibby Radki at 5:04pm">
          <ChatMessageMetaItem>Gibby Radki</ChatMessageMetaItem>
          <ChatMessageMetaItem>5:04pm</ChatMessageMetaItem>
        </ChatMessageMeta>
      </ChatMessage>
    );
    expect(screen.getByTestId('test-meta')).not.toHaveStyleRule('text-align', 'right');
  });
});

describe('Accessibility', () => {
  it('Should have no accessibility violations', async () => {
    const {container} = render(
      <ul>
        <ChatMessage variant="inbound">
          <ChatMessageMeta aria-label="said by Gibby Radki at 5:04pm">
            <ChatMessageMetaItem>Gibby Radki</ChatMessageMetaItem>
            <ChatMessageMetaItem>5:04pm</ChatMessageMetaItem>
          </ChatMessageMeta>
        </ChatMessage>
        <ChatMessage variant="outbound">
          <ChatMessageMeta aria-label="said by you 2 minutes ago">
            <ChatMessageMetaItem>2 minutes ago</ChatMessageMetaItem>
          </ChatMessageMeta>
        </ChatMessage>
      </ul>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('Customization', () => {
  it('should add custom styles to variants', () => {
    render(
      <>
        <ChatMessage variant="inbound">
          <ChatMessageMeta data-testid="inbound-meta" aria-label="sent at 5:04pm">
            5:04pm
          </ChatMessageMeta>
        </ChatMessage>
        <ChatMessage variant="outbound">
          <ChatMessageMeta data-testid="outbound-meta" aria-label="said by you 4 minutes ago">
            4 minutes ago
          </ChatMessageMeta>
        </ChatMessage>
      </>,
      {wrapper: CustomizationWrapper}
    );

    const inboundMeta = screen.getByTestId('inbound-meta');
    const outboundMeta = screen.getByTestId('outbound-meta');

    expect(inboundMeta).toHaveStyleRule('column-gap', '1rem');
    expect(inboundMeta).toHaveStyleRule('justify-content', 'flex-start');
    expect(outboundMeta).toHaveStyleRule('column-gap', '1rem');
    expect(outboundMeta).toHaveStyleRule('justify-content', 'flex-end');
  });

  it('should set element data attribute', () => {
    render(
      <>
        <ChatMessage variant="inbound">
          <ChatMessageMeta data-testid="inbound-meta" aria-label="sent at 5:04pm">
            5:04pm
          </ChatMessageMeta>
        </ChatMessage>
        <ChatMessage variant="outbound">
          <ChatMessageMeta data-testid="outbound-meta" aria-label="said by you 4 minutes ago">
            4 minutes ago
          </ChatMessageMeta>
        </ChatMessage>
      </>,
      {wrapper: CustomizationWrapper}
    );

    const inboundMeta = screen.getByTestId('inbound-meta');
    const outboundMeta = screen.getByTestId('outbound-meta');

    expect(inboundMeta.getAttribute('data-paste-element')).toEqual('CHAT_MESSAGE_META');
    expect(outboundMeta.getAttribute('data-paste-element')).toEqual('CHAT_MESSAGE_META');
  });

  it('should add custom styles to variants with a custom element data attribute', () => {
    render(
      <>
        <ChatMessage variant="inbound">
          <ChatMessageMeta element="foo_meta" data-testid="inbound-meta" aria-label="sent at 5:04pm">
            5:04pm
          </ChatMessageMeta>
        </ChatMessage>
        <ChatMessage variant="outbound">
          <ChatMessageMeta element="foo_meta" data-testid="outbound-meta" aria-label="said by you 4 minutes ago">
            4 minutes ago
          </ChatMessageMeta>
        </ChatMessage>
      </>,
      {wrapper: CustomizationFooWrapper}
    );

    const inboundMeta = screen.getByTestId('inbound-meta');
    const outboundMeta = screen.getByTestId('outbound-meta');

    expect(inboundMeta).toHaveStyleRule('column-gap', '1rem');
    expect(inboundMeta).toHaveStyleRule('justify-content', 'flex-start');
    expect(outboundMeta).toHaveStyleRule('column-gap', '1rem');
    expect(outboundMeta).toHaveStyleRule('justify-content', 'flex-end');
  });

  it('should set custom element data attribute', () => {
    render(
      <>
        <ChatMessage variant="inbound">
          <ChatMessageMeta element="foo_meta" data-testid="inbound-meta" aria-label="sent at 5:04pm">
            5:04pm
          </ChatMessageMeta>
        </ChatMessage>
        <ChatMessage variant="outbound">
          <ChatMessageMeta element="foo_meta" data-testid="outbound-meta" aria-label="said by you 4 minutes ago">
            4 minutes ago
          </ChatMessageMeta>
        </ChatMessage>
      </>,
      {wrapper: CustomizationFooWrapper}
    );

    const inboundMeta = screen.getByTestId('inbound-meta');
    const outboundMeta = screen.getByTestId('outbound-meta');

    expect(inboundMeta.getAttribute('data-paste-element')).toEqual('foo_meta');
    expect(outboundMeta.getAttribute('data-paste-element')).toEqual('foo_meta');
  });
});

describe('ChatMessageMetaItem', () => {
  it('should add custom styles', () => {
    render(
      <ChatMessage variant="inbound">
        <ChatMessageMeta aria-label="sent at 5:04pm">
          <ChatMessageMetaItem data-testid="meta-item">5:04pm</ChatMessageMetaItem>
        </ChatMessageMeta>
      </ChatMessage>,
      {wrapper: CustomizationWrapper}
    );

    const metaItem = screen.getByTestId('meta-item');
    expect(metaItem).toHaveStyleRule('column-gap', '0');
    expect(metaItem).toHaveStyleRule('color', 'rgb(18, 28, 45)');
  });

  it('should set element data attribute', () => {
    render(
      <ChatMessage variant="inbound">
        <ChatMessageMeta aria-label="sent at 5:04pm">
          <ChatMessageMetaItem data-testid="meta-item">5:04pm</ChatMessageMetaItem>
        </ChatMessageMeta>
      </ChatMessage>,
      {wrapper: CustomizationWrapper}
    );

    const metaItem = screen.getByTestId('meta-item');
    expect(metaItem.getAttribute('data-paste-element')).toEqual('CHAT_MESSAGE_META_ITEM');
  });

  it('should add custom styles to variants with a custom element data attribute', () => {
    render(
      <ChatMessage variant="inbound">
        <ChatMessageMeta aria-label="sent at 5:04pm">
          <ChatMessageMetaItem element="foo_meta_item" data-testid="meta-item">
            5:04pm
          </ChatMessageMetaItem>
        </ChatMessageMeta>
      </ChatMessage>,
      {wrapper: CustomizationFooWrapper}
    );

    const metaItem = screen.getByTestId('meta-item');
    expect(metaItem).toHaveStyleRule('column-gap', '0');
    expect(metaItem).toHaveStyleRule('color', 'rgb(18, 28, 45)');
  });

  it('should set custom element data attribute', () => {
    render(
      <ChatMessage variant="inbound">
        <ChatMessageMeta aria-label="sent at 5:04pm">
          <ChatMessageMetaItem element="foo_meta_item" data-testid="meta-item">
            5:04pm
          </ChatMessageMetaItem>
        </ChatMessageMeta>
      </ChatMessage>,
      {wrapper: CustomizationFooWrapper}
    );

    const metaItem = screen.getByTestId('meta-item');
    expect(metaItem.getAttribute('data-paste-element')).toEqual('foo_meta_item');
  });
});
