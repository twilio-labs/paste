import * as React from 'react';
import {render} from '@testing-library/react';
import {CustomizationProvider} from '@twilio-paste/customization';

import {
  ProgressSteps,
  ProgressStepSeparator,
  ProgressStepComplete,
  ProgressStepCurrent,
  ProgressStepError,
  ProgressStepIncomplete,
} from '../src';
import {Divs, Buttons, Anchors} from '../stories/horizontal.stories';

describe('ProgressSteps', () => {
  it('should render divs correctly', () => {
    const {queryAllByText} = render(<Divs />);
    const [completeIcon, completeLabel] = queryAllByText('Complete');
    const [incompleteIcon, incompleteLabel] = queryAllByText('Incomplete');
    const [errorIcon, errorLabel] = queryAllByText('Error');
    const [currentIcon, currentLabel] = queryAllByText('Current');

    expect(completeIcon).toBeDefined();
    expect(completeLabel).toBeDefined();
    expect(incompleteIcon).toBeDefined();
    expect(incompleteLabel).toBeDefined();
    expect(errorIcon).toBeDefined();
    expect(errorLabel).toBeDefined();
    expect(currentIcon).toBeDefined();
    expect(currentLabel).toBeDefined();

    expect(completeLabel.parentElement?.tagName).toEqual('DIV');
  });

  it('should render buttons correctly', () => {
    const {getByText} = render(<Buttons />);
    const signupLabel = getByText('Sign up').parentElement;

    expect(signupLabel?.tagName).toEqual('BUTTON');
    expect(signupLabel?.getAttribute('type')).toEqual('button');
  });

  it('should render anchors correctly', () => {
    const {getByText} = render(<Anchors />);
    const signupLabel = getByText('Sign up').parentElement;

    expect(signupLabel?.tagName).toEqual('A');
    expect(signupLabel?.getAttribute('href')).toEqual('#');
  });

  it('handles incorrect props correctly', () => {
    // hide console errors from terminal when throwing expected errors
    const spy = jest.spyOn(console, 'error');
    spy.mockImplementation(() => {});

    expect(() =>
      render(
        <ProgressStepIncomplete as="div" disabled>
          Only buttons disabled
        </ProgressStepIncomplete>
      )
    ).toThrow();

    expect(() => render(<ProgressStepIncomplete as="a">Missing href</ProgressStepIncomplete>)).toThrow();
    expect(() => render(<ProgressStepIncomplete as="button">Missing onClick</ProgressStepIncomplete>)).toThrow();
    expect(() =>
      render(
        <ProgressStepIncomplete as="div" onClick={() => {}}>
          Bad onclick
        </ProgressStepIncomplete>
      )
    ).toThrow();

    spy.mockRestore();
  });

  describe('element naming', () => {
    it('should set all default element names', async () => {
      const {getByText} = render(<Buttons />);
      const signupLabel = getByText('Sign up').parentElement;
      const validateEmail = getByText('Validate email').parentElement;
      const completeProfile = getByText('Complete profile').parentElement;
      const addFriends = getByText('Add friends').parentElement;
      const wrapper = signupLabel?.parentElement;

      expect(signupLabel?.dataset.pasteElement).toEqual('PROGRESS_STEP_COMPLETE');
      expect(validateEmail?.dataset.pasteElement).toEqual('PROGRESS_STEP_ERROR');
      expect(completeProfile?.dataset.pasteElement).toEqual('PROGRESS_STEP_CURRENT');
      expect(addFriends?.dataset.pasteElement).toEqual('PROGRESS_STEP_INCOMPLETE');
      expect(wrapper?.dataset.pasteElement).toEqual('PROGRESS_STEPS');
    });
  });
  describe('custom element naming', () => {
    it('should set all custom element names', async () => {
      const {getByText} = render(
        <CustomizationProvider
          disableAnimations
          theme={TestTheme}
          elements={{
            STEPS: {
              padding: 'space50',
            },
            STEP_SEPARATOR: {
              borderBottomWidth: 'borderWidth40',
              borderRadius: 'borderRadiusCircle',
            },
            STEP_COMPLETE: {
              borderWidth: 'borderWidth10',
              borderStyle: 'solid',
              borderColor: 'colorBorderPrimary',
            },
            STEP_CURRENT: {
              borderWidth: 'borderWidth10',
              borderStyle: 'solid',
              borderColor: 'colorBorderPrimary',
            },
            STEP_ERROR: {
              borderWidth: 'borderWidth10',
              borderStyle: 'solid',
              borderColor: 'colorBorderPrimary',
            },
            STEP_INCOMPLETE: {
              borderWidth: 'borderWidth10',
              borderStyle: 'solid',
              borderColor: 'colorBorderPrimary',
            },
          }}
        >
          <ProgressSteps element="STEPS">
            <ProgressStepComplete element="STEP_COMPLETE" as="a" href="#">
              Sign up
            </ProgressStepComplete>
            <ProgressStepSeparator element="STEP_SEPARATOR" />
            <ProgressStepError element="STEP_ERROR" as="button" onClick={() => {}}>
              Validate email
            </ProgressStepError>
            <ProgressStepSeparator element="STEP_SEPARATOR" />
            <ProgressStepCurrent element="STEP_CURRENT" as="button" onClick={() => {}}>
              Complete profile
            </ProgressStepCurrent>
            <ProgressStepSeparator element="STEP_SEPARATOR" />
            <ProgressStepIncomplete element="STEP_INCOMPLETE" as="button" onClick={() => {}}>
              Add friends
            </ProgressStepIncomplete>
            <ProgressStepSeparator element="STEP_SEPARATOR" />
            <ProgressStepIncomplete element="STEP_INCOMPLETE" as="button" onClick={() => {}} disabled>
              Start event
            </ProgressStepIncomplete>
          </ProgressSteps>
        </CustomizationProvider>
      );
      const signupLabel = getByText('Sign up').parentElement;
      const validateEmail = getByText('Validate email').parentElement;
      const completeProfile = getByText('Complete profile').parentElement;
      const addFriends = getByText('Add friends').parentElement;
      const wrapper = signupLabel?.parentElement;

      expect(signupLabel?.dataset.pasteElement).toEqual('STEP_COMPLETE');
      expect(validateEmail?.dataset.pasteElement).toEqual('STEP_ERROR');
      expect(completeProfile?.dataset.pasteElement).toEqual('STEP_CURRENT');
      expect(addFriends?.dataset.pasteElement).toEqual('STEP_INCOMPLETE');
      expect(wrapper?.dataset.pasteElement).toEqual('STEPS');

      expect(signupLabel).toHaveStyleRule('border-color', 'rgb(2, 99, 224)');
      expect(validateEmail).toHaveStyleRule('border-color', 'rgb(2, 99, 224)');
      expect(completeProfile).toHaveStyleRule('border-color', 'rgb(2, 99, 224)');
      expect(addFriends).toHaveStyleRule('border-color', 'rgb(2, 99, 224)');
      expect(wrapper).toHaveStyleRule('padding', '1rem');
    });
  });
});
