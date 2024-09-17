import { render } from "@testing-library/react";
import { CustomizationProvider } from "@twilio-paste/customization";
import * as React from "react";

import {
  ProgressStepComplete,
  ProgressStepCurrent,
  ProgressStepError,
  ProgressStepIncomplete,
  ProgressStepSeparator,
  ProgressSteps,
} from "../src";
import { Anchors, Buttons, Divs } from "../stories/horizontal.stories";
import { WithContent } from "../stories/vertical.stories";

describe("ProgressSteps", () => {
  it("should render divs correctly", () => {
    const { queryAllByText, getAllByRole } = render(<Divs />);
    const [completeIcon, completeLabel] = queryAllByText("Completed");
    const [incompleteIcon, incompleteLabel] = queryAllByText("Incomplete");
    const [errorIcon, errorLabel] = queryAllByText("Error");
    const [currentIcon, currentLabel] = queryAllByText("Current");

    expect(completeIcon).toBeDefined();
    expect(completeLabel).toBeDefined();
    expect(incompleteIcon).toBeDefined();
    expect(incompleteLabel).toBeDefined();
    expect(errorIcon).toBeDefined();
    expect(errorLabel).toBeDefined();
    expect(currentIcon).toBeDefined();
    expect(currentLabel).toBeDefined();

    expect(completeLabel.parentElement?.tagName).toEqual("DIV");

    // Make sure each step is a listitem
    const items = getAllByRole("listitem");
    expect(items.length).toBe(4);

    // Make sure current step has correct aria attributes
    expect(currentLabel.parentElement?.getAttribute("aria-current")).toEqual("step");
  });

  it("should render buttons correctly", () => {
    const { getByRole } = render(<Buttons />);
    const signupLabel = getByRole("button", { name: "Completed Sign up" });

    expect(signupLabel?.tagName).toEqual("BUTTON");
    expect(signupLabel?.getAttribute("type")).toEqual("button");
  });

  it("should render anchors correctly", () => {
    const { getByRole } = render(<Anchors />);
    const signupLabel = getByRole("link", { name: "Completed Sign up" });

    expect(signupLabel?.tagName).toEqual("A");
    expect(signupLabel?.getAttribute("href")).toEqual("#");
  });

  it("should render with content correctly", () => {
    const { getByRole } = render(<WithContent />);
    const signupLabel = getByRole("heading", { name: "Snowflake" });

    expect(signupLabel?.tagName).toEqual("H2");
  });

  describe("element naming", () => {
    it("should set all default element names", async () => {
      const { getByRole } = render(<Buttons />);
      const signupLabel = getByRole("button", { name: "Completed Sign up" });
      const validateEmail = getByRole("button", { name: "Error Validate email" });
      const completeProfile = getByRole("button", { name: "Current Complete profile" });
      const addFriends = getByRole("button", { name: "Incomplete Add friends" });
      const wrapper = getByRole("list");

      expect(signupLabel?.dataset.pasteElement).toEqual("PROGRESS_STEP_COMPLETE");
      expect(validateEmail?.dataset.pasteElement).toEqual("PROGRESS_STEP_ERROR");
      expect(completeProfile?.dataset.pasteElement).toEqual("PROGRESS_STEP_CURRENT");
      expect(addFriends?.dataset.pasteElement).toEqual("PROGRESS_STEP_INCOMPLETE");
      expect(wrapper?.dataset.pasteElement).toEqual("PROGRESS_STEPS");
    });
    it("should set default name on progress steps content", async () => {
      expect(
        render(<WithContent />).baseElement.querySelector("[data-paste-element='PROGRESS_STEP_CONTENT']"),
      ).toBeInTheDocument();
    });
  });
  describe("custom element naming", () => {
    it("should set all custom element names", async () => {
      const { getByRole } = render(
        <CustomizationProvider
          disableAnimations
          theme={TestTheme}
          elements={{
            STEPS: {
              padding: "space50",
            },
            STEP_SEPARATOR: {
              borderBottomWidth: "borderWidth40",
              borderRadius: "borderRadiusCircle",
            },
            STEP_COMPLETE: {
              borderWidth: "borderWidth10",
              borderStyle: "solid",
              borderColor: "colorBorderPrimary",
            },
            STEP_CURRENT: {
              borderWidth: "borderWidth10",
              borderStyle: "solid",
              borderColor: "colorBorderPrimary",
            },
            STEP_ERROR: {
              borderWidth: "borderWidth10",
              borderStyle: "solid",
              borderColor: "colorBorderPrimary",
            },
            STEP_INCOMPLETE: {
              borderWidth: "borderWidth10",
              borderStyle: "solid",
              borderColor: "colorBorderPrimary",
            },
          }}
        >
          <ProgressSteps element="STEPS">
            <ProgressStepComplete element="STEP_COMPLETE" as="a" href="#">
              Sign up
            </ProgressStepComplete>
            <ProgressStepSeparator element="STEP_SEPARATOR" />
            <ProgressStepError element="STEP_ERROR" as="button" onClick={() => {}}>
              Validate email
            </ProgressStepError>
            <ProgressStepSeparator element="STEP_SEPARATOR" />
            <ProgressStepCurrent element="STEP_CURRENT" as="button" onClick={() => {}}>
              Complete profile
            </ProgressStepCurrent>
            <ProgressStepSeparator element="STEP_SEPARATOR" />
            <ProgressStepIncomplete element="STEP_INCOMPLETE" as="button" onClick={() => {}}>
              Add friends
            </ProgressStepIncomplete>
            <ProgressStepSeparator element="STEP_SEPARATOR" />
            <ProgressStepIncomplete element="STEP_INCOMPLETE" as="button" onClick={() => {}} disabled>
              Start event
            </ProgressStepIncomplete>
          </ProgressSteps>
        </CustomizationProvider>,
      );
      const signupLabel = getByRole("link", { name: "Completed Sign up" });
      const validateEmail = getByRole("button", { name: "Error Validate email" });
      const completeProfile = getByRole("button", { name: "Current Complete profile" });
      const addFriends = getByRole("button", { name: "Incomplete Add friends" });
      const wrapper = getByRole("list");

      expect(signupLabel?.dataset.pasteElement).toEqual("STEP_COMPLETE");
      expect(validateEmail?.dataset.pasteElement).toEqual("STEP_ERROR");
      expect(completeProfile?.dataset.pasteElement).toEqual("STEP_CURRENT");
      expect(addFriends?.dataset.pasteElement).toEqual("STEP_INCOMPLETE");
      expect(wrapper?.dataset.pasteElement).toEqual("STEPS");

      expect(signupLabel).toHaveStyleRule("border-color", "rgb(2, 99, 224)");
      expect(validateEmail).toHaveStyleRule("border-color", "rgb(2, 99, 224)");
      expect(completeProfile).toHaveStyleRule("border-color", "rgb(2, 99, 224)");
      expect(addFriends).toHaveStyleRule("border-color", "rgb(2, 99, 224)");
      expect(wrapper).toHaveStyleRule("padding", "1rem");
    });
  });
});
