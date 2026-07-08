(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2032],{37136:(e,o,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/code-block",function(){return t(61256)}])},40615:(e,o,t)=>{"use strict";t.d(o,{A:()=>g});var n=t(72387),i=t(76127),l=t(95669),a=t.n(l),s=t(81278);t(55729);var r=t(10511),c=t(43084),d=t(10732),p=t(62887),u=t(63437),h=t(38992);let m={h1:()=>null},g=({children:e,meta:o,navigationData:t,data:l,mdxHeadings:g,pageHeaderData:{categoryRoute:k,githubUrl:b,storybookUrl:C}})=>{let T=o.title?`${o.title} - ${h.DZ.TITLE}`:h.DZ.TITLE,y=o.description||h.DZ.DESCRIPTION,v=(0,s.useRouter)();return(0,n.FD)(u.T,{navigationData:t,children:[(0,n.FD)(a(),{children:[(0,n.Y)("title",{children:T}),(0,n.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${v.pathname}`}),(0,n.Y)("meta",{name:"description",content:y},"description")]}),(0,n.FD)(r.s,{children:[(0,n.Y)(p.c,{categoryRoute:k,githubUrl:b,storybookUrl:C,data:l}),(0,n.FD)(i.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,n.Y)(d.i,{data:g}),(0,n.Y)(i.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,n.Y)(c.Q,{componentOverrides:o.package?m:{},children:e})})]})]})]})}},61256:(e,o,t)=>{"use strict";t.r(o),t.d(o,{__N_SSG:()=>d,default:()=>b,getStaticProps:()=>u,mdxHeadings:()=>h,meta:()=>p}),t(55729);var n=t(11885),i=t(70934);let l=`
  const SingleLineExample = () => {
    return (
      <CodeBlock
        variant="single-line"
        language='shell'
        code={\`$ curl -G https://api.twilio.com/2010-04-01/Accounts -u '[YOUR ACCOUNT SID]:[YOUR AUTH TOKEN]'\`}
      />
    )
  }

  render (
    <SingleLineExample />
  )
`.trim(),a=`
const MultiLineExample = () => {
  return (
    <CodeBlockWrapper>
      <CodeBlockHeader>PHP</CodeBlockHeader>
      <CodeBlock
        language="php"
        maxLines={10}
        externalLink="https://github.com/TwilioDevEd/api-snippets/blob/master/quickstart/php/sms/send_sms/send_sms.5.x.php"
        code={\`<?php
require __DIR__ . '/vendor/autoload.php';
use TwilioRestClient;

// Your Account SID and Auth Token from twilio.com/console
$account_sid = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX';
$auth_token = 'your_auth_token';
// In production, these should be environment variables. E.g.:
// $auth_token = $_ENV["TWILIO_AUTH_TOKEN"]

// A Twilio number you own with SMS capabilities
$twilio_number = "+15017122661";

$client = new Client($account_sid, $auth_token);
$client->messages->create(
    // Where to send a text message (your cell phone?)
    '+15558675310',
    array(
        'from' => $twilio_number,
        'body' => 'I sent this message in under 10 minutes!'
    )
);\`}
      />
    </CodeBlockWrapper>
  );
};

render(
  <MultiLineExample />
)
`.trim(),s=`
const TabExample = () => {
  return (
    <CodeBlockWrapper>
      <CodeBlockHeader>Sending SMS using the Programmable SMS API</CodeBlockHeader>
      <CodeBlockTabList>
        <CodeBlockTab>Node.js</CodeBlockTab>
        <CodeBlockTab>C#</CodeBlockTab>
      </CodeBlockTabList>
      <CodeBlockTabPanel>
        <CodeBlock
          language="javascript"
          maxLines={10}
          code={\`// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
      from: '+15017122661',
      to: '+15558675310'
    })
  .then(message => console.log(message.sid));\`}
        />
      </CodeBlockTabPanel>
      <CodeBlockTabPanel>
        <CodeBlock
          language="csharp"
          maxLines={10}
          code={\`// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Api.V2010.Account;

class Program
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        // and set the environment variables. See http://twil.io/secure
        string accountSid = Environment.GetEnvironmentVariable("TWILIO_ACCOUNT_SID");
        string authToken = Environment.GetEnvironmentVariable("TWILIO_AUTH_TOKEN");

        TwilioClient.Init(accountSid, authToken);

        var message = MessageResource.Create(
            body: "This is the ship that made the Kessel Run in fourteen parsecs?",
            from: new Twilio.Types.PhoneNumber("+15017122661"),
            to: new Twilio.Types.PhoneNumber("+15558675310")
        );

        Console.WriteLine(message.Sid);
    }
}\`}
        />
      </CodeBlockTabPanel>
    </CodeBlockWrapper>
  );
};

render(
  <TabExample />
)`.trim(),r=`
  const SingleLineExample = () => {
    return (
      <CodeBlock
        variant="single-line"
        language='shell'
        code={\`$ curl -G https://api.twilio.com/2010-04-01/Accounts -u '[YOUR ACCOUNT SID]:[YOUR AUTH TOKEN]'\`}
        copyTextFormatter={(code) => {
          const formattedCode = code.replace('[YOUR ACCOUNT SID]', 'XXXXXXX').replace('[YOUR AUTH TOKEN]', '1234567890');
          return formattedCode;
        }}
      />
    )
  }

  render (
    <SingleLineExample />
  )
`.trim();var c=t(40615),d=!0;let p={title:"Code Block",package:"@twilio-paste/code-block",description:"A component used to display readable blocks of code.",slug:"/components/code-block/"},u=async()=>({props:{data:{...packageJson,...feature},navigationData,mdxHeadings:h,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/code-block",storybookUrl:"/?path=/story/components-code-block--single-line"}}}),h=[{value:"Guidelines",depth:2},{value:"About Code Block",depth:3},{value:"Accessibility",depth:3},{value:"Examples",depth:2},{value:"Single line",depth:3},{value:"Multi line",depth:3},{value:"Tabs",depth:3},{value:"Format the copied text",depth:3}],m=function(e){return console.warn("Component LivePreview was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",e)},g={meta:p,getStaticProps:u,mdxHeadings:h},k=c.A;function b({components:e,...o}){return(0,n.yg)(k,{...g,...o,components:e,mdxType:"MDXLayout"},(0,n.yg)(m,{scope:{CodeBlock:i.NG},language:"jsx",noInline:!0,mdxType:"LivePreview"},l),(0,n.yg)("h2",null,"Guidelines"),(0,n.yg)("h3",null,"About Code Block"),(0,n.yg)("p",null,"The Code Block component improves readability of embedded code samples with syntax highlighting and automatic line numbering."),(0,n.yg)("p",null,"Multiple Code Blocks may displayed as a tabset with the CodeBlockTabList, CodeBlockTab, and CodeBlockTabPanel components. A common use case for this is providing a code sample in multiple languages."),(0,n.yg)("h3",null,"Accessibility"),(0,n.yg)("p",null,"To ensure the Code Block is accessible:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Provide a descriptive label such as the current filename or step in a process to clarify the purpose of the Code Block."),(0,n.yg)("li",{parentName:"ul"},"Enable long line wrapping whenever possible for a better reading experience."),(0,n.yg)("li",{parentName:"ul"},"Use the correct heading level for the CodeBlockHeader")),(0,n.yg)("h2",null,"Examples"),(0,n.yg)("h3",null,"Single line"),(0,n.yg)("p",null,"Use ",(0,n.yg)("inlineCode",{parentName:"p"},'variant="single-line"')," for one line Code Blocks. Single line Code Blocks should not have ",(0,n.yg)("inlineCode",{parentName:"p"},"showLineNumbers={true}"),"."),(0,n.yg)(m,{scope:{CodeBlock:i.NG},language:"jsx",noInline:!0,mdxType:"LivePreview"},l),(0,n.yg)("h3",null,"Multi line"),(0,n.yg)("p",null,"Code Blocks have ",(0,n.yg)("inlineCode",{parentName:"p"},'variant="multi-line"')," by default. Multi line Code Blocks should have a CodeBlockHeader with a logical label for the Code Block, like the language or file name."),(0,n.yg)("p",null,"Note for the ",(0,n.yg)("inlineCode",{parentName:"p"},"maxLines")," property: Code Block uses ",(0,n.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp"},"line-clamp")," to limit the number of lines visible. When using line-clamp, browsers add an ellipsis to the contents of the Code Block to indicate that there is more to scroll to. When the code is copied with the copy button, the ellipsis isn't included."),(0,n.yg)(m,{scope:{CodeBlockWrapper:i.GM,CodeBlockHeader:i.iO,CodeBlock:i.NG},language:"jsx",noInline:!0,mdxType:"LivePreview"},a),(0,n.yg)("h3",null,"Tabs"),(0,n.yg)("p",null,"Multiple Code Blocks may be displayed as a tabset with the CodeBlockTabList, CodeBlockTab, and CodeBlockTabPanel components. Provide a logical name for each CodeBlockTab, like the language or file name."),(0,n.yg)("p",null,"The Code Block Tabs components use the Tabs Primitive. For full details on the primitive and what props to provide it, follow the ",(0,n.yg)("a",{parentName:"p",href:"/primitives/tabs-primitive"},"Tabs Primitive documentation"),"."),(0,n.yg)(m,{scope:{CodeBlock:i.NG,CodeBlockHeader:i.iO,CodeBlockWrapper:i.GM,CodeBlockTabList:i.EH,CodeBlockTab:i.aA,CodeBlockTabPanel:i.M},language:"jsx",noInline:!0,mdxType:"LivePreview"},s),(0,n.yg)("h3",null,"Format the copied text"),(0,n.yg)("p",null,"To modify what text is copied when the copy button is clicked, use the ",(0,n.yg)("inlineCode",{parentName:"p"},"copyTextFormatter")," prop."),(0,n.yg)(m,{scope:{CodeBlock:i.NG},language:"jsx",noInline:!0,mdxType:"LivePreview"},r))}b.isMDXComponent=!0}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=37136)),_N_E=e.O()}]);