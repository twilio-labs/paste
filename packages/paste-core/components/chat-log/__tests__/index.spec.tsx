import * as React from 'react';
import {screen, render} from '@testing-library/react';
// @ts-ignore typescript doesn't like js imports
import axe from '../../../../../.jest/axe-helper';
import {ChatMessage, ChatBubble, ChatMessageMeta, ChatMessageMetaItem} from '../src';

describe('ChatMessage', () => {
  it('should render a list element', () => {
    render(<ChatMessage variant="inbound">test</ChatMessage>);
    expect(screen.getByRole('listitem')).toBeDefined();
  });
});

describe('ChatBubble', () => {
  it('should render', () => {
    render(
      <ChatMessage variant="inbound">
        <ChatBubble>test</ChatBubble>
      </ChatMessage>
    );
    expect(screen.getByText('test')).toBeDefined();
  });
});

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
      // todo: replace with ChatLog component
      <ul>
        <ChatMessage variant="inbound">
          <ChatBubble>test</ChatBubble>
          <ChatMessageMeta aria-label="said by Gibby Radki at 5:04pm">
            <ChatMessageMetaItem>Gibby Radki</ChatMessageMetaItem>
            <ChatMessageMetaItem>5:04pm</ChatMessageMetaItem>
          </ChatMessageMeta>
        </ChatMessage>
        <ChatMessage variant="outbound">
          <ChatBubble>test</ChatBubble>
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
