import * as React from 'react';
import {screen, render} from '@testing-library/react';
import {CustomizationProvider} from '@twilio-paste/customization';
import type {PasteCustomCSS} from '@twilio-paste/customization';
import {ChatMessage, ChatBubble, ChatMessageMeta, ChatMessageMetaItem} from '../src';

const customizedElements: {[key: string]: PasteCustomCSS} = {
  CHAT_MESSAGE: {
    marginBottom: 'space100',
    variants: {
      inbound: {marginRight: 'space100'},
      outbound: {marginLeft: 'space100'},
    },
  },
  CHAT_BUBBLE: {
    color: 'colorTextInverse',
    variants: {
      inbound: {backgroundColor: 'colorBackgroundPrimary'},
      outbound: {backgroundColor: 'colorBackgroundPrimaryDarker'},
    },
  },
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
};

const customizedFooElements: {[key: string]: PasteCustomCSS} = {
  foo_message: customizedElements.CHAT_MESSAGE,
  foo_bubble: customizedElements.CHAT_BUBBLE,
  foo_meta: customizedElements.CHAT_MESSAGE_META,
  foo_meta_item: customizedElements.CHAT_MESSAGE_META_ITEM,
};

const CustomizationWrapper: React.FC<{elements?: {[key: string]: PasteCustomCSS}}> = ({children, elements}) => (
  <CustomizationProvider baseTheme="default" theme={TestTheme} elements={elements || customizedElements}>
    {children}
  </CustomizationProvider>
);

const CustomizationFooWrapper: React.FC = ({children}) => (
  <CustomizationWrapper elements={customizedFooElements}>{children}</CustomizationWrapper>
);

