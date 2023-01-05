import * as React from 'react';
import {render, screen} from '@testing-library/react';
import {Theme} from '@twilio-paste/theme';
import {CustomizationProvider} from '@twilio-paste/customization';

import {DescriptionList, DescriptionListTerm, DescriptionListDetails} from '../src';

describe('DescriptionList', () => {
  render(
    <Theme.Provider theme="default">
      <DescriptionList>
        <DescriptionListTerm>A</DescriptionListTerm>
        <DescriptionListDetails>1</DescriptionListDetails>
        <DescriptionListTerm>B</DescriptionListTerm>
        <DescriptionListDetails>2</DescriptionListDetails>
        <DescriptionListTerm>C</DescriptionListTerm>
        <DescriptionListDetails>3</DescriptionListDetails>
        <DescriptionListDetails>Three</DescriptionListDetails>
      </DescriptionList>
    </Theme.Provider>
  );
  const terms = screen.getAllByRole('term');
  const details = screen.getAllByRole('definition');

  it('should render as terms and definitions', () => {
    expect(terms.length).toBe(3);
    expect(details.length).toBe(4);
  });

  describe('DescriptionListTerm', () => {
    it('should have fontWeight: fontWeightSemibold', () => {
      expect(terms[0]).toHaveStyleRule('font-weight', '600');
    });
  });

  describe('DescriptionListDetails', () => {
    it('should have marginLeft: space0', () => {
      expect(details[0]).toHaveStyleRule('margin-left', '0');
    });
  });
});

describe('Customization', () => {
  it('should set data paste element attribute', () => {
    render(
      <Theme.Provider theme="default">
        <DescriptionList>
          <DescriptionListTerm>A</DescriptionListTerm>
          <DescriptionListDetails>1</DescriptionListDetails>
        </DescriptionList>
      </Theme.Provider>
    );
    // expect(screen.getByTestId('my-description-list').dataset.pasteElement).toBe('DESCRIPTION_LIST');
    expect(screen.getByRole('term').dataset.pasteElement).toBe('DESCRIPTION_LIST_TERM');
    expect(screen.getByRole('definition').dataset.pasteElement).toBe('DESCRIPTION_LIST_DETAILS');
  });

  it('should set custom data paste element attribute', () => {
    render(
      <Theme.Provider theme="default">
        <DescriptionList>
          <DescriptionListTerm element="FOO">A</DescriptionListTerm>
          <DescriptionListDetails element="BAR">1</DescriptionListDetails>
        </DescriptionList>
      </Theme.Provider>
    );
    // expect(screen.getByTestId('my-description-list').dataset.pasteElement).toBe('DESCRIPTION_LIST');
    expect(screen.getByRole('term').dataset.pasteElement).toBe('FOO');
    expect(screen.getByRole('definition').dataset.pasteElement).toBe('BAR');
  });

  it('should add custom styles', () => {
    render(
      <CustomizationProvider
        baseTheme="default"
        theme={TestTheme}
        elements={{
          DESCRIPTION_LIST_TERM: {fontWeight: 'fontWeightBold'},
          DESCRIPTION_LIST_DETAILS: {marginLeft: 'space10'},
        }}
      >
        <DescriptionList>
          <DescriptionListTerm>A</DescriptionListTerm>
          <DescriptionListDetails>1</DescriptionListDetails>
        </DescriptionList>
      </CustomizationProvider>
    );
    expect(screen.getByRole('term')).toHaveStyleRule('font-weight', '700');
    expect(screen.getByRole('definition')).toHaveStyleRule('margin-left', '0.125rem');
  });

  it('should add custom styles with a custom data paste element attribute', () => {
    render(
      <CustomizationProvider
        baseTheme="default"
        theme={TestTheme}
        elements={{
          FOO: {fontWeight: 'fontWeightBold'},
          BAR: {marginLeft: 'space10'},
        }}
      >
        <DescriptionList>
          <DescriptionListTerm element="FOO">A</DescriptionListTerm>
          <DescriptionListDetails element="BAR">1</DescriptionListDetails>
        </DescriptionList>
      </CustomizationProvider>
    );
    expect(screen.getByRole('term')).toHaveStyleRule('font-weight', '700');
    expect(screen.getByRole('definition')).toHaveStyleRule('margin-left', '0.125rem');
  });
});
