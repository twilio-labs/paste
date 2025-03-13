import { render, screen } from "@testing-library/react";
import { Theme } from "@twilio-paste/theme";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore react import is flagged as unused by tsx but required when running the tests
import * as React from "react";
import type { JSX } from "react";

import { GenericHeader } from "../components/shortcodes/generic-header";

describe("GenericHeader", () => {
  const FullHeader = (): JSX.Element => {
    return (
      <Theme.Provider theme="default">
        <GenericHeader
          name="Alert"
          categoryRoute="/components"
          description="This is an alert component."
          designCommitteeReview={null}
          engineerCommitteeReview={null}
          figmaStatus={null}
          githubUrl="https://google.com"
          packageName="@twilio-paste/alert"
          packageStatus="Alpha"
          storybookUrl="/?path=/story/components-alert--"
          version="1.0.0"
        />
      </Theme.Provider>
    );
  };

  it("should render an h1 tag using the name prop as text", () => {
    render(<FullHeader />);
    const heading = screen.getAllByRole("heading", { level: 1 });
    expect(heading[0].textContent).toEqual("Alert");
  });

  it("should render text using the description prop", () => {
    render(<FullHeader />);
    const description = screen.getByText("This is an alert component.");
    expect(description).toBeDefined();
  });

  it("should render a version number if given", () => {
    render(<FullHeader />);
    const versionText = screen.getByText("Version 1.0.0");
    expect(versionText).toBeDefined();
  });

  it("should render a github link if given", () => {
    render(<FullHeader />);
    const githubLink = screen.getByRole("link", { name: "Github" });
    expect(githubLink.getAttribute("href")).toEqual("https://google.com");
  });

  it("should render a storybook link if given", () => {
    render(<FullHeader />);
    const storybookLink = screen.getByRole("link", { name: "Storybook" });
    expect(storybookLink.getAttribute("href")).toEqual(
      "https://paste-storybook.twilio.design/?path=/story/components-alert--",
    );
  });

  const BasicHeader = (): JSX.Element => {
    return (
      <Theme.Provider theme="default">
        <GenericHeader name="Alert" categoryRoute="/components" />;
      </Theme.Provider>
    );
  };

  it("should not render gitub link, or storybook link if not given", () => {
    render(<BasicHeader />);

    expect(screen.queryByRole("link", { name: "Github" })).toBeNull();
    expect(screen.queryByRole("link", { name: "Storybook" })).toBeNull();
  });
});
