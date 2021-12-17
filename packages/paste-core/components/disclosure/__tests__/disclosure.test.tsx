import * as React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {Theme} from '@twilio-paste/theme';
import {CustomizationProvider} from '@twilio-paste/customization';

// @ts-ignore typescript doesn't like js imports
import axe from '../../../../../.jest/axe-helper';
import {Disclosure, DisclosureContent, DisclosureHeading, useDisclosureState} from '../src';
import type {DisclosureHeadingProps, DisclosureProps, DisclosureStateReturn} from '../src';
import {getIconHoverStyles} from '../src/utils';

const MockDisclosure: React.FC<{
  visible?: DisclosureProps['visible'];
  disabled?: DisclosureHeadingProps['disabled'];
  focusable?: DisclosureHeadingProps['focusable'];
}> = ({visible, disabled, focusable}) => {
  return (
    <Theme.Provider theme="default">
      <Disclosure baseId="disclosure" visible={visible}>
        <DisclosureHeading as="h1" variant="heading10" disabled={disabled} focusable={focusable}>
          Clickable heading
        </DisclosureHeading>
        <DisclosureContent data-testid="disclosure">Disclosure content</DisclosureContent>
      </Disclosure>
    </Theme.Provider>
  );
};

const MockDefaultElementDisclosure: React.FC = () => {
  return (
    <Disclosure data-testid="disclosure">
      <DisclosureHeading as="h1" data-testid="disclosure-heading" variant="heading10">
        Clickable heading
      </DisclosureHeading>
      <DisclosureContent data-testid="disclosure-content">Disclosure content</DisclosureContent>
    </Disclosure>
  );
};

const MockCustomElementDisclosure: React.FC = () => {
  return (
    <Disclosure element="MY_DISCLOSURE" data-testid="disclosure" visible>
      <DisclosureHeading element="MY_DISCLOSURE_HEADING" as="h2" variant="heading20" data-testid="disclosure-heading">
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam.
      </DisclosureHeading>
      <DisclosureContent element="MY_DISCLOSURE_CONTENT" data-testid="disclosure-content">
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus
        commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a
        pharetra augue.
      </DisclosureContent>
    </Disclosure>
  );
};

const useVisibleDisclosureState = (): DisclosureStateReturn => {
  const disclosure = useDisclosureState();
  const [visible, setVisible] = React.useState(true);
  return {
    ...disclosure,
    visible,
    toggle: () => {
      setVisible(false);
    },
  };
};

const StateHookMock: React.FC = () => {
  const disclosure = useVisibleDisclosureState();
  return (
    <Theme.Provider theme="default">
      <Disclosure variant="contained" state={disclosure}>
        <DisclosureHeading as="h2" variant="heading20">
          Clickable heading
        </DisclosureHeading>
        <DisclosureContent>Disclosure content</DisclosureContent>
      </Disclosure>
    </Theme.Provider>
  );
};

