import { render, screen } from "@testing-library/react";
import { CustomizationProvider } from "@twilio-paste/customization";
import * as React from "react";

import {
  CodeBlock,
  CodeBlockHeader,
  CodeBlockTab,
  CodeBlockTabList,
  CodeBlockTabPanel,
  CodeBlockWrapper,
} from "../src";

const jsCode = `(num) => num + 1`;

const CustomizationWrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <CustomizationProvider
    baseTheme="default"
    theme={TestTheme}
    elements={{
      CODE_BLOCK_CONTENT: { width: "size50" },
      CODE_BLOCK_COPY_BUTTON: { backgroundColor: "colorBackgroundErrorWeakest" },
      CODE_BLOCK_EXTERNAL_LINK: { backgroundColor: "colorBackgroundErrorWeakest" },
      CODE_BLOCK_HEADER: { borderTopRightRadius: "borderRadius30" },
      CODE_BLOCK_TAB_LIST: { columnGap: "space0" },
      CODE_BLOCK_TAB_PANEL: { borderBottomRightRadius: "borderRadius30" },
      CODE_BLOCK_TAB: { borderRadius: "borderRadius0" },
      CODE_BLOCK_WRAPPER: { width: "size50" },
      CODE_BLOCK: { width: "size50" },
      CODE_BLOCK_TAB_LIST_CHILD: { backgroundColor: "colorBackgroundError" },
    }}
  >
    {children}
  </CustomizationProvider>
);

const CustomizationMyWrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <CustomizationProvider
    baseTheme="default"
    theme={TestTheme}
    elements={{
      MY_CODE_BLOCK_CONTENT: { width: "size50" },
      MY_CODE_BLOCK_COPY_BUTTON: { backgroundColor: "colorBackgroundErrorWeakest" },
      MY_CODE_BLOCK_EXTERNAL_LINK: { backgroundColor: "colorBackgroundErrorWeakest" },
      MY_CODE_BLOCK_HEADER: { borderTopRightRadius: "borderRadius30" },
      MY_CODE_BLOCK_TAB_LIST: { columnGap: "space0" },
      MY_CODE_BLOCK_TAB_PANEL: { borderBottomRightRadius: "borderRadius30" },
      MY_CODE_BLOCK_TAB: { borderRadius: "borderRadius0" },
      MY_CODE_BLOCK_WRAPPER: { width: "size50" },
      MY_CODE_BLOCK: { width: "size50" },
      MY_CODE_BLOCK_TAB_LIST_CHILD: { backgroundColor: "colorBackgroundError" },
    }}
  >
    {children}
  </CustomizationProvider>
);

