import * as React from 'react';
import {matchers} from 'jest-emotion';
import {render, screen} from '@testing-library/react';
import axe from '../../../../../.jest/axe-helper';
import {Table, THead, TBody, TFoot, Td, Tr, Th} from '../src';

expect.extend(matchers);

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
      </Table>
    );
    const renderedTable = screen.getByTestId('mockDefaultTable').parentElement;
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
      </Table>
    );
    const renderedTable = screen.getByTestId('mockBorderlessTable').parentElement;
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
      </Table>
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
      </Table>
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
      </Table>
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
      </Table>
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
      </Table>
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
      </Table>
    );
    const renderedTr = screen.getByTestId('mockTr');
    expect(renderedTr).toHaveStyleRule('vertical-align', 'bottom');
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
      </Table>
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
      </Table>
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
      </Table>
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
      </Table>
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
      </Table>
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
      </Table>
    );
    const renderedTd = screen.getByTestId('mockTd');
    expect(renderedTd).toHaveStyleRule('text-align', 'right');
  });

  describe('Accessibility', () => {
    it('Should have no accessibility violations', async () => {
      const {container} = render(
        <Table>
          <THead>
            <Tr>
              <Th>Column 1</Th>
              <Th>Column 2</Th>
            </Tr>
          </THead>
          <TBody>
            <Tr>
              <Td>1</Td>
              <Td>Empty</Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>Empty</Td>
            </Tr>
          </TBody>
          <TFoot>
            <Tr>
              <Td>100</Td>
              <Td>end</Td>
            </Tr>
          </TFoot>
        </Table>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