describe('Disclosure', () => {
  describe('Unit tests', () => {
    it('should return icon hover styles for each heading size', () => {
      const mockSpace = {
        space10: '10',
        space20: '20',
      };
      expect(getIconHoverStyles(false, 'heading10', false, false, mockSpace)).toMatchObject({
        color: 'colorTextIcon',
        transform: 'translateX(0) rotate(-90deg)',
        transition: 'transform 200ms ease-out',
      });
      expect(getIconHoverStyles(true, 'heading10', true, false, mockSpace)).toMatchObject({
        color: 'colorText',
        transform: 'translateX(20) rotate(0deg)',
        transition: 'transform 200ms ease-out',
      });
      expect(getIconHoverStyles(false, 'heading20', false, false, mockSpace)).toMatchObject({
        color: 'colorTextIcon',
        transform: 'translateX(0) rotate(-90deg)',
        transition: 'transform 200ms ease-out',
      });
      expect(getIconHoverStyles(true, 'heading20', true, false, mockSpace)).toMatchObject({
        color: 'colorText',
        transform: 'translateX(20) rotate(0deg)',
        transition: 'transform 200ms ease-out',
      });
      expect(getIconHoverStyles(false, 'heading30', false, false, mockSpace)).toMatchObject({
        color: 'colorTextIcon',
        transform: 'translateX(0) rotate(-90deg)',
        transition: 'transform 200ms ease-out',
      });
      expect(getIconHoverStyles(true, 'heading30', true, false, mockSpace)).toMatchObject({
        color: 'colorText',
        transform: 'translateX(20) rotate(0deg)',
        transition: 'transform 200ms ease-out',
      });
      expect(getIconHoverStyles(false, 'heading40', false, false, mockSpace)).toMatchObject({
        color: 'colorTextIcon',
        transform: 'translateX(0) rotate(-90deg)',
        transition: 'transform 200ms ease-out',
      });
      expect(getIconHoverStyles(true, 'heading40', true, false, mockSpace)).toMatchObject({
        color: 'colorText',
        transform: 'translateX(10) rotate(0deg)',
        transition: 'transform 200ms ease-out',
      });
      expect(getIconHoverStyles(false, 'heading50', false, false, mockSpace)).toMatchObject({
        color: 'colorTextIcon',
        transform: 'translateX(0) rotate(-90deg)',
        transition: 'transform 200ms ease-out',
      });
      expect(getIconHoverStyles(true, 'heading50', true, false, mockSpace)).toMatchObject({
        color: 'colorText',
        transform: 'translateX(10) rotate(0deg)',
        transition: 'transform 200ms ease-out',
      });
      expect(getIconHoverStyles(false, 'heading60', false, false, mockSpace)).toMatchObject({
        color: 'colorTextIcon',
        transform: 'translateX(0) rotate(-90deg)',
        transition: 'transform 200ms ease-out',
      });
      expect(getIconHoverStyles(true, 'heading60', true, false, mockSpace)).toMatchObject({
        color: 'colorText',
        transform: 'translateX(10) rotate(0deg)',
        transition: 'transform 200ms ease-out',
      });
      expect(getIconHoverStyles(true, 'heading60', true, true, mockSpace)).toMatchObject({
        color: 'colorTextIcon',
      });
    });
  });

  describe('Render', () => {
    it('should render a disclosure button with aria attributes', () => {
      render(<MockDisclosure />);
      const renderedDisclosureButton = screen.getByRole('button');
      expect(renderedDisclosureButton.getAttribute('aria-expanded')).toEqual('false');
      expect(renderedDisclosureButton.getAttribute('aria-controls')).toEqual('disclosure');
      expect(renderedDisclosureButton.getAttribute('tabindex')).toEqual('0');
      expect(screen.getByTestId('disclosure').id).toEqual('disclosure');
    });
    it('should render a disclosure open', () => {
      render(<MockDisclosure visible />);
      const renderedDisclosureButton = screen.getByRole('button');
      expect(renderedDisclosureButton.getAttribute('aria-expanded')).toEqual('true');
    });
    it('should update attributes when clicked', () => {
      render(<MockDisclosure />);
      const renderedDisclosureButton = screen.getByRole('button');
      fireEvent.click(renderedDisclosureButton);
      expect(renderedDisclosureButton.getAttribute('aria-expanded')).toEqual('true');
    });
    it('should render a disabled disclosure', () => {
      render(<MockDisclosure disabled />);
      const renderedDisclosureButton = screen.getByRole('button');
      expect(renderedDisclosureButton.getAttribute('aria-disabled')).toEqual('true');
      expect(renderedDisclosureButton.getAttribute('tabindex')).toBeNull();
    });
    it('should render a disabled but focusable disclosure', () => {
      render(<MockDisclosure disabled focusable />);
      const renderedDisclosureButton = screen.getByRole('button');
      expect(renderedDisclosureButton.getAttribute('aria-disabled')).toEqual('true');
      expect(renderedDisclosureButton.getAttribute('tabindex')).toEqual('0');
    });
    it('should render a disclosure open and update attributes when clicked using a state hook', () => {
      render(<StateHookMock />);
      const renderedDisclosureButton = screen.getByRole('button');
      expect(renderedDisclosureButton.getAttribute('aria-expanded')).toEqual('true');
      fireEvent.click(renderedDisclosureButton);
      expect(renderedDisclosureButton.getAttribute('aria-expanded')).toEqual('false');
    });
  });

  describe('Customization', () => {
    it('should set an element data attribute for Disclosure components', () => {
      render(
        <Theme.Provider theme="default">
          <MockDefaultElementDisclosure />
        </Theme.Provider>
      );

      const renderedDisclosureHeading = screen.getByTestId('disclosure-heading');
      const renderedDisclosure = screen.getByTestId('disclosure');
      const renderedDisclosureContent = screen.getByTestId('disclosure-content');

      expect(renderedDisclosure.getAttribute('data-paste-element')).toEqual('DISCLOSURE');
      expect(renderedDisclosureHeading.getAttribute('data-paste-element')).toEqual('DISCLOSURE_HEADING');
      expect(renderedDisclosureContent.getAttribute('data-paste-element')).toEqual('DISCLOSURE_CONTENT');
    });

    it('should set a custom element data attribute for custom named Disclosure components', () => {
      render(
        <Theme.Provider theme="default">
          <MockCustomElementDisclosure />
        </Theme.Provider>
      );

      const renderedDisclosureHeading = screen.getByTestId('disclosure-heading');
      const renderedDisclosure = screen.getByTestId('disclosure');
      const renderedDisclosureContent = screen.getByTestId('disclosure-content');

      expect(renderedDisclosure.getAttribute('data-paste-element')).toEqual('MY_DISCLOSURE');
      expect(renderedDisclosureHeading.getAttribute('data-paste-element')).toEqual('MY_DISCLOSURE_HEADING');
      expect(renderedDisclosureContent.getAttribute('data-paste-element')).toEqual('MY_DISCLOSURE_CONTENT');
    });

    it('should add custom styles to Disclosure components', () => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{
            DISCLOSURE: {padding: 'space100'},
            DISCLOSURE_CONTENT: {color: 'colorTextErrorStrong'},
            DISCLOSURE_HEADING: {color: 'colorTextWeakest', backgroundColor: 'colorBackgroundDestructiveStrong'},
            DISCLOSURE_HEADING_ICON: {color: 'colorTextIconError'},
          }}
        >
          <MockDefaultElementDisclosure />
        </CustomizationProvider>
      );

      const renderedDisclosureHeading = screen.getByTestId('disclosure-heading');
      const renderedDisclosureHeadingIcon = renderedDisclosureHeading.firstChild;
      const renderedDisclosure = screen.getByTestId('disclosure');
      const renderedDisclosureContent = screen.getByTestId('disclosure-content');

      expect(renderedDisclosure).toHaveStyleRule('padding', '2.25rem');
      expect(renderedDisclosureHeading).toHaveStyleRule('color', 'rgb(255,255,255)');
      expect(renderedDisclosureHeading).toHaveStyleRule('background-color', 'rgb(117,12,12)');
      expect(renderedDisclosureHeadingIcon).toHaveStyleRule('color', 'rgb(214,31,31)');
      expect(renderedDisclosureContent).toHaveStyleRule('color', 'rgb(173,17,17)');
    });

    it('should add custom styles to custom named Disclosure components', () => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{
            MY_DISCLOSURE: {padding: 'space100'},
            MY_DISCLOSURE_CONTENT: {color: 'colorTextErrorStrong'},
            MY_DISCLOSURE_HEADING: {color: 'colorTextWeakest', backgroundColor: 'colorBackgroundDestructiveStrong'},
            MY_DISCLOSURE_HEADING_ICON: {color: 'colorTextIconError'},
          }}
        >
          <MockCustomElementDisclosure />
        </CustomizationProvider>
      );
      const renderedDisclosureHeading = screen.getByTestId('disclosure-heading');
      const renderedDisclosureHeadingIcon = renderedDisclosureHeading.firstChild;
      const renderedDisclosure = screen.getByTestId('disclosure');
      const renderedDisclosureContent = screen.getByTestId('disclosure-content');

      expect(renderedDisclosure).toHaveStyleRule('padding', '2.25rem');
      expect(renderedDisclosureHeading).toHaveStyleRule('color', 'rgb(255,255,255)');
      expect(renderedDisclosureHeading).toHaveStyleRule('background-color', 'rgb(117,12,12)');
      expect(renderedDisclosureHeadingIcon).toHaveStyleRule('color', 'rgb(214,31,31)');
      expect(renderedDisclosureContent).toHaveStyleRule('color', 'rgb(173,17,17)');
    });
  });

  describe('Accessibility', () => {
    it('should have no accessibility violations', async () => {
      const {container} = render(<MockDisclosure />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
