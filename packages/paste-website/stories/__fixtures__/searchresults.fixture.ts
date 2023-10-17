import type { GroupedSearchResults } from "../../src/components/site-search/types";

export const mockResults = {
  "src/pages/components/in-page-navigation/index": [
    {
      path: "src/pages/components/in-page-navigation/index",
      content:
        "### About In Page Navigation\n\nThe In Page Navigation component allows users to navigate to different pages using a styled group of links. Each In Page Navigation Item is an anchor that links to a related page. Each page within the In Page Navigation should also have an In Page Navigation component so that users can easily navigate back and forth within a set of related pages.\n",
      similarity: 0.856512844562531,
      source: "docs",
      type: "markdown",
      meta: {
        slug: "/components/in-page-navigation/",
        title: "In Page Navigation",
        package: "@twilio-paste/in-page-navigation",
        description: "An In Page Navigation is a group of styled links that lets users navigate between related pages.",
      },
      heading: "About In Page Navigation",
      slug: "about-in-page-navigation",
    },
    {
      path: "src/pages/components/in-page-navigation/index",
      content:
        "### In Page Navigation vs Tabs\n\n[Tabs](/components/tabs) are used to layer related pieces of information together and display one layer at a time on the same URL. Use Tabs to alternate between views within the same context. In Page Navigation is a collection of anchors, rather than buttons. Use In Page Navigation to switch between different, related pages. Tabs replace the entire view based on the selected tab. In Page Navigation links navigate the user to a new page.\n",
      similarity: 0.853896617889404,
      source: "docs",
      type: "markdown",
      meta: {
        slug: "/components/in-page-navigation/",
        title: "In Page Navigation",
        package: "@twilio-paste/in-page-navigation",
        description: "An In Page Navigation is a group of styled links that lets users navigate between related pages.",
      },
      heading: "In Page Navigation vs Tabs",
      slug: "in-page-navigation-vs-tabs",
    },
    {
      path: "src/pages/components/in-page-navigation/index",
      content:
        "### Accessibility\n\n* Each In Page Navigation must have a unique label. To add the label, add the `aria-label` prop to the `<InPageNavigation>` tag.\n  Omit the term 'navigation'- it is redundant since the role is already defined as 'navigation'.\n* To interact with In Page Navigation using the keyboard, use the tab key.\n* Each In Page Navigation must have an In Page Navigation Item which is the currently selected page. To specify which page is current, add the `currentPage` prop to the respective `<InPageNavigationItem>`. Doing so will set `aria-current=\"page\"` on that link.\n",
      similarity: 0.824576377868652,
      source: "docs",
      type: "markdown",
      meta: {
        slug: "/components/in-page-navigation/",
        title: "In Page Navigation",
        package: "@twilio-paste/in-page-navigation",
        description: "An In Page Navigation is a group of styled links that lets users navigate between related pages.",
      },
      heading: "Accessibility",
      slug: "accessibility",
    },
  ],
  "src/pages/components/tabs/index": [
    {
      path: "src/pages/components/tabs/index",
      content:
        "### Tabs vs. In Page Navigation\n\nTabs are used to layer related pieces of information together and display one layer at a time on the same URL. Use Tabs to alternate between views within the same context. [In Page Navigation](/components/in-page-navigation) is a collection of anchors, rather than buttons. Use In Page Navigation to switch between different, related pages. Tabs replace the entire view based on the selected tab. In Page Navigation links navigate the user to a new page.\n",
      similarity: 0.845560073852539,
      source: "docs",
      type: "markdown",
      meta: {
        slug: "/components/tabs/",
        title: "Tabs",
        package: "@twilio-paste/tabs",
        description: "Tabs are labeled controls that allow users to switch between multiple views within a page.",
      },
      heading: "Tabs vs. In Page Navigation",
      slug: "tabs-vs-in-page-navigation",
    },
  ],
  "https://github.com/twilio-labs/paste/discussions/3356": [
    {
      path: "https://github.com/twilio-labs/paste/discussions/3356",
      content:
        '# switching pages in the breadcrumbs\nhey, we are trying to reproduce patter that is being used in Evergreen. It\'s a breadcrumb combined with minimal button which - once we click - opens a list and we can jump into the another page. \r\n\r\nAny suggestions how to handle this type of case?\r\n\r\n<img width="500" alt="Zrzut ekranu 2023-07-27 o 09 11 40" src="https://github.com/twilio-labs/paste/assets/140410476/b36650f9-f6a5-41f2-8b8a-9eb9f4e153a1">\r\n',
      similarity: 0.840333878993988,
      source: "twilio-labs/paste",
      type: "github-discussions",
      meta: {
        id: "D_kwDOC9UAQs4AUxlu",
        title: "switching pages in the breadcrumbs",
        updatedAt: "2023-08-03T16:48:57Z",
      },
      heading: "switching pages in the breadcrumbs",
      slug: "discussion-5445998",
    },
  ],
  "https://github.com/twilio-labs/paste/discussions/3222": [
    {
      path: "https://github.com/twilio-labs/paste/discussions/3222",
      content:
        "# Page interaction on click for pagination - Answer\nHi @tonge495 \n\nI don't think we have a particular preference, it's largely based on user expectations based on what you're actually doing, aligning to default browser behaviours.\n\nThere are largely two approaches:\n\n1) Each page in the pagination takes the user to a new route/url. When visiting that route the table of results will always be the same. That way you can share your search query and results (Preferred). In this case the action is a page navigation, just like navigating to any other page, and should act accordingly. This usually takes a user to the very top of the page.\n\n2) Each page in the pagination just re-renders the table above. No route change. In this case you must manually place the user above the table of results to inform them that something on the page has happened. \n\nIn both cases, whether you jump or soft scroll to the new location is up to you, and potentially what action is being taken in the browser, will dictate what you _can_ do.\n\nHope that helps a little.",
      similarity: 0.832261383533478,
      source: "twilio-labs/paste",
      type: "github-discussions",
      meta: {
        id: "D_kwDOC9UAQs4ATwEp",
        title: "Page interaction on click for pagination",
        updatedAt: "2023-05-10T20:22:07Z",
      },
      heading: "Page interaction on click for pagination - Answer",
      slug: "discussion-answer-5177641",
    },
  ],
  "https://github.com/twilio-labs/paste/discussions/2337": [
    {
      path: "https://github.com/twilio-labs/paste/discussions/2337",
      content:
        '# Buttons with link functionality\nHi Team!\r\n\r\nI have some questions about buttons with link functionality.\r\nThe paste guidelines suggest to use buttons with link functionality when we want to navigate the user, the addition of the icons help indicate the action performed on click is a navigation.\r\nIs it possible to get more context around the term "navigate"?\r\n\r\nDoes navigate mean:\r\n- going somewhere else on the same page\r\n- going to a completely new page\r\n- going from one dedicated place in the side navigation to another\r\n- displaying new UI\r\n\r\nI\'ve looked at other parts of console, and navigate means that you are going from one dedicated place in the side navigation to another. The A2P homepage currently uses buttons with link functionality and I just want to make sure we are utilizing them in the correct way.\r\n\r\nThank you so much for all your help! ',
      similarity: 0.829035758972168,
      source: "twilio-labs/paste",
      type: "github-discussions",
      meta: {
        id: "D_kwDOC9UAQs4APLzh",
        title: "Buttons with link functionality",
        updatedAt: "2022-07-20T09:29:56Z",
      },
      heading: "Buttons with link functionality",
      slug: "discussion-3980513",
    },
    {
      path: "https://github.com/twilio-labs/paste/discussions/2337",
      content:
        '# Buttons with link functionality - Answer\nHello again, @jkiga 👋 \r\n\r\nWe define **navigate** to mean any **route based URL change**.\r\n\r\nSo taking a look at your list of examples 👇 \r\n> going somewhere else on the same page ✅\r\n\r\nThis is only navigation when that change in position (e.g. "going somewhere") is caused by a change in location (e.g the URL). For example, in-page navigation using `id` attributes and matching hashed `href` attributes on the anchor.\r\n<br>\r\n> going to a completely new page ✅\r\n\r\nIf the change in page implies a change in location (URL), then yes.\r\n<br>\r\n> going from one dedicated place in the side navigation to another ✅\r\n\r\nClicking on a navigation item and being redirected to a new location (e.g, new page new URL), is in fact navigation.\r\n<br>\r\n> displaying new UI 🟨 \r\n\r\nNot necessarily. You can couple page content/UI to location, but they are not necessarily always coupled.\r\n',
      similarity: 0.826784372329712,
      source: "twilio-labs/paste",
      type: "github-discussions",
      meta: {
        id: "D_kwDOC9UAQs4APLzh",
        title: "Buttons with link functionality",
        updatedAt: "2022-07-20T09:29:56Z",
      },
      heading: "Buttons with link functionality - Answer",
      slug: "discussion-answer-3980513",
    },
  ],
  "https://github.com/twilio-labs/paste/discussions/3307": [
    {
      path: "https://github.com/twilio-labs/paste/discussions/3307",
      content:
        '# No vertical in-page navigation\nHello team, \r\n\r\nPer paste guidance we should be using in-page navigation instead of tabs if we are navigating user to a different URL per tab. \r\nFor Segment-> Unify settings we need both a horizontal in-page navigation and a vertical in-page navigation. However it seems like we don\'t have a vertical in-page navigation per my ENG team\'s investigation. Could you confirm if that\'s true?\r\n\r\nIf that\'s the case, should we use vertical tabs instead or use 2 horizontal in-page navigation? I personally think two horizontal in-page navigation is bad UX. \r\n\r\nThank you so much for your help!\r\n\r\n<img width="1359" alt="Screenshot 2023-07-05 at 1 38 05 PM" src="https://github.com/twilio-labs/paste/assets/56697620/3bd9ff21-4eb6-4677-ac46-75f385d678ed">\r\n',
      similarity: 0.827467799186707,
      source: "twilio-labs/paste",
      type: "github-discussions",
      meta: {
        id: "D_kwDOC9UAQs4AUfk9",
        title: "No vertical in-page navigation",
        updatedAt: "2023-08-02T17:18:19Z",
      },
      heading: "No vertical in-page navigation",
      slug: "discussion-5372221",
    },
  ],
} as GroupedSearchResults;
