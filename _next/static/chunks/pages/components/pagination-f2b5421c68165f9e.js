(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1431],{4057:(e,a,t)=>{"use strict";t.r(a),t.d(a,{ArrowBackIcon:()=>r});var n=t(36669),o=t(55729),i=t(96316);let r=o.forwardRef(({as:e,display:a,element:t="ICON",size:r,color:l,title:s,decorative:g},c)=>{let p=`ArrowBackIcon-${(0,n.GV)()}`;if(!g&&null==s)throw Error("[ArrowBackIcon]: Missing a title for non-decorative icon.");return o.createElement(i.IconWrapper,{as:e,display:a,element:t,size:r,color:l,ref:c},o.createElement("svg",{role:"img","aria-hidden":g,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":p},s?o.createElement("title",{id:p},s):null,o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.009 9.91l-.007.05v.08l.01.07.01.029a.489.489 0 00.205.272l3.832 3.444a.596.596 0 00.78 0 .459.459 0 00.063-.632l-.063-.069-2.957-2.659h7.605A.504.504 0 0015 10a.5.5 0 00-.42-.488l-.093-.008H6.883l2.956-2.658a.459.459 0 00.063-.632l-.063-.069a.598.598 0 00-.704-.057l-.076.057L5.227 9.59a.498.498 0 00-.206.272l-.012.049z"})))});r.displayName="ArrowBackIcon"},4996:(e,a,t)=>{"use strict";t.r(a),t.d(a,{__N_SSG:()=>L,default:()=>F,getStaticProps:()=>_,mdxHeadings:()=>M,meta:()=>S});var n=t(55729),o=t(11885),i=t(4073),r=t(76127),l=t(15367),s=t(629),g=t(36669),c=t(4057),p=t(87945),u=n.forwardRef(({children:e,element:a="PAGINATION",label:t,...o},i)=>n.createElement(r.az,{...(0,r.x8)(o),element:a,ref:i,"aria-label":t,as:"nav",role:"navigation"},e));u.displayName="Pagination";var d={display:"inline-flex",margin:"space0",padding:"space0"},m={listStyleType:"none",margin:"space0",padding:"space0"},h=n.forwardRef(({children:e,element:a="PAGINATION_ITEMS",...t},o)=>{let[i]=n.useMemo(()=>[n.Children.toArray(e).filter(e=>n.isValidElement(e))],[e]),l=(0,g.nu)();return n.createElement(r.az,{...d,...(0,r.x8)(t),ref:o,element:a,as:"ul"},i.map((e,t)=>n.createElement(r.az,{...m,key:l(`pagination-items-${t}`),element:`${a}_ITEM`,as:"li",marginRight:"space90",_last:{marginRight:"space0"}},e)))});h.displayName="PaginationItems";var P=({as:e,href:a})=>{let t=null!=a&&""!==a;if("a"!==e&&t)throw Error("[Paste: Pagination] You cannot pass href into button pagination without the 'a' tag.  Use 'as=\"a\"'.");if("a"===e&&!t)throw Error("[Paste: Pagination] Missing href prop for link pagination.")},b=n.forwardRef(({children:e,element:a="PAGINATION_ARROW_BUTTON",disabled:t,visibleLabel:o,...i},l)=>n.createElement(r.az,{...(0,r.x8)(i),element:a,ref:l,"aria-hidden":t,alignItems:"center",appearance:"none",border:"none",background:"none",borderColor:"colorBorder",borderRadius:o?"borderRadius10":"borderRadiusCircle",color:"colorText",display:"flex",fontFamily:"inherit",fontVariantNumeric:"tabular-nums",fontWeight:"fontWeightNormal",lineHeight:"lineHeight30",margin:"space0",outline:"none",opacity:t?"0":"1",padding:"space0",position:"relative",textDecoration:"none",transition:"border-color 100ms ease-in, box-shadow 100ms ease-in, color 100ms ease-in, opacity 150ms ease-in, visibility 150ms ease-in",visibility:t?"hidden":"visible",_hover:{borderColor:"colorBorderPrimaryStronger",color:"colorTextLinkStronger",cursor:"pointer",textDecoration:"none"},_focus:{borderColor:"colorBorderPrimaryStronger",boxShadow:"shadowFocus",color:"colorTextLinkStronger",textDecoration:"none"},_active:{textDecoration:"none"}},e));b.displayName="PaginationArrowButton";var y=({children:e,element:a="PAGINATION_ARROW_ICON_WRAPPER",isFocused:t,isHovered:o})=>n.createElement(r.az,{element:a,alignItems:"center",backgroundColor:"colorBackgroundBody",boxShadow:o&&!t?"shadowBorderPrimary":"shadowBorderWeak",borderRadius:"borderRadiusCircle",display:"flex",height:"sizeSquare80",justifyContent:"center",transition:"background-color 100ms ease-in",width:"sizeSquare80"},e);y.displayName="PaginationArrowIconWrapper";var T=n.forwardRef(({as:e="button",element:a="PAGINATION_ARROW",disabled:t,isFocused:o,isHovered:i,label:r,visibleLabel:l,...g},p)=>n.createElement(b,{...g,ref:p,as:e,disabled:t,visibleLabel:l,element:`${a}_BUTTON`},n.createElement(y,{isFocused:o,isHovered:i,element:`${a}_ICON_WRAPPER`},n.createElement(c.ArrowBackIcon,{decorative:!1,color:i?"colorTextPrimary":"colorText",display:"block",title:r,element:`${a}_ICON`})),l?n.createElement(s.EY,{"aria-hidden":"true",as:"span",color:i?"colorTextLink":"colorText",fontWeight:"fontWeightMedium",marginLeft:"space30",element:`${a}_TEXT`},l):null));T.displayName="PaginationBackArrow";var w=n.forwardRef(({as:e="button",element:a="PAGINATION_ARROW",disabled:t,isFocused:o,isHovered:i,label:r,visibleLabel:l,...g},c)=>n.createElement(b,{...g,ref:c,element:`${a}_BUTTON`,as:e,disabled:t,visibleLabel:l},l?n.createElement(s.EY,{"aria-hidden":"true",as:"span",color:i?"colorTextLink":"inherit",fontWeight:"fontWeightMedium",marginRight:"space30",element:`${a}_TEXT`},l):null,n.createElement(y,{isFocused:o,isHovered:i,element:`${a}_ICON_WRAPPER`},n.createElement(p.ArrowForwardIcon,{decorative:!1,color:i?"colorTextPrimary":"colorText",display:"block",title:r,element:`${a}_ICON`}))));w.displayName="PaginationForwardArrow";var f=n.forwardRef(({as:e="button",element:a="PAGINATION_ARROW",disabled:t,href:o,isHovered:i=!1,isFocused:r=!1,label:l,variant:s="back",visibleLabel:g,...c},p)=>{let[u,d]=n.useState(i),[m,h]=n.useState(r);return P({as:e,href:o}),"back"===s?n.createElement(T,{...c,element:a,ref:p,as:e,disabled:t,href:o,isFocused:m,isHovered:u,label:l,variant:s,visibleLabel:g,onMouseEnter:e=>{"function"==typeof c.onMouseEnter&&c.onMouseEnter(e),d(!0)},onMouseLeave:e=>{"function"==typeof c.onMouseLeave&&c.onMouseLeave(e),d(!1)},onFocus:e=>{"function"==typeof c.onFocus&&c.onFocus(e),h(!0)},onBlur:e=>{"function"==typeof c.onBlur&&c.onBlur(e),h(!1)}}):n.createElement(w,{...c,element:a,ref:p,as:e,disabled:t,href:o,isFocused:m,isHovered:u,label:l,variant:s,visibleLabel:g,onMouseEnter:e=>{"function"==typeof c.onMouseEnter&&c.onMouseEnter(e),d(!0)},onMouseLeave:e=>{"function"==typeof c.onMouseLeave&&c.onMouseLeave(e),d(!1)},onFocus:e=>{"function"==typeof c.onFocus&&c.onFocus(e),h(!0)},onBlur:e=>{"function"==typeof c.onBlur&&c.onBlur(e),h(!1)}})});f.displayName="PaginationArrow";var v=n.forwardRef(({children:e,element:a="PAGINATION_LABEL",...t},o)=>n.createElement(s.EY,{...(0,s.T2)(t),ref:o,element:a,as:"div",color:"colorTextWeak",textAlign:"center",fontWeight:"fontWeightNormal",lineHeight:"lineHeight50"},e));v.displayName="PaginationLabel";var x=n.forwardRef(({label:e,element:a="PAGINATION_ELLIPSIS",...t},o)=>n.createElement(s.EY,{...(0,s.T2)(t),ref:o,element:a,"aria-label":e,as:"span",display:"inline-block",paddingBottom:"space20",paddingLeft:"space30",paddingRight:"space30",paddingTop:"space20",fontWeight:"fontWeightMedium"},"…"));x.displayName="PaginationEllipsis";var N=n.forwardRef(({as:e="button",element:a="PAGINATION_NUMBER",children:t,href:o,isCurrent:i,label:l,...g},c)=>(P({as:e,href:o}),n.createElement(r.az,{...(0,r.x8)(g),ref:c,element:a,"aria-label":l,"aria-current":i,as:e,href:o,appearance:"none",background:"none",backgroundColor:i?"colorBackgroundPrimaryWeakest":"transparent",borderColor:i?"colorBorderPrimary":"transparent",borderRadius:"borderRadius20",borderStyle:"solid",borderWidth:"borderWidth10",color:i?"colorTextLink":"colorTextWeak",display:"inline-block",fontFamily:"inherit",fontSize:"fontSize30",fontVariantNumeric:"tabular-nums",fontWeight:"fontWeightNormal",lineHeight:"lineHeight30",margin:"space0",outline:"none",paddingBottom:"space20",paddingLeft:"space30",paddingRight:"space30",paddingTop:"space20",position:"relative",textDecoration:"none",transition:"background-color 100ms ease-in, border-color 100ms ease-in, box-shadow 100ms ease-in, color 100ms ease-in",_hover:{backgroundColor:"colorBackgroundPrimaryWeakest",borderColor:i?"colorBorderPrimaryStronger":"transparent",boxShadow:i?"none":"shadowBorderPrimaryStronger",color:"colorTextLinkStronger",cursor:"pointer",textDecoration:"none"},_focus:{boxShadow:"shadowFocus",borderColor:"transparent",textDecoration:"none",color:"colorTextLink"},_active:{textDecoration:"none"}},t?n.createElement(s.EY,{"aria-hidden":"true",as:"span",color:"inherit",fontWeight:"fontWeightMedium",element:`${a}_TEXT`},t):null)));N.displayName="PaginationNumber";var k=n.forwardRef(({children:e,element:a="PAGINATION_NUMBERS",pageLabel:t,...o},i)=>{let[l]=n.useMemo(()=>[n.Children.toArray(e).filter(e=>n.isValidElement(e))],[e]),s=(0,g.nu)();return n.createElement(n.Fragment,null,n.createElement(r.az,{...d,...(0,r.x8)(o),element:a,ref:i,as:"ul",justifyContent:"center",paddingLeft:"space40",paddingRight:"space40",paddingBottom:"space20",width:"100%"},l.map((e,t)=>n.createElement(r.az,{...m,key:s(`pagination-numbers-${t}`),element:`${a}_ITEM`,as:"li",marginRight:"space30",_last:{marginRight:"space0"}},e))),t?n.createElement(v,null,t):null)});k.displayName="PaginationNumbers";var I=t(85152),C=t(84498),E=t(54652),A=t(89564);let D=`
const DefaultPagination = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = 5;

  const goToNextPage = (event) => {
    setCurrentPage((page) => Math.min(page + 1, totalPages));
    event.preventDefault();
  };

  const goToPreviousPage = (event) => {
    setCurrentPage((page) => Math.max(page - 1, 1));
    event.preventDefault();
  };

  return (
    <Pagination label="default pagination navigation">
      <PaginationItems>
        <PaginationArrow label="Go to previous page" variant="back" onClick={goToPreviousPage} disabled={currentPage === 1} />
        <PaginationLabel>
          Page {currentPage}
        </PaginationLabel>
        <PaginationArrow label="Go to next page" variant="forward" onClick={goToNextPage} disabled={currentPage === 5} />
      </PaginationItems>
    </Pagination>
  );
};

render(
  <DefaultPagination />
)
`.trim(),B=`
const NumberPagination = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const pages = [1, 2, 3, 4, 5];
  const totalPages = pages.length;

  const goToNextPage = (event) => {
    setCurrentPage((page) => Math.min(page + 1, totalPages));
    event.preventDefault();
  };

  const goToPreviousPage = (event) => {
    setCurrentPage((page) => Math.max(page - 1, 1));
    event.preventDefault();
  };

  const goToPage = (event) => {
    setCurrentPage(parseInt(event.target.innerText));
    event.preventDefault();
  };

  return (
    <>
      <Table>
        <THead>
          <Tr>
            <Th>Date</Th>
            <Th textAlign="right">Message count</Th>
          </Tr>
        </THead>
        <TBody>
          <Tr>
            <Td>Oct 21, 2020</Td>
            <Td textAlign="right">3</Td>
          </Tr>
          <Tr>
            <Td>Oct 20, 2020</Td>
            <Td textAlign="right">6</Td>
          </Tr>
          <Tr>
            <Td>Oct 19, 2020</Td>
            <Td textAlign="right">13</Td>
          </Tr>
          <Tr>
            <Td>Oct 18, 2020</Td>
            <Td textAlign="right">9</Td>
          </Tr>
        </TBody>
      </Table>
      <Box display="flex" justifyContent="center" marginTop="space70">
        <Pagination label="numbered pagination navigation">
          <PaginationItems>
            <PaginationArrow label="Go to previous page" variant="back" onClick={goToPreviousPage} disabled={currentPage === 1} />
            <PaginationNumbers>
              {pages.map((page, index) => {
                const goToPageString = 'Go to page ';
                return (
                  <PaginationNumber label={goToPageString + page} isCurrent={page === currentPage} onClick={goToPage} key={index}>
                    {page}
                  </PaginationNumber>
                );
              })}
            </PaginationNumbers>
            <PaginationArrow label="Go to next page" variant="forward" onClick={goToNextPage} disabled={currentPage === 5}/>
          </PaginationItems>
        </Pagination>
      </Box>
    </>
  );
};

render(
  <NumberPagination />
)
`.trim(),G=`
const PositioningPagination = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const pages = [1, 2, 3, 4];
  const totalPages = pages.length;
  const results = ['1–5 of 20 results', '5-10 of 20 results', '10-15 of 20 results', '15-20 of 20 results'];

  const goToNextPage = (event) => {
    setCurrentPage((page) => Math.min(page + 1, totalPages));
    event.preventDefault();
  };

  const goToPreviousPage = (event) => {
    setCurrentPage((page) => Math.max(page - 1, 1));
    event.preventDefault();
  };

  const goToPage = (event) => {
    setCurrentPage(parseInt(event.target.innerText));
    event.preventDefault();
  };

  return (
    <>
      <Table>
        <THead>
          <Tr>
            <Th>Date</Th>
            <Th>SID</Th>
            <Th>From</Th>
          </Tr>
        </THead>
        <TBody>
          <Tr>
            <Td>
              <Text as="p">16:24:28 PDT</Text>
              <Text as="p">2020-09-17</Text>
            </Td>
            <Td>
              <Text as="span" fontFamily="fontFamilyCode">
                SM0yc4mxi6cn4z13bte7qmflc2drc85mlp
              </Text>
            </Td>
            <Td>(602) 609-6747</Td>
          </Tr>
          <Tr>
            <Td>
              <Text as="p">16:24:28 PDT</Text>
              <Text as="p">2020-09-17</Text>
            </Td>
            <Td>
              <Text as="span" fontFamily="fontFamilyCode">
                SMl29llgoihx286uhxfb0yc5n0sg391x5n
              </Text>
            </Td>
            <Td>(602) 609-6747</Td>
          </Tr>
          <Tr>
            <Td>
              <Text as="p">16:24:28 PDT</Text>
              <Text as="p">2020-09-17</Text>
            </Td>
            <Td>
              <Text as="span" fontFamily="fontFamilyCode">
                SMxarke3v30fv17hauqn86a7nhgm3b5d87
              </Text>
            </Td>
            <Td>(602) 609-6747</Td>
          </Tr>
          <Tr>
            <Td>
              <Text as="p">16:24:28 PDT</Text>
              <Text as="p">2020-09-17</Text>
            </Td>
            <Td>
              <Text as="span" fontFamily="fontFamilyCode">
                SM0yc4mxi6cn4z13bte7qmflc2drc85mlp
              </Text>
            </Td>
            <Td>(602) 609-6747</Td>
          </Tr>
          <Tr>
            <Td>
              <Text as="p">16:24:28 PDT</Text>
              <Text as="p">2020-09-17</Text>
            </Td>
            <Td>
              <Text as="span" fontFamily="fontFamilyCode">
                SMl29llgoihx286uhxfb0yc5n0sg391x5n
              </Text>
            </Td>
            <Td>(602) 609-6747</Td>
          </Tr>
        </TBody>
      </Table>
      <Box display="flex" justifyContent="center" marginTop="space70">
        <Pagination label="paged pagination navigation">
          <PaginationItems>
            <PaginationArrow label="Go to previous page" variant="back" onClick={goToPreviousPage} disabled={currentPage === 1} />
            <PaginationNumbers pageLabel={results[currentPage - 1]}>
              {pages.map((page, index) => {
                const goToPageString = 'Go to page ';
                return (
                  <PaginationNumber label={goToPageString + page} isCurrent={page === currentPage} onClick={goToPage} key={index}>
                    {page}
                  </PaginationNumber>
                );
              })}
            </PaginationNumbers>
            <PaginationArrow label="Go to next page" variant="forward" onClick={goToNextPage} disabled={currentPage === 4} />
          </PaginationItems>
        </Pagination>
      </Box>
    </>
  );
};

render(
  <PositioningPagination />
)
`.trim();var R=t(40615),L=!0;let S={title:"Pagination",package:"@twilio-paste/pagination",description:"Pagination lets users navigate through content or a dataset that’s been broken up into multiple pages.",slug:"/components/pagination/"},_=async()=>({props:{data:{...packageJson,...feature},navigationData,mdxHeadings:M,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/pagination",storybookUrl:"/?path=/story/components-pagination--arrows"}}}),M=[{value:"Guidelines",depth:2},{value:"About Pagination",depth:3},{value:"Accessibility Information",depth:3},{value:"Examples",depth:2},{value:"Default pagination",depth:3},{value:"Default pagination as anchor",depth:4},{value:"Default pagination as button",depth:4},{value:"Pagination with custom labels",depth:3},{value:"Pagination with total page count",depth:3},{value:"Composition notes",depth:2},{value:"Positioning Pagination",depth:3},{value:"Using PaginationEllipsis",depth:3},{value:"Paging through chronological data",depth:3},{value:"Determining how many items to show per page",depth:3},{value:"Do and don't",depth:2}],O=function(e){return console.warn("Component LivePreview was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",e)},z={meta:S,getStaticProps:_,mdxHeadings:M},W=R.A;function F({components:e,...a}){return(0,o.yg)(W,{...z,...a,components:e,mdxType:"MDXLayout"},(0,o.yg)(O,{scope:{Pagination:u,PaginationItems:h,PaginationArrow:f,PaginationNumbers:k,PaginationNumber:N,PaginationEllipsis:x},language:"jsx",mdxType:"LivePreview"},`<Pagination label="truncated pagination navigation">
  <PaginationItems>
    <PaginationArrow label="Go to previous page" variant="back" />
    <PaginationNumbers>
      <PaginationNumber label="Go to page 1">1</PaginationNumber>
      <PaginationEllipsis label="Collapsed previous pages" />
      <PaginationNumber label="Go to page 4">4</PaginationNumber>
      <PaginationNumber label="Go to page 5" isCurrent>5</PaginationNumber>
      <PaginationNumber label="Go to page 6">6</PaginationNumber>
      <PaginationEllipsis label="Collapsed next pages" />
      <PaginationNumber label="Go to page 9">9</PaginationNumber>
    </PaginationNumbers>
    <PaginationArrow label="Go to next page" variant="forward" />
  </PaginationItems>
</Pagination>`),(0,o.yg)("h2",null,"Guidelines"),(0,o.yg)("h3",null,"About Pagination"),(0,o.yg)("p",null,`Use Pagination to split up content when a user’s goal is "to find a specific item `,"[in a list]",' and click through to that destination page" (source: ',(0,o.yg)("a",{parentName:"p",href:"https://www.nngroup.com/articles/item-list-view-all/"},"Nielsen Norman Group"),`). Pagination is used to communicate only where a user is in paged content. It isn’t used to show the status of each page—use `,(0,o.yg)("a",{parentName:"p",href:"/components/progress-steps"},"Progress Steps")," instead."),(0,o.yg)("p",null,"Pagination is often paired with ",(0,o.yg)("a",{parentName:"p",href:"/components/table"},"Tables"),", one of the most commonly used components in Twilio and one of the primary ways customers view content in our products. Think of Pagination as an important navigation element that helps our customers understand exactly where they are and help them decide where to go next."),(0,o.yg)("p",null,"The component is made up of 6 main parts:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"Pagination"),": The outer pagination container with the accessible ",(0,o.yg)("inlineCode",{parentName:"li"},"role=navigation")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"PaginationItems"),": A wrapper that displays the pagination contents inline."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"PaginationArrow"),": Left and right arrow controls, with an option to add text labels"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"PaginationLabel"),`: Indicates the current page in view (e.g., "Page 2", "1–10 of 50 results")`),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"PaginationNumbers"),": A wrapper for the list of page numbers and the total page count"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"PaginationNumber"),": Page number controls")),(0,o.yg)("h3",null,"Accessibility Information"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},`The Pagination component supports navigation by the use of either a button or anchor. Use Pagination as an anchor if the URL changes for each page. Use it as a button if the URL doesn’t change for each page. Check out our documentation on `,(0,o.yg)("a",{parentName:"li",href:"/components/button/#button-vs-anchor-link"},"when to use a Button vs. an Anchor"),"."),(0,o.yg)("li",{parentName:"ul"},`Use the Pagination component when it controls a large part of the page in view, like a full-width Table. Since Pagination typically appears underneath the UI element it’s controlling, it needs to be obvious that it is controlling the element above it, rather than anything else below it. For example, if you need to let users page through a small table in a card on a dashboard page, consider letting them expand the table and show Pagination on the expanded view instead.`)),(0,o.yg)("h2",null,"Examples"),(0,o.yg)("h3",null,"Default pagination"),(0,o.yg)("p",null,"Use the default Pagination component for paged datasets like event logs, where the dataset is constantly increasing in size, or where the total number of pages is unknown."),(0,o.yg)("p",null,"At minimum, the default Pagination component shows the Pagination arrows. However whenever possible, show the ",(0,o.yg)("strong",{parentName:"p"},"current"),` page number too, so that users know where they are in a dataset and get confirmation that they’ve moved to a new page.`),(0,o.yg)(O,{scope:{Pagination:u,PaginationItems:h,PaginationArrow:f,PaginationLabel:v},noInline:!0,mdxType:"LivePreview"},D),(0,o.yg)("h4",null,"Default pagination as anchor"),(0,o.yg)("p",null,"Use Pagination as an anchor if the URL changes for each page. Both the ",(0,o.yg)("inlineCode",{parentName:"p"},"PaginationArrow")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"PaginationNumber")," components can be set as anchors using the ",(0,o.yg)("inlineCode",{parentName:"p"},'as="a"')," prop and including an ",(0,o.yg)("inlineCode",{parentName:"p"},"href")," prop."),(0,o.yg)(O,{scope:{Pagination:u,PaginationItems:h,PaginationArrow:f,PaginationLabel:v,Stack:C.B},language:"jsx",mdxType:"LivePreview"},`<Stack orientation="vertical" spacing="space50">
  <Pagination label="labelled anchor pagination navigation">
    <PaginationItems>
      <PaginationArrow as="a" href="#" label="Go to previous page" variant="back" />
      <PaginationLabel>Page 2</PaginationLabel>
      <PaginationArrow as="a" href="#" label="Go to next page" variant="forward" />
    </PaginationItems>
  </Pagination>
  <Pagination label="anchor pagination navigation">
    <PaginationItems>
      <PaginationArrow as="a" href="#" label="Go to previous page" variant="back" />
      <PaginationArrow as="a" href="#" label="Go to next page" variant="forward" />
    </PaginationItems>
  </Pagination>
</Stack>`),(0,o.yg)("h4",null,"Default pagination as button"),(0,o.yg)("p",null,`Use Pagination as a button if the URL doesn’t change for each page. Both the `,(0,o.yg)("inlineCode",{parentName:"p"},"PaginationArrow")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"PaginationNumber")," components are buttons by default."),(0,o.yg)(O,{scope:{Pagination:u,PaginationItems:h,PaginationArrow:f,PaginationLabel:v,Stack:C.B},language:"jsx",mdxType:"LivePreview"},`<Stack orientation="vertical" spacing="space50">
  <Pagination label="labelled button pagination navigation">
    <PaginationItems>
      <PaginationArrow label="Go to previous page" variant="back" />
      <PaginationLabel>Page 2</PaginationLabel>
      <PaginationArrow label="Go to next page" variant="forward" />
    </PaginationItems>
  </Pagination>
  <Pagination label="button pagination navigation">
    <PaginationItems>
      <PaginationArrow label="Go to previous page" variant="back" />
      <PaginationArrow label="Go to next page" variant="forward" />
    </PaginationItems>
  </Pagination>
</Stack>`),(0,o.yg)("h3",null,"Pagination with custom labels"),(0,o.yg)("p",null,'Adding labels to Pagination can help give customers more information about what kind of data is in view and in what direction the pages are moving. For example, when a dataset is sorted chronologically, it might not be immediately clear whether the "Next" button takes you forward or backward in time.'),(0,o.yg)(O,{scope:{Pagination:u,PaginationItems:h,PaginationArrow:f,PaginationLabel:v,Text:s.EY},language:"jsx",mdxType:"LivePreview"},`<>
  <Pagination label="custom label pagination navigation">
    <PaginationItems>
      <PaginationArrow label="Go to previous month" variant="back" visibleLabel="Previous" />
      <PaginationLabel>February 2021</PaginationLabel>
      <PaginationArrow label="Go to next month" variant="forward" visibleLabel="Next" />
    </PaginationItems>
  </Pagination>
  <Text as="span" display="block" marginTop="space90" color="colorTextWeak">Will pressing the "Next" button take you to January or March?</Text>
</>`),(0,o.yg)("p",null,"To give customers further clarity on where they are in a data set, you can add custom text to:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The current page label"),(0,o.yg)("li",{parentName:"ul"},"The left and right arrow controls")),(0,o.yg)(O,{scope:{Pagination:u,PaginationItems:h,PaginationArrow:f,PaginationLabel:v},language:"jsx",mdxType:"LivePreview"},`<Pagination label="current page label pagination navigation">
  <PaginationItems>
    <PaginationArrow label="Go to newer templates" variant="back" visibleLabel="Newer templates" />
    <PaginationLabel>51–100 of 500+ templates</PaginationLabel>
    <PaginationArrow label="Go to older templates" variant="forward" visibleLabel="Older templates" />
  </PaginationItems>
</Pagination>`),(0,o.yg)("h3",null,"Pagination with total page count"),(0,o.yg)("p",null,`Use the Pagination variant with total page count in cases when knowing the exact size of a dataset is crucial to a customer’s understanding of the content (e.g., knowing how many phone numbers aren’t compliant) and when you’re able to fetch the data in a performant way.`),(0,o.yg)("p",null,"This variant also allows customers to skip ahead pages in a dataset, though this hasn't been identified as a common use case."),(0,o.yg)(E.Pq,{variant:"neutral",marginY:"space70",mdxType:"Callout"},(0,o.yg)(E.v,{as:"h4",mdxType:"CalloutHeading"},"Considering the tradeoffs for showing the total count of a dataset"),(0,o.yg)(E.wz,{mdxType:"CalloutText"},"By default,"," ",(0,o.yg)(i.Mz,{href:"https://www.twilio.com/blog/replacing-absolute-paging-and-related-properties",showExternal:!0,mdxType:"Anchor"},"Twilio APIs might not support showing current page number or the total count of a dataset"),"."),(0,o.yg)(E.wz,{mdxType:"CalloutText"},'However, anecdotal evidence from product designers suggests that knowing the size of a dataset is important to Twilio customers in certain cases. Showing the total count of a dataset makes sense especially when the customer has more active control over total count, such as with total SIMs, but not for datasets that rapidly increase, like event logs. If the exact total count is unknown, consider indicating size in another way that gives customers an approximate idea of the size of a dataset, like showing "1–10 of 100+ results".')),(0,o.yg)(O,{scope:{Pagination:u,PaginationItems:h,PaginationArrow:f,PaginationNumbers:k,PaginationNumber:N,Table:I.XI,THead:I.D1,TBody:I.vc,Th:I.Th,Tr:I.Tr,Td:I.Td,Box:r.az},noInline:!0,mdxType:"LivePreview"},B),(0,o.yg)("h2",null,"Composition notes"),(0,o.yg)("p",null,"Make sure the current page label and arrow controls in the Pagination component indicate to the user which page of results they are on and which way they'll go in the data set when using the arrows. Show the current page number whenever possible."),(0,o.yg)("p",null,"When including custom labels, use sentence case and keep labels under 30 characters."),(0,o.yg)("h3",null,"Positioning Pagination"),(0,o.yg)("p",null,"The Pagination component should be centered underneath the content it controls separated by a margin of ",(0,o.yg)("inlineCode",{parentName:"p"},"$space-70"),"."),(0,o.yg)(O,{scope:{Pagination:u,PaginationItems:h,PaginationArrow:f,PaginationNumbers:k,PaginationNumber:N,Table:I.XI,THead:I.D1,TBody:I.vc,Th:I.Th,Tr:I.Tr,Td:I.Td,Box:r.az,Text:s.EY},noInline:!0,mdxType:"LivePreview"},G),(0,o.yg)("h3",null,"Using PaginationEllipsis"),(0,o.yg)("p",null,"When the number of pages exceeds 7, ",(0,o.yg)("inlineCode",{parentName:"p"},"PaginationEllipsis")," can be used to indicate there are remaining pages."),(0,o.yg)(O,{scope:{Pagination:u,PaginationItems:h,PaginationArrow:f,PaginationNumbers:k,PaginationNumber:N,PaginationEllipsis:x,Stack:C.B},language:"jsx",mdxType:"LivePreview"},`<Stack orientation="vertical" spacing="space50">
<Pagination label="truncated pagination navigation">
  <PaginationItems>
    <PaginationArrow label="Go to previous page" variant="back" />
    <PaginationNumbers>
      <PaginationNumber label="Go to page 1">1</PaginationNumber>
      <PaginationEllipsis label="Collapsed previous pages" />
      <PaginationNumber label="Go to page 4">4</PaginationNumber>
      <PaginationNumber label="Go to page 5" isCurrent>5</PaginationNumber>
      <PaginationNumber label="Go to page 6">6</PaginationNumber>
      <PaginationNumber label="Go to page 7">7</PaginationNumber>
      <PaginationNumber label="Go to page 8">8</PaginationNumber>
    </PaginationNumbers>
    <PaginationArrow label="Go to next page" variant="forward" />
  </PaginationItems>
</Pagination>
<Pagination label="truncated pagination navigation">
  <PaginationItems>
    <PaginationArrow label="Go to previous page" variant="back" />
    <PaginationNumbers>
      <PaginationNumber label="Go to page 1">1</PaginationNumber>
      <PaginationNumber label="Go to page 2">2</PaginationNumber>
      <PaginationNumber label="Go to page 3">3</PaginationNumber>
      <PaginationNumber label="Go to page 4" isCurrent>4</PaginationNumber>
      <PaginationNumber label="Go to page 5">5</PaginationNumber>
      <PaginationEllipsis label="Collapsed next pages" />
      <PaginationNumber label="Go to page 8">8</PaginationNumber>
    </PaginationNumbers>
    <PaginationArrow label="Go to next page" variant="forward" />
  </PaginationItems>
</Pagination>
</Stack>`),(0,o.yg)("p",null,"Double ",(0,o.yg)("inlineCode",{parentName:"p"},"PaginationEllipsis")," is used when the current page is more than 3 pages from the first or last page."),(0,o.yg)(O,{scope:{Pagination:u,PaginationItems:h,PaginationArrow:f,PaginationNumbers:k,PaginationNumber:N,PaginationEllipsis:x},language:"jsx",mdxType:"LivePreview"},`<Pagination label="truncated pagination navigation">
  <PaginationItems>
    <PaginationArrow label="Go to previous page" variant="back" />
    <PaginationNumbers>
      <PaginationNumber label="Go to page 1">1</PaginationNumber>
      <PaginationEllipsis label="Collapsed previous pages" />
      <PaginationNumber label="Go to page 4">4</PaginationNumber>
      <PaginationNumber label="Go to page 5" isCurrent>5</PaginationNumber>
      <PaginationNumber label="Go to page 6">6</PaginationNumber>
      <PaginationEllipsis label="Collapsed next pages" />
      <PaginationNumber label="Go to page 9">9</PaginationNumber>
    </PaginationNumbers>
    <PaginationArrow label="Go to next page" variant="forward" />
  </PaginationItems>
</Pagination>`),(0,o.yg)("h3",null,"Paging through chronological data"),(0,o.yg)("p",null,'Add custom text to the arrow controls (e.g., "Older"/"Newer", "Previous month"/"next month") for datasets sorted by time or date. This makes it clear what direction the pages are moving.'),(0,o.yg)("p",null,"If a customer can change the sort order of the dataset, make sure you swap the labelling of the arrow controls, as well."),(0,o.yg)("h3",null,"Determining how many items to show per page"),(0,o.yg)("p",null,`The default number of items in view for paged content should generally scale up based on how important the content is to the customer’s goals, and scale down with the complexity or visual size of the dataset. For example, you might want to show fewer items per page for pages of Cards, or for Tables with tall rows.`),(0,o.yg)("p",null,"Most Twilio datasets show 10 or 50 rows per page by default. However, a generic rule doesn't always work for complex, context-dependent data. We recommend using research to reach a sensible default and solution that works best for the customer."),(0,o.yg)("p",null,`If a single default can’t satisfy customers’ needs, you can give customers a way to change the number of items in view. Try to keep these options limited to reduce cognitive overhead, especially if the choice isn’t critical to the customer’s main goal.`),(0,o.yg)(l.Cv,{url:"https://www.nngroup.com/articles/item-list-view-all/",mdxType:"Blockquote"},(0,o.yg)(l.xP,{mdxType:"BlockquoteContent"},"Many sites let users choose how many items they’ll see on each page. This is often overkill...It’s usually better to offer a single default number — such as 10 or 20 — [or] give users the choice between two numbers, say 10 and 50, where the second number is substantially bigger than the default. If the choice is between two relatively similar numbers (such as 10 and 20), users might as well click the Next Page button rather than suffer the cognitive overhead of trying to decide their display preference."),(0,o.yg)(l.PK,{author:"Nielsen Norman Group",source:'Users\' Pagination Preferences and "View All"',mdxType:"BlockquoteCitation"})),(0,o.yg)("p",null,"Consider ",(0,o.yg)("a",{parentName:"p",href:"/introduction/contributing/patterns"},"contributing a Table Actions pattern")," to help standardize this across Twilio!"),(0,o.yg)("h2",null,"Do and don't"),(0,o.yg)(A.l,{mdxType:"DoDont"},(0,o.yg)(A.Do,{title:"Do",body:"Use Pagination to let users page through items where a user is trying to find a specific item.",preview:!1,mdxType:"Do"}),(0,o.yg)(A.w,{title:"Don't",body:"Don’t use the Pagination component to help users navigate through linear multi-step content like paged forms. In these cases, use Progress Steps or something that can communicate more about a user’s status through a flow than the Pagination component allows.",preview:!1,mdxType:"Dont"})),(0,o.yg)(A.l,{mdxType:"DoDont"},(0,o.yg)(A.Do,{title:"Do",body:"Add custom, context-specific information to page labels and left and right page controls to give customers more clarity about where they are and where they’re going, when needed.",preview:!1,mdxType:"Do"}),(0,o.yg)(A.w,{title:"Don't",body:"Don’t over-complicate Pagination labels with too much information about the content in view. If you can’t give succinct labels to Pagination, consider showing the information elsewhere on the page.",preview:!1,mdxType:"Dont"})),(0,o.yg)(A.l,{mdxType:"DoDont"},(0,o.yg)(A.Do,{title:"Do",body:"Show current page count whenever possible so users understand where they are in a dataset, and so that they know the content in view has been updated if they navigate to a new page number.",preview:!1,mdxType:"Do"})))}F.isMDXComponent=!0},15367:(e,a,t)=>{"use strict";t.d(a,{Cv:()=>g,PK:()=>p,xP:()=>c});var n=t(76127),o=t(41456),i=t(55729),r=t(4073),l=t(629),s=i.createContext({}),g=i.forwardRef(({children:e,element:a="BLOCKQUOTE",url:t,marginBottom:r="space70",...l},g)=>i.createElement(n.az,{...(0,n.x8)(l),ref:g,display:"flex",columnGap:"space50",alignItems:"flex-start",lineHeight:"lineHeight30",fontSize:"fontSize30",marginBottom:r,element:a},i.createElement(o.BlockquoteIcon,{element:`${a}_ICON`,decorative:!0,color:"colorTextIcon"}),i.createElement(s.Provider,{value:{url:t}},i.createElement(n.az,{element:`INNER_${a}`},e))));g.displayName="Blockquote";var c=i.forwardRef(({children:e,element:a="BLOCKQUOTE_CONTENT",...t},o)=>{let{url:r}=i.useContext(s);return i.createElement(n.az,{...(0,n.x8)(t),as:"blockquote",margin:"space0",ref:o,element:a,cite:r},e)});c.displayName="BlockquoteContent";var p=i.forwardRef(({element:e="BLOCKQUOTE_CITATION",author:a,source:t,...o},g)=>{let{url:c}=i.useContext(s);return i.createElement(n.az,{...(0,n.x8)(o),marginTop:"space30",marginBottom:"space0",as:"p",element:e,ref:g},"—"," ",i.createElement(l.EY,{as:"span",fontWeight:"fontWeightSemibold",element:`${e}_AUTHOR`},a),t?i.createElement(i.Fragment,null,","," ",i.createElement(n.az,{as:"cite",fontStyle:"normal",element:`${e}_CITE`},c?i.createElement(r.Mz,{href:c,showExternal:!0,element:`${e}_ANCHOR`},t):i.createElement(l.EY,{as:"span",element:`${e}_TEXT`},t))):null)});p.displayName="BlockquoteCitation"},40615:(e,a,t)=>{"use strict";t.d(a,{A:()=>h});var n=t(72387),o=t(76127),i=t(95669),r=t.n(i),l=t(81278);t(55729);var s=t(10511),g=t(43084),c=t(10732),p=t(62887),u=t(63437),d=t(38992);let m={h1:()=>null},h=({children:e,meta:a,navigationData:t,data:i,mdxHeadings:h,pageHeaderData:{categoryRoute:P,githubUrl:b,storybookUrl:y}})=>{let T=a.title?`${a.title} - ${d.DZ.TITLE}`:d.DZ.TITLE,w=a.description||d.DZ.DESCRIPTION,f=(0,l.useRouter)();return(0,n.FD)(u.T,{navigationData:t,children:[(0,n.FD)(r(),{children:[(0,n.Y)("title",{children:T}),(0,n.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${f.pathname}`}),(0,n.Y)("meta",{name:"description",content:w},"description")]}),(0,n.FD)(s.s,{children:[(0,n.Y)(p.c,{categoryRoute:P,githubUrl:b,storybookUrl:y,data:i}),(0,n.FD)(o.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,n.Y)(c.i,{data:h}),(0,n.Y)(o.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,n.Y)(g.Q,{componentOverrides:a.package?m:{},children:e})})]})]})]})}},41456:(e,a,t)=>{"use strict";t.r(a),t.d(a,{BlockquoteIcon:()=>r});var n=t(36669),o=t(55729),i=t(96316);let r=o.forwardRef(({as:e,display:a,element:t="ICON",size:r,color:l,title:s,decorative:g},c)=>{let p=`BlockquoteIcon-${(0,n.GV)()}`;if(!g&&null==s)throw Error("[BlockquoteIcon]: Missing a title for non-decorative icon.");return o.createElement(i.IconWrapper,{as:e,display:a,element:t,size:r,color:l,ref:c},o.createElement("svg",{role:"img","aria-hidden":g,width:"100%",height:"100%",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":p},s?o.createElement("title",{id:p},s):null,o.createElement("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M15.865 16.305a44.92 44.92 0 01-1.698.028c-.707 0-1.264-.011-1.699-.028-1.018-.039-1.754-.819-1.781-1.824a62.15 62.15 0 01-.02-1.67V9.646c0-3.19 2.12-5.165 4.585-5.926.335-.103.765-.073 1.061.236.224.232.378.5.484.738.267.605-.107 1.181-.552 1.454-.707.433-1.218.918-1.554 1.48-.29.485-.459 1.044-.498 1.705.635 0 1.148.007 1.56.017 1.065.025 1.87.833 1.896 1.897a65.173 65.173 0 01-.002 3.234c-.028 1.005-.764 1.785-1.782 1.824zm-8.333 0a44.92 44.92 0 01-1.699.028c-.706 0-1.263-.011-1.698-.028-1.018-.039-1.754-.819-1.782-1.824-.011-.432-.02-.981-.02-1.67V9.646c0-3.19 2.12-5.164 4.585-5.925.336-.104.765-.074 1.062.235.224.232.378.5.483.738.268.606-.106 1.182-.552 1.454-.707.434-1.217.918-1.553 1.48-.29.485-.459 1.044-.499 1.705.636 0 1.149.007 1.56.017 1.065.025 1.87.833 1.897 1.897.01.415.017.93.017 1.564 0 .689-.008 1.238-.02 1.67-.027 1.005-.764 1.785-1.78 1.824z"})))});r.displayName="BlockquoteIcon"},67660:(e,a,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/pagination",function(){return t(4996)}])}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=67660)),_N_E=e.O()}]);