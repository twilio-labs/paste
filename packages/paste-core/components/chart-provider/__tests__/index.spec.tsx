import { render } from "@testing-library/react";
import { BoxProps } from "@twilio-paste/box";
import * as React from "react";

import { ChartProvider } from "../src";

const TestChartProvider: React.FC<React.PropsWithChildren<{ element?: BoxProps["element"] }>> = ({
  element,
  children,
}) => {
  return (
    <ChartProvider highchartsOptions={{}} data-testid="chart-provider" element={element}>
      {children}
    </ChartProvider>
  );
};

describe("ChartProvider", () => {
  it("should render", () => {
    const { getByText, getByTestId } = render(<TestChartProvider>test</TestChartProvider>);
    expect(getByText("test")).toBeDefined();
    expect(getByTestId("chart-provider").getAttribute("data-paste-element")).toEqual("CHART_PROVIDER");
  });

  describe("Customization", () => {
    it("should apply the element prop", () => {
      const { getByTestId } = render(<TestChartProvider element="TEST_ELEMENT" />);
      expect(getByTestId("chart-provider").getAttribute("data-paste-element")).toEqual("TEST_ELEMENT");
    });
  });
});
