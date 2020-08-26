import * as React from 'react';
import {render, screen} from '@testing-library/react';
import {axe} from 'jest-axe';
import {Anchor} from '../src';

describe('Anchor', () => {
  it('it should render an anchor', () => {
    const {asFragment} = render(<Anchor href="/">This is an anchor</Anchor>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('it should render an external anchor', () => {
    render(
      <Anchor href="https://twilio.com">
        This is an anchor that links to Twilio.com with an external target and rel
      </Anchor>
    );
    const renderedAnchor = screen.getByRole('link');
    expect(renderedAnchor.getAttribute('target')).toEqual('_blank');
    expect(renderedAnchor.getAttribute('rel')).toEqual('noreferrer noopener');
  });

  it('it should render an external anchor with overwritten target and rel', (): void => {
    render(
      <Anchor href="https://twilio.com" target="_self" rel="noopener">
        This is an anchor that links to Twilio.com with the target and rel overwritten
      </Anchor>
    );
    const renderedAnchor = screen.getByRole('link');
    expect(renderedAnchor.getAttribute('target')).toEqual('_self');
    expect(renderedAnchor.getAttribute('rel')).toEqual('noopener');
  });

  describe('Accessibility', () => {
    it('Should have no accessibility violations', async () => {
      const {container} = render(
        <>
          <Anchor href="/">This is an anchor</Anchor>
          <Anchor href="https://twilio.com">
            This is an anchor that links to Twilio.com with an external target and rel
          </Anchor>
        </>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
