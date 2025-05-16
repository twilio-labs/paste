import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CustomizationProvider } from "@twilio-paste/customization";
import * as React from "react";

import { Input } from "../src";
import type { InputTypes } from "../src";

const NOOP = (): void => {};

const NumberInput: React.FC = () => {
  const [value, setValue] = React.useState("0");
  return <Input type="number" value={value} min="-1" max="2" onChange={(e) => setValue(e.currentTarget.value)} />;
};

describe("Input inner input props", () => {
  const initialProps = {
    id: "input",
    name: "cool",
    type: "password" as InputTypes,
    value: "value",
    onChange: NOOP,
    disabled: true,
    readOnly: true,
    hasError: true,
    placeholder: "Enter your name",
  };

  const { getByPlaceholderText } = render(<Input {...initialProps} />);
  const InnerInput = getByPlaceholderText(initialProps.placeholder);

  it("should render", () => {
    expect(InnerInput).toBeDefined();
  });

  it("should set disabled correctly", () => {
    expect(InnerInput.getAttribute("disabled")).toEqual("");
    expect(InnerInput).toHaveStyleRule("-webkit-text-fill-color", "colorTextWeaker", { target: ":disabled" });
  });

  it("should set readOnly correctly", () => {
    expect(InnerInput.getAttribute("aria-readonly")).toEqual("true");
    expect(InnerInput.getAttribute("readOnly")).toEqual("");
  });

  it("should set hasError correctly", () => {
    expect(InnerInput.getAttribute("aria-invalid")).toEqual("true");
  });

  it("should set id correctly", () => {
    expect(InnerInput.getAttribute("id")).toEqual(initialProps.id);
  });

  it("should set type correctly", () => {
    expect(InnerInput.getAttribute("type")).toEqual(initialProps.type);
  });

  it("should set value correctly", () => {
    expect(InnerInput.getAttribute("value")).toEqual(initialProps.value);
  });

  it("should set name correctly", () => {
    expect(InnerInput.getAttribute("name")).toEqual(initialProps.name);
  });

  it("should set placeholder correctly", () => {
    expect(InnerInput.getAttribute("placeholder")).toEqual(initialProps.placeholder);
  });

  it("should render with margin: space0", () => {
    expect(InnerInput).toHaveStyleRule("margin", "space0");
  });
});

describe("Input insertBefore prop", () => {
  const initialProps = {
    id: "input",
    type: "text" as InputTypes,
    value: "value",
    onChange: NOOP,
    placeholder: "placeholder",
  };

  it("should render a prefix", () => {
    const { getByText } = render(<Input {...initialProps} insertBefore={<div>$10.99</div>} />);
    expect(getByText("$10.99")).toBeDefined();
  });

  it("should render a suffix", () => {
    const { getByText } = render(<Input {...initialProps} insertAfter={<div>$11.99</div>} />);
    expect(getByText("$11.99")).toBeDefined();
  });
});

describe("Input event handlers", () => {
  it("Should call the appropriate event handlers", () => {
    const onChangeMock: jest.Mock = jest.fn();
    const onFocusMock: jest.Mock = jest.fn();
    const onBlurMock: jest.Mock = jest.fn();

    const { getByRole } = render(
      <Input id="input" type="text" value="test" onChange={onChangeMock} onFocus={onFocusMock} onBlur={onBlurMock} />,
    );
    const RenderedInput = getByRole("textbox");

    RenderedInput.focus();
    expect(onFocusMock).toHaveBeenCalledTimes(1);
    RenderedInput.blur();
    expect(onBlurMock).toHaveBeenCalledTimes(1);
    act(() => {
      userEvent.type(RenderedInput, "foo");
    });
    expect(onChangeMock).toHaveBeenCalledTimes(3);
  });
});

