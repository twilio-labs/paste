import * as React from 'react';
import {render, screen} from '@testing-library/react';
import {Theme} from '@twilio-paste/theme';
import {CustomizationProvider} from '@twilio-paste/customization';

import {DescriptionList, DescriptionListTerm, DescriptionListDetails} from '../src';

const FONT_WEIGHT = 'font-weight';
const MARGIN_LEFT = 'margin-left';
const COLOR = 'color';

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
      expect(terms[0]).toHaveStyleRule(FONT_WEIGHT, '600');
    });
  });

  describe('DescriptionListDetails', () => {
    it('should have marginLeft: space0', () => {
      expect(details[0]).toHaveStyleRule(MARGIN_LEFT, '0');
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
    expect(screen.getByText('A').closest('dl')?.dataset.pasteElement).toBe('DESCRIPTION_LIST');
    expect(screen.getByRole('term').dataset.pasteElement).toBe('DESCRIPTION_LIST_TERM');
    expect(screen.getByRole('definition').dataset.pasteElement).toBe('DESCRIPTION_LIST_DETAILS');
  });

  it('should set custom data paste element attribute', () => {
    render(
      <Theme.Provider theme="default">
        <DescriptionList element="FAZ">
          <DescriptionListTerm element="FOO">A</DescriptionListTerm>
          <DescriptionListDetails element="BAR">1</DescriptionListDetails>
        </DescriptionList>
      </Theme.Provider>
    );
    expect(screen.getByText('A').closest('dl')?.dataset.pasteElement).toBe('FAZ');
    expect(screen.getByRole('term').dataset.pasteElement).toBe('FOO');
    expect(screen.getByRole('definition').dataset.pasteElement).toBe('BAR');
  });

  it('should add custom styles', () => {
    render(
      <CustomizationProvider
        baseTheme="default"
        theme={TestTheme}
        elements={{
          DESCRIPTION_LIST: {color: 'colorTextDecorative40'},
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
    expect(screen.getByText('A').closest('dl')).toHaveStyleRule(COLOR, 'rgb(109, 46, 209)');
    expect(screen.getByRole('term')).toHaveStyleRule(FONT_WEIGHT, '700');
    expect(screen.getByRole('definition')).toHaveStyleRule(MARGIN_LEFT, '0.125rem');
  });

  it('should add custom styles with a custom data paste element attribute', () => {
    render(
      <CustomizationProvider
        baseTheme="default"
        theme={TestTheme}
        elements={{
          FAZ: {color: 'colorTextDecorative40'},
          FOO: {fontWeight: 'fontWeightBold'},
          BAR: {marginLeft: 'space10'},
        }}
      >
        <DescriptionList element="FAZ">
          <DescriptionListTerm element="FOO">A</DescriptionListTerm>
          <DescriptionListDetails element="BAR">1</DescriptionListDetails>
        </DescriptionList>
      </CustomizationProvider>
    );
    expect(screen.getByText('A').closest('dl')).toHaveStyleRule(COLOR, 'rgb(109, 46, 209)');
    expect(screen.getByRole('term')).toHaveStyleRule(FONT_WEIGHT, '700');
    expect(screen.getByRole('definition')).toHaveStyleRule(MARGIN_LEFT, '0.125rem');
  });
});
