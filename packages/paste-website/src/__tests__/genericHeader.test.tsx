import * as React from 'react';
import {Theme} from '@twilio-paste/theme';
import {GenericHeader} from '../components/shortcodes/generic-header/index';
import {render, screen} from '@testing-library/react';

describe('GenericHeader', () => {
  const FullHeader: React.FC = () => {
    return (
      <Theme.Provider theme="default">
        <GenericHeader
          name="Alert"
          categoryRoute="/components"
          description="This is an alert component."
          designCommitteeReview={null}
          engineerCommitteeReview={null}
          figmaStatus={null}
          githubUrl="https://google.com"
          packageName="@twilio-paste/alert"
          packageStatus="alpha"
          storybookUrl="/?path=/story/components-alert--neutral"
          version="1.0.0"
        />
      </Theme.Provider>
    );
  };
  // These tests are more appropriate as cypress tests
  // it('should add openGraph meta for existing components and primitives', () => {
  //   const openGraphMeta = screen.getBy
  // });

  // it('should not add openGraph meta for non-existing components and primitives', () => {

  // });

  // it('should not add openGraph meta for non-components, non-primitives pages', () => {

  // });

  it('should render an h1 tag using the name prop as text', () => {
    render(<FullHeader />);
    const heading = screen.getByRole('heading', {level: 1});
    expect(heading.textContent).toEqual('Alert');
  });

  it('should render text using the description prop', () => {
    render(<FullHeader />);
    screen.debug();
    const description = screen.getByText('This is an alert component.');
    expect(description).toBeDefined();
  });

  it('should render a version number if given', () => {
    render(<FullHeader />);
    const versionText = screen.getByText('Version 1.0.0');
    expect(versionText).toBeDefined();
  });

  it('should render a github link if given', () => {
    render(<FullHeader />);
    const githubLink = screen.getByRole('link', {name: 'Github'});
    expect(githubLink.getAttribute('href')).toEqual('https://google.com');
  });

  it('should render a storybook link if given', () => {
    render(<FullHeader />);
    const storybookLink = screen.getByRole('link', {name: 'Storybook'});
    expect(storybookLink.getAttribute('href')).toEqual(
      'https://paste-storybook.twilio.design/?path=/story/components-alert--neutral'
    );
  });

  const BasicHeader: React.FC = () => {
    return (
      <Theme.Provider theme="default">
        <GenericHeader name="Alert" categoryRoute="/components" />;
      </Theme.Provider>
    );
  };

  it('should not render gitub link, or storybook link if not given', () => {
    render(<BasicHeader />);

    expect(screen.queryByRole('link', {name: 'Github'})).toBeNull();
    expect(screen.queryByRole('link', {name: 'Storybook'})).toBeNull();
  });
});
