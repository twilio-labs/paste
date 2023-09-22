import { render, screen } from '@testing-library/react';
import { CustomizationProvider } from '@twilio-paste/customization';
import * as React from 'react';

import { TBody, TFoot, THead, Table, Td, Th, Tr } from '../src';

describe('Table', () => {
  it('should render a default table', (): void => {
    render(
      <Table data-testid="mockDefaultTable">
        <TBody>
          <Tr>
            <Td>Column 1</Td>
            <Td>Column 2</Td>
          </Tr>
        </TBody>
      </Table>,
    );
    const renderedTable = screen.getByTestId('mockDefaultTable');
    expect(renderedTable).toHaveStyleRule('border-width', 'borderWidth10');
  });
  it('should render a borderless table', (): void => {
    render(
      <Table variant="borderless" data-testid="mockBorderlessTable">
        <TBody>
          <Tr>
            <Td>Column 1</Td>
            <Td>Column 2</Td>
          </Tr>
        </TBody>
      </Table>,
    );
    const renderedTable = screen.getByTestId('mockBorderlessTable');
    expect(renderedTable).toHaveStyleRule('border-width', 'borderWidth0');
  });
  it('should render a striped table', (): void => {
    render(
      <Table data-testid="mockStripedTable" striped>
        <TBody>
          <Tr>
            <Td>Column 1</Td>
            <Td>Column 2</Td>
          </Tr>
          <Tr>
            <Td>Column 3</Td>
            <Td>Column 4</Td>
          </Tr>
        </TBody>
      </Table>,
    );
    const renderedTable = screen.getByTestId('mockStripedTable').querySelector('tr:nth-of-type(even)');
    expect(renderedTable).toHaveStyleRule('background-color', 'colorBackgroundRowStriped', {
      target: ':nth-of-type(even)',
    });
  });
  it('should render auto tableLayout style', (): void => {
    render(
      <Table data-testid="mockAutoTable">
        <TBody>
          <Tr>
            <Td>Column 1</Td>
            <Td>Column 2</Td>
          </Tr>
        </TBody>
      </Table>,
    );
    const renderedTable = screen.getByTestId('mockAutoTable');
    expect(renderedTable).toHaveStyleRule('table-layout', 'auto');
  });

  it('should render fixed tableLayout style', (): void => {
    render(
      <Table tableLayout="fixed" data-testid="mockFixedTable">
        <TBody>
          <Tr>
            <Td>Column 1</Td>
            <Td>Column 2</Td>
          </Tr>
        </TBody>
      </Table>,
    );
    const renderedTable = screen.getByTestId('mockFixedTable');
    expect(renderedTable).toHaveStyleRule('table-layout', 'fixed');
  });

  it('should render Tr top verticalAlign styles', (): void => {
    render(
      <Table>
        <TBody>
          <Tr verticalAlign="top" data-testid="mockTr">
            <Td>Column 1</Td>
          </Tr>
        </TBody>
      </Table>,
    );
    const renderedTr = screen.getByTestId('mockTr');
    expect(renderedTr).toHaveStyleRule('vertical-align', 'top');
  });

  it('should render Tr middle verticalAlign styles', (): void => {
    render(
      <Table>
        <TBody>
          <Tr data-testid="mockTr">
            <Td>Column 1</Td>
          </Tr>
        </TBody>
      </Table>,
    );
    const renderedTr = screen.getByTestId('mockTr');
    expect(renderedTr).toHaveStyleRule('vertical-align', 'middle');
  });

  it('should render Tr bottom verticalAlign styles', (): void => {
    render(
      <Table>
        <TBody>
          <Tr verticalAlign="bottom" data-testid="mockTr">
            <Td>Column 1</Td>
          </Tr>
        </TBody>
      </Table>,
    );
    const renderedTr = screen.getByTestId('mockTr');
    expect(renderedTr).toHaveStyleRule('vertical-align', 'bottom');
  });

  it('should render thead with sticky header css if prop is passed', (): void => {
    render(
      <Table>
        <THead stickyHeader={true} data-testid="mockTHead">
          <Tr>
            <Th>Column 1</Th>
          </Tr>
        </THead>
      </Table>,
    );
    const renderedTh = screen.getByTestId('mockTHead');
    expect(renderedTh).toHaveStyleRule('position', 'sticky');
    expect(renderedTh).toHaveStyleRule('top', '-1px');
    expect(renderedTh).toHaveStyleRule('z-index', 'zIndex10');
  });

  it('should render thead with sticky header css and custom top if props are passed', (): void => {
    render(
      <Table>
        <THead stickyHeader={true} top="20px" data-testid="mockTHead">
          <Tr>
            <Th>Column 1</Th>
          </Tr>
        </THead>
      </Table>,
    );
    const renderedTh = screen.getByTestId('mockTHead');
    expect(renderedTh).toHaveStyleRule('position', 'sticky');
    expect(renderedTh).toHaveStyleRule('top', '20px');
    expect(renderedTh).toHaveStyleRule('z-index', 'zIndex10');
  });

  it('should render Th width and left textAlign styles', (): void => {
    render(
      <Table>
        <THead>
          <Tr>
            <Th width="size50" data-testid="mockTh">
              Column 1
            </Th>
          </Tr>
        </THead>
      </Table>,
    );
    const renderedTh = screen.getByTestId('mockTh');
    expect(renderedTh).toHaveStyleRule('width', 'size50');
    expect(renderedTh).toHaveStyleRule('text-align', 'left');
  });

  it('should render Th center textAlign styles', (): void => {
    render(
      <Table>
        <THead>
          <Tr>
            <Th textAlign="center" data-testid="mockTh">
              Column 1
            </Th>
          </Tr>
        </THead>
      </Table>,
    );
    const renderedTh = screen.getByTestId('mockTh');
    expect(renderedTh).toHaveStyleRule('text-align', 'center');
  });

  it('should render Th right textAlign styles', (): void => {
    render(
      <Table>
        <THead>
          <Tr>
            <Th textAlign="right" data-testid="mockTh">
              Column 1
            </Th>
          </Tr>
        </THead>
      </Table>,
    );
    const renderedTh = screen.getByTestId('mockTh');
    expect(renderedTh).toHaveStyleRule('text-align', 'right');
  });

  it('should render Td left textAlign styles', (): void => {
    render(
      <Table>
        <TBody>
          <Tr>
            <Td data-testid="mockTd">Column 1</Td>
          </Tr>
        </TBody>
      </Table>,
    );
    const renderedTd = screen.getByTestId('mockTd');
    expect(renderedTd).toHaveStyleRule('text-align', 'left');
  });

  it('should render Td center textAlign styles', (): void => {
    render(
      <Table>
        <TBody>
          <Tr>
            <Td textAlign="center" data-testid="mockTd">
              Column 1
            </Td>
          </Tr>
        </TBody>
      </Table>,
    );
    const renderedTd = screen.getByTestId('mockTd');
    expect(renderedTd).toHaveStyleRule('text-align', 'center');
  });

  it('should render Td right textAlign styles', (): void => {
    render(
      <Table>
        <TBody>
          <Tr>
            <Td textAlign="right" data-testid="mockTd">
              Column 1
            </Td>
          </Tr>
        </TBody>
      </Table>,
    );
    const renderedTd = screen.getByTestId('mockTd');
    expect(renderedTd).toHaveStyleRule('text-align', 'right');
  });

  it('should render responsive table styles', (): void => {
    const { container } = render(
      <Table scrollHorizontally>
        <TBody>
          <Tr verticalAlign="top" data-testid="mockTr">
            <Td>Column 1</Td>
          </Tr>
        </TBody>
      </Table>,
    );
    const renderWrapper = container.querySelector('[data-paste-element="TABLE_WRAPPER"]');
    expect(renderWrapper).toHaveStyleRule('overflow-x', 'auto');
  });

  it('should render no wrap table styles', (): void => {
    const { container } = render(
      <Table noWrap>
        <TBody>
          <Tr verticalAlign="top" data-testid="mockTr">
            <Td>Column 1</Td>
          </Tr>
        </TBody>
      </Table>,
    );
    const renderWrapper = container.querySelector('[data-paste-element="TABLE_WRAPPER"]');
    expect(renderWrapper).toHaveStyleRule('white-space', 'nowrap');
  });

  it('should render actionable table styles', (): void => {
    const { container } = render(
      <Table isActionable>
        <TBody>
          <Tr verticalAlign="top" data-testid="mockTr">
            <Td>Column 1</Td>
          </Tr>
        </TBody>
      </Table>,
    );
    const renderWrapper = container.querySelector('[data-paste-element="TABLE_WRAPPER"]');
    expect(renderWrapper).toHaveStyleRule('box-shadow', 'shadowFocus');
  });

  describe('HTML Attribute', () => {
    it('should set an element data attribute for Table (default)', () => {
      render(
        <Table data-testid="table">
          <THead data-testid="table-thead">
            <Tr data-testid="table-tr">
              <Th data-testid="table-th">Column 1</Th>
              <Th>Column 2</Th>
            </Tr>
          </THead>
          <TBody data-testid="table-tbody">
            <Tr>
              <Td data-testid="table-td">1</Td>
              <Td>Empty</Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>Empty</Td>
            </Tr>
          </TBody>
          <TFoot data-testid="table-tfoot">
            <Tr>
              <Td>100</Td>
              <Td>end</Td>
            </Tr>
          </TFoot>
        </Table>,
      );

      expect(screen.getByTestId('table').getAttribute('data-paste-element')).toEqual('TABLE');
      expect(screen.getByTestId('table-thead').getAttribute('data-paste-element')).toEqual('THEAD');
      expect(screen.getByTestId('table-tr').getAttribute('data-paste-element')).toEqual('TR');
      expect(screen.getByTestId('table-th').getAttribute('data-paste-element')).toEqual('TH');
      expect(screen.getByTestId('table-tbody').getAttribute('data-paste-element')).toEqual('TBODY');
      expect(screen.getByTestId('table-td').getAttribute('data-paste-element')).toEqual('TD');
      expect(screen.getByTestId('table-tfoot').getAttribute('data-paste-element')).toEqual('TFOOT');
    });

    it('should set an element data attribute for Table', () => {
      render(
        <Table element="dog" data-testid="table">
          <THead element="cat" data-testid="table-thead">
            <Tr element="bear" data-testid="table-tr">
              <Th element="wolf" data-testid="table-th">
                Column 1
              </Th>
              <Th element="hamster" data-testid="table-th-1">
                Column 2
              </Th>
            </Tr>
          </THead>
          <TBody element="chinchilla" data-testid="table-tbody">
            <Tr>
              <Td element="horse" data-testid="table-td">
                1
              </Td>
              <Td>Empty</Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>Empty</Td>
            </Tr>
          </TBody>
          <TFoot element="goldfish" data-testid="table-tfoot">
            <Tr>
              <Td>100</Td>
              <Td>end</Td>
            </Tr>
          </TFoot>
        </Table>,
      );

      expect(screen.getByTestId('table').getAttribute('data-paste-element')).toEqual('dog');
      expect(screen.getByTestId('table-thead').getAttribute('data-paste-element')).toEqual('cat');
      expect(screen.getByTestId('table-tr').getAttribute('data-paste-element')).toEqual('bear');
      expect(screen.getByTestId('table-th').getAttribute('data-paste-element')).toEqual('wolf');
      expect(screen.getByTestId('table-th-1').getAttribute('data-paste-element')).toEqual('hamster');
      expect(screen.getByTestId('table-tbody').getAttribute('data-paste-element')).toEqual('chinchilla');
      expect(screen.getByTestId('table-td').getAttribute('data-paste-element')).toEqual('horse');
      expect(screen.getByTestId('table-tfoot').getAttribute('data-paste-element')).toEqual('goldfish');
    });
  });

  describe('Customization', () => {
    it('should add custom styles to Table', () => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{
            TABLE: { borderColor: 'colorBorderDestructive', fontWeight: 'fontWeightBold' },
            TH: { borderStyle: 'dotted', fontWeight: 'fontWeightMedium' },
            TR: { borderStyle: 'dashed', fontWeight: 'fontWeightLight' },
            THEAD: { borderColor: 'colorBorderDestructiveStrong', fontWeight: 'fontWeightNormal' },
            TBODY: { borderColor: 'colorBorderDestructiveWeak', fontWeight: 'inherit' },
            TFOOT: { borderColor: 'colorBorderStrong', fontWeight: 'inherit' },
            TD: { borderColor: 'colorBorderWeak', fontWeight: 'fontWeightSemibold' },
          }}
        >
          <Table data-testid="table">
            <THead data-testid="table-thead">
              <Tr data-testid="table-tr">
                <Th data-testid="table-th">Column 1</Th>
                <Th>Column 2</Th>
              </Tr>
            </THead>
            <TBody data-testid="table-tbody">
              <Tr>
                <Td data-testid="table-td">1</Td>
                <Td>Empty</Td>
              </Tr>
              <Tr>
                <Td>2</Td>
                <Td>Empty</Td>
              </Tr>
            </TBody>
            <TFoot data-testid="table-tfoot">
              <Tr>
                <Td>100</Td>
                <Td>end</Td>
              </Tr>
            </TFoot>
          </Table>
        </CustomizationProvider>,
      );

      const table = screen.getByTestId('table');
      const tHead = screen.getByTestId('table-thead');
      const tr = screen.getByTestId('table-tr');
      const th = screen.getByTestId('table-th');
      const tBody = screen.getByTestId('table-tbody');
      const td = screen.getByTestId('table-td');
      const tFoot = screen.getByTestId('table-tfoot');

      expect(table).toHaveStyleRule('font-weight', '700');
      expect(table).toHaveStyleRule('border-color', 'rgb(214, 31, 31)');

      expect(tr).toHaveStyleRule('font-weight', '400');
      expect(tr).toHaveStyleRule('border-style', 'dashed');

      expect(th).toHaveStyleRule('font-weight', '500');
      expect(th).toHaveStyleRule('border-style', 'dotted');

      expect(td).toHaveStyleRule('border-color', 'rgb(202, 205, 216)');
      expect(td).toHaveStyleRule('font-weight', '600');

      expect(tBody).toHaveStyleRule('border-color', 'rgb(245, 138, 138)');
      expect(tBody).toHaveStyleRule('font-weight', 'inherit');

      expect(tFoot).toHaveStyleRule('border-color', 'rgb(96, 107, 133)');
      expect(tFoot).toHaveStyleRule('font-weight', 'inherit');

      expect(tHead).toHaveStyleRule('border-color', 'rgb(117, 12, 12)');
      expect(tHead).toHaveStyleRule('font-weight', '400');
    });

    it('should add custom styles to Table with a custom element data attribute', () => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{
            dog: { borderColor: 'colorBorderDestructive', fontWeight: 'fontWeightBold' },
            cat: { borderStyle: 'dotted', fontWeight: 'fontWeightMedium' },
            bear: { borderStyle: 'dashed', fontWeight: 'fontWeightLight' },
            wolf: { borderColor: 'colorBorderDestructiveStrong', fontWeight: 'inherit' },
            hamster: { borderColor: 'colorBorderDestructiveWeak', fontWeight: 'inherit' },
            chinchilla: { borderColor: 'colorBorderStrong', fontWeight: 'inherit' },
            horse: { borderColor: 'colorBorderWeak', fontWeight: 'fontWeightSemibold' },
            goldfish: { borderColor: 'colorBorderDestructiveStrong', fontWeight: 'inherit' },
          }}
        >
          <Table element="dog" data-testid="table">
            <THead element="cat" data-testid="table-thead">
              <Tr element="bear" data-testid="table-tr">
                <Th element="wolf" data-testid="table-th">
                  Column 1
                </Th>
                <Th element="hamster" data-testid="table-th-1">
                  Column 2
                </Th>
              </Tr>
            </THead>
            <TBody element="chinchilla" data-testid="table-tbody">
              <Tr>
                <Td element="horse" data-testid="table-td">
                  1
                </Td>
                <Td>Empty</Td>
              </Tr>
              <Tr>
                <Td>2</Td>
                <Td>Empty</Td>
              </Tr>
            </TBody>
            <TFoot element="goldfish" data-testid="table-tfoot">
              <Tr>
                <Td>100</Td>
                <Td>end</Td>
              </Tr>
            </TFoot>
          </Table>
        </CustomizationProvider>,
      );

      const table = screen.getByTestId('table');
      const tHead = screen.getByTestId('table-thead');
      const tr = screen.getByTestId('table-tr');
      const th = screen.getByTestId('table-th');
      const th1 = screen.getByTestId('table-th-1');
      const tBody = screen.getByTestId('table-tbody');
      const td = screen.getByTestId('table-td');
      const tFoot = screen.getByTestId('table-tfoot');

      expect(table).toHaveStyleRule('font-weight', '700');
      expect(table).toHaveStyleRule('border-color', 'rgb(214, 31, 31)');

      expect(tr).toHaveStyleRule('font-weight', '400');
      expect(tr).toHaveStyleRule('border-style', 'dashed');

      expect(th).toHaveStyleRule('font-weight', 'inherit');
      expect(th).toHaveStyleRule('border-color', 'rgb(117, 12, 12)');

      expect(th1).toHaveStyleRule('font-weight', 'inherit');
      expect(th1).toHaveStyleRule('border-color', 'rgb(245, 138, 138)');

      expect(td).toHaveStyleRule('border-color', 'rgb(202, 205, 216)');
      expect(td).toHaveStyleRule('font-weight', '600');

      expect(tBody).toHaveStyleRule('border-color', 'rgb(96, 107, 133)');
      expect(tBody).toHaveStyleRule('font-weight', 'inherit');

      expect(tFoot).toHaveStyleRule('border-color', 'rgb(117, 12, 12)');
      expect(tFoot).toHaveStyleRule('font-weight', 'inherit');

      expect(tHead).toHaveStyleRule('border-style', 'dotted');
      expect(tHead).toHaveStyleRule('font-weight', '500');
    });
  });
});
