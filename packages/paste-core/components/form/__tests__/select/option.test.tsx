import * as React from 'react';
import {useUID} from 'react-uid';
import {render} from 'react-dom';
import {render as testRender, fireEvent, cleanup} from '@testing-library/react';
import {axe} from 'jest-axe';
import {Theme} from '@twilio-paste/theme';
import {Option} from '../../src';

// @TODO mocks here

describe('Form | Option', () => {
  it('shoud have the correct accessibility attributes on the container', () => {});

  it('should be able to take arbitrary html attributes on the container', () => {});

  it('should filter blacklisted props via safelySpreadFormControlProps', () => {});

  it('should have no accessibility violations', () => {});
});
