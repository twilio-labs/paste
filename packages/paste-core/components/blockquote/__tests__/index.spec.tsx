import { render, screen } from "@testing-library/react";
import * as React from "react";

import { Blockquote, BlockquoteCitation, BlockquoteContent } from "../src";

describe("Blockquote", () => {
  it("should render", () => {
    render(
      <Blockquote url="#" data-testid="blockquote">
        <BlockquoteContent>This is some text.</BlockquoteContent>
        <BlockquoteCitation author="Google" source="People + AI Guidebook" />
      </Blockquote>,
    );

    const blockquote = screen.getByTestId("blockquote");
    expect(blockquote).toBeDefined();
    const text = screen.getByText("This is some text.");
    expect(text.nodeName).toBe("BLOCKQUOTE");
    expect(text).toHaveAttribute("cite", "#");
    expect(blockquote.querySelector(`[data-paste-element='BLOCKQUOTE_CITATION_ANCHOR']`)).toBeTruthy();
  });

  it("should render without a url", () => {
    render(
      <Blockquote data-testid="blockquote">
        <BlockquoteContent>This is some text.</BlockquoteContent>
        <BlockquoteCitation author="Google" source="People + AI Guidebook" />
      </Blockquote>,
    );

    const blockquote = screen.getByTestId("blockquote");
    expect(blockquote.querySelector(`[data-paste-element='BLOCKQUOTE_CITATION_CITE']`)).toBeTruthy();
    expect(blockquote.querySelector("a")).toBeNull();
    expect(screen.getByText("This is some text.")).not.toHaveAttribute("cite");
  });

  it("should render without a source", () => {
    render(
      <Blockquote data-testid="blockquote">
        <BlockquoteContent>This is some text.</BlockquoteContent>
        <BlockquoteCitation author="Google" />
      </Blockquote>,
    );

    const blockquote = screen.getByTestId("blockquote");
    expect(blockquote).toBeDefined();
    expect(blockquote.querySelector(`[data-paste-element='BLOCKQUOTE_CITATION_CITE']`)).toBeFalsy();
    expect(screen.getByText("This is some text.")).not.toHaveAttribute("cite");
  });
});

describe("Customization", () => {
  it("should set element data attribute", () => {
    const { getByTestId } = render(
      <Blockquote url="#" data-testid="blockquote">
        <BlockquoteContent>This is some text.</BlockquoteContent>
        <BlockquoteCitation author="Google" source="People + AI Guidebook" />
      </Blockquote>,
    );

    expect(getByTestId("blockquote").getAttribute("data-paste-element")).toEqual("BLOCKQUOTE");
    expect(getByTestId("blockquote").querySelector(`[data-paste-element='BLOCKQUOTE_ICON']`)).toBeTruthy();
    expect(getByTestId("blockquote").querySelector(`[data-paste-element='INNER_BLOCKQUOTE']`)).toBeTruthy();
    expect(getByTestId("blockquote").querySelector(`[data-paste-element='BLOCKQUOTE_CONTENT']`)).toBeTruthy();
    expect(getByTestId("blockquote").querySelector(`[data-paste-element='BLOCKQUOTE_CITATION']`)).toBeTruthy();
    expect(getByTestId("blockquote").querySelector(`[data-paste-element='BLOCKQUOTE_CITATION_AUTHOR']`)).toBeTruthy();
    expect(getByTestId("blockquote").querySelector(`[data-paste-element='BLOCKQUOTE_CITATION_CITE']`)).toBeTruthy();
    expect(getByTestId("blockquote").querySelector(`[data-paste-element='BLOCKQUOTE_CITATION_ANCHOR']`)).toBeTruthy();
  });

  it("should set custom element data attribute", () => {
    const { getByTestId } = render(
      <Blockquote url="#" data-testid="blockquote" element="CUSTOMIZED">
        <BlockquoteContent element="CUSTOMIZED_CONTENT">This is some text.</BlockquoteContent>
        <BlockquoteCitation author="Google" source="People + AI Guidebook" element="CUSTOMIZED_SOURCE" />
      </Blockquote>,
    );
    screen.debug();
    expect(getByTestId("blockquote").getAttribute("data-paste-element")).toEqual("CUSTOMIZED");
    expect(getByTestId("blockquote").querySelector(`[data-paste-element='CUSTOMIZED_ICON']`)).toBeTruthy();
    expect(getByTestId("blockquote").querySelector(`[data-paste-element='INNER_CUSTOMIZED']`)).toBeTruthy();
    expect(getByTestId("blockquote").querySelector(`[data-paste-element='CUSTOMIZED_CONTENT']`)).toBeTruthy();
    expect(getByTestId("blockquote").querySelector(`[data-paste-element='CUSTOMIZED_SOURCE']`)).toBeTruthy();
    expect(getByTestId("blockquote").querySelector(`[data-paste-element='CUSTOMIZED_SOURCE_AUTHOR']`)).toBeTruthy();
    expect(getByTestId("blockquote").querySelector(`[data-paste-element='CUSTOMIZED_SOURCE_CITE']`)).toBeTruthy();
    expect(getByTestId("blockquote").querySelector(`[data-paste-element='CUSTOMIZED_SOURCE_ANCHOR']`)).toBeTruthy();
  });
});
