import type { TabStateReturn } from "./Tabs";

export { Tabs, useTabState } from "./Tabs";
export type { TabsProps } from "./Tabs";
export { TabsContext } from "./TabsContext";
export { TabList } from "./TabList";
export type { TabListProps } from "./TabList";
export { Tab } from "./Tab";
export type { TabProps } from "./Tab";
export { TabPanels } from "./TabPanels";
export type { TabPanelsProps } from "./TabPanels";
export { TabPanel } from "./TabPanel";
export type { TabPanelProps } from "./TabPanel";
export type { TabStateReturn, UseTabsStateProps } from "./Tabs";
// renaming TabStateReturn to TabStateReturnProps for documenting purposes to prevent a breaking change
type TabStateReturnProps = TabStateReturn;
export type { TabStateReturnProps };
