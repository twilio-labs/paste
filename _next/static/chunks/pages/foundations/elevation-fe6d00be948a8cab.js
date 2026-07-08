(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1142],{2523:(e,o,t)=>{"use strict";t.r(o),t.d(o,{__N_SSG:()=>z,default:()=>Q,getStaticProps:()=>N,mdxHeadings:()=>U,meta:()=>D}),t(55729);var a=t(11885),r=t(4073),n=t(97215),l=t(28019),i=t(54652),d=t(76127),s=t(629),c=t(25630),h=t(64003),g=t(38992);let u={src:"/_next/static/media/level-1-accent-shadow.a12da565.png",height:968,width:1830,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAABlBMVEX5+vz09vr0jZbIAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAHUlEQVR4nGNgYGAEIUYGRkYGBgYYycDICMYgHiMAASMAEUrEvDQAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4},p={src:"/_next/static/media/level-1-tonal-change.ce76542a.png",height:968,width:1830,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAD1BMVEXv9f34+/3v7/H08vLd6vzSxigyAAAAAXRSTlP+GuMHfQAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAACBJREFUeJwlxsENACAAhDDg3H9mE+2r+EHpQVgteGnCBQMFACxXNPm8AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4},m={src:"/_next/static/media/level-2-accent-shadow.75e899b6.png",height:968,width:1830,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAACVBMVEXt8vj6+/z0+P1IPCTBAAAAAXRSTlP+GuMHfQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAB1JREFUeJxjYGBiYmRiAANGRiYGJiYGJkYQQGIAAAJyACa5SeLgAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4},A={src:"/_next/static/media/level-2-risen-shadow.a6a404ad.png",height:968,width:1830,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAADFBMVEX09/v3+v7+/v7n7/mdRJRWAAAAAXRSTlP+GuMHfQAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAACBJREFUeJwdyLENADAQhDDg9t/5lbg0+AQiVDhHv5zlAQKEAChgg30oAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4},b={src:"/_next/static/media/level-3-overlay.b7419c55.png",height:968,width:1830,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAGFBMVEXv9Py8v8r1+v/JztiqsL7Fy9bY2+P//v3rErBuAAAAAnRSTlP9/o2EjdMAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAjSURBVHicBcGBAQAwCIMwpNX9//ESdrOn0GlXJS8NyNw0ygcHeABecNHfxwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4},v={src:"/_next/static/media/level-3-risen-shadow.1f1386bd.png",height:968,width:1830,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAFVBMVEXz9vr7/P31+f7s8vq5vsjd4Ojc4Of525XCAAAAAXRSTlP+GuMHfQAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAACBJREFUeJwFwQEBACAMwCD2q/0jC8QYpNYo5+0OdW7jAwKlADDBKrqRAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4},y={src:"/_next/static/media/elevated-background-color-tokens.e1b43d6c.png",height:968,width:1936,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAHlBMVEUTGyn8/P0fKDbz8/Xs7e6Fjp5teIwyP1YzQVnDx83TAwcaAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAJUlEQVR4nCXGtwEAIBADsXOAh/0XpkCVkBQDKOpPU9ugta/n+AED1gBOA75h6gAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4};var f=t(72387),x=t(94789);let k=`
const ElevatedBackgroundColorTokens = () => {
  const TokensTemplate = ({
    backgroundColor,
    backgroundColorElevated,
    hasBorder,
    backgroundColorBase,
    backgroundColorElevation,
  }) => {
    return (
      <Box flexShrink={0} width="170px">
        <Box position="relative">
          <Box
            backgroundColor={backgroundColor}
            borderRadius="borderRadius30"
            height="109px"
            width="100px"
            borderWidth={hasBorder ? "borderWidth10" : "borderWidth0"}
            borderStyle="solid"
            borderColor="colorBorderWeaker"
          />
          <Box
            backgroundColor={backgroundColorElevated}
            borderRadius="borderRadius30"
            height="109px"
            width="100px"
            position="absolute"
            top={23}
            left={23}
          />
        </Box>
        <Box marginTop="space200" fontWeight="fontWeightSemibold">
          <Text as="p" color="colorTextWeak" fontSize="fontSize20">
            Base:
          </Text>
          <Text as="p" marginTop="space30" fontSize="fontSize20">
            {backgroundColorBase}
          </Text>
          <Text as="p" marginTop="space40" color="colorTextWeak" fontSize="fontSize20">
            Elevation:
          </Text>
          <Text as="p" marginTop="space30" fontSize="fontSize20">
            {backgroundColorElevation}
          </Text>
        </Box>
      </Box>
    );
  };
  return (
    <Box display="flex" overflowX="auto" columnGap="space30">
      <TokensTemplate
        backgroundColor="colorBackgroundBody"
        backgroundColorElevated="colorBackgroundBodyElevation"
        backgroundColorBase="$color-background-body"
        backgroundColorElevation="$color-background-body-elevation"
        hasBorder
      />
      <TokensTemplate
        backgroundColor="colorBackground"
        backgroundColorElevated="colorBackgroundElevation"
        backgroundColorBase="$color-background"
        backgroundColorElevation="$color-background-elevation"
      />
      <TokensTemplate
        backgroundColor="colorBackgroundInverse"
        backgroundColorElevated="colorBackgroundInverseElevation"
        backgroundColorBase="$color-background-inverse"
        backgroundColorElevation="$color-background-inverse-elevation"
      />
      <TokensTemplate
        backgroundColor="colorBackgroundInverseStrong"
        backgroundColorElevated="colorBackgroundInverseStrongElevation"
        backgroundColorBase="$color-background-inverse-strong"
        backgroundColorElevation="$color-background-inverse-strong-elevation"
      />
    </Box>
  );
};

render(
  <ElevatedBackgroundColorTokens />
)
`.trim(),w=`
const ShadowTokensLevel1 = () => {
  return (
    <Box display="flex" fontSize="fontSize30" fontWeight="fontWeightSemibold">
      <Box
        width="50%"
        height="300px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        paddingLeft="space80"
        borderWidth="borderWidth10"
        borderStyle="solid"
        borderColor="colorBorderWeaker"
        zIndex="zIndex10"
      >
        <Box
          backgroundColor="colorBackgroundWeaker"
          height="100px"
          borderRadius="borderRadius30"
          borderRight="none"
          borderTopRightRadius="borderRadius0"
          borderBottomRightRadius="borderRadius0"
          boxShadow="shadowElevation05"
        />
        <Box display="flex" alignItems="center" columnGap="space20" marginTop="space50">
          <ThemeIcon decorative={true} color="colorTextIcon" />
          <Text as="p" color="colorTextWeak">
            Selected theme
          </Text>
        </Box>
        <Text as="p" marginTop="space30">
          $shadow-elevation-05
        </Text>
      </Box>
      <Box width="50%">
        <Theme.Provider theme="twilio-dark">
          <Box
            backgroundColor="colorBackgroundBody"
            height="300px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            paddingRight="space80"
            borderWidth="borderWidth10"
            borderLeftWidth="borderWidth0"
            borderStyle="solid"
            borderColor="colorBorderWeaker"
            fontWeight="fontWeightSemibold"
          >
            <Box
              backgroundColor="colorBackgroundWeaker"
              height="100px"
              borderRadius="borderRadius30"
              borderLeft="none"
              borderTopLeftRadius="borderRadius0"
              borderBottomLeftRadius="borderRadius0"
              boxShadow="shadowElevation05"
            />
            <Box display="flex" alignItems="center" columnGap="space20" marginTop="space50" paddingLeft="space80">
              <DarkModeIcon decorative={true} color="colorTextIcon" />
              <Text as="p" color="colorTextWeak">
                Dark mode
              </Text>
            </Box>
            <Text as="p" marginTop="space30" paddingLeft="space80">
              $shadow-elevation-05
            </Text>
          </Box>
        </Theme.Provider>
      </Box>
    </Box>
  );
};

render(
  <ShadowTokensLevel1 />
)
`.trim(),T=`
const ShadowTokensLevel2 = () => {
  return (
    <Box display="flex" fontSize="fontSize30" fontWeight="fontWeightSemibold">
      <Box
        width="50%"
        height="300px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        paddingLeft="space80"
        borderWidth="borderWidth10"
        borderStyle="solid"
        borderColor="colorBorderWeaker"
        zIndex="zIndex10"
      >
        <Box
          backgroundColor="colorBackgroundWeaker"
          height="100px"
          borderRadius="borderRadius30"
          borderRight="none"
          borderTopRightRadius="borderRadius0"
          borderBottomRightRadius="borderRadius0"
          boxShadow="shadowElevation10"
        />
          <Box display="flex" alignItems="center" columnGap="space20" marginTop="space50">
            <ThemeIcon decorative={true} color="colorTextIcon" />
            <Text as="p" color="colorTextWeak">
              Selected theme
            </Text>
          </Box>
          <Text as="p" marginTop="space30">
            $shadow-elevation-10
          </Text>
      </Box>
      <Box width="50%">
        <Theme.Provider theme="twilio-dark">
          <Box
            backgroundColor="colorBackgroundBody"
            height="300px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            paddingRight="space80"
            borderWidth="borderWidth10"
            borderLeftWidth="borderWidth0"
            borderStyle="solid"
            borderColor="colorBorderWeaker"
            fontWeight="fontWeightSemibold"
          >
            <Box
              backgroundColor="colorBackgroundWeaker"
              height="100px"
              borderRadius="borderRadius30"
              borderLeft="none"
              borderTopLeftRadius="borderRadius0"
              borderBottomLeftRadius="borderRadius0"
              boxShadow="shadowElevation10"
            />
            <Box display="flex" alignItems="center" columnGap="space20" marginTop="space50" paddingLeft="space80">
              <DarkModeIcon decorative={true} color="colorTextIcon" />
              <Text as="p" color="colorTextWeak">
                Dark mode
              </Text>
            </Box>
            <Text as="p" marginTop="space30" paddingLeft="space80">
              $shadow-elevation-10
            </Text>
          </Box>
        </Theme.Provider>
      </Box>
    </Box>
  );
};

render(
  <ShadowTokensLevel2 />
)
`.trim(),B=`
const ShadowTokensLevel3 = () => {
  return (
    <Box display="flex" fontSize="fontSize30" fontWeight="fontWeightSemibold">
      <Box
        width="50%"
        height="300px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        paddingLeft="space80"
        borderWidth="borderWidth10"
        borderStyle="solid"
        borderColor="colorBorderWeaker"
        zIndex="zIndex10"
      >
        <Box
          backgroundColor="colorBackgroundWeaker"
          height="100px"
          borderRadius="borderRadius30"
          borderRight="none"
          borderTopRightRadius="borderRadius0"
          borderBottomRightRadius="borderRadius0"
          boxShadow="shadowElevation20"
        />
        <Box display="flex" alignItems="center" columnGap="space20" marginTop="space50">
          <ThemeIcon decorative={true} color="colorTextIcon" />
          <Text as="p" color="colorTextWeak">
            Selected theme
          </Text>
        </Box>
        <Text as="p" marginTop="space30">
          $shadow-elevation-20
        </Text>
      </Box>
      <Box width="50%">
        <Theme.Provider theme="twilio-dark">
          <Box
            backgroundColor="colorBackgroundBody"
            height="300px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            paddingRight="space80"
            borderWidth="borderWidth10"
            borderLeftWidth="borderWidth0"
            borderStyle="solid"
            borderColor="colorBorderWeaker"
            fontWeight="fontWeightSemibold"
          >
            <Box
              backgroundColor="colorBackgroundWeaker"
              height="100px"
              borderRadius="borderRadius30"
              borderLeft="none"
              borderTopLeftRadius="borderRadius0"
              borderBottomLeftRadius="borderRadius0"
              boxShadow="shadowElevation20"
            />
            <Box display="flex" alignItems="center" columnGap="space20" marginTop="space50" paddingLeft="space80">
              <DarkModeIcon decorative={true} color="colorTextIcon" />
              <Text as="p" color="colorTextWeak">
                Dark mode
              </Text>
            </Box>
            <Text as="p" marginTop="space30" paddingLeft="space80">
              $shadow-elevation-20
            </Text>
          </Box>
        </Theme.Provider>
      </Box>
    </Box>
  );
};

render(
  <ShadowTokensLevel3 />
)
`.trim(),C=()=>(0,f.Y)(x.q,{children:"For example: The Side Panel pushes content at Level 0 but is categorized as Level 1, and uses $shadow-elevation-05 because it contains a task that requires user focus while still relying on the background content."}),E=()=>(0,f.Y)(x.q,{children:"For example: a Callout is typically placed inline with the background content and relies on that context for its meaning. However, it uses a slight background change with $color-background-body-elevation to subtly appear more prominent and make its information stand out on top of the default background body color."}),R=()=>(0,f.Y)(x.q,{children:"For example: a Topbar's role is not to be at a high hierarchy but to have enough emphasis and differentiation to be easily identified at any point of the experience."}),S=()=>(0,f.Y)(x.q,{children:"For example: a Popover uses a subtle, sharp shadow with $shadow-elevation-10 to create the illusion of floating above the content, while still being bound to its trigger button. This adds depth without dominating the interaction."});var I=t(15780),W=t(38590),L=t(78628),z=!0;let D={title:"Elevation",description:"Elevation organizes elements along a visual hierarchy creating a sense of depth in an interface.",slug:"/foundations/elevation/"},N=async()=>({props:{navigationData}}),U=[{value:"Introduction",depth:2},{value:"Elevation levels",depth:2},{value:"Level 0",depth:3},{value:"Level 1",depth:3},{value:"Level 2",depth:3},{value:"Level 3",depth:3},{value:"Elevated background color tokens",depth:2},{value:"Shadow tokens",depth:2}],M=e=>function(o){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",o)},P=M("GenericHeader"),G=M("PageAside"),Y=M("LivePreview"),F=M("CalloutList"),V=M("CalloutListItem"),H={meta:D,getStaticProps:N,mdxHeadings:U},J=I.A;function Q({components:e,...o}){return(0,a.yg)(J,{...H,...o,components:e,mdxType:"MDXLayout"},(0,a.yg)(P,{name:D.title,description:D.description,categoryRoute:g.t4.FOUNDATIONS,mdxType:"GenericHeader"},(0,a.yg)(n.iD,{mdxType:"PageHeaderSeparator"},(0,a.yg)(l.w,{orientation:"horizontal",mdxType:"Separator"}))),(0,a.yg)("contentwrapper",null,(0,a.yg)(G,{data:U,mdxType:"PageAside"}),(0,a.yg)("content",null,(0,a.yg)("h2",null,"Introduction"),(0,a.yg)("p",null,'Elevation represents how "close" or "far" an element feels from the user in a digital context, using a combination of ',(0,a.yg)("strong",{parentName:"p"},"shadows"),", ",(0,a.yg)("strong",{parentName:"p"},"colors")," and ",(0,a.yg)("strong",{parentName:"p"},"overlays")," to create a layering effect, making elements feel distinct, focused or prioritized."),(0,a.yg)("p",null,`Paste’s elevation system is:`),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Subtle: Provides just enough visual contrast to create a sense of depth, avoiding excessive visual clutter."),(0,a.yg)("li",{parentName:"ul"},"Intentional: Provides clear meaning to guide users through interfaces, improving user efficiency by consistently communicating the level of importance of elements across different pages."),(0,a.yg)("li",{parentName:"ul"},"Dynamic: Adapts to different background colors and themes, ensuring consistent depth perception and usability across light, dark, and custom design contexts.")),(0,a.yg)("h2",null,"Elevation levels"),(0,a.yg)("p",null,"Paste has a total of 4 levels of elevation. Each elevation level corresponds to a perceived distance within the interface. All components are assigned a level based on their intended distance against the surface behind them."),(0,a.yg)("h3",null,"Level 0"),(0,a.yg)("p",null,"Elements at this level are the baseline for all the other levels and represent the background of the interface."),(0,a.yg)("p",null,"The majority of elements will be at this level in their resting states. However an element on this level can move to a higher level when interacted with."),(0,a.yg)("p",null,`For example: a Button might be ‘Level 0’ in its resting state, but ‘Level 1’ when hovered.`),(0,a.yg)("h3",null,"Level 1"),(0,a.yg)("p",null,"Elements at this level require subtle differentiation from the surface behind them without adding too much distance. These elements are either presented by default or triggered within the composition but typically do not open on top of other elements."),(0,a.yg)("p",null,"There are 2 different ways to communicate an element's elevation in level 1:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Use an accent shadow")," for elements that need to be distinct from the surrounding elements but not highlighted.")),(0,a.yg)(h.w,{src:u,alt:"mock of side panel component with 'shadow elevation 05' as box shadow",mdxType:"ResponsiveImage"}),(0,a.yg)(C,{mdxType:"ApplyingLevel1ImgCaption"}),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Use a tonal difference")," when elements need to be highlighted as well as distinct from the background.")),(0,a.yg)(h.w,{src:p,alt:"a mock of callout component with 'color background body elevation' token as background color that makes it subtly more prominent",mdxType:"ResponsiveImage"}),(0,a.yg)(E,{mdxType:"CalloutExampleImgCaption"}),(0,a.yg)("h3",null,"Level 2"),(0,a.yg)("p",null,"Elements that rest at this level are distinctly separated from the background and dynamically overlap content layers creating visible distance while still being bound to Level 0 elements."),(0,a.yg)("p",null,"There are 2 different ways to communicate an element's elevation in level 2:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Use a tonal difference with an accent shadow")," when an element needs to be highlighted and prominent but does not overlap content by default. ",(0,a.yg)("strong",{parentName:"li"},"Combine this with a soft sharp shadow")," when the element overlaps other content and extra distance is necessary to make it distinct from the background.")),(0,a.yg)(h.w,{src:m,alt:"mock of a top bar component that uses 'color background weak elevation' as background color and 'shadow elevation bottom 05' as box shadow",mdxType:"ResponsiveImage"}),(0,a.yg)(R,{mdxType:"ApplyLevel2ImgCaption"}),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Use a soft and sharp shadow")," for elements that have temporary prominence or subtly float above the content.")),(0,a.yg)("p",null,"Interactive states like vertical or horizontal scroll can dynamically use a soft, sharp shadow to indicate that there is overflown content."),(0,a.yg)(h.w,{src:A,alt:"a mock of popover component that uses 'shadow elevation 10' as box shadow",mdxType:"ResponsiveImage"}),(0,a.yg)(S,{mdxType:"PopoverExampleImgCaption"}),(0,a.yg)("h3",null,"Level 3"),(0,a.yg)("p",null,"Elements that rest at this level float above all other levels, and tend to contain crucial actions or information that temporarily moves to the top hierarchy of the surface."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Use a large, soft shadow"),", for elements that are at the top priority and require user focus, but still allow the user to interact with the surrounding content.")),(0,a.yg)("p",null,"For elements that already have their own border, use ",(0,a.yg)("inlineCode",{parentName:"p"},"$shadow-elevation-20"),". Otherwise, use ",(0,a.yg)("inlineCode",{parentName:"p"},"$shadow-elevation-top-20")," to define its edges against the background."),(0,a.yg)(h.w,{src:v,alt:"a mock including toast component using 'shadow elevation 20' as box shadow and minimizable dialog using 'color background weaker' token as background color and 'shadow elevation top 20' as box shadow",mdxType:"ResponsiveImage"}),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Use a large soft shadow along with an overlay")," for elements that completely isolate the interface to draw full focus from the user.")),(0,a.yg)(h.w,{src:b,alt:"mock of alert dialog component where the overlay is using 'color background overlay' token as background color and 'shadow elevation 20' token as box shadow for dialog",mdxType:"ResponsiveImage"}),(0,a.yg)("h2",null,"Elevated background color tokens"),(0,a.yg)("p",null,"Subtle tonal shifts are an effective way to communicate hierarchy and prominence for elevated elements without adding visual clutter to the screen."),(0,a.yg)("p",null,"Paste's elevated background color tokens are derived from a base background color with tonal shifts to indicate elevation. Elevated surfaces darken on light backgrounds and lighten on dark backgrounds, ensuring clarity and consistency across themes."),(0,a.yg)(r.Mz,{href:"/tokens/list#background-colors",mdxType:"Anchor"},"View our full list of Elevated background color tokens"),(0,a.yg)("br",null),(0,a.yg)("br",null),(0,a.yg)("p",null,"For levels 1 and 2, when showing elevation through tonal differences, pair elevated background color tokens with their corresponding background color. For example: Use ",(0,a.yg)("inlineCode",{parentName:"p"},"$color-background-body-elevation")," on top of ",(0,a.yg)("inlineCode",{parentName:"p"},"$color-background-body"),"."),(0,a.yg)(Y,{scope:{Box:d.az,Text:s.EY},noInline:!0,showOverflow:!0,mdxType:"LivePreview"},k),(0,a.yg)("p",null,"Elevated elements across levels that share the same background color as the main page body should use the token ",(0,a.yg)("inlineCode",{parentName:"p"},"$color-background-weaker"),". This token matches the page body tone in light mode but appears slightly lighter in dark mode to subtly reinforce elevation."),(0,a.yg)(h.w,{src:y,alt:"a mock comparing the 'color background weaker token' in light and dark mode used as background color for minimizable dialog",mdxType:"ResponsiveImage"}),(0,a.yg)(i.Pq,{variant:"neutral",marginY:"space70",mdxType:"Callout"},(0,a.yg)(i.v,{as:"h4",mdxType:"CalloutHeading"},"Different uses of color"),(0,a.yg)(i.wz,{mdxType:"CalloutText"},(0,a.yg)(F,{as:"ul",mdxType:"CalloutList"},(0,a.yg)(V,{mdxType:"CalloutListItem"},"Elevation Colors: Subtle tones for prominence and hierarchy, used to separate elements visually from the background."),(0,a.yg)(V,{mdxType:"CalloutListItem"},"Semantic Colors: Used to communicate meaning or status, such as success, warning, or error."),(0,a.yg)(V,{mdxType:"CalloutListItem"},"Decorative Colors: Reflect the brand identity or give a branded feel to a composition."))),"Tip: Use elevation colors for hierarchy, semantic colors for purpose, and branded colors for identity and style."),(0,a.yg)("h2",null,"Shadow tokens"),(0,a.yg)("p",null,`Shadows are the most extreme way to display elevation. Overuse of shadows without understanding your page’s visual hierarchy can have a negative effect on the user experience.`),(0,a.yg)(r.Mz,{href:"/tokens/list#box-shadows",mdxType:"Anchor"},"View our full list of Elevated shadow tokens"),(0,a.yg)("br",null),(0,a.yg)("br",null),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Level 1 shadows")," are accent shadows that subtly define the edges of a container. They serve as a lightweight alternative to risen shadows at lower elevations."),(0,a.yg)(Y,{scope:{Box:d.az,Text:s.EY,Theme:c.Sx,ThemeIcon:W.ThemeIcon,DarkModeIcon:L.DarkModeIcon},noInline:!0,showOverflow:!0,mdxType:"LivePreview"},w),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Level 2 shadows")," are small and sharp and indicate a close distance with the surface behind them. Shadows used in dark backgrounds use a slightly darker hue so the perceived depth is consistent."),(0,a.yg)(Y,{scope:{Box:d.az,Text:s.EY,Theme:c.Sx,ThemeIcon:W.ThemeIcon,DarkModeIcon:L.DarkModeIcon},noInline:!0,showOverflow:!0,mdxType:"LivePreview"},T),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Level 3 shadows")," are larger and softer, this indicates a further distance from the surface behind them. Shadows used in dark backgrounds use a slightly darker hue so the perceived depth is consistent."),(0,a.yg)(Y,{scope:{Box:d.az,Text:s.EY,Theme:c.Sx,ThemeIcon:W.ThemeIcon,DarkModeIcon:L.DarkModeIcon},noInline:!0,showOverflow:!0,mdxType:"LivePreview"},B))))}Q.isMDXComponent=!0},15780:(e,o,t)=>{"use strict";t.d(o,{A:()=>g});var a=t(72387),r=t(95669),n=t.n(r),l=t(81278);t(55729);var i=t(10511),d=t(43084),s=t(63437),c=t(38992);let h={h1:()=>null},g=({children:e,meta:o,navigationData:t})=>{let r=o.title?`${o.title} - ${c.DZ.TITLE}`:c.DZ.TITLE,g=o.description||c.DZ.DESCRIPTION,u=(0,l.useRouter)();return(0,a.FD)(s.T,{navigationData:t,children:[(0,a.FD)(n(),{children:[(0,a.Y)("title",{children:r}),(0,a.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${u.pathname}`}),(0,a.Y)("meta",{name:"description",content:g},"description")]}),(0,a.Y)(i.s,{children:(0,a.Y)(d.Q,{componentOverrides:o.package?h:{},children:e})})]})}},38590:(e,o,t)=>{"use strict";t.r(o),t.d(o,{ThemeIcon:()=>l});var a=t(36669),r=t(55729),n=t(96316);let l=r.forwardRef(({as:e,display:o,element:t="ICON",size:l,color:i,title:d,decorative:s},c)=>{let h=`ThemeIcon-${(0,a.GV)()}`;if(!s&&null==d)throw Error("[ThemeIcon]: Missing a title for non-decorative icon.");return r.createElement(n.IconWrapper,{as:e,display:o,element:t,size:l,color:i,ref:c},r.createElement("svg",{role:"img","aria-hidden":s,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",fill:"none",viewBox:"0 0 20 20","aria-labelledby":h},d?r.createElement("title",{id:h},d):null,r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.5 4a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h2a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-2zM6 6V5h1v1H6zm-.5 2a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h2a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-2zm.5 2V9h1v1H6zm-1 2.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-2zm1 .5v1h1v-1H6z",clipRule:"evenodd"}),r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3 3.5A1.5 1.5 0 014.5 2h4A1.5 1.5 0 0110 3.5v11.053l3.65-9.847a.154.154 0 00-.09-.198l-2.682-.994a.5.5 0 01.348-.938l2.68.994a1.156 1.156 0 01.682 1.484l-3.454 9.317 5.833-6.673a.159.159 0 00.023-.041l.001-.004a.87.87 0 00.005-.051l.002-.027a.413.413 0 00-.033-.09 111.33 111.33 0 01-1.607-1.426.5.5 0 01.669-.744c.547.492 1.448 1.299 1.564 1.39.206.162.3.381.345.514a1.428 1.428 0 01.058.243l.002.02.001.008v.004l-.497.05.5.012v.012l-.002.027c0 .021-.002.051-.005.085a1.268 1.268 0 01-.046.27 1.162 1.162 0 01-.213.39l-.008.01-7.85 8.98a.498.498 0 01-.184.132 1.498 1.498 0 01-1.192.589h-4a1.5 1.5 0 01-1.5-1.5V3.5zM4.5 3a.5.5 0 00-.5.5v13.05a.5.5 0 00.5.5h4a.5.5 0 00.5-.5V3.5a.5.5 0 00-.5-.5h-4z",clipRule:"evenodd"}),r.createElement("path",{fill:"currentColor",d:"M17.5 7.545l.497-.05c.003.02.003.04.003.061l-.5-.011z"})))});l.displayName="ThemeIcon"},51895:(e,o,t)=>{"use strict";t.d(o,{z:()=>n});var a=t(76127),r=t(55729),n=r.forwardRef(({element:e="DETAIL_TEXT",as:o="div",children:t,marginTop:n="space30",...l},i)=>r.createElement(a.az,{as:o,ref:i,element:e,...(0,a.x8)(l),marginTop:n,color:"colorTextWeak",fontSize:"fontSize20",lineHeight:"lineHeight20",fontWeight:"fontWeightMedium"},t));n.displayName="DetailText"},64003:(e,o,t)=>{"use strict";t.d(o,{w:()=>i});var a=t(72387),r=t(76127),n=t(8588),l=t.n(n);t(55729);let i=e=>(0,a.Y)(r.az,{display:"flex",justifyContent:"center",marginBottom:"space70",children:(0,a.Y)(l(),{placeholder:"blur",style:{height:"100%",maxWidth:"100%"},...e})})},84812:(e,o,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/elevation",function(){return t(2523)}])},94789:(e,o,t)=>{"use strict";t.d(o,{q:()=>l});var a=t(72387),r=t(76127),n=t(51895);t(55729);let l=({children:e})=>(0,a.Y)(r.az,{marginBottom:"space110",children:(0,a.Y)(n.z,{marginTop:"space0",children:e})})}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=84812)),_N_E=e.O()}]);