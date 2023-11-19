import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CustomizationProvider } from "@twilio-paste/customization";
import { Theme } from "@twilio-paste/theme";
import * as React from "react";

import { Disclosure, DisclosureContent, DisclosureHeading, useDisclosureState } from "../src";
import type { DisclosureHeadingProps, DisclosureProps } from "../src";

const MockDisclosure: React.FC<
  React.PropsWithChildren<{
    visible?: DisclosureProps["visible"];
    disabled?: DisclosureHeadingProps["disabled"];
    focusable?: DisclosureHeadingProps["focusable"];
  }>
> = ({ visible, disabled, focusable }) => {
  return (
    <Theme.Provider theme="default">
      <Disclosure baseId="disclosure" visible={visible}>
        <DisclosureHeading as="h1" variant="heading10" disabled={disabled} focusable={focusable}>
          Clickable heading
        </DisclosureHeading>
        <DisclosureContent data-testid="disclosure">Disclosure content</DisclosureContent>
      </Disclosure>
    </Theme.Provider>
  );
};

const MockDefaultElementDisclosure = (): JSX.Element => {
  return (
    <Disclosure data-testid="disclosure">
      <DisclosureHeading as="h1" data-testid="disclosure-heading" variant="heading10">
        Clickable heading
      </DisclosureHeading>
      <DisclosureContent data-testid="disclosure-content">Disclosure content</DisclosureContent>
    </Disclosure>
  );
};

const MockCustomElementDisclosure = (): JSX.Element => {
  return (
    <Disclosure element="MY_DISCLOSURE" data-testid="disclosure" visible>
      <DisclosureHeading element="MY_DISCLOSURE_HEADING" as="h2" variant="heading20" data-testid="disclosure-heading">
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam.
      </DisclosureHeading>
      <DisclosureContent element="MY_DISCLOSURE_CONTENT" data-testid="disclosure-content">
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus
        commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a
        pharetra augue.
      </DisclosureContent>
    </Disclosure>
  );
};

const StateHookMock = (): JSX.Element => {
  const disclosure = useDisclosureState();
  return (
    <Theme.Provider theme="default">
      <button
        onClick={() => {
          disclosure.toggle();
        }}
        type="button"
        data-testid="external-toggle"
      >
        Toggle disclosure
      </button>
      <Disclosure variant="contained" state={disclosure}>
        <DisclosureHeading as="h2" variant="heading20" data-testid="disclosure-button">
          Clickable heading
        </DisclosureHeading>
        <DisclosureContent data-testid="disclosure-content">Disclosure content</DisclosureContent>
      </Disclosure>
    </Theme.Provider>
  );
};

