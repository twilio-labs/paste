import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Theme } from '@twilio-paste/theme';
import { CustomizationProvider } from '@twilio-paste/customization';

import { MediaObject, MediaFigure, MediaBody } from '../src';

describe('MediaObject', () => {
  it('should render', (): void => {
    render(
      <Theme.Provider theme="default">
        <MediaObject data-testid="media-object">default</MediaObject>
      </Theme.Provider>,
    );
    const renderedMediaObject = screen.getByTestId('media-object');
    expect(renderedMediaObject).toBeDefined();
  });

  it('should render with center aligned children', (): void => {
    render(
      <Theme.Provider theme="default">
        <MediaObject verticalAlign="center" data-testid="media-object">
          center align
        </MediaObject>
      </Theme.Provider>,
    );
    const renderedMediaObject = screen.getByTestId('media-object');
    expect(renderedMediaObject).toHaveStyleRule('align-items', 'center');
  });

  it('should render as another HTML element', (): void => {
    render(
      <Theme.Provider theme="default">
        <MediaObject as="section" data-testid="media-object">
          as section
        </MediaObject>
      </Theme.Provider>,
    );
    const renderedMediaObject = screen.getByTestId('media-object');
    expect(renderedMediaObject.nodeName).toEqual('SECTION');
  });

  it('should render bottom margin', (): void => {
    render(
      <Theme.Provider theme="default">
        <MediaObject marginBottom="space40" data-testid="media-object">
          margin-bottom
        </MediaObject>
      </Theme.Provider>,
    );
    const renderedMediaObject = screen.getByTestId('media-object');
    expect(renderedMediaObject).toHaveStyleRule('margin-bottom', '0.75rem');
  });

  it('should render top margin', (): void => {
    render(
      <Theme.Provider theme="default">
        <MediaObject marginTop="space40" data-testid="media-object">
          margin-top
        </MediaObject>
      </Theme.Provider>,
    );
    const renderedMediaObject = screen.getByTestId('media-object');
    expect(renderedMediaObject).toHaveStyleRule('margin-top', '0.75rem');
  });
});

describe('MediaFigure', () => {
  it('should render', (): void => {
    render(
      <Theme.Provider theme="default">
        <MediaFigure data-testid="media-figure">default</MediaFigure>
      </Theme.Provider>,
    );
    const renderedMediaFigure = screen.getByTestId('media-figure');
    expect(renderedMediaFigure).toBeDefined();
  });

  it('should render as any HTML element', (): void => {
    render(
      <Theme.Provider theme="default">
        <MediaFigure as="a" data-testid="media-figure">
          as a
        </MediaFigure>
      </Theme.Provider>,
    );
    const renderedMediaFigure = screen.getByTestId('media-figure');
    expect(renderedMediaFigure.nodeName).toEqual('A');
  });

  it('should render with spacing on the right for default alignment', (): void => {
    render(
      <Theme.Provider theme="default">
        <MediaFigure spacing="space40" data-testid="media-figure">
          spacing right
        </MediaFigure>
      </Theme.Provider>,
    );
    const renderedMediaFigure = screen.getByTestId('media-figure');
    expect(renderedMediaFigure).toHaveStyleRule('margin-right', '0.75rem');
  });

  it('should render with spacing on the left for end alignment', (): void => {
    render(
      <Theme.Provider theme="default">
        <MediaFigure align="end" spacing="space40" data-testid="media-figure">
          spacing left
        </MediaFigure>
      </Theme.Provider>,
    );
    const renderedMediaFigure = screen.getByTestId('media-figure');
    expect(renderedMediaFigure).toHaveStyleRule('margin-left', '0.75rem');
  });
});