describe("Input block props", () => {
  const initialProps = {
    id: "input",
    type: "text" as InputTypes,
    value: "value",
    onChange: NOOP,
    className: "foo",
    width: "300px",
  };

  it("should not pass width and classname props", () => {
    // @ts-expect-error we are passing unexpected props on purpose
    render(<Input {...initialProps} />);
    const RenderedInput = screen.getByRole("textbox");

    expect(RenderedInput).toHaveStyleRule("width", "100%");

    const classNames = RenderedInput.getAttribute("class");
    expect(classNames).toBeDefined();
    if (classNames != null) {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(classNames.indexOf(initialProps.className)).toBe(-1);
    }
  });
});

describe("HTML attributes", () => {
  it("should set a element data attribute for Input", () => {
    render(<Input id="input" type="text" value="test" onChange={NOOP} />);
    expect(screen.getByRole("textbox").getAttribute("data-paste-element")).toEqual("INPUT_ELEMENT");
  });

  it("should set a custom element data attribute for Input", () => {
    render(<Input id="input" type="text" value="test" onChange={NOOP} element="foo" />);
    expect(screen.getByRole("textbox").getAttribute("data-paste-element")).toEqual("foo_ELEMENT");
  });

  it("should set the data attribute for all Input nodes", (): void => {
    const { container } = render(
      <Input
        id="input"
        type="text"
        value="test"
        onChange={NOOP}
        insertBefore={<>test before</>}
        insertAfter={<>test after</>}
      />,
    );
    expect(container.querySelector('[data-paste-element="INPUT"]')).toBeInTheDocument();
    expect(screen.getByRole("textbox").getAttribute("data-paste-element")).toEqual("INPUT_ELEMENT");
    expect(screen.getByText("test before").getAttribute("data-paste-element")).toEqual("INPUT_PREFIX");
    expect(screen.getByText("test after").getAttribute("data-paste-element")).toEqual("INPUT_SUFFIX");
  });

  it("should set the custom element data attribute for all Input nodes", (): void => {
    const { container } = render(
      <Input
        id="input"
        type="text"
        value="test"
        onChange={NOOP}
        element="foo"
        insertBefore={<>test before</>}
        insertAfter={<>test after</>}
      />,
    );
    expect(container.querySelector('[data-paste-element="foo"]')).toBeInTheDocument();
    expect(screen.getByRole("textbox").getAttribute("data-paste-element")).toEqual("foo_ELEMENT");
    expect(screen.getByText("test before").getAttribute("data-paste-element")).toEqual("foo_PREFIX");
    expect(screen.getByText("test after").getAttribute("data-paste-element")).toEqual("foo_SUFFIX");
  });
});

describe("Number Input", () => {
  it("increases when step up clicked", () => {
    const { getByRole } = render(<Input type="number" defaultValue={1} />);
    userEvent.click(getByRole("button", { name: "step value up" }));
    expect(getByRole("spinbutton").value).toBe("2");
  });

  it("decreases when step down clicked", () => {
    const { getByRole } = render(<Input type="number" defaultValue={3} />);
    userEvent.click(getByRole("button", { name: "step value down" }));
    expect(getByRole("spinbutton").value).toBe("2");
  });
  it("increases by step when step up clicked", () => {
    const { getByRole } = render(<Input type="number" defaultValue={1} step={2} />);
    userEvent.click(getByRole("button", { name: "step value up" }));
    expect(getByRole("spinbutton").value).toBe("3");
  });

  it("decreases by step when step down clicked", () => {
    const { getByRole } = render(<Input type="number" defaultValue={3} step={2} />);
    userEvent.click(getByRole("button", { name: "step value down" }));
    expect(getByRole("spinbutton").value).toBe("1");
  });

  it("does not decrement below min value", () => {
    const { getByRole } = render(<Input type="number" defaultValue={1} min={1} />);
    userEvent.click(getByRole("button", { name: "step value down" }));
    expect(getByRole("spinbutton").value).toBe("1");
  });

  it("does not increment above max value", () => {
    const { getByRole } = render(<Input type="number" defaultValue={5} max={5} />);
    userEvent.click(getByRole("button", { name: "step value up" }));
    expect(getByRole("spinbutton").value).toBe("5");
  });

  it("increase button hides when hit max", () => {
    const { getByRole } = render(<NumberInput />);
    const IncreaseButton = getByRole("button", { name: "step value up" });
    act(() => {
      userEvent.click(IncreaseButton);
    });
    expect(getByRole("spinbutton").value).toBe("1");
    act(() => {
      userEvent.click(IncreaseButton);
    });
    expect(getByRole("spinbutton").value).toBe("2");
    expect(IncreaseButton).not.toBeInTheDocument();
  });
  it("decrease button hides when hit min", () => {
    const { getByRole } = render(<NumberInput />);
    const DecreaseButton = getByRole("button", { name: "step value down" });
    act(() => {
      userEvent.click(DecreaseButton);
    });
    expect(getByRole("spinbutton").value).toBe("-1");
    expect(DecreaseButton).not.toBeInTheDocument();
  });
});

