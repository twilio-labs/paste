import { Meta, StoryFn } from "@storybook/react";
import { Button } from "@twilio-paste/button";
import { Heading } from "@twilio-paste/heading";
import { ListItem, UnorderedList } from "@twilio-paste/list";
import { Paragraph } from "@twilio-paste/paragraph";
import { Popover, PopoverArrow, PopoverDisclosure, usePopoverState } from "@twilio-paste/paste-reakit-fork";
import { Stack } from "@twilio-paste/stack";
import { Tooltip } from "@twilio-paste/tooltip";
import Highcharts, { SeriesOptionsType } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsAccessibilityModule from "highcharts/modules/accessibility";
import React, { useEffect } from "react";
import { applyPasteHighchartsModules, usePasteHighchartsTheme } from "../src";
import { BaseChart } from "../src/exploration/BaseChart";
import { ChartContextProvider, useChartContext } from "../src/exploration/ChartContext";
import { lineChartOptions } from "./options/lineChartOptions";
import { createPortal } from "react-dom";
// eslint-disable-next-line import/no-default-export
export default {
  title: "Libraries/data-visualization/exploration",
  parameters: {
    chromatic: { disableSnapshot: true },
    a11y: {
      // no need to a11y check composition of a11y checked components
      disable: true,
    },
  },
} as Meta;

export const Notes: StoryFn = () => {
  const popover = usePopoverState({ placement: "right-start" });
  return (
    <Stack orientation="vertical" spacing="space100">
      <Heading as="h1" variant="heading10">
        Highcharts Accessibility Exploration
      </Heading>
      <Paragraph>
        The purpose of this story is to explore the accessibility features of Highcharts and determine how we can apply
        paste components while still mainitaining accessible features in Hightcharts.
      </Paragraph>
      <Heading as="h2" variant="heading20">
        Notes for Highcharts a11y:
      </Heading>
      <UnorderedList>
        <ListItem>When switching series, reads new series</ListItem>
        <ListItem>
          When switching points, reads point index and x axis then value. 2 (point 2) x 3 (x axis = 3) 8105 (y value)
          Installation [series name]
        </ListItem>
        <ListItem>Switching from series the legend items announce they are used to toggle series</ListItem>
        <ListItem>When first focusing on the chart it will read the title specified in options</ListItem>
        <ListItem>
          When first focusing on the chart it will focus on series or legend items. By navigating up the node it can
          read the meta about that chart including description in the options provided
        </ListItem>
      </UnorderedList>

      <Heading as="h2" variant="heading20">
        Important findings:
      </Heading>
      <UnorderedList>
        <ListItem>The tooltip is not read. Instead the point information is announced</ListItem>
        <ListItem>The tooltips are not focusable </ListItem>
      </UnorderedList>

      <>
        <PopoverDisclosure {...popover}>Open Popover</PopoverDisclosure>
        <Popover {...popover} aria-label="Welcome">
          <PopoverArrow {...popover} />
          Welcome to Reakit!
        </Popover>
      </>
    </Stack>
  );
};

const AdditionalTooltipComp = () => {
  const { activePoint, chart } = useChartContext();

  useEffect(() => {
  }, [activePoint]);

  if (!activePoint || !chart) return null;

  const { x, y } = activePoint.graphic.element.getBoundingClientRect();

  return createPortal(
    <div style={{ width: 200, height: 200, backgroundColor: "red", position: "absolute", left: x, top: y, zIndex: 10 }}>
      <strong>In Portal</strong>
      <br />
      Text to display
      <div id="tooltip-actions" tabIndex={-1}
      onBlur={(e) => {
        if(!e.currentTarget.contains(e.relatedTarget)){
            e.preventDefault();
            e.stopPropagation();
            activePoint.graphic.element.focus();
        }
      }}
      
      >
        <button
          tabIndex={0}
          onClick={(e) => {
            e.stopPropagation();
            alert(activePoint.series.name + "clicked");
          }}
          onBlur={(e) => {
          }}
        >
          View More Details
        </button>
        <button
          tabIndex={0}
          onClick={(e) => {
            e.stopPropagation();
            alert(activePoint.series.name + "clicked");
          }}
          onBlur={(e) => {
          }}
        >
          View More Details
        </button>
      </div>
    </div>,
    document.getElementById("example-chart-container")
  );
};

export const TooltipScreenReaderFuncitonality: StoryFn = () => {
  return (
    <Stack orientation="vertical" spacing="space100">
      <ChartContextProvider chartId="test">
        <BaseChart options={lineChartOptions} key="chart1" />
        <AdditionalTooltipComp />
      </ChartContextProvider>
    </Stack>
  );
};