describe('MediaBody', () => {
  it('should render', (): void => {
    render(
      <Theme.Provider theme="default">
        <MediaBody data-testid="media-body">default</MediaBody>
      </Theme.Provider>,
    );
    const renderedMediaBody = screen.getByTestId('media-body');
    expect(renderedMediaBody).toBeDefined();
  });

  it('should render as any HTML element', (): void => {
    render(
      <Theme.Provider theme="default">
        <MediaBody as="article" data-testid="media-body">
          as article
        </MediaBody>
      </Theme.Provider>,
    );
    const renderedMediaBody = screen.getByTestId('media-body');
    expect(renderedMediaBody.nodeName).toEqual('ARTICLE');
  });
});

describe('HTML attributes', () => {
  it('should set a element data attribute for MediaObject', () => {
    render(<MediaObject>media-object</MediaObject>);
    expect(screen.getByText('media-object').getAttribute('data-paste-element')).toEqual('MEDIA_OBJECT');
  });
  it('should set a custom element data attribute for MediaObject', () => {
    render(<MediaObject element="foo">media-object</MediaObject>);
    expect(screen.getByText('media-object').getAttribute('data-paste-element')).toEqual('foo');
  });
  it('should set a element data attribute for MediaFigure', () => {
    render(<MediaFigure>media-figure</MediaFigure>);
    expect(screen.getByText('media-figure').getAttribute('data-paste-element')).toEqual('MEDIA_FIGURE');
  });
  it('should set a custom element data attribute for MediaFigure', () => {
    render(<MediaFigure element="foo">media-figure</MediaFigure>);
    expect(screen.getByText('media-figure').getAttribute('data-paste-element')).toEqual('foo');
  });
  it('should set a element data attribute for MediaBody', () => {
    render(<MediaBody>media-body</MediaBody>);
    expect(screen.getByText('media-body').getAttribute('data-paste-element')).toEqual('MEDIA_BODY');
  });
  it('should set a custom element data attribute for MediaBody', () => {
    render(<MediaBody element="foo">media-body</MediaBody>);
    expect(screen.getByText('media-body').getAttribute('data-paste-element')).toEqual('foo');
  });
});

describe('Customization', () => {
  it('should add custom styles to MediaObject', (): void => {
    render(
      <CustomizationProvider
        baseTheme="default"
        elements={{ MEDIA_OBJECT: { color: 'colorTextWeak', backgroundColor: 'colorBackground' } }}
      >
        <MediaObject data-testid="customizable-media-object">Custom media-object</MediaObject>
      </CustomizationProvider>,
    );
    const renderedBox = screen.getByTestId('customizable-media-object');
    expect(renderedBox).toHaveStyleRule('background-color', 'rgb(244, 244, 246)');
    expect(renderedBox).toHaveStyleRule('color', 'rgb(96, 107, 133)');
  });

  it('should add custom styles to MediaFigure', (): void => {
    render(
      <CustomizationProvider
        baseTheme="default"
        elements={{ MEDIA_FIGURE: { color: 'colorTextWeak', backgroundColor: 'colorBackground' } }}
      >
        <MediaFigure data-testid="customizable-media-figure">Custom media-figure</MediaFigure>
      </CustomizationProvider>,
    );
    const renderedBox = screen.getByTestId('customizable-media-figure');
    expect(renderedBox).toHaveStyleRule('background-color', 'rgb(244, 244, 246)');
    expect(renderedBox).toHaveStyleRule('color', 'rgb(96, 107, 133)');
  });

  it('should add custom styles to MediaBody', (): void => {
    render(
      <CustomizationProvider
        baseTheme="default"
        elements={{ MEDIA_BODY: { color: 'colorTextWeak', backgroundColor: 'colorBackground' } }}
      >
        <MediaBody data-testid="customizable-media-body">Custom media-body</MediaBody>
      </CustomizationProvider>,
    );
    const renderedBox = screen.getByTestId('customizable-media-body');
    expect(renderedBox).toHaveStyleRule('background-color', 'rgb(244, 244, 246)');
    expect(renderedBox).toHaveStyleRule('color', 'rgb(96, 107, 133)');
  });
});