describe("Customization", () => {
  it("should add custom styles to Input", (): void => {
    const { container } = render(
      <CustomizationProvider
        baseTheme="default"
        elements={{
          INPUT: { backgroundColor: "colorBackground" },
          INPUT_ELEMENT: { backgroundColor: "colorBackground" },
          INPUT_PREFIX: { backgroundColor: "colorBackground" },
          INPUT_SUFFIX: { backgroundColor: "colorBackground" },
        }}
      >
        <Input
          id="input"
          type="text"
          value="test"
          onChange={NOOP}
          insertBefore={<>test before</>}
          insertAfter={<>test after</>}
        />
      </CustomizationProvider>,
    );
    const renderedInput = container.querySelector('[data-paste-element="INPUT"]');
    const renderedInputElement = screen.getByRole("textbox");
    const renderedInputPrefix = screen.getByText("test before");
    const renderedInputSuffix = screen.getByText("test after");
    expect(renderedInput).toHaveStyleRule("background-color", "rgb(244, 244, 246)");
    expect(renderedInputElement).toHaveStyleRule("background-color", "rgb(244, 244, 246)");
    expect(renderedInputPrefix).toHaveStyleRule("background-color", "rgb(244, 244, 246)");
    expect(renderedInputSuffix).toHaveStyleRule("background-color", "rgb(244, 244, 246)");
  });

  it("should add custom styles to a Input variant", (): void => {
    const { container } = render(
      <CustomizationProvider
        baseTheme="default"
        elements={{
          INPUT: {
            backgroundColor: "colorBackground",
            variants: {
              inverse: {
                backgroundColor: "colorBackgroundBrand",
              },
            },
          },
          INPUT_ELEMENT: {
            backgroundColor: "colorBackground",
            variants: {
              inverse: {
                backgroundColor: "colorBackgroundBrand",
              },
            },
          },
          INPUT_PREFIX: {
            backgroundColor: "colorBackground",
            variants: {
              inverse: {
                backgroundColor: "colorBackgroundBrand",
              },
            },
          },
          INPUT_SUFFIX: {
            backgroundColor: "colorBackground",
            variants: {
              inverse: {
                backgroundColor: "colorBackgroundBrand",
              },
            },
          },
          INPUT_INCREMENT_BUTTON: {
            backgroundColor: "colorBackgroundNew",
          },
          INPUT_DECREMENT_BUTTON: {
            backgroundColor: "colorBackgroundError",
          },
        }}
      >
        <Input
          id="input"
          type="number"
          value="test"
          onChange={NOOP}
          variant="inverse"
          insertBefore={<>test before</>}
          insertAfter={<>test after</>}
        />
      </CustomizationProvider>,
    );
    const renderedInput = container.querySelector('[data-paste-element="INPUT"]');
    const renderedInputElement = screen.getByRole("spinbutton");
    const renderedInputPrefix = screen.getByText("test before");
    const renderedInputSuffix = screen.getByText("test after");
    const renderedIncrement = screen.getByRole("button", { name: "step value up" });
    const renderedDecrement = screen.getByRole("button", { name: "step value down" });
    expect(renderedInput).toHaveStyleRule("background-color", "rgb(0, 20, 137)");
    expect(renderedInputElement).toHaveStyleRule("background-color", "rgb(0, 20, 137)");
    expect(renderedInputPrefix).toHaveStyleRule("background-color", "rgb(0, 20, 137)");
    expect(renderedInputSuffix).toHaveStyleRule("background-color", "rgb(0, 20, 137)");
    expect(renderedIncrement).toHaveStyleRule("background-color", "rgb(245, 240, 252)");
    expect(renderedDecrement).toHaveStyleRule("background-color", "rgb(219, 19, 42)");
  });

  it("should add custom styles to Input with a custom element data attribute", (): void => {
    const { container } = render(
      <CustomizationProvider
        baseTheme="default"
        elements={{
          FOO: { backgroundColor: "colorBackground" },
          FOO_ELEMENT: { backgroundColor: "colorBackground" },
          FOO_PREFIX: { backgroundColor: "colorBackground" },
          FOO_SUFFIX: { backgroundColor: "colorBackground" },
          FOO_INCREMENT_BUTTON: {
            backgroundColor: "colorBackgroundNew",
          },
          FOO_DECREMENT_BUTTON: {
            backgroundColor: "colorBackgroundError",
          },
        }}
      >
        <Input
          id="input"
          type="number"
          value="test"
          onChange={NOOP}
          element="FOO"
          insertBefore={<>test before</>}
          insertAfter={<>test after</>}
        />
      </CustomizationProvider>,
    );
    const renderedInput = container.querySelector('[data-paste-element="FOO"]');
    const renderedInputElement = screen.getByRole("spinbutton");
    const renderedInputPrefix = screen.getByText("test before");
    const renderedInputSuffix = screen.getByText("test after");
    const renderedIncrement = screen.getByRole("button", { name: "step value up" });
    const renderedDecrement = screen.getByRole("button", { name: "step value down" });
    expect(renderedInput).toHaveStyleRule("background-color", "rgb(244, 244, 246)");
    expect(renderedInputElement).toHaveStyleRule("background-color", "rgb(244, 244, 246)");
    expect(renderedInputPrefix).toHaveStyleRule("background-color", "rgb(244, 244, 246)");
    expect(renderedInputSuffix).toHaveStyleRule("background-color", "rgb(244, 244, 246)");
    expect(renderedIncrement).toHaveStyleRule("background-color", "rgb(245, 240, 252)");
    expect(renderedDecrement).toHaveStyleRule("background-color", "rgb(219, 19, 42)");
  });

  it("should add custom styles to a Input variant with a custom element data attribute", (): void => {
    const { container } = render(
      <CustomizationProvider
        baseTheme="default"
        elements={{
          FOO: {
            backgroundColor: "colorBackground",
            variants: {
              inverse: {
                backgroundColor: "colorBackgroundBrand",
              },
            },
          },
          FOO_ELEMENT: {
            backgroundColor: "colorBackground",
            variants: {
              inverse: {
                backgroundColor: "colorBackgroundBrand",
              },
            },
          },
          FOO_PREFIX: {
            backgroundColor: "colorBackground",
            variants: {
              inverse: {
                backgroundColor: "colorBackgroundBrand",
              },
            },
          },
          FOO_SUFFIX: {
            backgroundColor: "colorBackground",
            variants: {
              inverse: {
                backgroundColor: "colorBackgroundBrand",
              },
            },
          },
        }}
      >
        <Input
          id="input"
          type="text"
          value="test"
          onChange={NOOP}
          variant="inverse"
          element="FOO"
          insertBefore={<>test before</>}
          insertAfter={<>test after</>}
        />
      </CustomizationProvider>,
    );
    const renderedInput = container.querySelector('[data-paste-element="FOO"]');
    const renderedInputElement = screen.getByRole("textbox");
    const renderedInputPrefix = screen.getByText("test before");
    const renderedInputSuffix = screen.getByText("test after");
    expect(renderedInput).toHaveStyleRule("background-color", "rgb(0, 20, 137)");
    expect(renderedInputElement).toHaveStyleRule("background-color", "rgb(0, 20, 137)");
    expect(renderedInputPrefix).toHaveStyleRule("background-color", "rgb(0, 20, 137)");
    expect(renderedInputSuffix).toHaveStyleRule("background-color", "rgb(0, 20, 137)");
  });
});
