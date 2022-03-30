import * as React from 'react';
import {screen, render} from '@testing-library/react';
// @ts-ignore typescript doesn't like js imports
import axe from '../../../../../.jest/axe-helper';
import {ChatMessage, ChatBubble} from '../src';

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

describe('Accessibility', () => {
  it('Should have no accessibility violations', async () => {
    const {container} = render(
      // todo: replace with ChatLog component
      <ul>
        <ChatMessage variant="inbound">
          <ChatBubble>test</ChatBubble>
        </ChatMessage>
        <ChatMessage variant="outbound">
          <ChatBubble>test</ChatBubble>
        </ChatMessage>
      </ul>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
