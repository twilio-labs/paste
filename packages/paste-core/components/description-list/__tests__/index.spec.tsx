import { render, screen } from '@testing-library/react';
import { CustomizationProvider } from '@twilio-paste/customization';
import { Theme } from '@twilio-paste/theme';
import * as React from 'react';

import { DescriptionList, DescriptionListDetails, DescriptionListSet, DescriptionListTerm } from '../src';

const FONT_WEIGHT = 'font-weight';
const MARGIN_LEFT = 'margin-left';
const COLOR = 'color';
const MARGIN = 'margin';
const FONT_SIZE = 'font-size';
const LINE_HEIGHT = 'line-height';
const BACKGROUND_COLOR = 'background-color';

describe('DescriptionList', () => {
  render(
    <Theme.Provider theme="default">
      <DescriptionList>
        <DescriptionListSet>
          <DescriptionListTerm>A</DescriptionListTerm>
          <DescriptionListDetails>1</DescriptionListDetails>
        </DescriptionListSet>
        <DescriptionListSet>
          <DescriptionListTerm>B</DescriptionListTerm>
          <DescriptionListDetails>2</DescriptionListDetails>
        </DescriptionListSet>
        <DescriptionListSet>
          <DescriptionListTerm>C</DescriptionListTerm>
          <DescriptionListDetails>3</DescriptionListDetails>
          <DescriptionListDetails>Three</DescriptionListDetails>
        </DescriptionListSet>
      </DescriptionList>
    </Theme.Provider>,
  );
  const terms = screen.getAllByRole('term');
  const details = screen.getAllByRole('definition');

  it('should render as terms and definitions', () => {
    expect(terms.length).toBe(3);
    expect(details.length).toBe(4);
  });

  describe('DescriptionListTerm', () => {
    it('should apply the correct styling', () => {
      expect(terms[0]).toHaveStyleRule(FONT_WEIGHT, '600');
      expect(terms[0]).toHaveStyleRule(MARGIN, '0');
      expect(terms[0]).toHaveStyleRule(COLOR, 'rgb(18, 28, 45)');
      expect(terms[0]).toHaveStyleRule(FONT_SIZE, '0.875rem');
      expect(terms[0]).toHaveStyleRule(LINE_HEIGHT, '1.25rem');
    });
  });

  describe('DescriptionListDetails', () => {
    it('should apply the correct styling', () => {
      expect(details[0]).toHaveStyleRule(MARGIN, '0');
      expect(details[0]).toHaveStyleRule(FONT_WEIGHT, '400');
      expect(details[0]).toHaveStyleRule(COLOR, 'rgb(18, 28, 45)');
      expect(details[0]).toHaveStyleRule(FONT_SIZE, '0.875rem');
      expect(details[0]).toHaveStyleRule(LINE_HEIGHT, '1.25rem');
    });
  });
});

describe('Customization', () => {
  it('should set data paste element attribute', () => {
    render(
      <Theme.Provider theme="default">
        <DescriptionList>
          <DescriptionListSet>
            <DescriptionListTerm>A</DescriptionListTerm>
            <DescriptionListDetails>1</DescriptionListDetails>
          </DescriptionListSet>
        </DescriptionList>
      </Theme.Provider>,
    );
    expect(screen.getByText('A').closest('dl')?.dataset.pasteElement).toBe('DESCRIPTION_LIST');
    expect(screen.getByText('A').closest('div')?.dataset.pasteElement).toBe('DESCRIPTION_LIST_SET');
    expect(screen.getByRole('term').dataset.pasteElement).toBe('DESCRIPTION_LIST_TERM');
    expect(screen.getByRole('definition').dataset.pasteElement).toBe('DESCRIPTION_LIST_DETAILS');
  });

  it('should set custom data paste element attribute', () => {
    render(
      <Theme.Provider theme="default">
        <DescriptionList element="FAZ">
          <DescriptionListSet element="BAZ">
            <DescriptionListTerm element="FOO">A</DescriptionListTerm>
            <DescriptionListDetails element="BAR">1</DescriptionListDetails>
          </DescriptionListSet>
        </DescriptionList>
      </Theme.Provider>,
    );
    expect(screen.getByText('A').closest('dl')?.dataset.pasteElement).toBe('FAZ');
    expect(screen.getByText('A').closest('div')?.dataset.pasteElement).toBe('BAZ');
    expect(screen.getByRole('term').dataset.pasteElement).toBe('FOO');
    expect(screen.getByRole('definition').dataset.pasteElement).toBe('BAR');
  });

  it('should add custom styles', () => {
    render(
      <CustomizationProvider
        baseTheme="default"
        theme={TestTheme}
        elements={{
          DESCRIPTION_LIST: { color: 'colorTextDecorative40' },
          DESCRIPTION_LIST_SET: { backgroundColor: 'colorBackgroundDecorative30Weakest' },
          DESCRIPTION_LIST_TERM: { fontWeight: 'fontWeightBold' },
          DESCRIPTION_LIST_DETAILS: { marginLeft: 'space10' },
        }}
      >
        <DescriptionList>
          <DescriptionListSet>
            <DescriptionListTerm>A</DescriptionListTerm>
            <DescriptionListDetails>1</DescriptionListDetails>
          </DescriptionListSet>
        </DescriptionList>
      </CustomizationProvider>,
    );
    expect(screen.getByText('A').closest('dl')).toHaveStyleRule(COLOR, 'rgb(109, 46, 209)');
    expect(screen.getByText('A').closest('div')).toHaveStyleRule(BACKGROUND_COLOR, 'rgb(237, 253, 243)');
    expect(screen.getByRole('term')).toHaveStyleRule(FONT_WEIGHT, '700');
    expect(screen.getByRole('definition')).toHaveStyleRule(MARGIN_LEFT, '0.125rem');
  });

  it('should add custom styles with a custom data paste element attribute', () => {
    render(
      <CustomizationProvider
        baseTheme="default"
        theme={TestTheme}
        elements={{
          FAZ: { color: 'colorTextDecorative40' },
          BAZ: { backgroundColor: 'colorBackgroundDecorative30Weakest' },
          FOO: { fontWeight: 'fontWeightBold' },
          BAR: { marginLeft: 'space10' },
        }}
      >
        <DescriptionList element="FAZ">
          <DescriptionListSet element="BAZ">
            <DescriptionListTerm element="FOO">A</DescriptionListTerm>
            <DescriptionListDetails element="BAR">1</DescriptionListDetails>
          </DescriptionListSet>
        </DescriptionList>
      </CustomizationProvider>,
    );
    expect(screen.getByText('A').closest('dl')).toHaveStyleRule(COLOR, 'rgb(109, 46, 209)');
    expect(screen.getByText('A').closest('div')).toHaveStyleRule(BACKGROUND_COLOR, 'rgb(237, 253, 243)');
    expect(screen.getByRole('term')).toHaveStyleRule(FONT_WEIGHT, '700');
    expect(screen.getByRole('definition')).toHaveStyleRule(MARGIN_LEFT, '0.125rem');
  });
});
