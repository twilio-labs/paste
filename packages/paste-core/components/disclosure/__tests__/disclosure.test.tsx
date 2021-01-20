import * as React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
// @ts-ignore typescript doesn't like js imports
import axe from '../../../../../.jest/axe-helper';
import {
  Disclosure,
  DisclosureContent,
  DisclosureHeading,
  DisclosureHeadingProps,
  DisclosureProps,
  DisclosureStateReturn,
  useDisclosureState,
} from '../src';

const MockDisclosure: React.FC<{
  visible?: DisclosureProps['visible'];
  disabled?: DisclosureHeadingProps['disabled'];
  focusable?: DisclosureHeadingProps['focusable'];
}> = ({visible, disabled, focusable}) => {
  return (
    <Disclosure baseId="disclosure" visible={visible}>
      <DisclosureHeading as="h1" variant="heading10" disabled={disabled} focusable={focusable}>
        Clickable heading
      </DisclosureHeading>
      <DisclosureContent data-testid="disclosure">Disclosure content</DisclosureContent>
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
    <>
      <Disclosure variant="contained" state={disclosure}>
        <DisclosureHeading as="h2" variant="heading20">
          Clickable heading
        </DisclosureHeading>
        <DisclosureContent>Disclosure content</DisclosureContent>
      </Disclosure>
    </>
  );
};

describe('Disclosure', () => {
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
  describe('accessibility', () => {
    it('should have no accessibility violations', async () => {
      const {container} = render(<MockDisclosure />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
