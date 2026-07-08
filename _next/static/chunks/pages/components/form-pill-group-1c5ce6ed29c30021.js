(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8585],{659:(e,l,t)=>{"use strict";t.r(l),t.d(l,{__N_SSG:()=>O,default:()=>j,getStaticProps:()=>U,mdxHeadings:()=>_,meta:()=>H}),t(55729);var o=t(11885),r=t(59508),a=t(11881),i=t(76127),n=t(23768),c=t(99786),s=t(9098),d=t(25125),m=t(63289),p=t(11322),u=t(30584),h=t(76882),P=t(80759),g=t(54576),y=t(23441),v=t(95010),f=t(52543),F=t(61218),w=t(97994),I=t(46101),b=t(68885),S=t(57928),x=t(64709),V=t(89564);let E=`
const BasicFormPillGroup = () => {
  const pillState = useFormPillState();

  return (
    <form>
      <FormPillGroup {...pillState} aria-label="Products:">
        <FormPill {...pillState}>
         Voice
        </FormPill>
        <FormPill {...pillState}>
          <ProductVideoIcon decorative />
          Video
        </FormPill>
        <FormPill {...pillState}>
          <ProductVerifyIcon decorative />
          Verify
        </FormPill>
      </FormPillGroup>
    </form>
  );
};

render(
  <BasicFormPillGroup />
)
`.trim(),C=`
const BasicFormPillGroup = () => {
  const pillState = useFormPillState();

  return (
    <form>
      <FormPillGroup {...pillState} aria-label="Products:" size="large">
        <FormPill {...pillState}>
         Voice
        </FormPill>
        <FormPill {...pillState}>
          <ProductVideoIcon decorative />
          Video
        </FormPill>
        <FormPill {...pillState}>
          <ProductVerifyIcon decorative />
          Verify
        </FormPill>
      </FormPillGroup>
    </form>
  );
};

render(
  <BasicFormPillGroup />
)
`.trim(),z=`
const TreeVariantExample = () => {
  const pillState = useFormPillState();

  return (
    <form>
      <FormPillGroup {...pillState} aria-label="Products:" variant="tree">
        <FormPill {...pillState}>
         Voice
        </FormPill>
        <FormPill {...pillState}>
          <ProductVideoIcon decorative />
          Video
        </FormPill>
        <FormPill {...pillState}>
          <ProductVerifyIcon decorative />
          Verify
        </FormPill>
      </FormPillGroup>
    </form>
  );
};

render(
  <TreeVariantExample />
)
`.trim(),G=`
const SelectableFormPillGroup = () => {
  const [pills] = React.useState(['SMS', 'MMS', 'Fax', 'Voice', 'Messaging', 'Chat']);
  const [selectedSet, updateSelectedSet] = React.useState(new Set(['MMS', 'Voice', 'Chat']));
  const pillState = useFormPillState();

  const iconMap = {
    ['Fax']: <FaxCapableIcon decorative/>,
    ['Voice']: <ProductVoiceIcon decorative/>,
    ['Messaging']: <ProductMessagingIcon decorative/>,
    ['Chat']: <ProductChatIcon decorative/>,
  }

  return (
    <form>
      <FormPillGroup {...pillState} aria-label="Products:">
        {pills.map((pill) => (
          <FormPill
            key={pill}
            {...pillState}
            selected={selectedSet.has(pill)}
            onSelect={() => {
              const newSelectedSet = new Set(selectedSet);
              if (newSelectedSet.has(pill)) {
                newSelectedSet.delete(pill);
              } else {
                newSelectedSet.add(pill);
              }
              updateSelectedSet(newSelectedSet);
            }}
          >
            {iconMap[pill]}
            {pill}
          </FormPill>
        ))}
      </FormPillGroup>
    </form>
  );
};

render(
  <SelectableFormPillGroup />
)
`.trim(),N=`
const DismissableFormPillGroup = () => {
  const [pills, setPills] = React.useState(['Frontline', 'Phone Numbers', 'Authy']);
  const pillState = useFormPillState();

  const iconMap = {
    ['Phone Numbers']: <ProductPhoneNumbersIcon decorative/>,
  }

  return (
    <form>
      <FormPillGroup {...pillState} aria-label="Products:">
        {pills.map((pill, index) => (
          <FormPill
            key={pill}
            {...pillState}
            onDismiss={() => {
              setPills(pills.filter((_, i) => i !== index));
            }}
          >
            {iconMap[pill]}
            {pill}
          </FormPill>
        ))}
      </FormPillGroup>
    </form>
  );
};

render(
  <DismissableFormPillGroup />
)
`.trim(),M=`
const SelectableAndDismissableFormPillGroup = () => {
  const [pills, setPills] = React.useState(['Proxy', 'Interconnect', 'Trust Hub']);
  const [selectedSet, updateSelectedSet] = React.useState(new Set(['Interconnect']));
  const pillState = useFormPillState();

  const iconMap = {
    ['Interconnect']: <ProductInterconnectIcon decorative/>,
  }

  return (
    <form>
      <FormPillGroup {...pillState} aria-label="Products:">
        {pills.map((pill, index) => (
          <FormPill
            key={pill}
            {...pillState}
            onDismiss={() => {
              setPills(pills.filter((_, i) => i !== index));
              if (selectedSet.has(pill)) {
                const newSelectedSet = new Set(selectedSet);
                newSelectedSet.delete(pill);
                updateSelectedSet(newSelectedSet);
              }
            }}
            selected={selectedSet.has(pill)}
            onSelect={() => {
              const newSelectedSet = new Set(selectedSet);
              if (newSelectedSet.has(pill)) {
                newSelectedSet.delete(pill);
              } else {
                newSelectedSet.add(pill);
              }
              updateSelectedSet(newSelectedSet);
            }}
          >
            {iconMap[pill]}
            {pill}
          </FormPill>
        ))}
      </FormPillGroup>
    </form>
  );
};

render(
  <SelectableAndDismissableFormPillGroup />
)
`.trim(),T=`
const I18nFormPillGroup = () => {
  const pillState = useFormPillState();

  return (
    <form>
      <FormPillGroup
        {...pillState}
        aria-label="Votre sports favoris:"
        i18nKeyboardControls="Appuyez sur Supprimer ou Retour arri\xe8re pour supprimer. Appuyez sur Entr\xe9e pour basculer la s\xe9lection."
      >
        <FormPill {...pillState} variant="error" i18nErrorLabel="(Erreur)">
          Le tennis
        </FormPill>
        <FormPill {...pillState}>
          Le football am\xe9ricain
        </FormPill>
        <FormPill {...pillState} variant="error" i18nErrorLabel="(Erreur)">
          Le ski
        </FormPill>
        <FormPill {...pillState}>Le football</FormPill>
      </FormPillGroup>
    </form>
  );
};

render(
  <I18nFormPillGroup />
)
`.trim(),D=`
const SelectedStateExample = () => {
  const pillState = useFormPillState();

  return (
    <form>
      <FormPillGroup {...pillState} aria-label="Products:">
        <FormPill {...pillState} selected>
         Voice
        </FormPill>
        <FormPill {...pillState} selected>
          <ProductVideoIcon decorative />
          Video
        </FormPill>
        <FormPill {...pillState} selected>
          <ProductVerifyIcon decorative />
          Verify
        </FormPill>
      </FormPillGroup>
    </form>
  );
};

render(
  <SelectedStateExample />
)
`.trim(),L=`
const ErrorStateExample = () => {
  const pillState = useFormPillState();

  return (
    <form>
      <FormPillGroup {...pillState} aria-label="Products:">
        <FormPill {...pillState} variant="error">
         Voice
        </FormPill>
        <FormPill {...pillState} variant="error" selected>
          <ProductVideoIcon decorative />
          Video
        </FormPill>
        <FormPill {...pillState} variant="error">
          <ProductVerifyIcon decorative />
          Verify
        </FormPill>
        <FormPill {...pillState} variant="error" selected>
         Usage
        </FormPill>
      </FormPillGroup>
    </form>
  );
};

render(
  <ErrorStateExample />
)
`.trim(),A=`
const DisabledStateExample = () => {
  const pillState = useFormPillState();

  return (
    <form>
      <FormPillGroup {...pillState} aria-label="Products:">
        <FormPill {...pillState} disabled>
         Voice
        </FormPill>
        <FormPill {...pillState} disabled>
          <ProductVideoIcon decorative />
          Video
        </FormPill>
        <FormPill {...pillState} disabled>
          <ProductVerifyIcon decorative />
          Verify
        </FormPill>
        <FormPill {...pillState} disabled>
         Usage
        </FormPill>
      </FormPillGroup>
    </form>
  );
};

render(
  <DisabledStateExample />
)
`.trim(),k=`
const TruncateFormPillGroup = () => {
  const pillState = useFormPillState();

  return (
    <form>
      <FormPillGroup {...pillState} aria-label="Products:">
        <FormPill {...pillState}>
          <ProductInternetOfThingsIcon decorative />
          <Box maxWidth="size10">
            <Truncate title="Internet of Things">Internet of Things</Truncate>
          </Box>
        </FormPill>
        <FormPill {...pillState}>
          <ProductMarketingCampaignsIcon decorative />
          <Box maxWidth="size10">
            <Truncate title="Marketing Campaigns">Marketing Campaigns</Truncate>
          </Box>
        </FormPill>
        <FormPill {...pillState}>
          <ProductCodeExchangePartnerIcon decorative />
          <Box maxWidth="size10">
            <Truncate title="CodeExchange Partner">CodeExchange Partner</Truncate>
          </Box>
        </FormPill>
        <FormPill {...pillState}>
          <ProductEngagementIntelligencePlatformIcon decorative />
          <Box maxWidth="size10">
            <Truncate title="Engagement Intelligence Platform">Engagement Intelligence Platform</Truncate>
          </Box>
        </FormPill>
      </FormPillGroup>
    </form>
  );
};

render(
  <TruncateFormPillGroup />
)
`.trim(),B=`
const AvatarFormPillGroup = () => {
  const pillState = useFormPillState();

  return (
    <form>
      <FormPillGroup {...pillState} aria-label="People:">
        <FormPill {...pillState}>
          <Avatar size='sizeIcon30' name='Customer' src="/images/avatars/avatar4.png" />
          Customer
        </FormPill>
        <FormPill {...pillState}>
          <Avatar size='sizeIcon30' name='Agent' icon={AgentIcon} />
          Agent
        </FormPill>
      </FormPillGroup>
    </form>
  );
};

render(
  <AvatarFormPillGroup />
)
`.trim(),R=`
const IconFormPillGroup = () => {
  const pillState = useFormPillState();

  return (
    <form>
      <FormPillGroup {...pillState} aria-label="Products:">
        <FormPill {...pillState}>
          <ProductMessagingIcon decorative />
          Messaging
        </FormPill>
        <FormPill {...pillState}>
          <ProductBillingIcon decorative />
          Billing
        </FormPill>
        <FormPill {...pillState}>
          <ProductLookupIcon decorative />
          Lookup
        </FormPill>
        <FormPill {...pillState}>
          <ProductConversationsIcon decorative />
          Conversations
        </FormPill>
      </FormPillGroup>
    </form>
  );
};

render(
  <IconFormPillGroup />
)
`.trim();var W=t(40615),O=!0;let H={title:"Form Pill Group",package:"@twilio-paste/form-pill-group",description:"A Form Pill Group is an editable set of Pills that represent a collection of selectable or removable objects.",slug:"/components/form-pill-group/"},U=async()=>({props:{data:{...packageJson,...feature},navigationData,mdxHeadings:_,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/form-pill-group",storybookUrl:"/?path=/story/components-form-pill-group--basic"}}}),_=[{value:"Guidelines",depth:2},{value:"About Form Pill Group",depth:3},{value:"Accessibility",depth:4},{value:"Keyboard navigation",depth:5},{value:"Form Pill vs. Display Pill",depth:4},{value:"Examples",depth:2},{value:"Basic",depth:3},{value:"Large",depth:3},{value:"Selectable",depth:3},{value:"Dismissible",depth:3},{value:"Selectable and dismissible",depth:3},{value:"Mouse navigation",depth:4},{value:"Keyboard navigation",depth:4},{value:"Tree variant for filters",depth:3},{value:"Internationalization",depth:3},{value:"States",depth:2},{value:"Default or unselected",depth:3},{value:"Selected",depth:3},{value:"Error",depth:3},{value:"Disabled",depth:3},{value:"Composition notes",depth:2},{value:"Truncating text",depth:3},{value:"Adding an avatar",depth:3},{value:"Adding an icon",depth:3},{value:"When to use a Form Pill Group",depth:3}],$=function(e){return console.warn("Component LivePreview was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",e)},K={meta:H,getStaticProps:U,mdxHeadings:_},X=W.A;function j({components:e,...l}){return(0,o.yg)(X,{...K,...l,components:e,mdxType:"MDXLayout"},(0,o.yg)($,{scope:{FormPill:n.Ww,FormPillGroup:n.FD,useFormPillState:n.c8,ProductVideoIcon:b.ProductVideoIcon,ProductVerifyIcon:I.ProductVerifyIcon},noInline:!0,mdxType:"LivePreview"},E),(0,o.yg)("h2",null,"Guidelines"),(0,o.yg)("h3",null,"About Form Pill Group"),(0,o.yg)("p",null,"A Form Pill Group is an editable set of Pills that represents a collection of selectable and/or removable objects. They are used almost exclusively in multi-select editing situations."),(0,o.yg)("p",null,"A Form Pill Group can be used on its own to represent selection across a number of fields, such as showing currently applied filters. It can also be paired directly with an input field, such as a ",(0,o.yg)("a",{parentName:"p",href:"/components/combobox"},"Combobox"),", to represent multiple selections."),(0,o.yg)("h4",null,"Accessibility"),(0,o.yg)("p",null,"The only accessibility requirement is providing the Pill Group a descriptive label via the ",(0,o.yg)("inlineCode",{parentName:"p"},"aria-label")," React prop."),(0,o.yg)("h5",null,"Keyboard navigation"),(0,o.yg)("p",null,"The Form Pill Group is focusable, but only one pill is focusable at a time. This means the Pill Group is a single tab stop to a keyboard user. The dismiss button in a Form Pill is not a focusable element, but can be clickable."),(0,o.yg)("p",null,"Once a user focuses within the Form Pill Group, they can use these keyboard interactions:"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Keyboard interaction"),(0,o.yg)("th",{parentName:"tr",align:null},"Action"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Left and right arrow keys"),(0,o.yg)("td",{parentName:"tr",align:null},"Moving focus within the group")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Enter key"),(0,o.yg)("td",{parentName:"tr",align:null},"Triggers the supplied action via onClick")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Spacebar or enter keys"),(0,o.yg)("td",{parentName:"tr",align:null},"Selects a pill")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Delete or backspace keys"),(0,o.yg)("td",{parentName:"tr",align:null},"Dismisses a pill")))),(0,o.yg)(i.az,{marginBottom:"space70",mdxType:"Box"},(0,o.yg)(r.g,{ratio:"16:9",mdxType:"AspectRatio"},(0,o.yg)("iframe",{src:"https://www.loom.com/embed/2a35ee0a056345f6bab712359dbcf7b0",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,title:"Silent demo on keyboard navigation"}))),(0,o.yg)("h4",null,"Form Pill vs. Display Pill"),(0,o.yg)("p",null,"Form Pill Group creates a list from which a user may select items, whereas a Display Pill Group creates a list of static items."),(0,o.yg)("p",null,"Use the table below to get a better understanding of when to use Form Pill or Display Pill."),(0,o.yg)(x.G,{mdxType:"FormPillVsDisplayPillTable"}),(0,o.yg)("h2",null,"Examples"),(0,o.yg)("h3",null,"Basic"),(0,o.yg)("p",null,"This Form Pill example shows the basic static component that's exported by Paste. A Form Pill can have an optional Avatar or Icon placed before the text."),(0,o.yg)("p",null,"Interaction states on Form Pills need to be managed separately as shown in the examples after this one by using the ",(0,o.yg)("inlineCode",{parentName:"p"},"useFormPillState")," hook. The returned state should be spread onto each component. This will provide you with some internal state management and keyboard navigation."),(0,o.yg)("p",null,"A Form Pill can have an optional ",(0,o.yg)("a",{parentName:"p",href:"/components/avatar"},"Avatar")," or ",(0,o.yg)("a",{parentName:"p",href:"/components/icon"},"Icon")," placed before the text."),(0,o.yg)($,{scope:{FormPill:n.Ww,FormPillGroup:n.FD,useFormPillState:n.c8,ProductVideoIcon:b.ProductVideoIcon,ProductVerifyIcon:I.ProductVerifyIcon},noInline:!0,mdxType:"LivePreview"},E),(0,o.yg)("h3",null,"Large"),(0,o.yg)("p",null,"Use ",(0,o.yg)("inlineCode",{parentName:"p"},'size="large"')," Form Pills only for specific and approved use cases, such as in the ",(0,o.yg)("a",{parentName:"p",href:"/patterns/filter"},"filter pattern"),"."),(0,o.yg)($,{scope:{FormPill:n.Ww,FormPillGroup:n.FD,useFormPillState:n.c8,ProductVideoIcon:b.ProductVideoIcon,ProductVerifyIcon:I.ProductVerifyIcon},noInline:!0,mdxType:"LivePreview"},C),(0,o.yg)("h3",null,"Selectable"),(0,o.yg)("p",null,"Use a Selectable Form Pill to show an option that a user can select or deselect."),(0,o.yg)("p",null,"To make pills inside the Pill Group selectable, you can manage the selection state yourself and combine it with the state returned from the ",(0,o.yg)("inlineCode",{parentName:"p"},"useFormPillState")," hook. To do so, track which pill is selected in a separate store of state. When rendering the Form Pill Group, cross reference the rendered pills with the selection state, and conditionally set ",(0,o.yg)("inlineCode",{parentName:"p"},"selected")," on each ",(0,o.yg)("inlineCode",{parentName:"p"},"FormPill")," that requires it."),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"onSelect")," event handler will fire whenever the pill is clicked, or the spacebar or enter key is pressed. Use this to respond to your users' selection interactions."),(0,o.yg)($,{scope:{FormPill:n.Ww,FormPillGroup:n.FD,useFormPillState:n.c8,FaxCapableIcon:d.FaxCapableIcon,ProductVoiceIcon:S.ProductVoiceIcon,ProductMessagingIcon:F.ProductMessagingIcon,ProductChatIcon:p.ProductChatIcon},noInline:!0,mdxType:"LivePreview"},G),(0,o.yg)("h3",null,"Dismissible"),(0,o.yg)("p",null,`Use a Dismissible Form Pill to show an option that a user can remove from the group. Once the pill is dismissed, it can’t be rerendered.`),(0,o.yg)("p",null,"Form Pills are given a close button when provided an ",(0,o.yg)("inlineCode",{parentName:"p"},"onDismiss")," event handler. Because the Form Pill Group is largely presentational, provide dismissible functionality by managing the state of the rendered pills. By responding to user interactions and hooking into the ",(0,o.yg)("inlineCode",{parentName:"p"},"onDismiss")," event handler, the rendered state of the Form Pill Group can be updated and pills can be selectively removed from the collection."),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"onDismiss")," event handler will fire when a user clicks on the close button, or presses their backspace or delete key when focused on a pill."),(0,o.yg)($,{scope:{FormPill:n.Ww,FormPillGroup:n.FD,useFormPillState:n.c8,ProductPhoneNumbersIcon:w.ProductPhoneNumbersIcon},noInline:!0,mdxType:"LivePreview"},N),(0,o.yg)("h3",null,"Selectable and dismissible"),(0,o.yg)("p",null,`Use a Selectable and Dismissible Form Pill to show an option that a user can select, deselect, or dismiss. Once the pill is dismissed, it can’t be re-rendered.`),(0,o.yg)("h4",null,"Mouse navigation"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"onSelect")," event handler will fire when a user clicks on the pill. The ",(0,o.yg)("inlineCode",{parentName:"p"},"onDismiss")," event handler will fire when a user clicks on the close button."),(0,o.yg)("h4",null,"Keyboard navigation"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"onSelect")," event handler will fire when a user presses the spacebar or enter keys. The ",(0,o.yg)("inlineCode",{parentName:"p"},"onDismiss")," event handler will fire when a user presses the delete or backspace keys."),(0,o.yg)($,{scope:{FormPill:n.Ww,FormPillGroup:n.FD,useFormPillState:n.c8,ProductInterconnectIcon:g.ProductInterconnectIcon},noInline:!0,mdxType:"LivePreview"},M),(0,o.yg)("h3",null,"Tree variant for filters"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"tree")," variant for FormPillGroup changes the accessibility roles and DOM elements of the FormPill to be more tree-like where selecting the pill expands more options. This variant of Form Pills is only for specific and approved use cases, such as in the ",(0,o.yg)("a",{parentName:"p",href:"/patterns/filter"},"filter pattern"),"."),(0,o.yg)($,{scope:{FormPill:n.Ww,FormPillGroup:n.FD,useFormPillState:n.c8,ProductVideoIcon:b.ProductVideoIcon,ProductVerifyIcon:I.ProductVerifyIcon},noInline:!0,mdxType:"LivePreview"},z),(0,o.yg)("h3",null,"Internationalization"),(0,o.yg)("p",null,"To internationalize the form pill group, simply pass different text as children to the pills. The only exceptions to this are the visually hidden text that explains how to dismiss and select pills and the error label for the error variant. To change these, pass the ",(0,o.yg)("inlineCode",{parentName:"p"},"i18nKeyboardControls")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"i18nErrorLabel")," props."),(0,o.yg)($,{scope:{FormPill:n.Ww,FormPillGroup:n.FD,useFormPillState:n.c8},noInline:!0,mdxType:"LivePreview"},T),(0,o.yg)("h2",null,"States"),(0,o.yg)("h3",null,"Default or unselected"),(0,o.yg)("p",null,"The default state of a Form Pill indicates that the control is static or not selected."),(0,o.yg)($,{scope:{FormPill:n.Ww,FormPillGroup:n.FD,useFormPillState:n.c8,ProductVideoIcon:b.ProductVideoIcon,ProductVerifyIcon:I.ProductVerifyIcon},noInline:!0,mdxType:"LivePreview"},E),(0,o.yg)("h3",null,"Selected"),(0,o.yg)("p",null,"A Form Pill can be placed into a selected state by setting the ",(0,o.yg)("inlineCode",{parentName:"p"},"selected")," property."),(0,o.yg)($,{scope:{FormPill:n.Ww,FormPillGroup:n.FD,useFormPillState:n.c8,ProductVideoIcon:b.ProductVideoIcon,ProductVerifyIcon:I.ProductVerifyIcon},noInline:!0,mdxType:"LivePreview"},D),(0,o.yg)("h3",null,"Error"),(0,o.yg)("p",null,`Use an Error Form Pill to highlight an object that the user must be made aware of because it’s considered to be in a bad or broken state and should be addressed. An error icon will display as a prefix to the rest of the children in the pill.`),(0,o.yg)("p",null,"When used in a form field, display an error message below the form field to provide guidance on how to fix the error. For additional guidance on how to compose error messages, refer to the ",(0,o.yg)("a",{parentName:"p",href:"/patterns/error-state"},"error state pattern"),"."),(0,o.yg)($,{scope:{FormPill:n.Ww,FormPillGroup:n.FD,useFormPillState:n.c8,ProductVideoIcon:b.ProductVideoIcon,ProductVerifyIcon:I.ProductVerifyIcon},noInline:!0,mdxType:"LivePreview"},L),(0,o.yg)("h3",null,"Disabled"),(0,o.yg)("p",null,"Use a disabled Form Pill to indicate that a particular option cannot be interacted with or can be safely ignored."),(0,o.yg)($,{scope:{FormPill:n.Ww,FormPillGroup:n.FD,useFormPillState:n.c8,ProductVideoIcon:b.ProductVideoIcon,ProductVerifyIcon:I.ProductVerifyIcon},noInline:!0,mdxType:"LivePreview"},A),(0,o.yg)("h2",null,"Composition notes"),(0,o.yg)("h3",null,"Truncating text"),(0,o.yg)("p",null,`Pill text should never wrap to the next line. If the text length is longer than the max width of the pill group’s container, consider moving the Pill to a new row or use `,(0,o.yg)("a",{parentName:"p",href:"/components/truncate"},"Truncate")," to truncate the Form Pill text."),(0,o.yg)($,{scope:{FormPill:n.Ww,FormPillGroup:n.FD,useFormPillState:n.c8,Truncate:c.P,Box:i.az,ProductMarketingCampaignsIcon:f.ProductMarketingCampaignsIcon,ProductInternetOfThingsIcon:y.ProductInternetOfThingsIcon,ProductEngagementIntelligencePlatformIcon:P.ProductEngagementIntelligencePlatformIcon,ProductCodeExchangePartnerIcon:u.ProductCodeExchangePartnerIcon},noInline:!0,mdxType:"LivePreview"},k),(0,o.yg)("h3",null,"Adding an avatar"),(0,o.yg)("p",null,"A Form Pill can have an optional ",(0,o.yg)("a",{parentName:"p",href:"/components/avatar"},"Avatar"),". Considering the size of a Form Pill, it is recommended to use either an image or icon within an Avatar, and to avoid using initials as some initials may get cut off if the characters are particularly wide."),(0,o.yg)("p",null,"We recommend placing the Avatar ahead of the pill text. Use no more than one before or after the text."),(0,o.yg)($,{scope:{FormPill:n.Ww,FormPillGroup:n.FD,useFormPillState:n.c8,Avatar:a.e,AgentIcon:s.AgentIcon},noInline:!0,mdxType:"LivePreview"},B),(0,o.yg)("h3",null,"Adding an icon"),(0,o.yg)("p",null,"A Form Pill can have an optional ",(0,o.yg)("a",{parentName:"p",href:"/components/icon"},"Icon"),". We recommend placing the Icon ahead of the pill text. Use no more than one before or after the text."),(0,o.yg)($,{scope:{FormPill:n.Ww,FormPillGroup:n.FD,useFormPillState:n.c8,ProductMessagingIcon:F.ProductMessagingIcon,ProductBillingIcon:m.ProductBillingIcon,ProductLookupIcon:v.ProductLookupIcon,ProductConversationsIcon:h.ProductConversationsIcon},noInline:!0,mdxType:"LivePreview"},R),(0,o.yg)("h3",null,"When to use a Form Pill Group"),(0,o.yg)("p",null,`Use a Form Pill Group when you’re editing a collection of data within a form. It can be used to represent selection across multiple fields such as filtering, or from a single field like a `,(0,o.yg)("a",{parentName:"p",href:"/components/combobox"},"Combobox"),"."),(0,o.yg)(V.l,{mdxType:"DoDont"},(0,o.yg)(V.Do,{title:"Do",body:"Use Form Pills inside of a form or when editing a collection of data.",mdxType:"Do"}),(0,o.yg)(V.w,{title:"Don't",body:"Don’t use Form Pills in non-editable pages to represent a collection of similar objects, outside of a form, or outside of editing scenarios. Use a Display Pill Group instead.",mdxType:"Dont"})),(0,o.yg)(V.l,{mdxType:"DoDont"},(0,o.yg)(V.Do,{title:"Do",body:"Only pass FormPill as a direct descendent of a FormPillGroup.",mdxType:"Do"}),(0,o.yg)(V.w,{title:"Don't",body:"Don't pass FormPillGroup any other component type, and do not wrap FormPill in any other component of DOM element.",mdxType:"Dont"})))}j.isMDXComponent=!0},9098:(e,l,t)=>{"use strict";t.r(l),t.d(l,{AgentIcon:()=>i});var o=t(36669),r=t(55729),a=t(96316);let i=r.forwardRef(({as:e,display:l,element:t="ICON",size:i,color:n,title:c,decorative:s},d)=>{let m=`AgentIcon-${(0,o.GV)()}`;if(!s&&null==c)throw Error("[AgentIcon]: Missing a title for non-decorative icon.");return r.createElement(a.IconWrapper,{as:e,display:l,element:t,size:i,color:n,ref:d},r.createElement("svg",{role:"img","aria-hidden":s,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":m},c?r.createElement("title",{id:m},c):null,r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.484 2.483a6.845 6.845 0 013.336 5.663c.492.106.941.389 1.252.813.333.454.473 1.023.388 1.58l-.414 2.738a2.105 2.105 0 01-2.477 1.768 6.831 6.831 0 01-3.943 2.427 1.842 1.842 0 01-3.493-.835 1.85 1.85 0 011.845-1.856 1.85 1.85 0 011.821 1.555 5.758 5.758 0 002.787-1.766 2.132 2.132 0 01-.709-1.927l.414-2.738a2.104 2.104 0 011.573-1.744l-.104.03a5.785 5.785 0 00-11.564-.013A2.1 2.1 0 015.708 9.9l.415 2.743a2.133 2.133 0 01-.388 1.58 2.105 2.105 0 01-3.78-.942l-.415-2.742a2.129 2.129 0 01.387-1.58c.302-.412.734-.69 1.21-.804a6.845 6.845 0 0110.347-5.673zM9.978 15.84a.79.79 0 00-.785.796c0 .44.353.795.785.795a.79.79 0 00.785-.795.79.79 0 00-.785-.796zM3.754 9.166a1.044 1.044 0 00-.971.42 1.069 1.069 0 00-.195.794l.416 2.746a1.044 1.044 0 001.875.47c.168-.229.238-.514.195-.794l-.416-2.748a1.044 1.044 0 00-.78-.865zm13.462.42a1.044 1.044 0 00-1.876.473l-.414 2.743c-.043.28.027.565.194.793a1.044 1.044 0 001.877-.473l.414-2.743a1.069 1.069 0 00-.195-.793z"})))});i.displayName="AgentIcon"},11322:(e,l,t)=>{"use strict";t.r(l),t.d(l,{ProductChatIcon:()=>i});var o=t(36669),r=t(55729),a=t(96316);let i=r.forwardRef(({as:e,display:l,element:t="ICON",size:i,color:n,title:c,decorative:s},d)=>{let m=`ProductChatIcon-${(0,o.GV)()}`;if(!s&&null==c)throw Error("[ProductChatIcon]: Missing a title for non-decorative icon.");return r.createElement(a.IconWrapper,{as:e,display:l,element:t,size:i,color:n,ref:d},r.createElement("svg",{role:"img","aria-hidden":s,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":m},c?r.createElement("title",{id:m},c):null,r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.75 4c.69 0 1.25.558 1.25 1.246v7.474c0 .688-.56 1.245-1.25 1.245H9.69l-3.235 2.82a.882.882 0 01-.57.215.867.867 0 01-.885-.877v-2.158H3.25c-.69 0-1.25-.557-1.25-1.245V5.246C2 4.558 2.56 4 3.25 4h13.5zm0 .997H3.25a.25.25 0 00-.25.249v7.474c0 .137.112.249.25.249H5.5a.497.497 0 01.5.498v2.377l3.165-2.756a.501.501 0 01.335-.12h7.25a.25.25 0 00.25-.248V5.246a.25.25 0 00-.25-.25zM6 7.987c.552 0 1 .445 1 .996 0 .55-.448.996-1 .996s-1-.446-1-.996.448-.997 1-.997zm4 0c.552 0 1 .445 1 .996 0 .55-.448.996-1 .996s-1-.446-1-.996.448-.997 1-.997zm4 0c.552 0 1 .445 1 .996 0 .55-.448.996-1 .996s-1-.446-1-.996.448-.997 1-.997z"})))});i.displayName="ProductChatIcon"},23441:(e,l,t)=>{"use strict";t.r(l),t.d(l,{ProductInternetOfThingsIcon:()=>i});var o=t(36669),r=t(55729),a=t(96316);let i=r.forwardRef(({as:e,display:l,element:t="ICON",size:i,color:n,title:c,decorative:s},d)=>{let m=`ProductInternetOfThingsIcon-${(0,o.GV)()}`;if(!s&&null==c)throw Error("[ProductInternetOfThingsIcon]: Missing a title for non-decorative icon.");return r.createElement(a.IconWrapper,{as:e,display:l,element:t,size:i,color:n,ref:d},r.createElement("svg",{role:"img","aria-hidden":s,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":m},c?r.createElement("title",{id:m},c):null,r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.002 7.998a.5.5 0 01.5.5v6.588a1.514 1.514 0 11-1 0V8.498a.5.5 0 01.5-.5zm-2 0a.5.5 0 01.5.5v3.188a1.258 1.258 0 01-.366.884l-3.283 3.283a1.5 1.5 0 11-.707-.706l3.283-3.284a.25.25 0 00.074-.177V8.498a.5.5 0 01.5-.5zm3.999 0a.5.5 0 01.5.5v3.188c0 .067.026.13.073.177l3.283 3.284a1.495 1.495 0 011.82 2.278 1.497 1.497 0 01-2.526-1.572l-3.284-3.283a1.258 1.258 0 01-.366-.884V8.498a.5.5 0 01.5-.5zM7.924 3.111a2.5 2.5 0 114.156 2.777A2.5 2.5 0 017.924 3.11zm3.138.328a1.5 1.5 0 00-2.12 0 1.49 1.49 0 000 2.12 1.5 1.5 0 002.12-2.12z"})))});i.displayName="ProductInternetOfThingsIcon"},25125:(e,l,t)=>{"use strict";t.r(l),t.d(l,{FaxCapableIcon:()=>i});var o=t(36669),r=t(55729),a=t(96316);let i=r.forwardRef(({as:e,display:l,element:t="ICON",size:i,color:n,title:c,decorative:s},d)=>{let m=`FaxCapableIcon-${(0,o.GV)()}`;if(!s&&null==c)throw Error("[FaxCapableIcon]: Missing a title for non-decorative icon.");return r.createElement(a.IconWrapper,{as:e,display:l,element:t,size:i,color:n,ref:d},r.createElement("svg",{role:"img","aria-hidden":s,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":m},c?r.createElement("title",{id:m},c):null,r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.08 2l.135.009c.179.024.349.094.492.204l.103.09 2.887 2.887.09.103c.11.143.18.313.204.492l.009.136V8l-.007.083c.543.189.944.68 1 1.273L18 9.5v7a1.5 1.5 0 01-1.356 1.493L16.5 18h-14a1.5 1.5 0 01-1.493-1.356L1 16.5v-7a1.5 1.5 0 011.356-1.493L2.5 8H3V5.5a1.5 1.5 0 011.356-1.493L4.5 4h1a1.5 1.5 0 011.493 1.356L7 5.5V8h1V3.033l.006-.112c.052-.478.43-.858.906-.914L9.033 2h4.046zM3 9h-.5a.5.5 0 00-.492.41L2 9.5v7a.5.5 0 00.41.492L2.5 17h14a.5.5 0 00.492-.41L17 16.5v-7a.5.5 0 00-.41-.492L16.5 9H7v5.5a1.5 1.5 0 01-1.356 1.493L5.5 16h-1a1.5 1.5 0 01-1.493-1.356L3 14.5V9zm6.5 6a.5.5 0 110 1h-1a.5.5 0 110-1h1zm3 0a.5.5 0 110 1h-1a.5.5 0 110-1h1zm3 0a.5.5 0 110 1h-1a.5.5 0 110-1h1zM5.5 5h-1a.5.5 0 00-.492.41L4 5.5v9a.5.5 0 00.41.492L4.5 15h1a.5.5 0 00.492-.41L6 14.5v-9a.5.5 0 00-.5-.5zm4 8a.5.5 0 110 1h-1a.5.5 0 110-1h1zm3 0a.5.5 0 110 1h-1a.5.5 0 110-1h1zm3 0a.5.5 0 110 1h-1a.5.5 0 110-1h1zm-6-2a.5.5 0 110 1h-1a.5.5 0 110-1h1zm3 0a.5.5 0 110 1h-1a.5.5 0 110-1h1zm3 0a.5.5 0 110 1h-1a.5.5 0 110-1h1zm-3-8H9.033l-.016.005-.012.012L9 3.033V8h7V6.5h-2.492c-.52 0-.947-.393-1.002-.898l-.006-.11V3zm1 .407v2.085l.002.006.006.002 2.084-.001L13.5 3.407z"})))});i.displayName="FaxCapableIcon"},30584:(e,l,t)=>{"use strict";t.r(l),t.d(l,{ProductCodeExchangePartnerIcon:()=>i});var o=t(36669),r=t(55729),a=t(96316);let i=r.forwardRef(({as:e,display:l,element:t="ICON",size:i,color:n,title:c,decorative:s},d)=>{let m=`ProductCodeExchangePartnerIcon-${(0,o.GV)()}`;if(!s&&null==c)throw Error("[ProductCodeExchangePartnerIcon]: Missing a title for non-decorative icon.");return r.createElement(a.IconWrapper,{as:e,display:l,element:t,size:i,color:n,ref:d},r.createElement("svg",{role:"img","aria-hidden":s,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":m},c?r.createElement("title",{id:m},c):null,r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.991 5.158l3.445 1.172c.197-.189.447-.31.722-.327l.128-.001H18.5a.5.5 0 01.09.992l-.09.008h-1.239c-.102-.005-.215.1-.25.257L17 7.343v5.805c.007.195.11.33.233.356l.053.004H18.5a.5.5 0 01.09.993l-.09.008h-1.191a1.176 1.176 0 01-.904-.364l-.013.005-.087.025-3.53.675a.5.5 0 01-.145.006l-.141.002-.016.068-.062.182a2.019 2.019 0 01-2.024 1.265l-.08-.01-.003.072a1.732 1.732 0 01-.47 1.029l-.121.115a1.729 1.729 0 01-2.327-.059l-.107-.113-3.067-3.414-.196.005-.068-.005a1.364 1.364 0 01-.985.515H1.5a.5.5 0 01-.09-.992l.09-.008h1.353a.385.385 0 00.386-.272l.011-.068V7.365a.38.38 0 00-.333-.358l-.084-.005H1.5a.5.5 0 010-1h1.313c.559-.023 1.055.29 1.291.769l2.04-.816a2.406 2.406 0 012.192.2l.167.114.1.082 2.296-1.066a2.638 2.638 0 012.092-.127zM7.044 6.781c-.18 0-.36.034-.528.102L4.25 7.79l-.001 5.203.172-.004a.5.5 0 01.32.107l.062.06 3.227 3.59a.73.73 0 001.275-.372l.008-.104-.001-.357-.75-.751a.5.5 0 01.638-.766l.07.058.823.824.066.027a1.018 1.018 0 001.378-.757l-1.182-1.182a.5.5 0 01.638-.765l.07.058 1.198 1.199.241.001a.846.846 0 00.74-1.258l-.057-.088L10.523 9.1l-1.519.503a1.554 1.554 0 01-1.897-.824c-.312-.67-.11-1.45.458-1.897a1.39 1.39 0 00-.52-.1zm4.451-.666l-.16.071L8.27 7.609a.569.569 0 00-.257.748.555.555 0 00.587.316l.09-.021 1.855-.613a.496.496 0 01.008-.003L11.87 7.6a.5.5 0 01.397.915l-.083.036-.652.215 2.447 3.138a1.847 1.847 0 01.29 1.642l1.734-.333-.003-.045V7.323l.007-.082-3.349-1.14a1.646 1.646 0 00-1.163.014z"})))});i.displayName="ProductCodeExchangePartnerIcon"},46101:(e,l,t)=>{"use strict";t.r(l),t.d(l,{ProductVerifyIcon:()=>i});var o=t(36669),r=t(55729),a=t(96316);let i=r.forwardRef(({as:e,display:l,element:t="ICON",size:i,color:n,title:c,decorative:s},d)=>{let m=`ProductVerifyIcon-${(0,o.GV)()}`;if(!s&&null==c)throw Error("[ProductVerifyIcon]: Missing a title for non-decorative icon.");return r.createElement(a.IconWrapper,{as:e,display:l,element:t,size:i,color:n,ref:d},r.createElement("svg",{role:"img","aria-hidden":s,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":m},c?r.createElement("title",{id:m},c):null,r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.75 2.5c.69 0 1.25.553 1.25 1.234v.331c0 .393-.159.77-.44 1.047l-6.675 6.596c-.49.478-1.28.478-1.77 0L6.645 9.27a.491.491 0 010-.7.507.507 0 01.71 0l2.47 2.438a.241.241 0 00.35 0l6.68-6.591a.49.49 0 00.145-.35v-.332a.248.248 0 00-.25-.247H3.25c-.138 0-.25.111-.25.247v5.762a.49.49 0 00.145.35l6.68 6.592a.241.241 0 00.35 0l3.97-3.92a.507.507 0 01.71 0 .491.491 0 010 .701l-3.97 3.92A1.253 1.253 0 0110 17.5a1.253 1.253 0 01-.885-.36L2.44 10.543A1.472 1.472 0 012 9.496V3.734C2 3.053 2.56 2.5 3.25 2.5h13.5zm-.25 6.824c.828 0 1.5.663 1.5 1.48a1.49 1.49 0 01-1.5 1.482 1.49 1.49 0 01-1.5-1.481 1.49 1.49 0 011.5-1.481z"})))});i.displayName="ProductVerifyIcon"},52543:(e,l,t)=>{"use strict";t.r(l),t.d(l,{ProductMarketingCampaignsIcon:()=>i});var o=t(36669),r=t(55729),a=t(96316);let i=r.forwardRef(({as:e,display:l,element:t="ICON",size:i,color:n,title:c,decorative:s},d)=>{let m=`ProductMarketingCampaignsIcon-${(0,o.GV)()}`;if(!s&&null==c)throw Error("[ProductMarketingCampaignsIcon]: Missing a title for non-decorative icon.");return r.createElement(a.IconWrapper,{as:e,display:l,element:t,size:i,color:n,ref:d},r.createElement("svg",{role:"img","aria-hidden":s,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":m},c?r.createElement("title",{id:m},c):null,r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.767 11.436a.568.568 0 01-.474.13l-5.04-.916a.378.378 0 01-.019-.705l15.552-7.317a.153.153 0 01.031-.007.144.144 0 01.017-.005.14.14 0 01.089.02c.02.012.038.029.05.048a.134.134 0 01.01.02.15.15 0 01.016.084l-1.443 13.461a.365.365 0 01-.542.235l-5.662-3.355a.365.365 0 10-.35.64l.855.509a.372.372 0 01.125.54l-1.64 2.405a.365.365 0 01-.666-.204V12.44c0-.132.051-.26.142-.355l7.257-7.616a.09.09 0 00-.123-.13l-8.185 7.097z"})))});i.displayName="ProductMarketingCampaignsIcon"},54576:(e,l,t)=>{"use strict";t.r(l),t.d(l,{ProductInterconnectIcon:()=>i});var o=t(36669),r=t(55729),a=t(96316);let i=r.forwardRef(({as:e,display:l,element:t="ICON",size:i,color:n,title:c,decorative:s},d)=>{let m=`ProductInterconnectIcon-${(0,o.GV)()}`;if(!s&&null==c)throw Error("[ProductInterconnectIcon]: Missing a title for non-decorative icon.");return r.createElement(a.IconWrapper,{as:e,display:l,element:t,size:i,color:n,ref:d},r.createElement("svg",{role:"img","aria-hidden":s,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":m},c?r.createElement("title",{id:m},c):null,r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M4.342 4.342a8 8 0 0111.312 0 .5.5 0 01-.705.706 7 7 0 00-9.902 0 7.005 7.005 0 007.63 11.423A7.003 7.003 0 0017 10a.5.5 0 111 0 7.935 7.935 0 01-2.346 5.658A8 8 0 014.342 4.342zm10.276 3.742a5 5 0 01-8.156 5.453.5.5 0 01.705-.706 4 4 0 006.296-4.83A4 4 0 005.997 10a.5.5 0 11-1 0 5.002 5.002 0 019.621-1.916zm-4.62.415a1.5 1.5 0 110 3.001 1.5 1.5 0 010-3z"})))});i.displayName="ProductInterconnectIcon"},57928:(e,l,t)=>{"use strict";t.r(l),t.d(l,{ProductVoiceIcon:()=>i});var o=t(36669),r=t(55729),a=t(96316);let i=r.forwardRef(({as:e,display:l,element:t="ICON",size:i,color:n,title:c,decorative:s},d)=>{let m=`ProductVoiceIcon-${(0,o.GV)()}`;if(!s&&null==c)throw Error("[ProductVoiceIcon]: Missing a title for non-decorative icon.");return r.createElement(a.IconWrapper,{as:e,display:l,element:t,size:i,color:n,ref:d},r.createElement("svg",{role:"img","aria-hidden":s,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":m},c?r.createElement("title",{id:m},c):null,r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.55 18c-.239 0-.473-.065-.678-.187a34.61 34.61 0 01-4.01-2.791A35.318 35.318 0 017.3 12.726c-.72-.72-1.504-1.6-2.4-2.668a33.233 33.233 0 01-2.726-3.945 1.34 1.34 0 01.208-1.601l2.134-2.135a1.365 1.365 0 011.883 0l2.597 2.6c.519.52.519 1.363 0 1.883l-.715.71a26.959 26.959 0 002 2.22c.676.68 1.389 1.32 2.134 1.922l.715-.71c.52-.519 1.362-.519 1.882 0l2.598 2.6c.519.52.519 1.363 0 1.884l-2.134 2.135a1.338 1.338 0 01-.928.379zM5.481 3.033a.267.267 0 00-.186.08L3.162 5.248a.272.272 0 00-.043.326 31.99 31.99 0 002.614 3.795 33.798 33.798 0 002.33 2.594 32.988 32.988 0 006.358 4.921.277.277 0 00.326-.042l2.133-2.135a.267.267 0 000-.38l-2.592-2.599a.272.272 0 00-.379 0l-1.066 1.068a.533.533 0 01-.71.037l-.373-.299a27.742 27.742 0 01-2.219-1.996 28.139 28.139 0 01-2.053-2.333l-.299-.373a.534.534 0 01.043-.71l1.066-1.068a.267.267 0 000-.379L5.664 3.113a.272.272 0 00-.182-.08z"})))});i.displayName="ProductVoiceIcon"},63289:(e,l,t)=>{"use strict";t.r(l),t.d(l,{ProductBillingIcon:()=>i});var o=t(36669),r=t(55729),a=t(96316);let i=r.forwardRef(({as:e,display:l,element:t="ICON",size:i,color:n,title:c,decorative:s},d)=>{let m=`ProductBillingIcon-${(0,o.GV)()}`;if(!s&&null==c)throw Error("[ProductBillingIcon]: Missing a title for non-decorative icon.");return r.createElement(a.IconWrapper,{as:e,display:l,element:t,size:i,color:n,ref:d},r.createElement("svg",{role:"img","aria-hidden":s,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":m},c?r.createElement("title",{id:m},c):null,r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.438 7.273c.149 0 .292.057.397.16a.537.537 0 01.165.385v6.546c-.001.903-.756 1.635-1.688 1.636H4.938a.554.554 0 01-.562-.545c0-.302.252-.546.563-.546h12.375c.31 0 .562-.244.562-.545V7.818c0-.144.06-.283.165-.386a.572.572 0 01.398-.16zM15.063 4c.931.001 1.686.733 1.687 1.636v6.546c-.001.903-.756 1.635-1.688 1.636H2.688c-.932 0-1.687-.733-1.688-1.636V5.636c.001-.903.756-1.635 1.688-1.636zm0 1.09H2.687a.555.555 0 00-.562.546v6.546c0 .3.252.545.563.545h12.374c.311 0 .563-.244.563-.545V5.636a.555.555 0 00-.563-.545zM13.655 10c.466 0 .843.367.844.818a.831.831 0 01-.844.818.831.831 0 01-.844-.818c0-.452.378-.818.844-.818zM8.875 6.182c1.553.002 2.81 1.222 2.813 2.727 0 1.506-1.26 2.727-2.813 2.727-1.553 0-2.813-1.22-2.813-2.727 0-1.506 1.26-2.727 2.813-2.727zm0 1.09c-.932 0-1.688.733-1.688 1.637s.756 1.636 1.688 1.636c.932 0 1.686-.733 1.688-1.636 0-.904-.756-1.636-1.688-1.636zm-4.781-1.09c.465 0 .843.366.843.818a.831.831 0 01-.843.818A.831.831 0 013.25 7c0-.452.378-.818.844-.818z"})))});i.displayName="ProductBillingIcon"},65048:(e,l,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/form-pill-group",function(){return t(659)}])},68885:(e,l,t)=>{"use strict";t.r(l),t.d(l,{ProductVideoIcon:()=>i});var o=t(36669),r=t(55729),a=t(96316);let i=r.forwardRef(({as:e,display:l,element:t="ICON",size:i,color:n,title:c,decorative:s},d)=>{let m=`ProductVideoIcon-${(0,o.GV)()}`;if(!s&&null==c)throw Error("[ProductVideoIcon]: Missing a title for non-decorative icon.");return r.createElement(a.IconWrapper,{as:e,display:l,element:t,size:i,color:n,ref:d},r.createElement("svg",{role:"img","aria-hidden":s,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":m},c?r.createElement("title",{id:m},c):null,r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M11.75 15h-8.5C2.56 15 2 14.44 2 13.75v-7.5C2 5.56 2.56 5 3.25 5h8.5c.69 0 1.25.56 1.25 1.25v1.94l3.19-1.595A1.25 1.25 0 0118 7.715v4.575a1.245 1.245 0 01-1.805 1.12L13 11.83v1.92c0 .69-.56 1.25-1.25 1.25zm-8.5-9a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25v-2.725a.5.5 0 01.72-.45l3.92 1.925a.25.25 0 00.24 0 .26.26 0 00.12-.215v-4.57a.26.26 0 00-.12-.215.25.25 0 00-.24 0l-3.915 1.955A.5.5 0 0112 9V6.25a.25.25 0 00-.25-.25h-8.5z"})))});i.displayName="ProductVideoIcon"},76882:(e,l,t)=>{"use strict";t.r(l),t.d(l,{ProductConversationsIcon:()=>i});var o=t(36669),r=t(55729),a=t(96316);let i=r.forwardRef(({as:e,display:l,element:t="ICON",size:i,color:n,title:c,decorative:s},d)=>{let m=`ProductConversationsIcon-${(0,o.GV)()}`;if(!s&&null==c)throw Error("[ProductConversationsIcon]: Missing a title for non-decorative icon.");return r.createElement(a.IconWrapper,{as:e,display:l,element:t,size:i,color:n,ref:d},r.createElement("svg",{role:"img","aria-hidden":s,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":m},c?r.createElement("title",{id:m},c):null,r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.885 18A.864.864 0 015 17.125v-2.152H3.25c-.69 0-1.25-.557-1.25-1.243V6.275c0-.687.56-1.243 1.25-1.243H6a3.75 3.75 0 013.5 2.306l1.935 4.926A2.79 2.79 0 0014 13.979h2.75a.25.25 0 00.25-.249V6.275a.25.25 0 00-.25-.249H14V3.153l-3.17 2.749a.502.502 0 01-.689-.059.495.495 0 01.029-.687l3.375-2.937a.88.88 0 01.944-.14.87.87 0 01.511.8v2.153h1.75c.69 0 1.25.556 1.25 1.243v7.455c0 .686-.56 1.243-1.25 1.243H14a3.8 3.8 0 01-3.5-2.336L8.57 7.71a2.755 2.755 0 00-2.54-1.685H3.25a.25.25 0 00-.25.249v7.455a.25.25 0 00.25.249h2.775v2.873l3.165-2.749a.502.502 0 01.838.268.495.495 0 01-.178.478l-3.395 2.937a.883.883 0 01-.57.214z"})))});i.displayName="ProductConversationsIcon"},80759:(e,l,t)=>{"use strict";t.r(l),t.d(l,{ProductEngagementIntelligencePlatformIcon:()=>i});var o=t(36669),r=t(55729),a=t(96316);let i=r.forwardRef(({as:e,display:l,element:t="ICON",size:i,color:n,title:c,decorative:s},d)=>{let m=`ProductEngagementIntelligencePlatformIcon-${(0,o.GV)()}`;if(!s&&null==c)throw Error("[ProductEngagementIntelligencePlatformIcon]: Missing a title for non-decorative icon.");return r.createElement(a.IconWrapper,{as:e,display:l,element:t,size:i,color:n,ref:d},r.createElement("svg",{role:"img","aria-hidden":s,width:"100%",height:"100%",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":m},c?r.createElement("title",{id:m},c):null,r.createElement("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M7.08 9.33l.01-.027 2.694-7.599C10.12.762 11.521 1 11.521 2v5.896h.77a.89.89 0 01.852 1.153l-.008.027-2.982 8.549c-.33.947-1.738.71-1.738-.292v-6.845h-.482A.89.89 0 017.08 9.33zm3.547-.545V2L7.933 9.599h1.376v7.734l2.981-8.548h-1.663zM4.622 3.98a.446.446 0 00-.443-.425.446.446 0 00-.45.44l-.084 11.236v.023c.01.235.204.423.444.425a.446.446 0 00.45-.441l.084-11.236v-.022zM.447 6.32c.24 0 .435.187.446.422v6.272a.446.446 0 01-.893.022V6.764c0-.245.2-.444.447-.444zm19 0c.24 0 .435.187.446.422v6.272a.446.446 0 01-.893.022V6.764c0-.245.2-.444.447-.444zm-3.413-2.764c.24.001.433.19.443.425v.022l-.083 11.236a.446.446 0 01-.45.441.446.446 0 01-.444-.425v-.023l.084-11.235a.446.446 0 01.45-.441z"})))});i.displayName="ProductEngagementIntelligencePlatformIcon"},97994:(e,l,t)=>{"use strict";t.r(l),t.d(l,{ProductPhoneNumbersIcon:()=>i});var o=t(36669),r=t(55729),a=t(96316);let i=r.forwardRef(({as:e,display:l,element:t="ICON",size:i,color:n,title:c,decorative:s},d)=>{let m=`ProductPhoneNumbersIcon-${(0,o.GV)()}`;if(!s&&null==c)throw Error("[ProductPhoneNumbersIcon]: Missing a title for non-decorative icon.");return r.createElement(a.IconWrapper,{as:e,display:l,element:t,size:i,color:n,ref:d},r.createElement("svg",{role:"img","aria-hidden":s,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":m},c?r.createElement("title",{id:m},c):null,r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M11.749 13.562c.273.04.463.299.424.579l-.4 2.923a.503.503 0 01-.493.436h-.07a.51.51 0 01-.424-.58l.399-2.917a.516.516 0 01.193-.342.489.489 0 01.37-.1zM13.159 2.5l.092.005c.275.04.467.301.429.585l-.539 3.964h2.36c.276 0 .499.23.499.513a.506.506 0 01-.499.512h-2.495l-.499 3.59h2.47c.276 0 .5.23.5.513a.506.506 0 01-.5.513H8.376l-.589 4.359a.503.503 0 01-.499.44h-.07a.51.51 0 01-.424-.579l.574-4.22H4.499A.506.506 0 014 12.182c0-.283.223-.513.499-.513h2.994l.499-3.59H4.998a.506.506 0 01-.499-.512c0-.284.223-.513.499-.513H8.14l.55-4.108a.506.506 0 01.568-.44c.276.039.468.3.43.584l-.55 3.964h2.994l.549-4.108a.506.506 0 01.569-.44zm-1.176 5.58H8.99l-.5 3.59h2.994l.5-3.59z"})))});i.displayName="ProductPhoneNumbersIcon"}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,1489,636,6593,8792],()=>e(e.s=65048)),_N_E=e.O()}]);