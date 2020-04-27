import * as React from 'react';
import {useUID} from 'react-uid';
import {render} from 'react-dom';
import {render as testRender, fireEvent, cleanup} from '@testing-library/react';
import {axe} from 'jest-axe';
import {Theme} from '@twilio-paste/theme';
import {Select, OptionGroup, Option} from '../../src';

const onChangeMock: jest.Mock = jest.fn();

const MockSelect: React.FC<{children?: React.ReactNode, hasError?: boolean}> = ({children, hasError = false }) => {
  const selectID = `select-${useUID()}`;
  return (
    <Theme.Provider theme="console">
      <Select id={selectID} onChange={onChangeMock} hasError={hasError}>
        {children}
      </Select>
    </Theme.Provider>
  );
};

describe('Form | Select', () => {
  it('shoud have the correct accessibility attributes on the container', () => {
      const {getByTestId} = testRender(<MockSelect />);
      console.log(getByTestId('select').getAttribute('aria-invalid'));
      expect(getByTestId('select').getAttribute('aria-invalid')).toEqual(false);

      const {getByTestId: getByTestIdWithError} = testRender(<MockSelect hasError={true} />);
      console.log(getByTestIdWithError('select').getAttribute('aria-invalid'));
      expect(getByTestIdWithError('select').getAttribute('aria-invalid')).toEqual(true);
  });

  it('should be able to take arbitrary html attributes on the container', () => {});

  it('should filter blacklisted props via safelySpreadFormControlProps', () => {});

  it('should call onChange when an option is selected', () => {});

  it('should have no accessibility violations', () => {});
});