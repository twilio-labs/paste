import * as React from 'react';
import {render} from '@testing-library/react';
// @ts-ignore typescript doesn't like js imports
import axe from '../../../../../.jest/axe-helper';
import {ChatMessage} from '../src';

describe('ChatMessage', () => {
  it('should render', () => {
    const {getByText} = render(<ChatMessage variant="inbound">test</ChatMessage>);
    expect(getByText('test')).toBeDefined();
  });

  describe('Accessibility', () => {
    it('Should have no accessibility violations', async () => {
      const {container} = render(
        <>
          <ChatMessage variant="inbound">test</ChatMessage>
          <ChatMessage variant="outbound">test</ChatMessage>
        </>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
