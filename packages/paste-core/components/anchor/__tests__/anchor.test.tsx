import * as React from 'react';
import {render, screen} from '@testing-library/react';
import {matchers} from 'jest-emotion';
import axe from '../../../../../.jest/axe-helper';
import {Anchor} from '../src';

expect.extend(matchers);

describe('Anchor', () => {
  it('should render an external anchor', () => {
    render(
      <Anchor href="https://twilio.com">
        This is an anchor that links to Twilio.com with an external target and rel
      </Anchor>
    );
    const renderedAnchor = screen.getByRole('link');
    expect(renderedAnchor.getAttribute('target')).toEqual('_blank');
    expect(renderedAnchor.getAttribute('rel')).toEqual('noreferrer noopener');
  });

  it('should render an external anchor with overwritten target and rel', (): void => {
    render(
      <Anchor href="https://twilio.com" target="_self" rel="noopener">
        This is an anchor that links to Twilio.com with the target and rel overwritten
      </Anchor>
    );
    const renderedAnchor = screen.getByRole('link');
    expect(renderedAnchor.getAttribute('target')).toEqual('_self');
    expect(renderedAnchor.getAttribute('rel')).toEqual('noopener');
  });

  it('should render the external link icon when showExternal is set', (): void => {
    render(
      <Anchor href="https://twilio.com" showExternal>
        External link with icon
      </Anchor>
    );
    const renderedAnchor = screen.getByRole('link');
    expect(renderedAnchor.querySelectorAll('svg').length).toBeGreaterThan(0);
  });

  it('should render layout prop styles', (): void => {
    render(
      <Anchor
        href="https://twilio.com"
        data-testid="styledAnchor"
        display="block"
        width="size30"
        minWidth="size30"
        maxWidth="size30"
        height="size30"
        minHeight="size30"
        maxHeight="size30"
        size="size30"
        verticalAlign="middle"
      >
        Anchor
      </Anchor>
    );
    const renderedAnchor = screen.getByTestId('styledAnchor');
    expect(renderedAnchor).toHaveStyleRule('display', 'block');
    expect(renderedAnchor).toHaveStyleRule('width', 'size30');
    expect(renderedAnchor).toHaveStyleRule('min-width', 'size30');
    expect(renderedAnchor).toHaveStyleRule('max-width', 'size30');
    expect(renderedAnchor).toHaveStyleRule('height', 'size30');
    expect(renderedAnchor).toHaveStyleRule('min-height', 'size30');
    expect(renderedAnchor).toHaveStyleRule('max-height', 'size30');
    expect(renderedAnchor).toHaveStyleRule('vertical-align', 'middle');
  });

  it('should render size prop styles', (): void => {
    render(
      <Anchor href="https://twilio.com" data-testid="styledAnchor" size="size30">
        Anchor
      </Anchor>
    );
    const renderedAnchor = screen.getByTestId('styledAnchor');
    expect(renderedAnchor).toHaveStyleRule('height', 'size30');
  });

  it('should render margin shorthand prop styles', (): void => {
    render(
      <Anchor href="https://twilio.com" data-testid="styledAnchor" margin="space20">
        Anchor
      </Anchor>
    );
    const renderedAnchor = screen.getByTestId('styledAnchor');
    expect(renderedAnchor).toHaveStyleRule('margin', 'space20');
  });

  it('should render margin prop styles', (): void => {
    render(
      <Anchor
        href="https://twilio.com"
        data-testid="styledAnchor"
        marginTop="space20"
        marginRight="space20"
        marginBottom="space20"
        marginLeft="space20"
      >
        Anchor
      </Anchor>
    );
    const renderedAnchor = screen.getByTestId('styledAnchor');
    expect(renderedAnchor).toHaveStyleRule('margin-top', 'space20');
    expect(renderedAnchor).toHaveStyleRule('margin-right', 'space20');
    expect(renderedAnchor).toHaveStyleRule('margin-bottom', 'space20');
    expect(renderedAnchor).toHaveStyleRule('margin-left', 'space20');
  });

  it('should render margin X and Y prop styles', (): void => {
    render(
      <Anchor href="https://twilio.com" data-testid="styledAnchor" marginX="space20" marginY="space20">
        Anchor
      </Anchor>
    );
    const renderedAnchor = screen.getByTestId('styledAnchor');
    expect(renderedAnchor).toHaveStyleRule('margin-top', 'space20');
    expect(renderedAnchor).toHaveStyleRule('margin-right', 'space20');
    expect(renderedAnchor).toHaveStyleRule('margin-bottom', 'space20');
    expect(renderedAnchor).toHaveStyleRule('margin-left', 'space20');
  });

  it('should render padding shorthand prop styles', (): void => {
    render(
      <Anchor href="https://twilio.com" data-testid="styledAnchor" padding="space20">
        Anchor
      </Anchor>
    );
    const renderedAnchor = screen.getByTestId('styledAnchor');
    expect(renderedAnchor).toHaveStyleRule('padding', 'space20');
  });

  it('should render padding prop styles', (): void => {
    render(
      <Anchor
        href="https://twilio.com"
        data-testid="styledAnchor"
        paddingTop="space20"
        paddingRight="space20"
        paddingBottom="space20"
        paddingLeft="space20"
      >
        Anchor
      </Anchor>
    );
    const renderedAnchor = screen.getByTestId('styledAnchor');
    expect(renderedAnchor).toHaveStyleRule('padding-top', 'space20');
    expect(renderedAnchor).toHaveStyleRule('padding-right', 'space20');
    expect(renderedAnchor).toHaveStyleRule('padding-bottom', 'space20');
    expect(renderedAnchor).toHaveStyleRule('padding-left', 'space20');
  });

  it('should render padding X and Y prop styles', (): void => {
    render(
      <Anchor href="https://twilio.com" data-testid="styledAnchor" paddingX="space20" paddingY="space20">
        Anchor
      </Anchor>
    );
    const renderedAnchor = screen.getByTestId('styledAnchor');
    expect(renderedAnchor).toHaveStyleRule('padding-top', 'space20');
    expect(renderedAnchor).toHaveStyleRule('padding-right', 'space20');
    expect(renderedAnchor).toHaveStyleRule('padding-bottom', 'space20');
    expect(renderedAnchor).toHaveStyleRule('padding-left', 'space20');
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
