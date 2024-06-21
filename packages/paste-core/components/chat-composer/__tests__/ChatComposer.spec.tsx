import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { $createParagraphNode, $createTextNode, $getRoot } from "@twilio-paste/lexical-library";
import { Theme } from "@twilio-paste/theme";
import * as React from "react";

import { ChatComposer } from "../src";

const initialText = (): void => {
  const root = $getRoot();

  if (root.getFirstChild() === null) {
    const paragraph = $createParagraphNode();
    paragraph.append($createTextNode("Hello"));

    root.append(paragraph);
  }
};

const baseConfig = {
  namespace: "foo",
  onError: (error: Error) => {
    throw error;
  },
};

describe("ChatComposer", () => {
  it("should render with placeholder text", () => {
    render(<ChatComposer data-testid="my-composer" placeholder="Type here.." config={baseConfig} />);
    expect(screen.getByRole("textbox")).toBeDefined();
    expect(screen.getByText("Type here..")).toBeDefined();
  });

  it("should pass props to the content editable", async () => {
    render(
      <ChatComposer
        data-testid="my-composer"
        ariaLabel="Feedback"
        ariaDescribedBy="foo"
        ariaOwns="foo"
        ariaActiveDescendant="foo"
        config={baseConfig}
      />,
    );

    const contentEditable = screen.getByRole("textbox");
    await waitFor(() => {
      expect(contentEditable).toHaveAttribute("aria-label", "Feedback");
      expect(contentEditable).toHaveAttribute("aria-activedescendant", "foo");
      expect(contentEditable).toHaveAttribute("aria-owns", "foo");
      expect(contentEditable).toHaveAttribute("aria-describedby", "foo");
      expect(contentEditable.dataset.testid).toEqual("my-composer");
    });
  });

  it("should render initial value with the initialValue prop", async () => {
    render(<ChatComposer initialValue="Type here.." config={baseConfig} />);

    const contentEditable = screen.getByRole("textbox");
    await waitFor(() => {
      expect(contentEditable).toHaveTextContent("Type here..");
    });
  });

  it("should render custom initial value with the config prop", async () => {
    render(
      <ChatComposer
        config={{
          ...baseConfig,
          editorState: initialText,
        }}
      />,
    );

    const contentEditable = screen.getByRole("textbox");
    await waitFor(() => {
      expect(contentEditable).toHaveTextContent("Hello");
    });
  });

  it("should set maxHeight with the maxHeight prop", async () => {
    render(
      <Theme.Provider theme="default">
        <ChatComposer maxHeight="size10" config={baseConfig} />
      </Theme.Provider>,
    );

    const wrapper = screen.getByRole("textbox").parentElement;
    await waitFor(() => {
      expect(wrapper).toHaveStyleRule("max-height", "5.5rem");
    });
  });

  it("should call onChange function", async () => {
    const onChangeMock: jest.Mock = jest.fn();

    render(<ChatComposer onChange={onChangeMock} config={baseConfig} />);

    const contentEditable = screen.getByRole("textbox");

    userEvent.type(contentEditable, "foo bar");
    waitFor(() => {
      expect(onChangeMock).toHaveBeenCalledTimes(1);
    });
  });
});