describe('Customization', () => {
  describe('ChatMessage', () => {
    it('should add custom styles', () => {
      render(
        <>
          <ChatMessage variant="inbound" data-testid="inbound-message">
            test
          </ChatMessage>
          <ChatMessage variant="outbound" data-testid="outbound-message">
            test
          </ChatMessage>
        </>,
        {wrapper: CustomizationWrapper}
      );

      const inboundMessage = screen.getByTestId('inbound-message');
      expect(inboundMessage).toHaveStyleRule('margin-bottom', '2.25rem');
      expect(inboundMessage).toHaveStyleRule('margin-right', '2.25rem');

      const outboundMessage = screen.getByTestId('outbound-message');
      expect(outboundMessage).toHaveStyleRule('margin-bottom', '2.25rem');
      expect(outboundMessage).toHaveStyleRule('margin-left', '2.25rem');
    });

    it('should set element data attribute', () => {
      render(
        <>
          <ChatMessage variant="inbound" data-testid="inbound-message">
            test
          </ChatMessage>
          <ChatMessage variant="outbound" data-testid="outbound-message">
            test
          </ChatMessage>
        </>,
        {wrapper: CustomizationWrapper}
      );

      const inboundMessage = screen.getByTestId('inbound-message');
      expect(inboundMessage.getAttribute('data-paste-element')).toEqual('CHAT_MESSAGE');

      const outboundMessage = screen.getByTestId('outbound-message');
      expect(outboundMessage.getAttribute('data-paste-element')).toEqual('CHAT_MESSAGE');
    });

    it('should add custom styles with a custom element data attribute', () => {
      render(
        <>
          <ChatMessage element="foo_message" variant="inbound" data-testid="inbound-message">
            test
          </ChatMessage>
          <ChatMessage element="foo_message" variant="outbound" data-testid="outbound-message">
            test
          </ChatMessage>
        </>,
        {wrapper: CustomizationFooWrapper}
      );

      const inboundMessage = screen.getByTestId('inbound-message');
      expect(inboundMessage).toHaveStyleRule('margin-bottom', '2.25rem');
      expect(inboundMessage).toHaveStyleRule('margin-right', '2.25rem');

      const outboundMessage = screen.getByTestId('outbound-message');
      expect(outboundMessage).toHaveStyleRule('margin-bottom', '2.25rem');
      expect(outboundMessage).toHaveStyleRule('margin-left', '2.25rem');
    });

    it('should set custom element data attribute', () => {
      render(
        <>
          <ChatMessage element="foo_message" variant="inbound" data-testid="inbound-message">
            test
          </ChatMessage>
          <ChatMessage element="foo_message" variant="outbound" data-testid="outbound-message">
            test
          </ChatMessage>
        </>,
        {wrapper: CustomizationFooWrapper}
      );
      const inboundMessage = screen.getByTestId('inbound-message');
      const outboundMessage = screen.getByTestId('outbound-message');

      expect(inboundMessage.getAttribute('data-paste-element')).toEqual('foo_message');
      expect(outboundMessage.getAttribute('data-paste-element')).toEqual('foo_message');
    });
  });

  describe('ChatBubble', () => {
    it('should add custom styles to variants', () => {
      render(
        <>
          <ChatMessage variant="inbound">
            <ChatBubble data-testid="inbound-bubble">test</ChatBubble>
          </ChatMessage>
          <ChatMessage variant="outbound">
            <ChatBubble data-testid="outbound-bubble">test</ChatBubble>
          </ChatMessage>
        </>,
        {wrapper: CustomizationWrapper}
      );

      const inboundBubble = screen.getByTestId('inbound-bubble');
      const outboundBubble = screen.getByTestId('outbound-bubble');

      expect(inboundBubble).toHaveStyleRule('background-color', 'rgb(2, 99, 224)');
      expect(inboundBubble).toHaveStyleRule('color', 'rgb(255, 255, 255)');
      expect(outboundBubble).toHaveStyleRule('background-color', 'rgb(3, 11, 93)');
      expect(outboundBubble).toHaveStyleRule('color', 'rgb(255, 255, 255)');
    });

    it('should set element data attribute', () => {
      render(
        <>
          <ChatMessage variant="inbound">
            <ChatBubble data-testid="inbound-bubble">test</ChatBubble>
          </ChatMessage>
          <ChatMessage variant="outbound">
            <ChatBubble data-testid="outbound-bubble">test</ChatBubble>
          </ChatMessage>
        </>,
        {wrapper: CustomizationWrapper}
      );

      const inboundBubble = screen.getByTestId('inbound-bubble');
      const outboundBubble = screen.getByTestId('outbound-bubble');

      expect(inboundBubble.getAttribute('data-paste-element')).toEqual('CHAT_BUBBLE');
      expect(outboundBubble.getAttribute('data-paste-element')).toEqual('CHAT_BUBBLE');
    });

    it('should add custom styles to variants with a custom element data attribute', () => {
      render(
        <>
          <ChatMessage variant="inbound">
            <ChatBubble element="foo_bubble" data-testid="inbound-bubble">
              test
            </ChatBubble>
          </ChatMessage>
          <ChatMessage variant="outbound">
            <ChatBubble element="foo_bubble" data-testid="outbound-bubble">
              test
            </ChatBubble>
          </ChatMessage>
        </>,
        {wrapper: CustomizationFooWrapper}
      );

      const inboundBubble = screen.getByTestId('inbound-bubble');
      const outboundBubble = screen.getByTestId('outbound-bubble');

      expect(inboundBubble).toHaveStyleRule('background-color', 'rgb(2, 99, 224)');
      expect(inboundBubble).toHaveStyleRule('color', 'rgb(255, 255, 255)');
      expect(outboundBubble).toHaveStyleRule('background-color', 'rgb(3, 11, 93)');
      expect(outboundBubble).toHaveStyleRule('color', 'rgb(255, 255, 255)');
    });

    it('should set custom element data attribute', () => {
      render(
        <>
          <ChatMessage variant="inbound">
            <ChatBubble element="foo_bubble" data-testid="inbound-bubble">
              test
            </ChatBubble>
          </ChatMessage>
          <ChatMessage variant="outbound">
            <ChatBubble element="foo_bubble" data-testid="outbound-bubble">
              test
            </ChatBubble>
          </ChatMessage>
        </>,
        {wrapper: CustomizationFooWrapper}
      );

      const inboundBubble = screen.getByTestId('inbound-bubble');
      const outboundBubble = screen.getByTestId('outbound-bubble');

      expect(inboundBubble.getAttribute('data-paste-element')).toEqual('foo_bubble');
      expect(outboundBubble.getAttribute('data-paste-element')).toEqual('foo_bubble');
    });
  });

  describe('ChatMessageMeta', () => {
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
});
