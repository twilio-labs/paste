(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3535],{40615:(e,a,n)=>{"use strict";n.d(a,{A:()=>h});var s=n(72387),t=n(76127),i=n(95669),o=n.n(i),r=n(81278);n(55729);var l=n(10511),d=n(43084),u=n(10732),c=n(62887),p=n(63437),m=n(38992);let g={h1:()=>null},h=({children:e,meta:a,navigationData:n,data:i,mdxHeadings:h,pageHeaderData:{categoryRoute:b,githubUrl:y,storybookUrl:f}})=>{let v=a.title?`${a.title} - ${m.DZ.TITLE}`:m.DZ.TITLE,P=a.description||m.DZ.DESCRIPTION,D=(0,r.useRouter)();return(0,s.FD)(p.T,{navigationData:n,children:[(0,s.FD)(o(),{children:[(0,s.Y)("title",{children:v}),(0,s.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${D.pathname}`}),(0,s.Y)("meta",{name:"description",content:P},"description")]}),(0,s.FD)(l.s,{children:[(0,s.Y)(c.c,{categoryRoute:b,githubUrl:y,storybookUrl:f,data:i}),(0,s.FD)(t.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,s.Y)(u.i,{data:h}),(0,s.Y)(t.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,s.Y)(d.Q,{componentOverrides:a.package?g:{},children:e})})]})]})]})}},77048:(e,a,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/paragraph",function(){return n(94007)}])},94007:(e,a,n)=>{"use strict";n.r(a),n.d(a,{__N_SSG:()=>l,default:()=>h,getStaticProps:()=>u,mdxHeadings:()=>c,meta:()=>d}),n(55729);var s=n(11885),t=n(50010),i=n(89564),o=n(41781),r=n(40615),l=!0;let d={title:"Paragraph",package:"@twilio-paste/paragraph",description:"The paragraph component is used to render blocks of text, with a preset amount of space beneath it to distinguish from adjacent content.",slug:"/components/paragraph/"},u=async()=>({props:{data:{...packageJson,...feature},navigationData,mdxHeadings:c,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/paragraph",storybookUrl:"/?path=/story/components-paragraph--default"}}}),c=[{value:"Guidelines",depth:2},{value:"About Paragraphs",depth:3},{value:"Accessibility",depth:3},{value:"Examples",depth:2},{value:"Default Paragraph",depth:3},{value:"Composition Notes",depth:2},{value:"When to Use a Paragraph",depth:3}],p=function(e){return console.warn("Component LivePreview was not imported, exported, or provided by MDXProvider as global scope"),(0,s.yg)("div",e)},m={meta:d,getStaticProps:u,mdxHeadings:c},g=r.A;function h({components:e,...a}){return(0,s.yg)(g,{...m,...a,components:e,mdxType:"MDXLayout"},(0,s.yg)(p,{scope:{Paragraph:t.f},language:"jsx",mdxType:"LivePreview"},`<Paragraph>
  Impossible is just a big word thrown around by small men who find it easier to live in the world they&rsquo;ve been given than to explore the power they have to change it. Impossible is not a fact. It&rsquo;s an opinion. Impossible is not a declaration. It's a dare. Impossible is potential. Impossible is temporary. Impossible is nothing.
</Paragraph>`),(0,s.yg)("h2",null,"Guidelines"),(0,s.yg)("p",null,"By default, the paragraph component should provide consistent values for font-size, line-height, and margin-bottom across themes."),(0,s.yg)("h3",null,"About Paragraphs"),(0,s.yg)("p",null,"Paragraphs are distinct sections of content, typically dealing with a single theme, and are indicated by a new line. Paragraphs are often used for a majority of text on the page and should be able to support a variety of information-dense layouts."),(0,s.yg)("h3",null,"Accessibility"),(0,s.yg)("p",null,"Paragraph text should be legible, and easy to read. It should also provide a clear amount of space beneath a block of text to visually separate itself from adjacent content."),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"Breaking content up into paragraphs helps screen readers and assistive technology provide shortcuts for users to skip between them"),(0,s.yg)("li",{parentName:"ul"},"Paragraph text should meet AA requirements (4.5:1) for color contrast from itself and the background color")),(0,s.yg)("h2",null,"Examples"),(0,s.yg)("h3",null,"Default Paragraph"),(0,s.yg)(p,{scope:{Paragraph:t.f},language:"jsx",mdxType:"LivePreview"},`<article>
  <Paragraph>
  We have inherited a fear of memories of slavery. It is as if to remember and acknowledge slavery would amount to our being consumed by it. As a matter of fact, in the popular black imagination, it is easier for us to construct ourselves as children of Africa, as the sons and daughters of kings and queens, and thereby ignore the Middle Passage and centuries of enforced servitude in the Americas. Although some of us might indeed be the descendants of African royalty, most of us are probably descendants of their subjects, the daughters and sons of African peasants or workers.
</Paragraph>
</article>`),(0,s.yg)("h2",null,"Composition Notes"),(0,s.yg)("h3",null,"When to Use a Paragraph"),(0,s.yg)("p",null,"Paragraphs should be used for most text blocks. Paragraphs provide defaults for font-size, line-height, and margin-bottom. Paragraphs can be used within other components as well. Typically, these are anywhere from 1-5 sentences. Use paragraphs like you would when authoring a word document, to group sentences of a similar theme."),(0,s.yg)(i.l,{mdxType:"DoDont"},(0,s.yg)(i.Do,{title:"Do",body:"Use paragraphs for text blocks.",center:!0,mdxType:"Do"},(0,s.yg)(o.z,{mdxType:"Codeblock"},`<Paragraph>
  Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur.
  Maecenas faucibus mollis interdum. Maecenas sed diam eget risus varius blandit
  sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.
</Paragraph>
<Paragraph>
  Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur.
  Maecenas faucibus mollis interdum. Maecenas sed diam eget risus varius blandit
  sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.
</Paragraph>`)),(0,s.yg)(i.w,{title:"Don't",body:"Don’t use paragraphs for spacing or when more semantic elements can be used in their place, such as headings, lists, or labels.",mdxType:"Dont"},(0,s.yg)(o.z,{mdxType:"Codeblock"},`<Paragraph>
  Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur.
  Maecenas faucibus mollis interdum. Maecenas sed diam eget risus varius blandit
</Paragraph>
<Paragraph />
<Paragraph>
  Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur.
  Maecenas faucibus mollis interdum. Maecenas sed diam eget risus varius blandit
</Paragraph>`))),(0,s.yg)(i.l,{mdxType:"DoDont"},(0,s.yg)(i.Do,{title:"Do",body:"Break content up into small paragraphs that allow users to skim the information.",center:!0,mdxType:"Do"},(0,s.yg)(o.z,{mdxType:"Codeblock"},`
        <Paragraph>
          Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus
          mollis interdum. Maecenas sed diam eget risus varius blandit sit amet non magna.
        </Paragraph>
        <Paragraph>
          Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus
          mollis interdum. Maecenas sed diam eget risus varius blandit sit amet non magna.
        </Paragraph>
      `)),(0,s.yg)(i.w,{title:"Don't",body:"Don’t create overly long paragraphs that make it difficult for the reader to find information.",mdxType:"Dont"},(0,s.yg)(o.z,{mdxType:"Codeblock"},`
        <Paragraph>
          Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur.
          Maecenas faucibus mollis interdum. Maecenas sed diam eget risus varius blandit
          sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.
          Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur.
          Maecenas faucibus mollis interdum. Maecenas sed diam eget risus varius blandit
          sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.
          Maecenas faucibus mollis interdum. Maecenas sed diam eget risus varius blandit
          sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.
        </Paragraph>
      `))),(0,s.yg)(i.l,{mdxType:"DoDont"},(0,s.yg)(i.Do,{title:"Do",body:"Use paragraphs as sibling elements, with only inline elements such as bold or italic as children.",center:!0,mdxType:"Do"},(0,s.yg)(o.z,{mdxType:"Codeblock"},`
        <Paragraph>
          Donec sed odio dui. <a href="#">Aenean lacinia</a> bibendum nulla sed consectetur.
          Maecenas faucibus mollis interdum. Maecenas sed diam eget risus varius blandit
        </Paragraph>
        <Paragraph marginBottom="space0">
          Donec sed odio dui. <strong>Aenean lacinia bibendum</strong> nulla sed consectetur.
          Maecenas faucibus mollis interdum. Maecenas sed diam eget risus varius blandit
        </Paragraph>
      `)),(0,s.yg)(i.w,{title:"Don't",body:"Don’t nest paragraphs within each other either, only inline elements should be nested within a paragraph.",mdxType:"Dont"},(0,s.yg)(o.z,{mdxType:"Codeblock"},`
        <Paragraph>
          Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur.
          Maecenas faucibus mollis interdum. Maecenas sed diam eget risus varius blandit
          <Paragraph marginBottom="space0">
            Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur.
            Maecenas faucibus mollis interdum. Maecenas sed diam eget risus varius blandit
          </Paragraph>
        </Paragraph>
      `))))}h.isMDXComponent=!0}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=77048)),_N_E=e.O()}]);