describe("Disclosure", () => {
  describe("Render", () => {
    it("should render a disclosure button with aria attributes", () => {
      render(<MockDisclosure />);
      const renderedDisclosureButton = screen.getByRole("button");
      expect(renderedDisclosureButton.getAttribute("aria-expanded")).toEqual("false");
      expect(renderedDisclosureButton.getAttribute("aria-controls")).toEqual("disclosure");
      expect(renderedDisclosureButton.getAttribute("tabindex")).toEqual("0");
      expect(screen.getByTestId("disclosure").id).toEqual("disclosure");
    });
    it("should render a disclosure open", async () => {
      await waitFor(() => {
        render(<MockDisclosure visible />);
      });
      const renderedDisclosureButton = screen.getByRole("button");
      expect(renderedDisclosureButton.getAttribute("aria-expanded")).toEqual("true");
    });
    it("should update attributes when clicked", async () => {
      render(<MockDisclosure />);
      const renderedDisclosureButton = screen.getByRole("button");
      userEvent.click(renderedDisclosureButton);
      expect(renderedDisclosureButton.getAttribute("aria-expanded")).toEqual("true");
    });
    it("should render a disabled disclosure", () => {
      render(<MockDisclosure disabled />);
      const renderedDisclosureButton = screen.getByRole("button");
      expect(renderedDisclosureButton.getAttribute("aria-disabled")).toEqual("true");
      expect(renderedDisclosureButton.getAttribute("tabindex")).toBeNull();
    });
    it("should render a disabled but focusable disclosure", () => {
      render(<MockDisclosure disabled focusable />);
      const renderedDisclosureButton = screen.getByRole("button");
      expect(renderedDisclosureButton.getAttribute("aria-disabled")).toEqual("true");
      expect(renderedDisclosureButton.getAttribute("tabindex")).toEqual("0");
    });
    it("should render a disclosure open and update attributes when clicked using a state hook", async () => {
      render(<StateHookMock />);
      const toggleButton = screen.getByTestId("external-toggle");
      const disclosureButton = screen.getByTestId("disclosure-button");
      const disclosureContent = screen.getByTestId("disclosure-content");
      expect(disclosureButton.getAttribute("aria-expanded")).toEqual("false");
      expect(disclosureContent).not.toBeVisible();
      userEvent.click(toggleButton);
      expect(disclosureButton.getAttribute("aria-expanded")).toEqual("true");
      waitFor(() => {
        expect(disclosureContent).toBeVisible();
      });
    });
  });

  describe("Customization", () => {
    it("should set an element data attribute for Disclosure components", () => {
      render(
        <Theme.Provider theme="default">
          <MockDefaultElementDisclosure />
        </Theme.Provider>,
      );

      const renderedDisclosureHeading = screen.getByTestId("disclosure-heading");
      const renderedDisclosure = screen.getByTestId("disclosure");
      const renderedDisclosureContent = screen.getByTestId("disclosure-content");

      expect(renderedDisclosure.getAttribute("data-paste-element")).toEqual("DISCLOSURE");
      expect(renderedDisclosureHeading.getAttribute("data-paste-element")).toEqual("DISCLOSURE_HEADING");
      expect(renderedDisclosureContent.getAttribute("data-paste-element")).toEqual("DISCLOSURE_CONTENT");
    });

    it("should set a custom element data attribute for custom named Disclosure components", () => {
      render(
        <Theme.Provider theme="default">
          <MockCustomElementDisclosure />
        </Theme.Provider>,
      );

      const renderedDisclosureHeading = screen.getByTestId("disclosure-heading");
      const renderedDisclosure = screen.getByTestId("disclosure");
      const renderedDisclosureContent = screen.getByTestId("disclosure-content");

      expect(renderedDisclosure.getAttribute("data-paste-element")).toEqual("MY_DISCLOSURE");
      expect(renderedDisclosureHeading.getAttribute("data-paste-element")).toEqual("MY_DISCLOSURE_HEADING");
      expect(renderedDisclosureContent.getAttribute("data-paste-element")).toEqual("MY_DISCLOSURE_CONTENT");
    });

    it("should add custom styles to Disclosure components", () => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{
            DISCLOSURE: { padding: "space100" },
            DISCLOSURE_CONTENT: { color: "colorTextErrorStrong" },
            DISCLOSURE_HEADING: { color: "colorTextWeakest", backgroundColor: "colorBackgroundDestructiveStrong" },
            DISCLOSURE_HEADING_ICON: { color: "colorTextIconError" },
          }}
        >
          <MockDefaultElementDisclosure />
        </CustomizationProvider>,
      );

      const renderedDisclosureHeading = screen.getByTestId("disclosure-heading");
      const renderedDisclosureHeadingIcon = renderedDisclosureHeading.firstChild;
      const renderedDisclosure = screen.getByTestId("disclosure");
      const renderedDisclosureContent = screen.getByTestId("disclosure-content");

      expect(renderedDisclosure).toHaveStyleRule("padding", "2.25rem");
      expect(renderedDisclosureHeading).toHaveStyleRule("color", "rgb(255, 255, 255)");
      expect(renderedDisclosureHeading).toHaveStyleRule("background-color", "rgb(117, 12, 12)");
      expect(renderedDisclosureHeadingIcon).toHaveStyleRule("color", "rgb(214, 31, 31)");
      expect(renderedDisclosureContent).toHaveStyleRule("color", "rgb(173, 17, 17)");
    });

    it("should add custom styles to custom named Disclosure components", () => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{
            MY_DISCLOSURE: { padding: "space100" },
            MY_DISCLOSURE_CONTENT: { color: "colorTextErrorStrong" },
            MY_DISCLOSURE_HEADING: { color: "colorTextWeakest", backgroundColor: "colorBackgroundDestructiveStrong" },
            MY_DISCLOSURE_HEADING_ICON: { color: "colorTextIconError" },
          }}
        >
          <MockCustomElementDisclosure />
        </CustomizationProvider>,
      );
      const renderedDisclosureHeading = screen.getByTestId("disclosure-heading");
      const renderedDisclosureHeadingIcon = renderedDisclosureHeading.firstChild;
      const renderedDisclosure = screen.getByTestId("disclosure");
      const renderedDisclosureContent = screen.getByTestId("disclosure-content");

      expect(renderedDisclosure).toHaveStyleRule("padding", "2.25rem");
      expect(renderedDisclosureHeading).toHaveStyleRule("color", "rgb(255, 255, 255)");
      expect(renderedDisclosureHeading).toHaveStyleRule("background-color", "rgb(117, 12, 12)");
      expect(renderedDisclosureHeadingIcon).toHaveStyleRule("color", "rgb(214, 31, 31)");
      expect(renderedDisclosureContent).toHaveStyleRule("color", "rgb(173, 17, 17)");
    });
  });
});
