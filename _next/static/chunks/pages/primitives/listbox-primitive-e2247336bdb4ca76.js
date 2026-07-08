(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[472],{3738:(e,t,a)=>{"use strict";a.d(t,{V:()=>m,x:()=>s});var n=a(76127),i=a(55729),l=e=>"margin"===e?"auto":"space0",r=(e,t,a)=>{let n=l(t),i=(({prefix:e,responsive:t,defaultValue:a})=>{let n=()=>t?[,,,].fill(a):a;return{[`${e}Top`]:n(),[`${e}Bottom`]:n(),[`${e}Right`]:n(),[`${e}Left`]:n()}})({prefix:t,responsive:!1,defaultValue:n});return void 0===a||(e?(i[`${t}Top`]=a,i[`${t}Bottom`]=a):(i[`${t}Right`]=a,i[`${t}Left`]=a)),i},o=(e,t,a)=>{let n=l(t),i={[`${t}Top`]:[n,n,n],[`${t}Bottom`]:[n,n,n],[`${t}Right`]:[n,n,n],[`${t}Left`]:[n,n,n]},r=Array.isArray(a)&&0===a.length;return void 0===a||r||e.forEach((e,n)=>{let l=Array.isArray(a)?a[n]:a;e?(i[`${t}Top`][n]=l,i[`${t}Bottom`][n]=l):(i[`${t}Right`][n]=l,i[`${t}Left`][n]=l)}),i},s=i.forwardRef(({as:e,children:t,element:a="GRID",equalColumnHeights:l,gutter:s,marginTop:m,marginBottom:d,vertical:p=!1,...g},u)=>{let y=i.useMemo(()=>i.Children.map(t,e=>i.isValidElement(e)?i.cloneElement(e,{count:i.Children.count(t),gutter:s,vertical:p,stretchColumnContent:l}):e),[t,p,l,s]),c=i.useMemo(()=>((e,t=!1)=>{let a=(e=>Array.isArray(e)?e.map(e=>"space0"!==e?e.replace("space","spaceNegative"):"space0"===e?"space0":null):"space0"===e?"space0":e&&"string"==typeof e?e.replace("space","spaceNegative"):"auto")(e);return Array.isArray(t)?o(t,"margin",a):r(t,"margin",a)})(s,p),[s,p]),h=i.useMemo(()=>(e=>Array.isArray(e)?e.map(e=>"boolean"==typeof e&&!0===e?"column":"row"):e?"column":"row")(p),[p]);return i.createElement(n.az,{...(0,n.x8)(g),ref:u,as:e,alignItems:l?"stretch":null,element:a,flexDirection:h,flexWrap:"wrap",display:"flex",...c,marginTop:m,marginBottom:d,minWidth:"size0",rowGap:g.rowGap,columnGap:g.columnGap},y)});s.displayName="Grid";var m=i.forwardRef(({as:e,children:t,count:a,element:l="COLUMN",gutter:s,offset:m,span:d,stretchColumnContent:p,vertical:g,...u},y)=>{let c=i.useMemo(()=>(({count:e,span:t,gutter:a,offset:n,vertical:i,stretchColumnContent:l})=>{let s={width:(({count:e,span:t})=>Array.isArray(t)&&e?t.map(e=>`${e/12*100}%`):"number"==typeof t&&e&&e<=12?`${t/12*100}%`:void 0!==e?`${1/e*100}%`:"8.333333333333332%")({count:e,span:t}),...(({vertical:e,gutter:t})=>Array.isArray(e)?o(e,"padding",t):r(e,"padding",t))({gutter:a,vertical:i})};return n&&(s.marginLeft=(e=>Array.isArray(e)?e.map(e=>`${e/12*100}%`):`${e/12*100}%`)(n)),i&&!n&&(s.minWidth=(e=>Array.isArray(e)?e.map(e=>"boolean"==typeof e?!0===e?"100%":"0":null):e?"100%":"0")(i),s.marginLeft="space0"),l&&(s.alignContent="stretch",s.display="flex"),s})({count:a,gutter:s,offset:m,span:d,stretchColumnContent:p,vertical:g}),[a,s,m,d,p,g]);return i.createElement(n.az,{...(0,n.x8)(u),...c,as:e,element:l,ref:y},t)});m.displayName="Column"},15780:(e,t,a)=>{"use strict";a.d(t,{A:()=>g});var n=a(72387),i=a(95669),l=a.n(i),r=a(81278);a(55729);var o=a(10511),s=a(43084),m=a(63437),d=a(38992);let p={h1:()=>null},g=({children:e,meta:t,navigationData:a})=>{let i=t.title?`${t.title} - ${d.DZ.TITLE}`:d.DZ.TITLE,g=t.description||d.DZ.DESCRIPTION,u=(0,r.useRouter)();return(0,n.FD)(m.T,{navigationData:a,children:[(0,n.FD)(l(),{children:[(0,n.Y)("title",{children:i}),(0,n.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${u.pathname}`}),(0,n.Y)("meta",{name:"description",content:g},"description")]}),(0,n.Y)(o.s,{children:(0,n.Y)(s.Q,{componentOverrides:t.package?p:{},children:e})})]})}},31079:(e,t,a)=>{"use strict";a.r(t),a.d(t,{PlusIcon:()=>r});var n=a(36669),i=a(55729),l=a(96316);let r=i.forwardRef(({as:e,display:t,element:a="ICON",size:r,color:o,title:s,decorative:m},d)=>{let p=`PlusIcon-${(0,n.GV)()}`;if(!m&&null==s)throw Error("[PlusIcon]: Missing a title for non-decorative icon.");return i.createElement(l.IconWrapper,{as:e,display:t,element:a,size:r,color:o,ref:d},i.createElement("svg",{role:"img","aria-hidden":m,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":p},s?i.createElement("title",{id:p},s):null,i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M15.043 9.043h-4.086V4.957a.958.958 0 00-1.914 0v4.086H4.957a.958.958 0 000 1.914h4.086v4.086a.958.958 0 001.914 0v-4.086h4.086a.958.958 0 000-1.914z"})))});r.displayName="PlusIcon"},32850:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/primitives/listbox-primitive",function(){return a(79047)}])},74839:(e,t,a)=>{"use strict";a.d(t,{MP:()=>r,VJ:()=>o,pF:()=>l});var n=a(51582),i=a(55729),l=i.forwardRef(({variant:e="single",orientation:t,...a},l)=>i.createElement(n.eC,{as:"div",...a,ref:l,role:"listbox","aria-multiselectable":"multiple"===e,"aria-orientation":t}));l.displayName="ListboxPrimitive";var r=i.forwardRef(({selected:e=!1,onSelect:t,...a},l)=>i.createElement(n.lb,{as:"button",...a,ref:l,role:"option","aria-selected":e,type:"button",onClick:t}));r.displayName="ListboxPrimitiveItem";var o=(e={})=>({...(0,n.AT)({orientation:"vertical",...e,loop:"horizontal"})})},79047:(e,t,a)=>{"use strict";a.r(t),a.d(t,{__N_SSG:()=>I,default:()=>z,getStaticProps:()=>P,mdxHeadings:()=>L,meta:()=>S}),a(55729);var n=a(11885);let i={mdxHeadings:[{value:"@twilio-paste/listbox-primitive",depth:1},{value:"4.0.1",depth:2},{value:"Patch Changes",depth:3},{value:"4.0.0",depth:2},{value:"Major Changes",depth:3},{value:"Patch Changes",depth:3},{value:"3.0.1",depth:2},{value:"Patch Changes",depth:3},{value:"3.0.0",depth:2},{value:"Major Changes",depth:3},{value:"Patch Changes",depth:3},{value:"2.0.0",depth:2},{value:"Major Changes",depth:3},{value:"Patch Changes",depth:3},{value:"1.0.0",depth:2},{value:"Major Changes",depth:3}]};function l({components:e,...t}){return(0,n.yg)("wrapper",{...i,...t,components:e,mdxType:"MDXLayout"},(0,n.yg)("h1",null,"@twilio-paste/listbox-primitive"),(0,n.yg)("h2",null,"4.0.1"),(0,n.yg)("h3",null,"Patch Changes"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/twilio-labs/paste/commit/262c1b71503e735ef98a4bdb6491ad5277cc2597"},(0,n.yg)("inlineCode",{parentName:"a"},"262c1b715"))," ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/twilio-labs/paste/pull/4281"},"#4281")," Thanks ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/PixeledCode"},"@PixeledCode"),"! - ","[all packages]",": add use client directive to the components and icons. This will make paste library compatible with server components")),(0,n.yg)("h2",null,"4.0.0"),(0,n.yg)("h3",null,"Major Changes"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a"},(0,n.yg)("inlineCode",{parentName:"a"},"f48211e56"))," ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/twilio-labs/paste/pull/4258"},"#4258")," Thanks ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/PixeledCode"},"@PixeledCode"),"! - ","[all packages]",": Upgrade to React 19 and drop support for React 16. Paste only supports the three latest versions of React. If you're using Paste in a React 17, 18, or 19 app, you should be able to upgrade with full backwards compatibility. If you experience any issues, please let us know on Github.")),(0,n.yg)("h3",null,"Patch Changes"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Updated dependencies [",(0,n.yg)("a",{parentName:"li",href:"https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a"},(0,n.yg)("inlineCode",{parentName:"a"},"f48211e56")),"]:",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"@twilio-paste/",(0,n.yg)("a",{parentName:"li",href:"mailto:reakit-library@3.0.0"},"reakit-library@3.0.0"))))),(0,n.yg)("h2",null,"3.0.1"),(0,n.yg)("h3",null,"Patch Changes"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/twilio-labs/paste/commit/e238ce11a6610fb793cefb977c024086865e2037"},(0,n.yg)("inlineCode",{parentName:"a"},"e238ce11a"))," ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/twilio-labs/paste/pull/3618"},"#3618")," Thanks ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/SiTaggart"},"@SiTaggart"),"! - ","[Listbox primitive]"," Updated dev depenedencies to include typescript and tsx for running build scripts")),(0,n.yg)("h2",null,"3.0.0"),(0,n.yg)("h3",null,"Major Changes"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603"},(0,n.yg)("inlineCode",{parentName:"a"},"733709127"))," ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/twilio-labs/paste/pull/3395"},"#3395")," Thanks ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/SiTaggart"},"@SiTaggart"),"! - Modified the compile target of our JavaScript bundles from ",(0,n.yg)("inlineCode",{parentName:"li"},"node")," to ",(0,n.yg)("inlineCode",{parentName:"li"},"browser")," to minimize the risk of clashing with RequireJS. This is marked as a major out of an abundance of caution. You shouldn't need to do anything but we wanted you to be aware of the change on the off chance it has unintended consequences")),(0,n.yg)("h3",null,"Patch Changes"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Updated dependencies [",(0,n.yg)("a",{parentName:"li",href:"https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603"},(0,n.yg)("inlineCode",{parentName:"a"},"733709127")),"]:",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"@twilio-paste/",(0,n.yg)("a",{parentName:"li",href:"mailto:reakit-library@2.0.0"},"reakit-library@2.0.0"))))),(0,n.yg)("h2",null,"2.0.0"),(0,n.yg)("h3",null,"Major Changes"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a"},(0,n.yg)("inlineCode",{parentName:"a"},"3c89fd83d"))," ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/twilio-labs/paste/pull/2965"},"#2965")," Thanks ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/Niznikr"},"@Niznikr"),"! - Add support for React 18")),(0,n.yg)("h3",null,"Patch Changes"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Updated dependencies [",(0,n.yg)("a",{parentName:"li",href:"https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a"},(0,n.yg)("inlineCode",{parentName:"a"},"3c89fd83d")),"]:",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"@twilio-paste/",(0,n.yg)("a",{parentName:"li",href:"mailto:reakit-library@1.0.0"},"reakit-library@1.0.0"))))),(0,n.yg)("h2",null,"1.0.0"),(0,n.yg)("h3",null,"Major Changes"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/twilio-labs/paste/commit/45f5037122c4fd54e343e7643798fa497e6bc232"},(0,n.yg)("inlineCode",{parentName:"a"},"45f503712"))," ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/twilio-labs/paste/pull/2928"},"#2928")," Thanks ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/Niznikr"},"@Niznikr"),"! - ","[Listbox Primitive]"," create a new Listbox Primitive component used to build accessible listboxes")))}l.isMDXComponent=!0;var r=a(76127),o=a(95036),s=a(54652),m=a(3738),d=a(98536),p=a(81423),g=a(31079),u=a(74839),y=a(51582),c=a(84498),h=a(38992);let N=`
const DefaultExample = () => {
  const [items] = React.useState(['Item 1', 'Item 2', 'Item 3']);
  const [selected, setSelected] = React.useState();
  const listbox = useListboxPrimitiveState();
  return (
    <ListboxPrimitive {...listbox} aria-label="My listbox">
      <Stack orientation="vertical" spacing="space0">
        {items.map((item) => (
          <ListboxPrimitiveItem
            key={item}
            {...listbox}
            selected={selected === item}
            onSelect={() => {
              setSelected(item);
            }}
            style={{
              ...(selected === item && {backgroundColor: '#0263e0', color: 'white'})
            }}
          >
            {item}
          </ListboxPrimitiveItem>
        ))}
      </Stack>
    </ListboxPrimitive>
  )
};

render(
  <DefaultExample />
)
`.trim(),b=`
const HorizontalExample = () => {
  const [items] = React.useState(['Item 1', 'Item 2', 'Item 3']);
  const [selected, setSelected] = React.useState();
  const listbox = useListboxPrimitiveState({orientation: 'horizontal'});
  return (
    <ListboxPrimitive {...listbox} aria-label="My listbox">
      {items.map((item) => (
        <ListboxPrimitiveItem
          key={item}
          {...listbox}
          selected={selected === item}
          onSelect={() => {
            setSelected(item);
          }}
          style={{
            ...(selected === item && {backgroundColor: '#0263e0', color: 'white'})
          }}
        >
          {item}
        </ListboxPrimitiveItem>
      ))}
    </ListboxPrimitive>
  )
};

render(
  <HorizontalExample />
)
`.trim(),v=`
const GroupsExample = () => {
  const [items] = React.useState(['Item 1', 'Item 2', 'Item 3']);
  const [selected, setSelected] = React.useState();
  const listbox = useListboxPrimitiveState();
  return (
    <ListboxPrimitive {...listbox} aria-label="My listbox">
      <ListboxPrimitiveGroup aria-labelledby="group-1">
        <Stack orientation="vertical" spacing="space0">
          <span id="group-1">Even</span>
          {items.filter((item, index) => (index + 1) % 2 === 0).map((item) =>
            <ListboxPrimitiveItem
              key={item}
              {...listbox}
              selected={selected === item}
              onSelect={() => {
                setSelected(item);
              }}
              style={{
                ...(selected === item && {backgroundColor: '#0263e0', color: 'white'})
              }}
            >
              {item}
            </ListboxPrimitiveItem>
          )}
        </Stack>
      </ListboxPrimitiveGroup>
      <ListboxPrimitiveGroup aria-labelledby="group-2">
        <Stack orientation="vertical" spacing="space0">
          <span id="group-2">Odd</span>
          {items.filter((item, index) => (index + 1) % 2 === 1).map((item) =>
            <ListboxPrimitiveItem
              key={item}
              {...listbox}
              selected={selected === item}
              onSelect={() => {
                setSelected(item);
              }}
              style={{
                ...(selected === item && {backgroundColor: '#0263e0', color: 'white'})
              }}
            >
              {item}
            </ListboxPrimitiveItem>
          )}
        </Stack>
      </ListboxPrimitiveGroup>
    </ListboxPrimitive>
  )
};

render(
  <GroupsExample />
)
`.trim(),x=`
const MultipleExample = () => {
  const [items] = React.useState(['Item 1', 'Item 2', 'Item 3']);
  const [selectedSet, updateSelectedSet] = React.useState(new Set());
  const listbox = useListboxPrimitiveState({orientation: 'horizontal'});
  return (
    <ListboxPrimitive {...listbox} aria-label="My listbox" variant="multiple">
      {items.map((item) => (
        <ListboxPrimitiveItem
          key={item}
          {...listbox}
          selected={selectedSet.has(item)}
          onSelect={() => {
            const newSelectedSet = new Set(selectedSet);
            if (newSelectedSet.has(item)) {
              newSelectedSet.delete(item);
            } else {
              newSelectedSet.add(item);
            }
            updateSelectedSet(newSelectedSet);
          }}
          style={{
            ...(selectedSet.has(item) && {backgroundColor: '#0263e0', color: 'white'})
          }}
        >
          {item}
        </ListboxPrimitiveItem>
      ))}
    </ListboxPrimitive>
  )
};

render(
  <MultipleExample />
)
`.trim(),f=`
const DualExample = () => {
  const [components, updateComponents] = React.useState(['Alert', 'Anchor', 'Button', 'Card', 'Heading', 'List']);
  const [favs, updateFavs] = React.useState(['Modal']);
  const [selectedComps, updateSelectedComps] = React.useState(new Set());
  const [selectedFavs, updateSelectedFavs] = React.useState(new Set());
  const compListbox = useListboxPrimitiveState();
  const favListbox = useListboxPrimitiveState();
  return (
    <Grid gutter="space30">
      <Column>
        <ListboxPrimitive {...compListbox} aria-label="Components" variant="multiple" as={Box} height="300px">
          <Stack orientation="vertical" spacing="space40">
            {components.map((item) => (
              <ListboxPrimitiveItem
                as={Button}
                size="small"
                key={item}
                {...compListbox}
                selected={selectedComps.has(item)}
                onSelect={() => {
                  const newSelectedComps = new Set(selectedComps);
                  if (newSelectedComps.has(item)) {
                    newSelectedComps.delete(item);
                  } else {
                    newSelectedComps.add(item);
                  }
                  updateSelectedComps(newSelectedComps);
                }}
              >
                {selectedComps.has(item) && <CheckboxCheckIcon decorative />}
                {item}
              </ListboxPrimitiveItem>
            ))}
          </Stack>
        </ListboxPrimitive>
        <Button variant="primary_icon" onClick={() => {
          updateFavs([...favs, ...Array.from(selectedComps)]);
          updateComponents(components.filter((item) => !selectedComps.has(item)));
          selectedComps.clear();
        }}
        >
          Add <PlusIcon decorative={false} title="Add items" />
        </Button>
      </Column>
      <Column>
        <ListboxPrimitive {...favListbox} aria-label="Favorite components" variant="multiple" as={Box} height="300px">
          <Stack orientation="vertical" spacing="space40">
            {favs.map((item) => (
              <ListboxPrimitiveItem
                as={Button}
                size="small"
                key={item}
                {...favListbox}
                selected={selectedFavs.has(item)}
                onSelect={() => {
                  const newSelectedFavs = new Set(selectedFavs);
                  if (newSelectedFavs.has(item)) {
                    newSelectedFavs.delete(item);
                  } else {
                    newSelectedFavs.add(item);
                  }
                  updateSelectedFavs(newSelectedFavs);
                }}
              >
                {selectedFavs.has(item) && <CheckboxCheckIcon decorative />}
                {item}
              </ListboxPrimitiveItem>
            ))}
          </Stack>
        </ListboxPrimitive>
        <Button variant="primary_icon" onClick={() => {
          updateComponents([...components, ...Array.from(selectedFavs)]);
          updateFavs(favs.filter((item) => !selectedFavs.has(item)));
          selectedFavs.clear();
        }}
        >
          Remove <MinusIcon decorative={false} title="Remove items" />
        </Button>
      </Column>
    </Grid>
  )
};

render(
  <DualExample />
)
`.trim(),C=`
const CustomExample = () => {
  const [items] = React.useState(['Item 1', 'Item 2', 'Item 3']);
  const [selected, setSelected] = React.useState();
  const listbox = useListboxPrimitiveState({orientation: 'horizontal'});
  return (
    <ListboxPrimitive {...listbox} aria-label="My listbox">
      <Stack orientation="horizontal" spacing="space40">
      {items.map((item) => (
        <ListboxPrimitiveItem
          as={Button}
          key={item}
          {...listbox}
          selected={selected === item}
          onSelect={() => {
            setSelected(item);
          }}
        >
          {selected === item && <CheckboxCheckIcon decorative />}
          {item}
        </ListboxPrimitiveItem>
      ))}
      </Stack>
    </ListboxPrimitive>
  )
};

render(
  <CustomExample />
)
`.trim();var w=a(15780),I=!0;let S={title:"Listbox - Primitives",package:"@twilio-paste/listbox-primitive",description:"An unstyled and accessible basis upon which to build Listboxes.",slug:"/primitives/listbox-primitive/"},P=async()=>({props:{data:{...packageJson,...feature},navigationData}}),L=[{value:"Guidelines",depth:2},{value:"About the Listbox Primitive",depth:3},{value:"Examples",depth:2},{value:"Selection",depth:3},{value:"Horizontal Listbox",depth:3},{value:"Listbox with groups",depth:3},{value:"Multiselect Listbox",depth:3},{value:"Dual Listboxes",depth:3},{value:"Custom styling",depth:3},{value:"Usage Guide",depth:2},{value:"API",depth:3},{value:"Installation",depth:4},{value:"Props",depth:4},{value:"useListboxPrimitiveState",depth:5},{value:"ListboxPrimitive",depth:5},{value:"ListboxPrimitiveGroup",depth:5},{value:"ListboxPrimitiveItem",depth:5}],k=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",t)},M=k("NormalizedComponentHeader"),T=k("PageAside"),D=k("LivePreview"),R=k("ChangelogRevealer"),A={meta:S,getStaticProps:P,mdxHeadings:L},E=w.A;function z({components:e,...t}){return(0,n.yg)(E,{...A,...t,components:e,mdxType:"MDXLayout"},(0,n.yg)(M,{categoryRoute:h.t4.PRIMITIVES,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/primitives/listbox",storybookUrl:"/?path=/story/primitives-listbox--vertical-listbox",data:t.data,shouldShowInPageNav:!1,mdxType:"NormalizedComponentHeader"}),(0,n.yg)("contentwrapper",null,(0,n.yg)(T,{data:L,mdxType:"PageAside"}),(0,n.yg)("content",null,(0,n.yg)(D,{scope:{useListboxPrimitiveState:u.VJ,ListboxPrimitive:u.pF,ListboxPrimitiveItem:u.MP,Stack:c.B},noInline:!0,showOverflow:!0,mdxType:"LivePreview"},N),(0,n.yg)("h2",null,"Guidelines"),(0,n.yg)("h3",null,"About the Listbox Primitive"),(0,n.yg)("p",null,"The Listbox primitive is an unstyled, functional version of a listbox component. It can be used to build a component following the ",(0,n.yg)("a",{parentName:"p",href:"https://www.w3.org/WAI/ARIA/apg/patterns/listbox/"},"WAI-ARIA Listbox Pattern"),"."),(0,n.yg)("p",null,"This unstyled primitive is to be used when the listbox components, like FormPillGroup, provided by Paste don",`’`,"t meet the requirements needed to solve a unique customer problem. At that point, you are welcome to fall back to this functional primitive to roll your own styled Listbox while still providing a functional and accessible experience to your customers."),(0,n.yg)("p",null,"This primitive should be used to compose all custom Listboxes to ensure accessibility and upgrade paths."),(0,n.yg)(s.Pq,{variant:"warning",marginY:"space70",mdxType:"Callout"},(0,n.yg)(s.v,{as:"h3",mdxType:"CalloutHeading"},"Before you roll your own listboxes..."),(0,n.yg)(s.wz,{mdxType:"CalloutText"},"We strongly suggest that all components built on top of this primitive get reviewed by the Design Systems team and go through the UX Review process to ensure an excellent experience for our customers.")),(0,n.yg)("h2",null,"Examples"),(0,n.yg)("h3",null,"Selection"),(0,n.yg)("p",null,"To make items inside the Listbox selectable, you can manage the selection state yourself and combine it with the state returned from the ",(0,n.yg)("inlineCode",{parentName:"p"},"useListboxPrimitiveState")," hook. To do so, track which item is selected in a separate store of state. When rendering the Listbox, cross reference the rendered items with the selection state, and conditionally set ",(0,n.yg)("inlineCode",{parentName:"p"},"selected")," on each ",(0,n.yg)("inlineCode",{parentName:"p"},"ListboxPrimitiveItem")," that requires it."),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"onSelect")," event handler will fire whenever the item is clicked, or the spacebar or enter key is pressed. Use this to respond to your users' selection interactions."),(0,n.yg)("h3",null,"Horizontal Listbox"),(0,n.yg)("p",null,"Our listbox is vertical by default. To change it to horizontal, specify the orientation when initializing the state with ",(0,n.yg)("inlineCode",{parentName:"p"},"useListboxPrimitiveState({orientation: 'horizontal'})"),":"),(0,n.yg)(D,{scope:{useListboxPrimitiveState:u.VJ,ListboxPrimitive:u.pF,ListboxPrimitiveItem:u.MP},noInline:!0,showOverflow:!0,mdxType:"LivePreview"},b),(0,n.yg)("h3",null,"Listbox with groups"),(0,n.yg)("p",null,"Use ",(0,n.yg)("inlineCode",{parentName:"p"},"ListboxPrimitiveGroup")," to create different groupings within the same listbox:"),(0,n.yg)(D,{scope:{useListboxPrimitiveState:u.VJ,ListboxPrimitive:u.pF,ListboxPrimitiveGroup:y.tZ,ListboxPrimitiveItem:u.MP,Stack:c.B},noInline:!0,showOverflow:!0,mdxType:"LivePreview"},v),(0,n.yg)("h3",null,"Multiselect Listbox"),(0,n.yg)("p",null,"Our listbox is set for single selection by default. To change it to allow multiple selections, specify the variant as ",(0,n.yg)("inlineCode",{parentName:"p"},"multiple")," on ",(0,n.yg)("inlineCode",{parentName:"p"},"ListboxPrimitive"),":"),(0,n.yg)(D,{scope:{useListboxPrimitiveState:u.VJ,ListboxPrimitive:u.pF,ListboxPrimitiveItem:u.MP},noInline:!0,showOverflow:!0,mdxType:"LivePreview"},x),(0,n.yg)("h3",null,"Dual Listboxes"),(0,n.yg)("p",null,"Listboxes can be used in any situation where a user needs to select items in a list or rearrange a list. One example is a UI where users need to move items between two lists like this:"),(0,n.yg)(D,{scope:{useListboxPrimitiveState:u.VJ,ListboxPrimitive:u.pF,ListboxPrimitiveItem:u.MP,Box:r.az,Button:o.$n,CheckboxCheckIcon:d.CheckboxCheckIcon,PlusIcon:g.PlusIcon,MinusIcon:p.MinusIcon,Column:m.V,Grid:m.x,Stack:c.B},noInline:!0,showOverflow:!0,mdxType:"LivePreview"},f),(0,n.yg)("h3",null,"Custom styling"),(0,n.yg)("p",null,"You can provide custom styling to the primitive listbox by utilizing the ",(0,n.yg)("inlineCode",{parentName:"p"},"as")," prop on each component."),(0,n.yg)("p",null,"The listbox primitive does not come with any styling, and thus you could mix the functionality of it with another component by using the ",(0,n.yg)("em",{parentName:"p"},"as")," prop. By doing so, you can get styling from another component, and listbox functionality from this primitive."),(0,n.yg)("p",null,"Because these are not styled, rendering any of them ",(0,n.yg)("em",{parentName:"p"},"as")," another component you can mix the functionality of two components together. Styling from one, listbox functionlity from the primitive component."),(0,n.yg)("p",null,"In the example below, we import the Paste Button ",(0,n.yg)("inlineCode",{parentName:"p"},"import {Button} from '@twilio-paste/button';")," and use it as the Listbox items via the ",(0,n.yg)("inlineCode",{parentName:"p"},"as")," prop."),(0,n.yg)(D,{scope:{useListboxPrimitiveState:u.VJ,ListboxPrimitive:u.pF,ListboxPrimitiveItem:u.MP,Button:o.$n,Stack:c.B,CheckboxCheckIcon:d.CheckboxCheckIcon},noInline:!0,showOverflow:!0,mdxType:"LivePreview"},C),(0,n.yg)("hr",null),(0,n.yg)("h2",null,"Usage Guide"),(0,n.yg)("p",null,"This package is a wrapper around the ",(0,n.yg)("a",{parentName:"p",href:"https://reakit.io/docs/composite/"},"Reakit Composite"),`. If you’re wondering why we wrapped that package into our own, we reasoned that it would be best for our consumers’ developer experience. For example:`),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"If we want to migrate the underlying nuts and bolts in the future, Twilio products that depend on this primitive would need to replace all occurrences of ",(0,n.yg)("inlineCode",{parentName:"li"},`import … from ‘x-package’`)," to ",(0,n.yg)("inlineCode",{parentName:"li"},`import … from ‘@some-new/package’`),". By wrapping it in ",(0,n.yg)("inlineCode",{parentName:"li"},"@twilio-paste/x-primitive"),`, this refactor can be avoided. The only change would be a version bump in the ‘package.json\` file for the primitive.`),(0,n.yg)("li",{parentName:"ul"},"We can more strictly enforce semver and backwards compatibility than some of our dependencies."),(0,n.yg)("li",{parentName:"ul"},"We can control when to provide an update and which versions we allow, to help reduce potential bugs our consumers may face."),(0,n.yg)("li",{parentName:"ul"},"We can control which APIs we expose. For example, we may chose to enable or disable usage of certain undocumented APIs.")),(0,n.yg)("h3",null,"API"),(0,n.yg)("h4",null,"Installation"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},`yarn add @twilio-paste/listbox-primitive - or - yarn add @twilio-paste/core
`)),(0,n.yg)("h4",null,"Props"),(0,n.yg)("p",null,"This props list is a scoped version of the properties available from the ",(0,n.yg)("a",{parentName:"p",href:"https://reakit.io/docs/composite/"},"Reakit Composite")," package."),(0,n.yg)("h5",null,"useListboxPrimitiveState"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Prop"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Default"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"baseId?")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:null},"ID that will serve as a base for all the items IDs"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"rtl?")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"boolean")),(0,n.yg)("td",{parentName:"tr",align:null},"Determines how next and previous functions will behave"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"orientation?")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},'"horizontal" \\| "vertical"')),(0,n.yg)("td",{parentName:"tr",align:null},"Defines the orientation of the listbox"),(0,n.yg)("td",{parentName:"tr",align:null},'"vertical"`')),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"currentId?")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:null},"The current focused item id"),(0,n.yg)("td",{parentName:"tr",align:null})))),(0,n.yg)("h5",null,"ListboxPrimitive"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Note:")," Most required props are provided by spreading the returned state from ",(0,n.yg)("inlineCode",{parentName:"p"},"useListboxPrimitiveState"),"."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Prop"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Default"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"move")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"(id: string \\| null) => void")),(0,n.yg)("td",{parentName:"tr",align:null},"Moves focus to a given item ID"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"first")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"() => void")),(0,n.yg)("td",{parentName:"tr",align:null},"Moves focus to the first item"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"last")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"() => void")),(0,n.yg)("td",{parentName:"tr",align:null},"Moves focus to the last item"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"items")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"Item[]")),(0,n.yg)("td",{parentName:"tr",align:null},"Lists all the listbox items with their id, DOM ref, disabled state and groupId if any. It is updated when registerItem and unregisterItem are called."),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"setCurrentId")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"Dispatch<SetStateAction<string \\| null \\| undefined>>")),(0,n.yg)("td",{parentName:"tr",align:null},"Sets currentId. It only updates the currentId state without moving focus."),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"focusable?")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"boolean")),(0,n.yg)("td",{parentName:"tr",align:null},"When an element is disabled, it may still be focusable. It works similarly to readOnly on form elements. In this case, only aria-disabled will be set."),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"disabled?")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"boolean")),(0,n.yg)("td",{parentName:"tr",align:null},"Same as the HTML attribute"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"baseId?")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:null},"ID that will serve as a base for all the items IDs"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"currentId?")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:null},"The current focused item id"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"groups?")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"Group[]")),(0,n.yg)("td",{parentName:"tr",align:null},"Lists all the composite groups with their id and DOM ref. It is updated when registerGroup and unregisterGroup are called."),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"orientation?")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},'"horizontal" \\| "vertical"')),(0,n.yg)("td",{parentName:"tr",align:null},"Defines the orientation of the listbox"),(0,n.yg)("td",{parentName:"tr",align:null},'"vertical"`')),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"variant?")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},'"single" \\| "multiple"')),(0,n.yg)("td",{parentName:"tr",align:null},"Defines the selection mode of the listbox"),(0,n.yg)("td",{parentName:"tr",align:null},'"single"`')))),(0,n.yg)("h5",null,"ListboxPrimitiveGroup"),(0,n.yg)("p",null,"No props to show"),(0,n.yg)("h5",null,"ListboxPrimitiveItem"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Note:")," Most required props are provided by spreading the returned state from ",(0,n.yg)("inlineCode",{parentName:"p"},"useListboxPrimitiveState"),"."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Prop"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Default"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"baseId")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:null},"ID that will serve as a base for all the items IDs"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"setBaseId")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"Dispatch<SetStateAction<string>>")),(0,n.yg)("td",{parentName:"tr",align:null},"Sets the baseId"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"items")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"Item[]")),(0,n.yg)("td",{parentName:"tr",align:null},"Lists all the listbox items with their id, DOM ref, disabled state and groupId if any. It is updated when registerItem and unregisterItem are called."),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"groups")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"Group[]")),(0,n.yg)("td",{parentName:"tr",align:null},"Lists all the composite groups with their id and DOM ref. It is updated when registerGroup and unregisterGroup are called."),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"rtl")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"boolean")),(0,n.yg)("td",{parentName:"tr",align:null},"Determines how next and previous functions will behave"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"loop")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},'boolean \\| "horizontal" \\| "vertical"')),(0,n.yg)("td",{parentName:"tr",align:null},"Determines how the keyboard navigation loops through the items"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"'horizontal'"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"registerItem")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"(item: Item) => void")),(0,n.yg)("td",{parentName:"tr",align:null},"Registers a composite item."),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"unregisterItem")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"(item: Item) => void")),(0,n.yg)("td",{parentName:"tr",align:null},"Unregisters a composite item."),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"registerGroup")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"(group: Group) => void")),(0,n.yg)("td",{parentName:"tr",align:null},"Registers a composite group."),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"unregisterGroup")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"(group: Group) => void")),(0,n.yg)("td",{parentName:"tr",align:null},"Unregisters a composite group."),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"move")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"(id: string \\| null) => void")),(0,n.yg)("td",{parentName:"tr",align:null},"Moves focus to a given item ID"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"next")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"() => void")),(0,n.yg)("td",{parentName:"tr",align:null},"Moves focus to the next item"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"previous")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"() => void")),(0,n.yg)("td",{parentName:"tr",align:null},"Moves focus to the previous item"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"up")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"() => void")),(0,n.yg)("td",{parentName:"tr",align:null},"Moves focus to the item above"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"down")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"() => void")),(0,n.yg)("td",{parentName:"tr",align:null},"Moves focus to the item below"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"first")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"() => void")),(0,n.yg)("td",{parentName:"tr",align:null},"Moves focus to the first item"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"last")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"() => void")),(0,n.yg)("td",{parentName:"tr",align:null},"Moves focus to the last item"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"sort")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"() => void")),(0,n.yg)("td",{parentName:"tr",align:null},"Sorts the items based on their position in the DOM"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"setRTL")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"Dispatch<SetStateAction<boolean>>")),(0,n.yg)("td",{parentName:"tr",align:null},"Sets rtl"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"setOrientation")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},'Dispatch<SetStateAction<boolean \\| "horizontal" \\| "vertical">>')),(0,n.yg)("td",{parentName:"tr",align:null},"Sets orientation"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"setCurrentId")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"Dispatch<SetStateAction<string \\| null \\| undefined>>")),(0,n.yg)("td",{parentName:"tr",align:null},"Sets currentId. It only updates the currentId state without moving focus."),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"setLoop")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},'Dispatch<SetStateAction<boolean \\| "horizontal" \\| "vertical">>')),(0,n.yg)("td",{parentName:"tr",align:null},"Sets loop"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"reset")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"() => void")),(0,n.yg)("td",{parentName:"tr",align:null},"Resets to the initial state"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"selected?")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"boolean")),(0,n.yg)("td",{parentName:"tr",align:null},"Set if an item is in a selected state"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"disabled?")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"boolean")),(0,n.yg)("td",{parentName:"tr",align:null},"Set if an item is disabled"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"onSelect?")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"() => void")),(0,n.yg)("td",{parentName:"tr",align:null},"Event handler called when an item is selected"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"currentId?")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:null},"The current focused item id"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"orientation?")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},'"horizontal" \\| "vertical"')),(0,n.yg)("td",{parentName:"tr",align:null},"Defines the orientation of the listbox"),(0,n.yg)("td",{parentName:"tr",align:null},'"vertical"`')))),(0,n.yg)(R,{mdxType:"ChangelogRevealer"},(0,n.yg)(l,{mdxType:"Changelog"})))))}z.isMDXComponent=!0},81423:(e,t,a)=>{"use strict";a.r(t),a.d(t,{MinusIcon:()=>r});var n=a(36669),i=a(55729),l=a(96316);let r=i.forwardRef(({as:e,display:t,element:a="ICON",size:r,color:o,title:s,decorative:m},d)=>{let p=`MinusIcon-${(0,n.GV)()}`;if(!m&&null==s)throw Error("[MinusIcon]: Missing a title for non-decorative icon.");return i.createElement(l.IconWrapper,{as:e,display:t,element:a,size:r,color:o,ref:d},i.createElement("svg",{role:"img","aria-hidden":m,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":p},s?i.createElement("title",{id:p},s):null,i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.167 9.5c.46 0 .833.448.833 1 0 .513-.322.936-.736.993l-.097.007H5.833c-.46 0-.833-.448-.833-1 0-.513.322-.936.736-.993l.097-.007h8.334z"})))});r.displayName="MinusIcon"},98536:(e,t,a)=>{"use strict";a.r(t),a.d(t,{CheckboxCheckIcon:()=>r});var n=a(36669),i=a(55729),l=a(96316);let r=i.forwardRef(({as:e,display:t,element:a="ICON",size:r,color:o,title:s,decorative:m},d)=>{let p=`CheckboxCheckIcon-${(0,n.GV)()}`;if(!m&&null==s)throw Error("[CheckboxCheckIcon]: Missing a title for non-decorative icon.");return i.createElement(l.IconWrapper,{as:e,display:t,element:a,size:r,color:o,ref:d},i.createElement("svg",{role:"img","aria-hidden":m,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":p},s?i.createElement("title",{id:p},s):null,i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M15.59 5.916a1.386 1.386 0 00-1.98 0l-5.04 5.138L6.39 8.83a1.38 1.38 0 00-1.98 0 1.448 1.448 0 000 2.018l3.171 3.233a1.382 1.382 0 001.98 0l6.03-6.148a1.448 1.448 0 000-2.018z"})))});r.displayName="CheckboxCheckIcon"}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=32850)),_N_E=e.O()}]);