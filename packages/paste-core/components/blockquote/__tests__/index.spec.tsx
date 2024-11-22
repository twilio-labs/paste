import { render, screen } from "@testing-library/react";
import * as React from "react";

import { Blockquote, BlockquoteContent, BlockquoteSource } from "../src";

describe("Blockquote", () => {
  it("should render", () => {
    render(
      <Blockquote url="#" data-testid="blockquote">
        <BlockquoteContent>This is some text.</BlockquoteContent>
        <BlockquoteSource author="Google" source="People + AI Guidebook" />
      </Blockquote>,
    );

    const blockquote = screen.getByTestId("blockquote");
    expect(blockquote).toBeDefined();

    const text = screen.getByText("This is some text.");
    expect(text.nodeName).toBe("BLOCKQUOTE");
    expect(blockquote.querySelector(`[data-paste-element='BLOCKQUOTE_SOURCE_ANCHOR']`)).toBeTruthy();
  });

  it("should render without a url", () => {
    render(
      <Blockquote data-testid="blockquote">
        <BlockquoteContent>This is some text.</BlockquoteContent>
        <BlockquoteSource author="Google" source="People + AI Guidebook" />
      </Blockquote>,
    );

    const blockquote = screen.getByTestId("blockquote");
    expect(blockquote).toBeDefined();
    expect(blockquote.querySelector(`[data-paste-element='BLOCKQUOTE_SOURCE_TEXT']`)).toBeTruthy();
  });

  it("should render without a source", () => {
    render(
      <Blockquote url="#" data-testid="blockquote">
        <BlockquoteContent>This is some text.</BlockquoteContent>
        <BlockquoteSource author="Google" />
      </Blockquote>,
    );

    const blockquote = screen.getByTestId("blockquote");
    expect(blockquote).toBeDefined();
    expect(blockquote.querySelector(`[data-paste-element='BLOCKQUOTE_SOURCE_CITE']`)).toBeFalsy();
  });
});

describe("Customization", () => {
  it("should set element data attribute", () => {
    const { getByTestId } = render(
      <Blockquote url="#" data-testid="blockquote">
        <BlockquoteContent>This is some text.</BlockquoteContent>
        <BlockquoteSource author="Google" source="People + AI Guidebook" />
      </Blockquote>,
    );
    const { getByTestId: idWithoutURL } = render(
      <Blockquote data-testid="blockquoteWithoutURL">
        <BlockquoteContent>This is some text.</BlockquoteContent>
        <BlockquoteSource author="Google" source="People + AI Guidebook" />
      </Blockquote>,
    );

    expect(getByTestId("blockquote").getAttribute("data-paste-element")).toEqual("BLOCKQUOTE");
    expect(getByTestId("blockquote").querySelector(`[data-paste-element='BLOCKQUOTE_ICON']`)).toBeTruthy();
    expect(getByTestId("blockquote").querySelector(`[data-paste-element='BLOCKQUOTE_CONTENT']`)).toBeTruthy();
    expect(getByTestId("blockquote").querySelector(`[data-paste-element='BLOCKQUOTE_SOURCE']`)).toBeTruthy();
    expect(getByTestId("blockquote").querySelector(`[data-paste-element='BLOCKQUOTE_SOURCE_AUTHOR']`)).toBeTruthy();
    expect(getByTestId("blockquote").querySelector(`[data-paste-element='BLOCKQUOTE_SOURCE_CITE']`)).toBeTruthy();
    expect(getByTestId("blockquote").querySelector(`[data-paste-element='BLOCKQUOTE_SOURCE_ANCHOR']`)).toBeTruthy();
    expect(
      idWithoutURL("blockquoteWithoutURL").querySelector(`[data-paste-element='BLOCKQUOTE_SOURCE_TEXT']`),
    ).toBeTruthy();
  });

  it("should set custom element data attribute", () => {
    const { getByTestId } = render(
      <Blockquote url="#" data-testid="blockquote" element="CUSTOMIZED">
        <BlockquoteContent element="CUSTOMIZED_CONTENT">This is some text.</BlockquoteContent>
        <BlockquoteSource author="Google" source="People + AI Guidebook" element="CUSTOMIZED_SOURCE" />
      </Blockquote>,
    );
    const { getByTestId: idWithoutURL } = render(
      <Blockquote data-testid="blockquoteWithoutURL" element="CUSTOMIZED">
        <BlockquoteContent element="CUSTOMIZED_CONTENT">This is some text.</BlockquoteContent>
        <BlockquoteSource author="Google" source="People + AI Guidebook" element="CUSTOMIZED_SOURCE" />
      </Blockquote>,
    );

    expect(getByTestId("blockquote").getAttribute("data-paste-element")).toEqual("CUSTOMIZED");
    expect(getByTestId("blockquote").querySelector(`[data-paste-element='CUSTOMIZED_ICON']`)).toBeTruthy();
    expect(getByTestId("blockquote").querySelector(`[data-paste-element='CUSTOMIZED_CONTENT']`)).toBeTruthy();
    expect(getByTestId("blockquote").querySelector(`[data-paste-element='CUSTOMIZED_SOURCE']`)).toBeTruthy();
    expect(getByTestId("blockquote").querySelector(`[data-paste-element='CUSTOMIZED_SOURCE_AUTHOR']`)).toBeTruthy();
    expect(getByTestId("blockquote").querySelector(`[data-paste-element='CUSTOMIZED_SOURCE_CITE']`)).toBeTruthy();
    expect(getByTestId("blockquote").querySelector(`[data-paste-element='CUSTOMIZED_SOURCE_ANCHOR']`)).toBeTruthy();
    expect(
      idWithoutURL("blockquoteWithoutURL").querySelector(`[data-paste-element='CUSTOMIZED_SOURCE_TEXT']`),
    ).toBeTruthy();
  });
});