describe("Customization", () => {
  describe("CodeBlock", () => {
    it("should set a default element data attribute", () => {
      render(
        <CodeBlockWrapper>
          <CodeBlockHeader>My code block</CodeBlockHeader>
          <CodeBlockTabList>
            <CodeBlockTab>JavaScript</CodeBlockTab>
          </CodeBlockTabList>
          <CodeBlockTabPanel>
            <CodeBlock language="javascript" code={jsCode} data-testid="code-block" externalLink="www.google.com" />
          </CodeBlockTabPanel>
        </CodeBlockWrapper>,
        {
          wrapper: CustomizationWrapper,
        },
      );

      const codeBlock = screen.getByTestId("code-block");
      const content = codeBlock.querySelector("pre")?.parentElement;
      const heading = screen.getByRole("heading", { name: "My code block" });
      const wrapper = heading.parentElement;
      const tabList = screen.getByRole("tablist");
      const tab = screen.getByRole("tab", { name: "JavaScript" });
      const tabPanel = codeBlock.parentElement;
      const copyButton = screen.getByRole("button", { name: "Copy code block" });
      const externalLink = screen.getByRole("link", { name: "Open code block in new page" });

      expect(wrapper?.getAttribute("data-paste-element")).toBe("CODE_BLOCK_WRAPPER");
      expect(content?.getAttribute("data-paste-element")).toBe("CODE_BLOCK_CONTENT");
      expect(tabList.getAttribute("data-paste-element")).toBe("CODE_BLOCK_TAB_LIST");
      expect(tab.getAttribute("data-paste-element")).toBe("CODE_BLOCK_TAB");
      expect(tab.parentElement?.getAttribute("data-paste-element")).toBe("CODE_BLOCK_TAB_LIST_CHILD");
      expect(tabPanel?.getAttribute("data-paste-element")).toBe("CODE_BLOCK_TAB_PANEL");
      expect(codeBlock.getAttribute("data-paste-element")).toBe("CODE_BLOCK");
      expect(heading.getAttribute("data-paste-element")).toBe("CODE_BLOCK_HEADER");
      expect(copyButton.getAttribute("data-paste-element")).toBe("CODE_BLOCK_COPY_BUTTON");
      expect(externalLink.getAttribute("data-paste-element")).toBe("CODE_BLOCK_EXTERNAL_LINK");
    });

    it("should set a custom element data attribute", () => {
      render(
        <CodeBlockWrapper data-testid="wrapper" element="MY_CODE_BLOCK_WRAPPER">
          <CodeBlockHeader element="MY_CODE_BLOCK_HEADER">My code block</CodeBlockHeader>
          <CodeBlockTabList element="MY_CODE_BLOCK_TAB_LIST">
            <CodeBlockTab element="MY_CODE_BLOCK_TAB">JavaScript</CodeBlockTab>
          </CodeBlockTabList>
          <CodeBlockTabPanel element="MY_CODE_BLOCK_TAB_PANEL">
            <CodeBlock
              language="javascript"
              code={jsCode}
              data-testid="code-block"
              externalLink="www.google.com"
              element="MY_CODE_BLOCK"
            />
          </CodeBlockTabPanel>
        </CodeBlockWrapper>,
        {
          wrapper: CustomizationMyWrapper,
        },
      );

      const codeBlock = screen.getByTestId("code-block");
      const content = codeBlock.querySelector("pre")?.parentElement;
      const heading = screen.getByRole("heading", { name: "My code block" });
      const wrapper = heading.parentElement;
      const tabList = screen.getByRole("tablist");
      const tab = screen.getByRole("tab", { name: "JavaScript" });
      const tabPanel = codeBlock.parentElement;
      const copyButton = screen.getByRole("button", { name: "Copy code block" });
      const externalLink = screen.getByRole("link", { name: "Open code block in new page" });

      expect(wrapper?.getAttribute("data-paste-element")).toBe("MY_CODE_BLOCK_WRAPPER");
      expect(content?.getAttribute("data-paste-element")).toBe("MY_CODE_BLOCK_CONTENT");
      expect(tabList.getAttribute("data-paste-element")).toBe("MY_CODE_BLOCK_TAB_LIST");
      expect(tab.getAttribute("data-paste-element")).toBe("MY_CODE_BLOCK_TAB");
      expect(tab.parentElement?.getAttribute("data-paste-element")).toBe("MY_CODE_BLOCK_TAB_LIST_CHILD");
      expect(tabPanel?.getAttribute("data-paste-element")).toBe("MY_CODE_BLOCK_TAB_PANEL");
      expect(codeBlock.getAttribute("data-paste-element")).toBe("MY_CODE_BLOCK");
      expect(heading.getAttribute("data-paste-element")).toBe("MY_CODE_BLOCK_HEADER");
      expect(copyButton.getAttribute("data-paste-element")).toBe("MY_CODE_BLOCK_COPY_BUTTON");
      expect(externalLink.getAttribute("data-paste-element")).toBe("MY_CODE_BLOCK_EXTERNAL_LINK");
    });

    it("should add custom styles to the component", () => {
      render(
        <CodeBlockWrapper>
          <CodeBlockHeader>My code block</CodeBlockHeader>
          <CodeBlockTabList>
            <CodeBlockTab>JavaScript</CodeBlockTab>
          </CodeBlockTabList>
          <CodeBlockTabPanel>
            <CodeBlock language="javascript" code={jsCode} data-testid="code-block" externalLink="www.google.com" />
          </CodeBlockTabPanel>
        </CodeBlockWrapper>,
        {
          wrapper: CustomizationWrapper,
        },
      );

      const codeBlock = screen.getByTestId("code-block");
      const content = codeBlock.querySelector("pre")?.parentElement;
      const heading = screen.getByRole("heading", { name: "My code block" });
      const wrapper = heading.parentElement;
      const tabList = screen.getByRole("tablist");
      const tab = screen.getByRole("tab", { name: "JavaScript" });
      const tabPanel = codeBlock.parentElement;
      const copyButton = screen.getByRole("button", { name: "Copy code block" });
      const externalLink = screen.getByRole("link", { name: "Open code block in new page" });

      expect(codeBlock).toHaveStyleRule("width", "31.5rem");
      expect(content).toHaveStyleRule("width", "31.5rem");
      expect(wrapper).toHaveStyleRule("width", "31.5rem");
      expect(heading).toHaveStyleRule("border-top-right-radius", "8px");
      expect(tabList).toHaveStyleRule("column-gap", "0");
      expect(tab).toHaveStyleRule("border-radius", "0");
      expect(tab.parentElement).toHaveStyleRule("background-color", "rgb(214, 31, 31)");
      expect(tabPanel).toHaveStyleRule("border-bottom-right-radius", "8px");
      expect(copyButton).toHaveStyleRule("background-color", "rgb(254, 236, 236)");
      expect(externalLink).toHaveStyleRule("background-color", "rgb(254, 236, 236)");
    });

    it("should set custom styles with custom element names", () => {
      render(
        <CodeBlockWrapper data-testid="wrapper" element="MY_CODE_BLOCK_WRAPPER">
          <CodeBlockHeader element="MY_CODE_BLOCK_HEADER">My code block</CodeBlockHeader>
          <CodeBlockTabList element="MY_CODE_BLOCK_TAB_LIST">
            <CodeBlockTab element="MY_CODE_BLOCK_TAB">JavaScript</CodeBlockTab>
          </CodeBlockTabList>
          <CodeBlockTabPanel element="MY_CODE_BLOCK_TAB_PANEL">
            <CodeBlock
              language="javascript"
              code={jsCode}
              data-testid="code-block"
              externalLink="www.google.com"
              element="MY_CODE_BLOCK"
            />
          </CodeBlockTabPanel>
        </CodeBlockWrapper>,
        {
          wrapper: CustomizationMyWrapper,
        },
      );

      const codeBlock = screen.getByTestId("code-block");
      const content = codeBlock.querySelector("pre")?.parentElement;
      const heading = screen.getByRole("heading", { name: "My code block" });
      const wrapper = heading.parentElement;
      const tabList = screen.getByRole("tablist");
      const tab = screen.getByRole("tab", { name: "JavaScript" });
      const tabPanel = codeBlock.parentElement;
      const copyButton = screen.getByRole("button", { name: "Copy code block" });
      const externalLink = screen.getByRole("link", { name: "Open code block in new page" });

      expect(codeBlock).toHaveStyleRule("width", "31.5rem");
      expect(content).toHaveStyleRule("width", "31.5rem");
      expect(wrapper).toHaveStyleRule("width", "31.5rem");
      expect(heading).toHaveStyleRule("border-top-right-radius", "8px");
      expect(tabList).toHaveStyleRule("column-gap", "0");
      expect(tab).toHaveStyleRule("border-radius", "0");
      expect(tab.parentElement).toHaveStyleRule("background-color", "rgb(214, 31, 31)");
      expect(tabPanel).toHaveStyleRule("border-bottom-right-radius", "8px");
      expect(copyButton).toHaveStyleRule("background-color", "rgb(254, 236, 236)");
      expect(externalLink).toHaveStyleRule("background-color", "rgb(254, 236, 236)");
    });
  });
});
