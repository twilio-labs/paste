(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7890],{6132:e=>{"use strict";e.exports=JSON.parse('{"name":"@twilio-paste/keyboard-key","version":"2.0.1","category":"typography","status":"production","description":"A Keyboard Key distinguishes a keyboard command or shortcut from other text.","author":"Twilio Inc.","license":"MIT","main:dev":"src/index.tsx","main":"dist/index.js","module":"dist/index.es.js","types":"dist/index.d.ts","sideEffects":false,"publishConfig":{"access":"public"},"files":["dist"],"scripts":{"build":"yarn clean && NODE_ENV=production node build.js && tsc","build:js":"NODE_ENV=development node build.js","build:typedocs":"tsx ../../../../tools/build/generate-type-docs","clean":"rm -rf ./dist","tsc":"tsc"},"peerDependencies":{"@twilio-paste/animation-library":"^3.0.0","@twilio-paste/box":"^11.0.0","@twilio-paste/color-contrast-utils":"^5.0.0","@twilio-paste/customization":"^9.0.0","@twilio-paste/design-tokens":"^10.3.0","@twilio-paste/style-props":"^10.0.0","@twilio-paste/styling-library":"^4.0.0","@twilio-paste/theme":"^12.0.0","@twilio-paste/types":"^7.0.0","@types/react":"^17.0.2 || ^18.0.27 || ^19.0.0","@types/react-dom":"^17.0.2 || ^18.0.10 || ^19.0.0","react":"^17.0.2 || ^18.0.0 || ^19.0.0","react-dom":"^17.0.2 || ^18.0.0 || ^19.0.0"},"devDependencies":{"@twilio-paste/animation-library":"^3.0.1","@twilio-paste/box":"^11.0.1","@twilio-paste/color-contrast-utils":"^5.0.0","@twilio-paste/customization":"^9.0.1","@twilio-paste/design-tokens":"^10.11.0","@twilio-paste/style-props":"^10.0.1","@twilio-paste/styling-library":"^4.0.1","@twilio-paste/theme":"^12.0.1","@twilio-paste/types":"^7.0.1","@types/react":"^19.0.8","@types/react-dom":"^19.0.3","react":"^19.0.0","react-dom":"^19.0.0","tsx":"^4.0.0","typescript":"^4.9.4"}}')},15367:(e,o,t)=>{"use strict";t.d(o,{Cv:()=>s,PK:()=>p,xP:()=>l});var a=t(76127),r=t(41456),y=t(55729),n=t(4073),i=t(629),d=y.createContext({}),s=y.forwardRef(({children:e,element:o="BLOCKQUOTE",url:t,marginBottom:n="space70",...i},s)=>y.createElement(a.az,{...(0,a.x8)(i),ref:s,display:"flex",columnGap:"space50",alignItems:"flex-start",lineHeight:"lineHeight30",fontSize:"fontSize30",marginBottom:n,element:o},y.createElement(r.BlockquoteIcon,{element:`${o}_ICON`,decorative:!0,color:"colorTextIcon"}),y.createElement(d.Provider,{value:{url:t}},y.createElement(a.az,{element:`INNER_${o}`},e))));s.displayName="Blockquote";var l=y.forwardRef(({children:e,element:o="BLOCKQUOTE_CONTENT",...t},r)=>{let{url:n}=y.useContext(d);return y.createElement(a.az,{...(0,a.x8)(t),as:"blockquote",margin:"space0",ref:r,element:o,cite:n},e)});l.displayName="BlockquoteContent";var p=y.forwardRef(({element:e="BLOCKQUOTE_CITATION",author:o,source:t,...r},s)=>{let{url:l}=y.useContext(d);return y.createElement(a.az,{...(0,a.x8)(r),marginTop:"space30",marginBottom:"space0",as:"p",element:e,ref:s},"—"," ",y.createElement(i.EY,{as:"span",fontWeight:"fontWeightSemibold",element:`${e}_AUTHOR`},o),t?y.createElement(y.Fragment,null,","," ",y.createElement(a.az,{as:"cite",fontStyle:"normal",element:`${e}_CITE`},l?y.createElement(n.Mz,{href:l,showExternal:!0,element:`${e}_ANCHOR`},t):y.createElement(i.EY,{as:"span",element:`${e}_TEXT`},t))):null)});p.displayName="BlockquoteCitation"},28627:(e,o,t)=>{"use strict";t.r(o),t.d(o,{SearchIcon:()=>n});var a=t(36669),r=t(55729),y=t(96316);let n=r.forwardRef(({as:e,display:o,element:t="ICON",size:n,color:i,title:d,decorative:s},l)=>{let p=`SearchIcon-${(0,a.GV)()}`;if(!s&&null==d)throw Error("[SearchIcon]: Missing a title for non-decorative icon.");return r.createElement(y.IconWrapper,{as:e,display:o,element:t,size:n,color:i,ref:l},r.createElement("svg",{role:"img","aria-hidden":s,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":p},d?r.createElement("title",{id:p},d):null,r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.43 5.43a4.882 4.882 0 017.383 6.347l2.973 2.973a.732.732 0 01-1.036 1.036l-2.973-2.973A4.883 4.883 0 015.43 5.43zm1.035 1.035a3.417 3.417 0 104.833 4.833 3.417 3.417 0 00-4.833-4.833z"})))});n.displayName="SearchIcon"},37866:(e,o,t)=>{"use strict";t.r(o),t.d(o,{__N_SSG:()=>E,default:()=>S,getStaticProps:()=>I,mdxHeadings:()=>D,meta:()=>N}),t(55729);var a=t(11885),r=t(8099),y=t(54652),n=t(4073),i=t(76127),d=t(15367),s=t(95036),l=t(51582),p=t(50163),m=t(50010),c=t(85152),u=t(84498),g=t(44255),b=t(92980),K=t(28627),h=t(6132),T=t(40615),x=t(89564);let k=`<KeyboardKeyGroup>
  <KeyboardKey>Control</KeyboardKey>
  <KeyboardKey>B</KeyboardKey>
</KeyboardKeyGroup>
`.trim(),f=`<>
    Press{" "}<KeyboardKeyGroup>
        <KeyboardKey>Control</KeyboardKey>
        <KeyboardKey>S</KeyboardKey>
    </KeyboardKeyGroup>{" "}to save.
</>`.trim(),C=`const DisabledExample = () => {
  const menu = useMenuState();
  return (
    <Box minHeight="230px">
        <Paragraph>Open the Menu for the disabled Keyboard Key in context:</Paragraph>
        <MenuButton {...menu} variant="secondary">
            Edit <ChevronDownIcon decorative />
        </MenuButton>
        <Menu {...menu} aria-label="Actions">
            <MenuItem {...menu} aria-keyshortcuts="command+x">
                <Box display="flex" justifyContent="space-between">
                    Cut
                    <KeyboardKeyGroup>
                        <KeyboardKey>Cmd</KeyboardKey>
                        <KeyboardKey>X</KeyboardKey>
                    </KeyboardKeyGroup>
                </Box>
            </MenuItem>
            <MenuItem {...menu} aria-keyshortcuts="command+v">
                <Box display="flex" justifyContent="space-between">
                    Paste
                    <KeyboardKeyGroup>
                        <KeyboardKey>Cmd</KeyboardKey>
                        <KeyboardKey>V</KeyboardKey>
                    </KeyboardKeyGroup>
                </Box>
            </MenuItem>
            <MenuItem disabled aria-disabled {...menu}  aria-keyshortcuts="command+s">
                <Box display="flex" justifyContent="space-between">
                    Save
                    <KeyboardKeyGroup disabled>
                        <KeyboardKey>Cmd</KeyboardKey>
                        <KeyboardKey>S</KeyboardKey>
                    </KeyboardKeyGroup>
                </Box>
            </MenuItem>
        </Menu>
    </Box>
  );
};

render(
    <DisabledExample />
)`.trim(),w=`const PressedExample = () => {
    const keyCombinationState = useKeyCombination({
        keys: ["Shift", "s"],
        onCombinationPress: ()=> {},
        enablePressStyles: true,
    });

    return (
        <>
            <Paragraph>Press the “Shift” or “S” key to reveal the pressed states below:</Paragraph>
            <KeyboardKeyGroup {...keyCombinationState}>
                <KeyboardKey keyEvent="Shift">Shift</KeyboardKey>
                <KeyboardKey keyEvent="s">S</KeyboardKey>
            </KeyboardKeyGroup>
        </>
    )
}

render(
    <PressedExample />
)`.trim(),v=`<Stack orientation="horizontal" spacing="space60">
    <Tooltip
        actionHeader="Search shortcut"
        keyCombinationsActions={[
            { name: "Mac", eventKeyCombination: ["Command", "K"] },
            { name: "Windows", eventKeyCombination: ["Control", "K"] },
        ]}
    >
        <Button aria-keyshortcuts="command+k" variant="primary">
            <SearchIcon title="search" />
        </Button>
    </Tooltip>
    <Tooltip
        actionHeader="Search shortcut"
        keyCombinationsActions={[
            { eventKeyCombination: ["Command", "K"] },
        ]}
    >
        <Button aria-keyshortcuts="command+k" variant="primary">
            <SearchIcon title="search" />
        </Button>
    </Tooltip>
</Stack>`.trim(),G=`const HookExample = () => {
    const [combinationTriggeredText, setCombinationTriggeredText] = React.useState("");
    useKeyCombination({
        keys: ["Shift", "q"],
        onCombinationPress: () => {
            setCombinationTriggeredText("Shift + Q pressed");
        },
        enablePressStyles: true,
    });

    return (
        <>
            <Paragraph>Press the <KeyboardKeyGroup><KeyboardKey>Shift</KeyboardKey><KeyboardKey>Q</KeyboardKey></KeyboardKeyGroup> key to reveal the pressed states below:</Paragraph>
            <Paragraph>Combination triggered: {combinationTriggeredText}</Paragraph>
        </>
    )
}

render(
    <HookExample />
)`.trim(),z=`const HookExample = () => {
  const [combinationTriggeredText, setCombinationTriggeredText] = React.useState("");

  useKeyCombinations({
    combinations: [
      {
        keys: ["Control", "b"],
        onCombinationPress: () => {
          setCombinationTriggeredText("Control + B pressed");
        },
        disabled: false,
      },
      {
        keys: ["Control", "k"],
        onCombinationPress: () => {
          setCombinationTriggeredText("Control + K pressed");
        },
        disabled: false,
      },
      {
        keys: ["Control", "y"],
        onCombinationPress: () => {
          setCombinationTriggeredText("Control + Y pressed");
        },
        disabled: false,
      },
    ],
  });

  return (
    <>
        <Paragraph marginBottom="space0">Use the following combinations to test. You can also set the disabled state in the code block below.</Paragraph>
        <Box marginY="space30">
            <Stack orientation="vertical" spacing="space20">
                <KeyboardKeyGroup>
                    <KeyboardKey>Control</KeyboardKey>
                    <KeyboardKey>B</KeyboardKey>
                </KeyboardKeyGroup>
                <KeyboardKeyGroup>
                    <KeyboardKey>Control</KeyboardKey>
                    <KeyboardKey>K</KeyboardKey>
                </KeyboardKeyGroup>
                <KeyboardKeyGroup>
                    <KeyboardKey>Control</KeyboardKey>
                    <KeyboardKey>Y</KeyboardKey>
                </KeyboardKeyGroup>
            </Stack>
        </Box>
        <Paragraph>Combination triggered: {combinationTriggeredText}</Paragraph>
    </>
  );
};

render(
    <HookExample />
)`.trim();var E=!0;let N={title:"Keyboard Key - Components",package:"@twilio-paste/keyboard-key",description:h.description,slug:"/components/keyboard-key/"},I=async()=>({props:{data:{...h,...feature},navigationData,mdxHeadings:D,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/keyboard-key",storybookUrl:"/?path=/story/components-keyboardkey"}}}),D=[{value:"Guidelines",depth:2},{value:"About Keyboard Key and Keyboard Key Group",depth:3},{value:"Accessibility",depth:3},{value:"Examples",depth:2},{value:"Default Keyboard Key",depth:3},{value:"Disabled Keyboard Key",depth:3},{value:"Pressed Keyboard Key",depth:3},{value:"Keyboard Key within Tooltip",depth:2},{value:"Keyboard combination hooks",depth:2},{value:"useKeyCombination",depth:3},{value:"useKeyCombinations",depth:3},{value:"Composition Notes",depth:2},{value:"Common keyboard shortcuts",depth:2},{value:"Keyboard commands to avoid",depth:3},{value:"When to use Keyboard Key",depth:2}],M=function(e){return console.warn("Component LivePreview was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",e)},B={meta:N,getStaticProps:I,mdxHeadings:D},P=T.A;function S({components:e,...o}){return(0,a.yg)(P,{...B,...o,components:e,mdxType:"MDXLayout"},(0,a.yg)(M,{scope:{KeyboardKeyGroup:r.kM,KeyboardKey:r.zG},language:"jsx",mdxType:"LivePreview"},k),(0,a.yg)("h2",null,"Guidelines"),(0,a.yg)("h3",null,"About Keyboard Key and Keyboard Key Group"),(0,a.yg)("p",null,"A Keyboard Key distinguishes a keyboard command or shortcut from other text."),(0,a.yg)("p",null,"Keyboard shortcuts are used for extremely frequent platform-level actions (like activating search), or in canvas or productivity tools like Studio or Flex. In general, ",(0,a.yg)("strong",{parentName:"p"},"avoid implementing keyboard shortcuts"),", especially with single keys, because they can override shortcuts that are already set by operating systems, browsers, assistive technologies, or user preferences."),(0,a.yg)(d.Cv,{url:"https://www.nngroup.com/articles/ui-copy/#guidelines-for-command-shortcuts",mdxType:"Blockquote"},(0,a.yg)(d.xP,{mdxType:"BlockquoteContent"},"Not every task on your application needs a shortcut, so observe your users interacting with your application to determine the most common tasks and prioritize keyboard shortcuts for these."),(0,a.yg)(d.PK,{author:"Nielsen Norman Group",source:"UI Copy: UX Guidelines for Command Names and Keyboard Shortcuts",mdxType:"BlockquoteCitation"})),(0,a.yg)("p",null,"Keyboards can also vary across operating systems and global regions, so make sure your key commands work for all users."),(0,a.yg)("p",null,"Reference ",(0,a.yg)("a",{parentName:"p",href:"#common-keyboard-shortcuts"},"this list of existing common keyboard shortcuts")," before creating a new one."),(0,a.yg)(i.az,{marginBottom:"space60",mdxType:"Box"},(0,a.yg)(y.Pq,{variant:"neutral",mdxType:"Callout"},(0,a.yg)(y.v,{mdxType:"CalloutHeading"},"Are you considering implementing a new keyboard shortcut?"),(0,a.yg)(y.wz,{mdxType:"CalloutText"},"Reach out to us in a"," ",(0,a.yg)(n.Mz,{href:"https://github.com/twilio-labs/paste/discussions",showExternal:!0,i18nExternalLinkLabel:"Navigates to Paste Github Discussions",mdxType:"Anchor"},"Github Discussion")," ","so we can keep keyboard shortcuts standardized across our platforms by connecting you with other teams, like Flex and Studio, who have already built them into features."))),(0,a.yg)("h3",null,"Accessibility"),(0,a.yg)("p",null,`To make sure users easily understand keyboard commands, use text instead of symbols to write out modifier keys like Command, Control, and Option. Example: Use “Command” instead of “⌘”. Use the abbreviation, e.g., “Cmd”, only when space is limited.`),(0,a.yg)("p",null,"To expose the presence of shortcuts to assistive technologies, use the ",(0,a.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-keyshortcuts"},(0,a.yg)("inlineCode",{parentName:"a"},"aria-keyshortcuts"))," attribute on the element that gets activated by the shortcut."),(0,a.yg)("h2",null,"Examples"),(0,a.yg)("h3",null,"Default Keyboard Key"),(0,a.yg)("p",null,`Use Keyboard Key for a single key command. Use Keyboard Key Group for key combination commands or shortcuts. When showing a key combination, do not put a “+” between Keyboard Keys or in Keyboard Key Group.`),(0,a.yg)(M,{scope:{KeyboardKeyGroup:r.kM,KeyboardKey:r.zG,Paragraph:m.f},language:"jsx",mdxType:"LivePreview"},f),(0,a.yg)("h3",null,"Disabled Keyboard Key"),(0,a.yg)("p",null,"Disabled Keyboard Keys should be used when the element a shortcut activates is disabled, like a disabled Menu item or Button."),(0,a.yg)(M,{scope:{KeyboardKeyGroup:r.kM,KeyboardKey:r.zG,Paragraph:m.f,useMenuState:l.EH,Menu:p.W1,MenuButton:p.IU,MenuItem:p.Dr,ChevronDownIcon:b.ChevronDownIcon,Box:i.az},language:"jsx",noInline:!0,mdxType:"LivePreview"},C),(0,a.yg)("h3",null,"Pressed Keyboard Key"),(0,a.yg)("p",null,"Use pressed Keyboard Keys to give visual feedback when a key is pressed."),(0,a.yg)("p",null,"This is especially helpful when onboarding users to keyboard shortcuts. However, use the pressed state thoughtfully, only when it enhances the user experience. It can be distracting in cases where a user is using the keyboard for other interactions, like on a page with form fields."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"KeyboardKeyGroup")," accepts state returned from the ",(0,a.yg)("a",{parentName:"p",href:"#usekeycombination"},(0,a.yg)("inlineCode",{parentName:"a"},"useKeyCombination"))," hook that allows pressed styling to be enabled. You must also specify ",(0,a.yg)("inlineCode",{parentName:"p"},"keyEvent")," on the component to detect the correct key pressed."),(0,a.yg)("p",null,"A mapping of key events can be found ",(0,a.yg)("a",{parentName:"p",href:"https://www.freecodecamp.org/news/javascript-keycode-list-keypress-event-key-codes/"},"here"),"."),(0,a.yg)(M,{scope:{KeyboardKeyGroup:r.kM,KeyboardKey:r.zG,useKeyCombination:r.Uu,Paragraph:m.f},noInline:!0,language:"jsx",mdxType:"LivePreview"},w),(0,a.yg)("h2",null,"Keyboard Key within Tooltip"),(0,a.yg)("p",null,"Add Keyboard Key(s) to a ",(0,a.yg)("a",{parentName:"p",href:"/components/tooltip"},"Tooltip")," to show a shortcut associated with an interactive component. Use the ",(0,a.yg)("inlineCode",{parentName:"p"},"actionHeader")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"keyCombinationsActions")," to display a heading and the associated keyboard shortcut (or shortcuts, if displaying for multiple operating systems/keyboards)."),(0,a.yg)(M,{scope:{Button:s.$n,Tooltip:g.m,Box:i.az,SearchIcon:K.SearchIcon,Stack:u.B},language:"jsx",mdxType:"LivePreview"},v),(0,a.yg)("h2",null,"Keyboard combination hooks"),(0,a.yg)("h3",null,"useKeyCombination"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"useKeyCombination")," hook provides a way to configure the combination keys, callback, and additional state that can be used in ",(0,a.yg)("inlineCode",{parentName:"p"},"KeyboardKeyGroup")," to enable pressed styling."),(0,a.yg)(M,{scope:{useKeyCombination:r.Uu,Paragraph:m.f,KeyboardKeyGroup:r.kM,KeyboardKey:r.zG},noInline:!0,language:"jsx",mdxType:"LivePreview"},G),(0,a.yg)("h3",null,"useKeyCombinations"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"useKeyCombinations")," is similar to ",(0,a.yg)("a",{parentName:"p",href:"#useKeyCombination"},(0,a.yg)("inlineCode",{parentName:"a"},"useKeyCombination"))," but allows you to configure multiple combinations and callback mappings. Use this hook when you have many combinations on the same page. This will not include the ability to configure pressed styling and is designed to provide functionality when in Menu items or Tooltips."),(0,a.yg)(M,{scope:{useKeyCombinations:r.BT,Paragraph:m.f,KeyboardKeyGroup:r.kM,KeyboardKey:r.zG,Stack:u.B,Box:i.az},noInline:!0,language:"jsx",mdxType:"LivePreview"},z),(0,a.yg)("h2",null,"Composition Notes"),(0,a.yg)("p",null,`Keyboard Key is mainly a presentational component, and can't detect operating systems. When a user needs to press different keys on different operating systems (e.g., “Command” on Mac and “Control” on Windows), make sure to either list both shortcuts or programmatically swap the shortcut displayed based on the operating system.`),(0,a.yg)("p",null,"When writing out keys:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},`Use title case. Example: “Caps Lock”, not “Caps lock”.`),(0,a.yg)("li",{parentName:"ul"},`For modifier keys like Control, Command, and Option, spell out the key instead of using abbreviations or symbols. Example: “Control”, not “Ctrl” or “^”. Use the abbreviation only when space is limited.`),(0,a.yg)("li",{parentName:"ul"},`Use “Enter” instead of “Return”.`)),(0,a.yg)("h2",null,"Common keyboard shortcuts"),(0,a.yg)("p",null,"Common platform-level shortcuts that are used across Twilio include:"),(0,a.yg)(i.az,{marginBottom:"space60",mdxType:"Box"},(0,a.yg)(c.XI,{mdxType:"Table"},(0,a.yg)(c.D1,{mdxType:"THead"},(0,a.yg)(c.Tr,{mdxType:"Tr"},(0,a.yg)(c.Th,{mdxType:"Th"},"Action"),(0,a.yg)(c.Th,{mdxType:"Th"},"Windows/Linux"),(0,a.yg)(c.Th,{mdxType:"Th"},"Mac"))),(0,a.yg)(c.vc,{mdxType:"TBody"},(0,a.yg)(c.Tr,{mdxType:"Tr"},(0,a.yg)(c.Td,{mdxType:"Td"},"Open search"),(0,a.yg)(c.Td,{mdxType:"Td"},(0,a.yg)(r.kM,{mdxType:"KeyboardKeyGroup"},(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"Control"),(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"K"))),(0,a.yg)(c.Td,{mdxType:"Td"},(0,a.yg)(r.kM,{mdxType:"KeyboardKeyGroup"},(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"Command"),(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"K")))),(0,a.yg)(c.Tr,{mdxType:"Tr"},(0,a.yg)(c.Td,{mdxType:"Td"},"Bold text"),(0,a.yg)(c.Td,{mdxType:"Td"},(0,a.yg)(r.kM,{mdxType:"KeyboardKeyGroup"},(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"Control"),(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"B"))),(0,a.yg)(c.Td,{mdxType:"Td"},(0,a.yg)(r.kM,{mdxType:"KeyboardKeyGroup"},(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"Command"),(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"B")))),(0,a.yg)(c.Tr,{mdxType:"Tr"},(0,a.yg)(c.Td,{mdxType:"Td"},"Italicize text"),(0,a.yg)(c.Td,{mdxType:"Td"},(0,a.yg)(r.kM,{mdxType:"KeyboardKeyGroup"},(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"Control"),(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"I"))),(0,a.yg)(c.Td,{mdxType:"Td"},(0,a.yg)(r.kM,{mdxType:"KeyboardKeyGroup"},(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"Command"),(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"I")))),(0,a.yg)(c.Tr,{mdxType:"Tr"},(0,a.yg)(c.Td,{mdxType:"Td"},"Underline text"),(0,a.yg)(c.Td,{mdxType:"Td"},(0,a.yg)(r.kM,{mdxType:"KeyboardKeyGroup"},(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"Control"),(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"U"))),(0,a.yg)(c.Td,{mdxType:"Td"},(0,a.yg)(r.kM,{mdxType:"KeyboardKeyGroup"},(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"Command"),(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"U"))))))),(0,a.yg)("p",null,"From ",(0,a.yg)("a",{parentName:"p",href:"https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#keyassignmentconventionsforcommonfunctions"},"W3C's guide to developing a keyboard interface"),`:
The following keyboard commands should be used in any context where the actions are appropriate.`),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Use these commands only for the actions specified.")," Do not use them for any other command:"),(0,a.yg)(i.az,{marginBottom:"space60",mdxType:"Box"},(0,a.yg)(c.XI,{mdxType:"Table"},(0,a.yg)(c.D1,{mdxType:"THead"},(0,a.yg)(c.Tr,{mdxType:"Tr"},(0,a.yg)(c.Th,{mdxType:"Th"},"Action"),(0,a.yg)(c.Th,{mdxType:"Th"},"Windows/Linux"),(0,a.yg)(c.Th,{mdxType:"Th"},"Mac"))),(0,a.yg)(c.vc,{mdxType:"TBody"},(0,a.yg)(c.Tr,{mdxType:"Tr"},(0,a.yg)(c.Td,{mdxType:"Td"},"Copy to clipboard"),(0,a.yg)(c.Td,{mdxType:"Td"},(0,a.yg)(r.kM,{mdxType:"KeyboardKeyGroup"},(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"Control"),(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"C"))),(0,a.yg)(c.Td,{mdxType:"Td"},(0,a.yg)(r.kM,{mdxType:"KeyboardKeyGroup"},(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"Command"),(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"C")))),(0,a.yg)(c.Tr,{mdxType:"Tr"},(0,a.yg)(c.Td,{mdxType:"Td"},"Paste from clipboard"),(0,a.yg)(c.Td,{mdxType:"Td"},(0,a.yg)(r.kM,{mdxType:"KeyboardKeyGroup"},(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"Control"),(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"V"))),(0,a.yg)(c.Td,{mdxType:"Td"},(0,a.yg)(r.kM,{mdxType:"KeyboardKeyGroup"},(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"Command"),(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"V")))),(0,a.yg)(c.Tr,{mdxType:"Tr"},(0,a.yg)(c.Td,{mdxType:"Td"},"Cut to clipboard"),(0,a.yg)(c.Td,{mdxType:"Td"},(0,a.yg)(r.kM,{mdxType:"KeyboardKeyGroup"},(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"Control"),(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"X"))),(0,a.yg)(c.Td,{mdxType:"Td"},(0,a.yg)(r.kM,{mdxType:"KeyboardKeyGroup"},(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"Command"),(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"X")))),(0,a.yg)(c.Tr,{mdxType:"Tr"},(0,a.yg)(c.Td,{mdxType:"Td"},"Undo last action"),(0,a.yg)(c.Td,{mdxType:"Td"},(0,a.yg)(r.kM,{mdxType:"KeyboardKeyGroup"},(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"Control"),(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"Z"))),(0,a.yg)(c.Td,{mdxType:"Td"},(0,a.yg)(r.kM,{mdxType:"KeyboardKeyGroup"},(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"Command"),(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"Z")))),(0,a.yg)(c.Tr,{mdxType:"Tr"},(0,a.yg)(c.Td,{mdxType:"Td"},"Redo action"),(0,a.yg)(c.Td,{mdxType:"Td"},(0,a.yg)(r.kM,{mdxType:"KeyboardKeyGroup"},(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"Control"),(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"Y"))),(0,a.yg)(c.Td,{mdxType:"Td"},(0,a.yg)(r.kM,{mdxType:"KeyboardKeyGroup"},(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"Command"),(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"Shift"),(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"Y"))))))),(0,a.yg)("h3",null,"Keyboard commands to avoid"),(0,a.yg)("p",null,"These keyboard commands should be avoided since they're used by operating systems or assistive technologies:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Any modifier keys (a keyboard key that changes the function of other keys when pressed together) + any of ",(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"Tab"),", ",(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"Enter"),", ",(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"Space"),", or ",(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"Escape"),"."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"Alt")," + a function key."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"Caps Lock")," + any other combination of keys."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"Insert")," + any combination of other keys."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"Scroll Lock")," + any combination of other keys."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(r.kM,{mdxType:"KeyboardKeyGroup"},(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"Control"),(0,a.yg)(r.zG,{mdxType:"KeyboardKey"},"Option"))," + any combination of other keys.")),(0,a.yg)("p",null,"Read more about other conflicts with browsers and international keyboards in ",(0,a.yg)("a",{parentName:"p",href:"https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#keyboardshortcuts"},"W3C's guide"),"."),(0,a.yg)("h2",null,"When to use Keyboard Key"),(0,a.yg)(x.l,{mdxType:"DoDont"},(0,a.yg)(x.Do,{title:"Do",body:"Implement keyboard shortcuts for extremely frequent platform-level actions.",center:!0,mdxType:"Do"}),(0,a.yg)(x.w,{title:"Don't",body:"Don't implement keyboard shortcuts, especially single keys, for actions that aren't platform-level or for a canvas productivity tool. They should be used when there's already a high level of engagement and interaction on an action, and not as a way to increase engagement.",center:!0,mdxType:"Dont"}),(0,a.yg)(x.Do,{title:"Do",body:"Use full words for modifier keys, such as “Command” and “Control”.",center:!0,mdxType:"Do"}),(0,a.yg)(x.w,{title:"Don't",body:"Don't use symbols like “⌘”. Only use abbreviations like “Cmd” when space is limited.",center:!0,mdxType:"Dont"}),(0,a.yg)(x.Do,{title:"Do",body:"For key combinations, place Keyboard Keys next to each other separated by a space.",center:!0,mdxType:"Do"}),(0,a.yg)(x.w,{title:"Don't",body:"Don't use a “+” between key combinations.",center:!0,mdxType:"Dont"}),(0,a.yg)(x.Do,{title:"Do",body:"Use the aria-keyshortcuts on the focusable element to announce to users with screen readers",center:!0,mdxType:"Do"})))}S.isMDXComponent=!0},40615:(e,o,t)=>{"use strict";t.d(o,{A:()=>g});var a=t(72387),r=t(76127),y=t(95669),n=t.n(y),i=t(81278);t(55729);var d=t(10511),s=t(43084),l=t(10732),p=t(62887),m=t(63437),c=t(38992);let u={h1:()=>null},g=({children:e,meta:o,navigationData:t,data:y,mdxHeadings:g,pageHeaderData:{categoryRoute:b,githubUrl:K,storybookUrl:h}})=>{let T=o.title?`${o.title} - ${c.DZ.TITLE}`:c.DZ.TITLE,x=o.description||c.DZ.DESCRIPTION,k=(0,i.useRouter)();return(0,a.FD)(m.T,{navigationData:t,children:[(0,a.FD)(n(),{children:[(0,a.Y)("title",{children:T}),(0,a.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${k.pathname}`}),(0,a.Y)("meta",{name:"description",content:x},"description")]}),(0,a.FD)(d.s,{children:[(0,a.Y)(p.c,{categoryRoute:b,githubUrl:K,storybookUrl:h,data:y}),(0,a.FD)(r.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,a.Y)(l.i,{data:g}),(0,a.Y)(r.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,a.Y)(s.Q,{componentOverrides:o.package?u:{},children:e})})]})]})]})}},41456:(e,o,t)=>{"use strict";t.r(o),t.d(o,{BlockquoteIcon:()=>n});var a=t(36669),r=t(55729),y=t(96316);let n=r.forwardRef(({as:e,display:o,element:t="ICON",size:n,color:i,title:d,decorative:s},l)=>{let p=`BlockquoteIcon-${(0,a.GV)()}`;if(!s&&null==d)throw Error("[BlockquoteIcon]: Missing a title for non-decorative icon.");return r.createElement(y.IconWrapper,{as:e,display:o,element:t,size:n,color:i,ref:l},r.createElement("svg",{role:"img","aria-hidden":s,width:"100%",height:"100%",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":p},d?r.createElement("title",{id:p},d):null,r.createElement("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M15.865 16.305a44.92 44.92 0 01-1.698.028c-.707 0-1.264-.011-1.699-.028-1.018-.039-1.754-.819-1.781-1.824a62.15 62.15 0 01-.02-1.67V9.646c0-3.19 2.12-5.165 4.585-5.926.335-.103.765-.073 1.061.236.224.232.378.5.484.738.267.605-.107 1.181-.552 1.454-.707.433-1.218.918-1.554 1.48-.29.485-.459 1.044-.498 1.705.635 0 1.148.007 1.56.017 1.065.025 1.87.833 1.896 1.897a65.173 65.173 0 01-.002 3.234c-.028 1.005-.764 1.785-1.782 1.824zm-8.333 0a44.92 44.92 0 01-1.699.028c-.706 0-1.263-.011-1.698-.028-1.018-.039-1.754-.819-1.782-1.824-.011-.432-.02-.981-.02-1.67V9.646c0-3.19 2.12-5.164 4.585-5.925.336-.104.765-.074 1.062.235.224.232.378.5.483.738.268.606-.106 1.182-.552 1.454-.707.434-1.217.918-1.553 1.48-.29.485-.459 1.044-.499 1.705.636 0 1.149.007 1.56.017 1.065.025 1.87.833 1.897 1.897.01.415.017.93.017 1.564 0 .689-.008 1.238-.02 1.67-.027 1.005-.764 1.785-1.78 1.824z"})))});n.displayName="BlockquoteIcon"},65908:(e,o,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/keyboard-key",function(){return t(37866)}])}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=65908)),_N_E=e.O()}]);