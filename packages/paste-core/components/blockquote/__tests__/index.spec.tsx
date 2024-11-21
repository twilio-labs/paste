import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import * as React from "react";

import { Callout, CalloutHeading, CalloutList, CalloutListItem, CalloutText } from "../src";

describe("Callout", () => {
  it("should render", () => {
    render(
      <Callout variant="neutral" data-testid="callout">
        <CalloutText>This is some text.</CalloutText>
      </Callout>,
    );

    const callout = screen.getByTestId("callout");
    expect(callout).not.toHaveStyleRule("margin-top");

    const iconHiddenText = screen.getByText("(information)");
    expect(iconHiddenText).toBeDefined();

    const text = screen.getByText("This is some text.");
    expect(text.nodeName).toBe("P");
  });
});

describe("CalloutHeading", () => {
  it("should render an h2", () => {
    render(<CalloutHeading as="h2">Heads up!</CalloutHeading>);

    const heading = screen.getByRole("heading");
    expect(heading.nodeName).toBe("H2");
  });

  it("should render an h3", () => {
    render(<CalloutHeading as="h3">Heads up!</CalloutHeading>);

    const heading = screen.getByRole("heading");
    expect(heading.nodeName).toBe("H3");
  });
});

describe("CalloutList", () => {
  it("should render an unordered list", () => {
    render(
      <CalloutList as="ul">
        <CalloutListItem>Item one</CalloutListItem>
      </CalloutList>,
    );

    const list = screen.getByRole("list");
    expect(list.nodeName).toBe("UL");

    const listItem = screen.getByRole("listitem");
    expect(listItem).toBeDefined();
  });

  it("should render an ordered list", () => {
    render(
      <CalloutList as="ol">
        <CalloutListItem>Item one</CalloutListItem>
      </CalloutList>,
    );

    const list = screen.getByRole("list");
    expect(list.nodeName).toBe("OL");

    const listItem = screen.getByRole("listitem");
    expect(listItem).toBeDefined();
  });
});

describe("i18n", () => {
  it("should have default error variant icon text", () => {
    render(
      <Callout data-testid="callout-i18n" variant="error">
        This is a callout
      </Callout>,
    );
    const callout = screen.getByTestId("callout-i18n");
    const icon = callout.querySelector('[data-paste-element="CALLOUT_ICON"]');
    expect(icon?.textContent).toEqual("(error)");
  });

  it("should have default neutral variant icon text", () => {
    render(
      <Callout data-testid="callout-i18n" variant="neutral">
        This is a callout
      </Callout>,
    );
    const callout = screen.getByTestId("callout-i18n");
    const icon = callout.querySelector('[data-paste-element="CALLOUT_ICON"]');
    expect(icon?.textContent).toEqual("(information)");
  });

  it("should have default warning variant icon text", () => {
    render(
      <Callout data-testid="callout-i18n" variant="warning">
        This is a callout
      </Callout>,
    );
    const callout = screen.getByTestId("callout-i18n");
    const icon = callout.querySelector('[data-paste-element="CALLOUT_ICON"]');
    expect(icon?.textContent).toEqual("(warning)");
  });

  it("should have default success variant icon text", () => {
    render(
      <Callout data-testid="callout-i18n" variant="success">
        This is a callout
      </Callout>,
    );
    const callout = screen.getByTestId("callout-i18n");
    const icon = callout.querySelector('[data-paste-element="CALLOUT_ICON"]');
    expect(icon?.textContent).toEqual("(success)");
  });

  it("should have default new variant icon text", () => {
    render(
      <Callout data-testid="callout-i18n" variant="new">
        This is a callout
      </Callout>,
    );
    const callout = screen.getByTestId("callout-i18n");
    const icon = callout.querySelector('[data-paste-element="CALLOUT_ICON"]');
    expect(icon?.textContent).toEqual("(new)");
  });

  it("should use the i18nLabel for error variant icon text", () => {
    render(
      <Callout data-testid="callout-i18n" variant="error" i18nLabel="(erreur)">
        This is a callout
      </Callout>,
    );
    const callout = screen.getByTestId("callout-i18n");
    const icon = callout.querySelector('[data-paste-element="CALLOUT_ICON"]');
    expect(icon?.textContent).toEqual("(erreur)");
  });

  it("should use the i18nLabel for neutral variant icon text", () => {
    render(
      <Callout data-testid="callout-i18n" variant="neutral" i18nLabel="(information)">
        This is a callout
      </Callout>,
    );
    const callout = screen.getByTestId("callout-i18n");
    const icon = callout.querySelector('[data-paste-element="CALLOUT_ICON"]');
    expect(icon?.textContent).toEqual("(information)");
  });

  it("should use the i18nLabel for warning variant icon text", () => {
    render(
      <Callout data-testid="callout-i18n" variant="warning" i18nLabel="(avertissement)">
        This is a callout
      </Callout>,
    );
    const callout = screen.getByTestId("callout-i18n");
    const icon = callout.querySelector('[data-paste-element="CALLOUT_ICON"]');
    expect(icon?.textContent).toEqual("(avertissement)");
  });

  it("should use the i18nLabel for success variant icon text", () => {
    render(
      <Callout data-testid="callout-i18n" variant="success" i18nLabel="(succès)">
        This is a callout
      </Callout>,
    );
    const callout = screen.getByTestId("callout-i18n");
    const icon = callout.querySelector('[data-paste-element="CALLOUT_ICON"]');
    expect(icon?.textContent).toEqual("(succès)");
  });

  it("should use the i18nLabel for new variant icon text", () => {
    render(
      <Callout data-testid="callout-i18n" variant="new" i18nLabel="(nouveau)">
        This is a callout
      </Callout>,
    );
    const callout = screen.getByTestId("callout-i18n");
    const icon = callout.querySelector('[data-paste-element="CALLOUT_ICON"]');
    expect(icon?.textContent).toEqual("(nouveau)");
  });
});

describe("Callout dismiss", () => {
  it("should not render close button if no dismiss funciton passed", () => {
    render(
      <Callout variant="neutral" data-testid="callout">
        <CalloutText>This is some text.</CalloutText>
      </Callout>,
    );

    const callout = screen.getByTestId("callout");

    const text = screen.getByText("This is some text.");
    expect(text).toBeTruthy();

    const dismissButton = callout.querySelector('[data-paste-element="CALLOUT_DISMISS_BUTTON"]');
    expect(dismissButton).toBeNull();
  });

  it("should render close button if dismiss function passed", async () => {
    const closeSpy = jest.fn();

    render(
      <Callout variant="neutral" data-testid="callout" onDismiss={closeSpy}>
        <CalloutText>This is some text.</CalloutText>
      </Callout>,
    );

    const callout = screen.getByTestId("callout");

    const text = screen.getByText("This is some text.");
    expect(text).toBeTruthy();

    const dismissButton = callout.querySelector('[data-paste-element="CALLOUT_DISMISS_BUTTON"]');
    expect(dismissButton).toBeTruthy();

    expect(closeSpy).not.toHaveBeenCalled();

    await waitFor(() => {
      fireEvent.click(dismissButton as HTMLElement);
    });

    expect(closeSpy).toHaveBeenCalled();
  });
});
