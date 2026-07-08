(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7216],{9450:(e,l,t)=>{"use strict";t.r(l),t.d(l,{__N_SSG:()=>eP,default:()=>e$,getStaticProps:()=>eA,mdxHeadings:()=>eB,meta:()=>eS});var o=t(55729),r=t(11885),a=t(76127),i=t(36669),n=t(8909),d=t(86146),p=t(95036),s=t(40123),c=t(77264),u=t(87305),m=t(68113),g=t(629),h=t(62378),f=Object.create,y=Object.defineProperty,F=Object.getOwnPropertyDescriptor,U=Object.getOwnPropertyNames,b=Object.getPrototypeOf,I=Object.prototype.hasOwnProperty,v=(e,l)=>function(){return l||(0,e[U(e)[0]])((l={exports:{}}).exports,l),l.exports},x=v({"../../../../node_modules/lodash/_isPrototype.js"(e,l){var t=Object.prototype;l.exports=function(e){var l=e&&e.constructor;return e===("function"==typeof l&&l.prototype||t)}}}),D=v({"../../../../node_modules/lodash/_overArg.js"(e,l){l.exports=function(e,l){return function(t){return e(l(t))}}}}),T=v({"../../../../node_modules/lodash/_nativeKeys.js"(e,l){l.exports=D()(Object.keys,Object)}}),w=v({"../../../../node_modules/lodash/_baseKeys.js"(e,l){var t=x(),o=T(),r=Object.prototype.hasOwnProperty;l.exports=function(e){if(!t(e))return o(e);var l=[];for(var a in Object(e))r.call(e,a)&&"constructor"!=a&&l.push(a);return l}}}),E=v({"../../../../node_modules/lodash/_freeGlobal.js"(e,l){l.exports="object"==typeof t.g&&t.g&&t.g.Object===Object&&t.g}}),_=v({"../../../../node_modules/lodash/_root.js"(e,l){var t=E(),o="object"==typeof self&&self&&self.Object===Object&&self;l.exports=t||o||Function("return this")()}}),j=v({"../../../../node_modules/lodash/_Symbol.js"(e,l){l.exports=_().Symbol}}),L=v({"../../../../node_modules/lodash/_getRawTag.js"(e,l){var t=j(),o=Object.prototype,r=o.hasOwnProperty,a=o.toString,i=t?t.toStringTag:void 0;l.exports=function(e){var l=r.call(e,i),t=e[i];try{e[i]=void 0;var o=!0}catch{}var n=a.call(e);return o&&(l?e[i]=t:delete e[i]),n}}}),N=v({"../../../../node_modules/lodash/_objectToString.js"(e,l){var t=Object.prototype.toString;l.exports=function(e){return t.call(e)}}}),z=v({"../../../../node_modules/lodash/_baseGetTag.js"(e,l){var t=j(),o=L(),r=N(),a=t?t.toStringTag:void 0;l.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?o(e):r(e)}}}),k=v({"../../../../node_modules/lodash/isObject.js"(e,l){l.exports=function(e){var l=typeof e;return null!=e&&("object"==l||"function"==l)}}}),C=v({"../../../../node_modules/lodash/isFunction.js"(e,l){var t=z(),o=k();l.exports=function(e){if(!o(e))return!1;var l=t(e);return"[object Function]"==l||"[object GeneratorFunction]"==l||"[object AsyncFunction]"==l||"[object Proxy]"==l}}}),R=v({"../../../../node_modules/lodash/_coreJsData.js"(e,l){l.exports=_()["__core-js_shared__"]}}),O=v({"../../../../node_modules/lodash/_isMasked.js"(e,l){var t,o=R(),r=(t=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+t:"";l.exports=function(e){return!!r&&r in e}}}),P=v({"../../../../node_modules/lodash/_toSource.js"(e,l){var t=Function.prototype.toString;l.exports=function(e){if(null!=e){try{return t.call(e)}catch{}try{return e+""}catch{}}return""}}}),S=v({"../../../../node_modules/lodash/_baseIsNative.js"(e,l){var t=C(),o=O(),r=k(),a=P(),i=/^\[object .+?Constructor\]$/,n=Object.prototype,d=Function.prototype.toString,p=n.hasOwnProperty,s=RegExp("^"+d.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");l.exports=function(e){return!(!r(e)||o(e))&&(t(e)?s:i).test(a(e))}}}),A=v({"../../../../node_modules/lodash/_getValue.js"(e,l){l.exports=function(e,l){return e?.[l]}}}),B=v({"../../../../node_modules/lodash/_getNative.js"(e,l){var t=S(),o=A();l.exports=function(e,l){var r=o(e,l);return t(r)?r:void 0}}}),M=v({"../../../../node_modules/lodash/_DataView.js"(e,l){l.exports=B()(_(),"DataView")}}),H=v({"../../../../node_modules/lodash/_Map.js"(e,l){l.exports=B()(_(),"Map")}}),W=v({"../../../../node_modules/lodash/_Promise.js"(e,l){l.exports=B()(_(),"Promise")}}),$=v({"../../../../node_modules/lodash/_Set.js"(e,l){l.exports=B()(_(),"Set")}}),G=v({"../../../../node_modules/lodash/_WeakMap.js"(e,l){l.exports=B()(_(),"WeakMap")}}),Y=v({"../../../../node_modules/lodash/_getTag.js"(e,l){var t=M(),o=H(),r=W(),a=$(),i=G(),n=z(),d=P(),p="[object Map]",s="[object Promise]",c="[object Set]",u="[object WeakMap]",m="[object DataView]",g=d(t),h=d(o),f=d(r),y=d(a),F=d(i),U=n;(t&&U(new t(new ArrayBuffer(1)))!=m||o&&U(new o)!=p||r&&U(r.resolve())!=s||a&&U(new a)!=c||i&&U(new i)!=u)&&(U=function(e){var l=n(e),t="[object Object]"==l?e.constructor:void 0,o=t?d(t):"";if(o)switch(o){case g:return m;case h:return p;case f:return s;case y:return c;case F:return u}return l}),l.exports=U}}),V=v({"../../../../node_modules/lodash/isObjectLike.js"(e,l){l.exports=function(e){return null!=e&&"object"==typeof e}}}),q=v({"../../../../node_modules/lodash/_baseIsArguments.js"(e,l){var t=z(),o=V();l.exports=function(e){return o(e)&&"[object Arguments]"==t(e)}}}),X=v({"../../../../node_modules/lodash/isArguments.js"(e,l){var t=q(),o=V(),r=Object.prototype,a=r.hasOwnProperty,i=r.propertyIsEnumerable;l.exports=t(function(){return arguments}())?t:function(e){return o(e)&&a.call(e,"callee")&&!i.call(e,"callee")}}}),Z=v({"../../../../node_modules/lodash/isArray.js"(e,l){l.exports=Array.isArray}}),J=v({"../../../../node_modules/lodash/isLength.js"(e,l){l.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=0x1fffffffffffff}}}),K=v({"../../../../node_modules/lodash/isArrayLike.js"(e,l){var t=C(),o=J();l.exports=function(e){return null!=e&&o(e.length)&&!t(e)}}}),Q=v({"../../../../node_modules/lodash/stubFalse.js"(e,l){l.exports=function(){return!1}}}),ee=v({"../../../../node_modules/lodash/isBuffer.js"(e,l){var t=_(),o=Q(),r="object"==typeof e&&e&&!e.nodeType&&e,a=r&&"object"==typeof l&&l&&!l.nodeType&&l,i=a&&a.exports===r?t.Buffer:void 0;l.exports=(i?i.isBuffer:void 0)||o}}),el=v({"../../../../node_modules/lodash/_baseIsTypedArray.js"(e,l){var t=z(),o=J(),r=V(),a={};a["[object Float32Array]"]=a["[object Float64Array]"]=a["[object Int8Array]"]=a["[object Int16Array]"]=a["[object Int32Array]"]=a["[object Uint8Array]"]=a["[object Uint8ClampedArray]"]=a["[object Uint16Array]"]=a["[object Uint32Array]"]=!0,a["[object Arguments]"]=a["[object Array]"]=a["[object ArrayBuffer]"]=a["[object Boolean]"]=a["[object DataView]"]=a["[object Date]"]=a["[object Error]"]=a["[object Function]"]=a["[object Map]"]=a["[object Number]"]=a["[object Object]"]=a["[object RegExp]"]=a["[object Set]"]=a["[object String]"]=a["[object WeakMap]"]=!1,l.exports=function(e){return r(e)&&o(e.length)&&!!a[t(e)]}}}),et=v({"../../../../node_modules/lodash/_baseUnary.js"(e,l){l.exports=function(e){return function(l){return e(l)}}}}),eo=v({"../../../../node_modules/lodash/_nodeUtil.js"(e,l){var t=E(),o="object"==typeof e&&e&&!e.nodeType&&e,r=o&&"object"==typeof l&&l&&!l.nodeType&&l,a=r&&r.exports===o&&t.process;l.exports=function(){try{return r&&r.require&&r.require("util").types||a&&a.binding&&a.binding("util")}catch{}}()}}),er=v({"../../../../node_modules/lodash/isTypedArray.js"(e,l){var t=el(),o=et(),r=eo(),a=r&&r.isTypedArray;l.exports=a?o(a):t}}),ea=v({"../../../../node_modules/lodash/isEmpty.js"(e,l){var t=w(),o=Y(),r=X(),a=Z(),i=K(),n=ee(),d=x(),p=er(),s=Object.prototype.hasOwnProperty;l.exports=function(e){if(null==e)return!0;if(i(e)&&(a(e)||"string"==typeof e||"function"==typeof e.splice||n(e)||p(e)||r(e)))return!e.length;var l=o(e);if("[object Map]"==l||"[object Set]"==l)return!e.size;if(d(e))return!t(e).length;for(var c in e)if(s.call(e,c))return!1;return!0}}}),ei=o.createContext({}),en=o.forwardRef(({element:e="FILE_UPLOADER",disabled:l,id:t,name:r,required:n=!1,...d},p)=>{let s=t||(0,i.GV)();return o.createElement(ei.Provider,{value:{disabled:l,id:s,name:r,required:n}},o.createElement(a.az,{ref:p,element:e,...(0,a.x8)(d),maxWidth:"size60"},d.children))});en.displayName="FileUploader";var ed=o.forwardRef(({children:e,element:l="FILE_UPLOADER_HELP_TEXT",...t},r)=>{let{id:i}=o.useContext(ei);return o.createElement(a.az,{ref:r,element:l,...(0,a.x8)(t),id:`${i}-help-text`},o.createElement(n.$,{marginTop:"space0"},e))});ed.displayName="FileUploaderHelpText";var ep=o.forwardRef(({children:e,element:l="FILE_UPLOADER_LABEL",...t},r)=>{let{id:a,disabled:i,required:n}=o.useContext(ei);return o.createElement(d.J,{disabled:i,htmlFor:a,element:l,required:n,ref:r,...t},e)});ep.displayName="FileUploaderLabel";var es=o.createContext({variant:"default"}),ec={default:{borderColor:"colorBorderWeaker",backgroundColor:"colorBackgroundBody"},loading:{borderColor:"colorBorderWeaker",backgroundColor:"colorBackgroundBody"},error:{borderColor:"colorBorderError",backgroundColor:"colorBackgroundErrorWeakest"}},eu={default:{color:"colorTextIcon"},loading:{color:"colorTextIcon"},error:{color:"colorTextIconError"}},em=o.forwardRef(({children:e,fileIcon:l,element:t="FILE_UPLOADER_ITEM",variant:r="default",i18nErrorText:i="(error)",i18nButtonText:n="Remove file",i18nLoadingText:d="(uploading file)",onButtonClick:g,...h},f)=>{let y=l;"error"===r&&(y=o.createElement(u.ErrorIcon,{title:i,decorative:!1,element:`${t}_ERROR_ICON`})),"loading"===r&&(y=o.createElement(m.y,{decorative:!1,title:d,element:`${t}_SPINNER`}));let F=o.createElement(c.DeleteIcon,{title:n,decorative:!1,element:`${t}_DELETE_ICON`});return("loading"===r||"error"===r)&&(F=o.createElement(s.CloseIcon,{title:n,decorative:!1,element:`${t}_DISMISS_ICON`})),o.createElement(es.Provider,{value:{variant:r}},o.createElement(a.az,{as:"li",ref:f,...(0,a.x8)(h),element:t,variant:r,listStyleType:"none",borderWidth:"borderWidth10",borderStyle:"solid",borderRadius:"borderRadius30",padding:"space40",display:"grid",gridTemplateColumns:"auto 1fr auto",columnGap:"space40",alignItems:"center",...ec[r]},o.createElement(a.az,{...eu[r]},y),o.createElement(a.az,{display:"flex",flexDirection:"column",rowGap:"space10",element:`${t}_CONTENT`},e),o.createElement(a.az,{display:"flex",paddingRight:"space30"},o.createElement(p.$n,{variant:"secondary_icon",size:"reset",onClick:g,element:`${t}_BUTTON`},F))))});em.displayName="FileUploaderItem";var eg=o.forwardRef(({children:e,element:l="FILE_UPLOADER_ITEMS_LIST",...t},r)=>o.createElement(a.az,{ref:r,element:l,as:"ul",margin:"space0",padding:"space0",rowGap:"space30",display:"flex",flexDirection:"column",marginTop:"space40",...(0,a.x8)(t)},e));eg.displayName="FileUploaderItemsList";var eh={default:{color:"colorTextWeak"},loading:{color:"colorTextWeak"},error:{color:"colorTextError"}},ef=o.forwardRef(({children:e,element:l="FILE_UPLOADER_ITEM_DESCRIPTION",...t},r)=>{let{variant:a}=o.useContext(es);return o.createElement(g.EY,{...(0,g.T2)(t),element:l,variant:a,ref:r,as:"div",fontSize:"fontSize20",lineHeight:"lineHeight20",...eh[a]},e)});ef.displayName="FileUploaderItemDescription";var ey=o.forwardRef(({children:e,element:l="FILE_UPLOADER_ITEM_TITLE",...t},r)=>o.createElement(g.EY,{...(0,g.T2)(t),element:l,ref:r,as:"div",fontSize:"fontSize30",lineHeight:"lineHeight30",color:"colorText",wordBreak:"break-word"},e));ey.displayName="FileUploaderItemTitle";var eF=((e,l,t)=>(t=null!=e?f(b(e)):{},((e,l,t,o)=>{if(l&&"object"==typeof l||"function"==typeof l)for(let r of U(l))I.call(e,r)||r===t||y(e,r,{get:()=>l[r],enumerable:!(o=F(l,r))||o.enumerable});return e})(!l&&e&&e.__esModule?t:y(t,"default",{value:e,enumerable:!0}),e)))(ea()),eU={borderColor:"colorBorderPrimaryStrong",backgroundColor:"colorBackgroundPrimaryWeakest"},eb={borderColor:"colorBorderWeak",borderStyle:"dashed",backgroundColor:"colorBackgroundWeak",cursor:"pointer",color:"colorText",_hover:eU},eI={backgroundColor:"colorBackground",borderStyle:"solid",borderColor:"colorBorderWeaker",cursor:"not-allowed",color:"colorTextWeaker"},ev=o.forwardRef(({element:e="FILE_UPLOADER_DROPZONE",children:l,acceptedMimeTypes:t,onInputChange:r,onDragEnd:i,onDragEnter:n,onDragLeave:d,onDragOver:p,onDragStart:s,onDrop:c,...u},m)=>{let{id:g,disabled:f,required:y,name:F}=o.useContext(ei),[U,b]=o.useState(0),[I,v]=o.useState(!1),x=eb;return f&&(x=eI),I&&(x={...x,...eU}),o.createElement(a.az,{as:"label",element:e,transition:"all 150ms ease-in",borderWidth:"borderWidth10",borderRadius:"borderRadius30",paddingY:"space160",paddingX:"space50",marginTop:"space40",textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"size20",rowGap:"space20",...x,_focusWithin:{backgroundColor:"colorBackground",boxShadow:"shadowFocus"},onDragStart:s,onDragEnd:i,onDragOver:e=>{e.preventDefault(),e.stopPropagation(),e.dataTransfer.dropEffect="copy",!f&&p&&p(e)},onDragEnter:e=>{e.preventDefault(),e.stopPropagation(),e.dataTransfer.dropEffect="copy",!f&&(v(!0),n&&n(e))},onDrop:e=>{e.preventDefault(),e.stopPropagation(),!f&&(b(e=>e+1),v(!1),c&&c(e))},onDragLeave:e=>{e.preventDefault(),e.stopPropagation(),!f&&(v(!1),d&&d(e))}},o.createElement(a.az,{backgroundColor:f?"colorBackgroundStrong":"colorBackgroundBody",borderRadius:"borderRadiusCircle",padding:"space30",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},o.createElement(h.UploadToCloudIcon,{decorative:!0,size:"sizeIcon60",color:f?"colorTextWeaker":"colorTextIcon"})),o.createElement(o.Fragment,null,l),o.createElement(a.az,{as:"input",type:"file",ref:m,...(0,a.x8)({...u,id:g,disabled:f,required:y,name:F}),size:"size0",border:"none",overflow:"hidden",padding:"space0",margin:"space0",whiteSpace:"nowrap",textTransform:"none",position:"absolute",clip:"rect(0 0 0 0)","aria-describedby":`${g}-error-text ${g}-help-text ${g}-dropzone-text`,key:U,onChange:e=>{b(e=>e+1),r&&r(e)},accept:(e=>!Array.isArray(e)||(0,eF.default)(e)?"":e.join(","))(t)}))});ev.displayName="FileUploaderDropzone";var ex=o.forwardRef(({children:e,element:l="FILE_UPLOADER_DROPZONE_TEXT",...t},r)=>{let{id:i}=o.useContext(ei);return o.createElement(a.az,{ref:r,element:l,...(0,a.x8)(t),lineHeight:"lineHeight20",id:`${i}-dropzone-text`,pointerEvents:"none"},e)});ex.displayName="FileUploaderDropzoneText";var eD=o.forwardRef(({children:e,element:l="FILE_UPLOADER_ERROR_TEXT",...t},r)=>{let{id:i}=o.useContext(ei);return o.createElement(a.az,{marginTop:"space50",ref:r,element:l,...(0,a.x8)(t),id:`${i}-error-text`},o.createElement(n.$,{variant:"error",marginTop:"space0"},e))});eD.displayName="FileUploaderErrorText";var eT=t(60951),ew=t(74513),eE=t.n(ew),e_=t(69277);let ej=`
const FileUploaderExample = () => {
  return (
    <FileUploader name="Default File Uploader">
      <FileUploaderLabel>Upload files</FileUploaderLabel>
      <FileUploaderHelpText>Files can be up to 50 MB.</FileUploaderHelpText>
      <FileUploaderDropzone acceptedMimeTypes={['image/*', 'application/pdf']}>
        <FileUploaderDropzoneText>
          Browse for files or drag them here
        </FileUploaderDropzoneText>
      </FileUploaderDropzone>
      <FileUploaderItemsList>
        <FileUploaderItem fileIcon={<DownloadIcon decorative />}>
          <FileUploaderItemTitle>File1.png</FileUploaderItemTitle>
          <FileUploaderItemDescription>9.2 MB</FileUploaderItemDescription>
        </FileUploaderItem>
        <FileUploaderItem variant="loading">
          <FileUploaderItemTitle>File2.png</FileUploaderItemTitle>
          <FileUploaderItemDescription>Uploading...</FileUploaderItemDescription>
        </FileUploaderItem>
      </FileUploaderItemsList>
    </FileUploader>
  );
}

render(
  <FileUploaderExample />
)
`.trim(),eL=`
const FileUploaderExample = () => {
  return (
    <FileUploader name="Default File Uploader" required>
      <FileUploaderLabel>Upload files</FileUploaderLabel>
      <FileUploaderHelpText>Files can be up to 50 MB.</FileUploaderHelpText>
      <FileUploaderDropzone acceptedMimeTypes={['image/*', 'application/pdf']}>
        <FileUploaderDropzoneText>
          Browse for files or drag them here
        </FileUploaderDropzoneText>
      </FileUploaderDropzone>
      <FileUploaderItemsList>
        <FileUploaderItem fileIcon={<DownloadIcon decorative />} >
          <FileUploaderItemTitle>File1.png</FileUploaderItemTitle>
          <FileUploaderItemDescription>9.2 MB</FileUploaderItemDescription>
        </FileUploaderItem>
        <FileUploaderItem fileIcon={<DownloadIcon decorative />}>
          <FileUploaderItemTitle>File2.png</FileUploaderItemTitle>
          <FileUploaderItemDescription>10.7 MB</FileUploaderItemDescription>
        </FileUploaderItem>
        <FileUploaderItem fileIcon={<DownloadIcon decorative />}>
          <FileUploaderItemTitle>File3.png</FileUploaderItemTitle>
          <FileUploaderItemDescription>4.1 MB</FileUploaderItemDescription>
        </FileUploaderItem>
      </FileUploaderItemsList>
    </FileUploader>
  );
}

render(
  <FileUploaderExample />
)
`.trim(),eN=`
const FileUploaderExample = () => {
  return (
    <FileUploader name="Default File Uploader" disabled>
      <FileUploaderLabel>Upload files</FileUploaderLabel>
      <FileUploaderHelpText>Files can be up to 50 MB.</FileUploaderHelpText>
      <FileUploaderDropzone acceptedMimeTypes={['image/*', 'application/pdf']}>
        <FileUploaderDropzoneText>
          Browse for files or drag them here
        </FileUploaderDropzoneText>
      </FileUploaderDropzone>
    </FileUploader>
  );
}

render(
  <FileUploaderExample />
)
`.trim(),ez=`
const FileUploaderExample = () => {
  return (
    <FileUploader name="Default File Uploader">
      <FileUploaderLabel>Upload files</FileUploaderLabel>
      <FileUploaderHelpText>Files can be up to 50 MB.</FileUploaderHelpText>
      <FileUploaderDropzone acceptedMimeTypes={['image/*', 'application/pdf']}>
        <FileUploaderDropzoneText>
          Browse for files or drag them here
        </FileUploaderDropzoneText>
      </FileUploaderDropzone>
      <FileUploaderItemsList>
        <FileUploaderItem fileIcon={<DownloadIcon decorative />} >
          <FileUploaderItemTitle>File1.png</FileUploaderItemTitle>
          <FileUploaderItemDescription>9.2 MB</FileUploaderItemDescription>
        </FileUploaderItem>
        <FileUploaderItem fileIcon={<DownloadIcon decorative />}>
          <FileUploaderItemTitle>File2.png</FileUploaderItemTitle>
          <FileUploaderItemDescription>10.7 MB</FileUploaderItemDescription>
        </FileUploaderItem>
        <FileUploaderItem variant="loading">
          <FileUploaderItemTitle>File3.png</FileUploaderItemTitle>
          <FileUploaderItemDescription>Uploading...</FileUploaderItemDescription>
        </FileUploaderItem>
      </FileUploaderItemsList>
    </FileUploader>
  );
}

render(
  <FileUploaderExample />
)
`.trim(),ek=`
const FileUploaderExample = () => {
  return (
    <FileUploader name="Default File Uploader" required>
      <FileUploaderLabel>Upload files</FileUploaderLabel>
      <FileUploaderHelpText>Files can be up to 50 MB.</FileUploaderHelpText>
      <FileUploaderDropzone acceptedMimeTypes={['image/*', 'application/pdf']}>
        <FileUploaderDropzoneText>
          Browse for files or drag them here
        </FileUploaderDropzoneText>
      </FileUploaderDropzone>
      <FileUploaderErrorText>
        One of your files failed to upload. Please try again.
      </FileUploaderErrorText>
      <FileUploaderItemsList>
        <FileUploaderItem fileIcon={<DownloadIcon decorative />} >
          <FileUploaderItemTitle>File1.png</FileUploaderItemTitle>
          <FileUploaderItemDescription>9.2 MB</FileUploaderItemDescription>
        </FileUploaderItem>
        <FileUploaderItem variant="error">
          <FileUploaderItemTitle>File2.png</FileUploaderItemTitle>
          <FileUploaderItemDescription>
            This file is too big. You can upload files up to 50 MB.
          </FileUploaderItemDescription>
        </FileUploaderItem>
      </FileUploaderItemsList>
    </FileUploader>
  );
}

render(
  <FileUploaderExample />
)
`.trim(),eC=`
const sampleFiles = [
  {
    variant: 'default',
    title: 'File1.png',
    description: '9.2 MB',
    id: 'initial-file-0',
  },
  {
    variant: 'loading',
    title: 'File2.png',
    description: 'Uploading...',
    id: 'initial-file-1',
  },
];

const DragDropExample = () => {
  const [screenReaderText, setScreenReaderText] = React.useState('');
  const [files, setFiles] = React.useState(sampleFiles);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      let finishedFiles = '';

      setFiles((prev) => {
        const updatedFiles = [];
        prev.forEach((file) => {
          if (file.variant === 'loading') {
            file.variant = 'default';
            const size = Math.floor(Math.random() * (50 - 1 + 1) + 1);
            file.description = size + ' ' + 'MB';
            finishedFiles = finishedFiles + ' ' + file.title;
          }
          updatedFiles.push(file);
        });
        return updatedFiles;
      });

      if (finishedFiles.length > 0) {
        setScreenReaderText('Finished uploading: ' + finishedFiles);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [files, setFiles]);

  const handleInputChange = (event)=> {
    const {files: newFiles} = event.target;
    let newFilesNames = '';

    if (newFiles !== null) {
      Array.from(newFiles).forEach(({name}) => {
        newFilesNames = newFilesNames + ' ' + name;
        setFiles((prev) => {
          return [
            ...prev,
            {
              title: name,
              description: 'Uploading...',
              variant: 'loading',
              id: snakeCase(name),
            },
          ];
        });
      });
    }

    if (newFilesNames.length > 1) {
      setScreenReaderText('uploading: ' + newFilesNames);
    }
  };

  const handleDragEnter = (event) => {
    const {items} = event.dataTransfer;
    setScreenReaderText('Dragging ' + items.length + ' files');
  };

  const handleDragLeave = (event) => {
    const {items} = event.dataTransfer;
    setScreenReaderText('Cancelled dragging ' + items.length + ' files');
  };

  const handleDrop = (event) => {
    const {files: newFiles} = event.dataTransfer;
    setScreenReaderText('Dropped ' + newFiles.length + ' files');

    if (newFiles !== null) {
      Array.from(newFiles).forEach(({name}) => {
        setFiles((prev) => {
          return [
            ...prev,
            {
              title: name,
              description: 'Uploading...',
              variant: 'loading',
              id: snakeCase(name),
            },
          ];
        });
      });
    }
  };

  return (
    <>
      <FileUploader name="Default File Uploader">
        <FileUploaderLabel>Upload files</FileUploaderLabel>
        <FileUploaderHelpText>Files can be up to 50 MB.</FileUploaderHelpText>
        <FileUploaderDropzone
          multiple
          acceptedMimeTypes={['image/*', 'application/pdf']}
          onDragEnter={handleDragEnter}
          onDrop={handleDrop}
          onDragLeave={handleDragLeave}
          onInputChange={handleInputChange}
        >
          <FileUploaderDropzoneText>Browse for files or drag them here</FileUploaderDropzoneText>
        </FileUploaderDropzone>
        <FileUploaderItemsList>
          {files.map(({variant, title, description, id}) => (
            <FileUploaderItem
              variant={variant}
              key={id}
              fileIcon={<DownloadIcon decorative />}
              onButtonClick={() => {
                setFiles((prev) => {
                  return prev.filter((file) => file.id !== id);
                });
              }}
            >
              <FileUploaderItemTitle>{title}</FileUploaderItemTitle>
              <FileUploaderItemDescription>{description}</FileUploaderItemDescription>
            </FileUploaderItem>
          ))}
        </FileUploaderItemsList>
      </FileUploader>
      <ScreenReaderOnly aria-live="assertive">{screenReaderText}</ScreenReaderOnly>
    </>
  );
}

render(
  <DragDropExample />
)

`.trim();var eR=t(89564),eO=t(40615),eP=!0;let eS={title:"File Uploader",package:"@twilio-paste/file-uploader",description:"A File Uploader is a form element used to upload multiple files.",slug:"/components/file-uploader/"},eA=async()=>({props:{data:{...packageJson,...feature},navigationData,mdxHeadings:eB,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/file-uploader",storybookUrl:"/?path=/story/components-file-uploader--default"}}}),eB=[{value:"Guidelines",depth:2},{value:"About File Uploader",depth:3},{value:"Accessibility",depth:3},{value:"File Uploader vs. File Picker",depth:3},{value:"Drag and drop functionality",depth:3},{value:"Examples",depth:2},{value:"Default File Uploader",depth:3},{value:"Required File Uploader",depth:3},{value:"States",depth:2},{value:"Disabled File Uploader",depth:3},{value:"Loading File Uploader",depth:3},{value:"Error File Uploader",depth:3},{value:"Composition notes",depth:2},{value:"File Uploader Label",depth:3},{value:"File Uploader Help Text",depth:3},{value:"File Uploader Item",depth:3},{value:"When to use File Uploader",depth:3}],eM=function(e){return console.warn("Component LivePreview was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",e)},eH={meta:eS,getStaticProps:eA,mdxHeadings:eB},eW=eO.A;function e$({components:e,...l}){return(0,r.yg)(eW,{...eH,...l,components:e,mdxType:"MDXLayout"},(0,r.yg)(eM,{scope:{DownloadIcon:eT.DownloadIcon,FileUploader:en,FileUploaderLabel:ep,FileUploaderHelpText:ed,FileUploaderDropzone:ev,FileUploaderDropzoneText:ex,FileUploaderItemsList:eg,FileUploaderItem:em,FileUploaderItemTitle:ey,FileUploaderItemDescription:ef},language:"jsx",noInline:!0,mdxType:"LivePreview"},eL),(0,r.yg)("h2",null,"Guidelines"),(0,r.yg)("h3",null,"About File Uploader"),(0,r.yg)("p",null,"A File Uploader is a form element that can trigger a file browser or accept drag-and-drop attachments. It can accept multiple attachments. The package consists of an associated label (",(0,r.yg)("inlineCode",{parentName:"p"},"FileUploaderLabel"),"), help text (",(0,r.yg)("inlineCode",{parentName:"p"},"FileUploaderInfo"),"), the dropzone (",(0,r.yg)("inlineCode",{parentName:"p"},"FileUploaderDropzone"),"), and cards for each uploaded attachment (",(0,r.yg)("inlineCode",{parentName:"p"},"FileUploaderItem"),")."),(0,r.yg)("h3",null,"Accessibility"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The File Uploader should always use ",(0,r.yg)("inlineCode",{parentName:"li"},"FileUploaderLabel")," to ensure it has an associated label."),(0,r.yg)("li",{parentName:"ul"},`The only tab stop in the File Uploader is the visually hidden input within the dropzone. The “Enter” and “Space” keys open the file selector.`),(0,r.yg)("li",{parentName:"ul"},"Use an accessible option for drag and drop implementation. See the Drag and drop section below for more guidance.")),(0,r.yg)("h3",null,"File Uploader vs. File Picker"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/components/file-picker"},"File Picker"),` is another form component that, like File Uploader, allows the user to upload an attachment. There are a few key differences between the two components. File Uploader is more dynamic than File Picker – it allows multiple attachments and all of them are removable by the user. File Picker allows the user to upload only one file at a time with no way to clear the selection if a file has already been uploaded (besides selecting a new file). Because File Uploader has the ability to display loading and real-time error states, it’s a safer bet than File Picker for complex or potentially risky user flows.`),(0,r.yg)("p",null,`Visually, File Picker is much more compact than the File Uploader, so it will fit snugly into your form UI, and won’t stand out as much as File Uploader, which takes up more vertical and horizontal space.`),(0,r.yg)("h3",null,"Drag and drop functionality"),(0,r.yg)("p",null,`The File Uploader doesn’t come with drag and drop functionality built into the dropzone. When implementing drag and drop, please use an option that provides full keyboard, screen reader, and mouse capabilities. One highly recommended option is `,(0,r.yg)("a",{parentName:"p",href:"https://react-spectrum.adobe.com/react-aria/dnd.html"},"React Aria"),"."),(0,r.yg)("p",null,`There are various drag and drop technologies that don’t include accessible solutions (like `,(0,r.yg)("a",{parentName:"p",href:"https://github.com/react-dnd/react-dnd/issues/3310"},"ReactDnD"),", for example) so please take the time to ensure the accessibility of your implementation. For more information on drag and drop accessibility, read the WCAG guidelines."),(0,r.yg)("p",null,"See the example below for an implementation that uses plain JavaScript."),(0,r.yg)(eM,{scope:{snakeCase:eE(),DownloadIcon:eT.DownloadIcon,FileUploader:en,FileUploaderLabel:ep,FileUploaderHelpText:ed,FileUploaderDropzone:ev,FileUploaderDropzoneText:ex,FileUploaderItemsList:eg,FileUploaderItem:em,FileUploaderItemTitle:ey,FileUploaderItemDescription:ef,ScreenReaderOnly:e_.E},language:"jsx",noInline:!0,mdxType:"LivePreview"},eC),(0,r.yg)("h2",null,"Examples"),(0,r.yg)("h3",null,"Default File Uploader"),(0,r.yg)("p",null,"Use a default File Uploader when your user needs to upload any number of files."),(0,r.yg)(eM,{scope:{DownloadIcon:eT.DownloadIcon,FileUploader:en,FileUploaderLabel:ep,FileUploaderHelpText:ed,FileUploaderDropzone:ev,FileUploaderDropzoneText:ex,FileUploaderItemsList:eg,FileUploaderItem:em,FileUploaderItemTitle:ey,FileUploaderItemDescription:ef},language:"jsx",noInline:!0,mdxType:"LivePreview"},ej),(0,r.yg)("h3",null,"Required File Uploader"),(0,r.yg)(eM,{scope:{DownloadIcon:eT.DownloadIcon,FileUploader:en,FileUploaderLabel:ep,FileUploaderHelpText:ed,FileUploaderDropzone:ev,FileUploaderDropzoneText:ex,FileUploaderItemsList:eg,FileUploaderItem:em,FileUploaderItemTitle:ey,FileUploaderItemDescription:ef},language:"jsx",noInline:!0,mdxType:"LivePreview"},eL),(0,r.yg)("h2",null,"States"),(0,r.yg)("h3",null,"Disabled File Uploader"),(0,r.yg)("p",null,`Use a disabled File Uploader to show users that they can’t interact with the component.`),(0,r.yg)(eM,{scope:{FileUploader:en,FileUploaderLabel:ep,FileUploaderHelpText:ed,FileUploaderDropzone:ev,FileUploaderDropzoneText:ex},language:"jsx",noInline:!0,mdxType:"LivePreview"},eN),(0,r.yg)("h3",null,"Loading File Uploader"),(0,r.yg)("p",null,`Use the loading state of FileUploaderItem so the user doesn’t move on before their action is complete or while the upload might still fail.`),(0,r.yg)(eM,{scope:{DownloadIcon:eT.DownloadIcon,FileUploader:en,FileUploaderLabel:ep,FileUploaderHelpText:ed,FileUploaderDropzone:ev,FileUploaderDropzoneText:ex,FileUploaderItemsList:eg,FileUploaderItem:em,FileUploaderItemTitle:ey,FileUploaderItemDescription:ef},language:"jsx",noInline:!0,mdxType:"LivePreview"},ez),(0,r.yg)("h3",null,"Error File Uploader"),(0,r.yg)("p",null,`If an upload fails or doesn’t meet the acceptable criteria, use the File Uploader in its error state. The user will still be able to upload files. Be sure to also display the failed FileUploaderAttachmentItem in its error state so the user knows where to direct their attention. See composition notes below for guidance around error state copy.`),(0,r.yg)(eM,{scope:{DownloadIcon:eT.DownloadIcon,FileUploader:en,FileUploaderLabel:ep,FileUploaderHelpText:ed,FileUploaderErrorText:eD,FileUploaderDropzone:ev,FileUploaderDropzoneText:ex,FileUploaderItemsList:eg,FileUploaderItem:em,FileUploaderItemTitle:ey,FileUploaderItemDescription:ef},language:"jsx",noInline:!0,mdxType:"LivePreview"},ek),(0,r.yg)("h2",null,"Composition notes"),(0,r.yg)("h3",null,"File Uploader Label"),(0,r.yg)("p",null,"Always include a Label with the File Uploader. Labels should clearly describe the file(s) being requested. They should be concise and descriptive, not instructional."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'Use File Uploader Info as help text to provide instruction if needed. For example, don\'t use "Upload an image in the form of a jpeg or png" as label text. Instead, use "Profile photo" as a label and "Upload an image file" as help text.'),(0,r.yg)("li",{parentName:"ul"},'Avoid articles ("a", "the") and punctuation. For example, use "SIM registration code" rather than "The SIM registration code".')),(0,r.yg)("h3",null,"File Uploader Help Text"),(0,r.yg)("p",null,`File limitations should be communicated to the user up front to help avoid errors, like uploading an incompatible file type or one that’s too large.`),(0,r.yg)("p",null,"Make each limitation its own sentence. Use positive framing to clearly communicate limitations to the user:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Requirements"),(0,r.yg)("th",{parentName:"tr",align:null},"Recommended phrasing"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"File type"),(0,r.yg)("td",{parentName:"tr",align:null},"You can upload ","[x]",", ","[x]"," and ","[x]"," file formats.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"File size"),(0,r.yg)("td",{parentName:"tr",align:null},"Files can be up to ","[file limit]",".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Number of files"),(0,r.yg)("td",{parentName:"tr",align:null},"You can upload up to ","[max #]"," files.")))),(0,r.yg)("h3",null,"File Uploader Item"),(0,r.yg)("p",null,"Using the ",(0,r.yg)("inlineCode",{parentName:"p"},"FileUploaderItem")," with your File Uploader will allow users to receive instant feedback on progress of the file upload."),(0,r.yg)("p",null,`Truncate the file name in the middle if it’s too long.`),(0,r.yg)("p",null,`Include description text that communicates when it’s uploading, when it’s successful, or when it fails (and why). If the delete action is destructive, consider using `,(0,r.yg)("a",{parentName:"p",href:"/patterns/delete"},"the Delete pattern")," for communicating the severity."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Requirements"),(0,r.yg)("th",{parentName:"tr",align:null},"Recommended phrasing"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"File uploading"),(0,r.yg)("td",{parentName:"tr",align:null},"Uploading...")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"File size"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Display the file size")," (e.g., 15 MB)")))),(0,r.yg)("p",null,`In the case of an upload error, the card displaying the failed file should be in error state and include an error message that clearly communicates why it wasn’t uploaded. These error types may include invalid file type or file over the file size limit. We recommend the following phrasing:`),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Status"),(0,r.yg)("th",{parentName:"tr",align:null},"Recommended phrasing"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Invalid file type"),(0,r.yg)("td",{parentName:"tr",align:null},"This file is not an accepted format. You can upload ","[x]",", ","[x]"," and ","[x]"," file formats.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Exceeds file size limit"),(0,r.yg)("td",{parentName:"tr",align:null},"This file size is too big. You can upload files up to ","[file limit]",".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Network errors (internet connection dropped while uploading, request timeout, service is down)"),(0,r.yg)("td",{parentName:"tr",align:null},"Something went wrong with the network. Check your internet connection, then try again.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Too many uploads in a certain amount of time"),(0,r.yg)("td",{parentName:"tr",align:null},`We couldn’t upload so many files so quickly. Try uploading files more slowly, or try again later.`)),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Generic (encountered an internal error)"),(0,r.yg)("td",{parentName:"tr",align:null},"Something went wrong. Try uploading your files again.")))),(0,r.yg)("p",null,`Note: be sure to also put the File Uploader in error state and include an error message underneath the FileUploaderDropzone in the case of an upload failure. This will ensure the user notices the failed File Uploader Item, even if it’s at the bottom of a long list of attachments.`),(0,r.yg)("p",null,"For additional guidance on how to compose error messages, refer to the ",(0,r.yg)("a",{parentName:"p",href:"/patterns/error-state"},"error state pattern"),"."),(0,r.yg)("h3",null,"When to use File Uploader"),(0,r.yg)(eR.l,{mdxType:"DoDont"},(0,r.yg)(eR.Do,{title:"Do",body:"Use a File Uploader when you need users to upload multiple files.",mdxType:"Do"}),(0,r.yg)(eR.w,{title:"Don't",body:"Use File Uploader for a single file upload if you’re tight on UI space – use File Picker instead.",mdxType:"Dont"})),(0,r.yg)(eR.l,{mdxType:"DoDont"},(0,r.yg)(eR.Do,{title:"Do",body:"Always include a label with the File Uploader (use the FileUploaderLabel).",mdxType:"Do"}),(0,r.yg)(eR.w,{title:"Don't",body:"Use FileUploader without FileUploaderLabel.",mdxType:"Dont"})),(0,r.yg)(eR.l,{mdxType:"DoDont"},(0,r.yg)(eR.Do,{title:"Do",body:"Be sure to communicate to your user when a file is still uploading using the loading state for the FileUploaderItem.",mdxType:"Do"}),(0,r.yg)(eR.w,{title:"Don't",body:"Let users remove uploaded files that may be destructive actions without a warning – instead use the Delete Pattern.",mdxType:"Dont"})),(0,r.yg)(eR.l,{mdxType:"DoDont"},(0,r.yg)(eR.Do,{title:"Do",body:"Use descriptive help and error text to communicate the types of files that are allowed.",mdxType:"Do"}),(0,r.yg)(eR.w,{title:"Don't",body:"Display a FileUploaderItem in error state without putting the FileUploader itself into error state and providing a helpful error message.",mdxType:"Dont"})))}e$.isMDXComponent=!0},40615:(e,l,t)=>{"use strict";t.d(l,{A:()=>h});var o=t(72387),r=t(76127),a=t(95669),i=t.n(a),n=t(81278);t(55729);var d=t(10511),p=t(43084),s=t(10732),c=t(62887),u=t(63437),m=t(38992);let g={h1:()=>null},h=({children:e,meta:l,navigationData:t,data:a,mdxHeadings:h,pageHeaderData:{categoryRoute:f,githubUrl:y,storybookUrl:F}})=>{let U=l.title?`${l.title} - ${m.DZ.TITLE}`:m.DZ.TITLE,b=l.description||m.DZ.DESCRIPTION,I=(0,n.useRouter)();return(0,o.FD)(u.T,{navigationData:t,children:[(0,o.FD)(i(),{children:[(0,o.Y)("title",{children:U}),(0,o.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${I.pathname}`}),(0,o.Y)("meta",{name:"description",content:b},"description")]}),(0,o.FD)(d.s,{children:[(0,o.Y)(c.c,{categoryRoute:f,githubUrl:y,storybookUrl:F,data:a}),(0,o.FD)(r.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,o.Y)(s.i,{data:h}),(0,o.Y)(r.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,o.Y)(p.Q,{componentOverrides:l.package?g:{},children:e})})]})]})]})}},60951:(e,l,t)=>{"use strict";t.r(l),t.d(l,{DownloadIcon:()=>i});var o=t(36669),r=t(55729),a=t(96316);let i=r.forwardRef(({as:e,display:l,element:t="ICON",size:i,color:n,title:d,decorative:p},s)=>{let c=`DownloadIcon-${(0,o.GV)()}`;if(!p&&null==d)throw Error("[DownloadIcon]: Missing a title for non-decorative icon.");return r.createElement(a.IconWrapper,{as:e,display:l,element:t,size:i,color:n,ref:s},r.createElement("svg",{role:"img","aria-hidden":p,width:"100%",height:"100%",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":c},d?r.createElement("title",{id:c},d):null,r.createElement("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M10.625 3.5a.625.625 0 10-1.25 0v8.491L7.342 9.958a.625.625 0 10-.884.884l3.125 3.125c.244.244.64.244.884 0l3.125-3.125a.625.625 0 00-.884-.884l-2.083 2.083V3.5zm-7.75 13c0-.345.28-.625.625-.625h13a.625.625 0 110 1.25h-13a.625.625 0 01-.625-.625z"})))});i.displayName="DownloadIcon"},62378:(e,l,t)=>{"use strict";t.r(l),t.d(l,{UploadToCloudIcon:()=>i});var o=t(36669),r=t(55729),a=t(96316);let i=r.forwardRef(({as:e,display:l,element:t="ICON",size:i,color:n,title:d,decorative:p},s)=>{let c=`UploadToCloudIcon-${(0,o.GV)()}`;if(!p&&null==d)throw Error("[UploadToCloudIcon]: Missing a title for non-decorative icon.");return r.createElement(a.IconWrapper,{as:e,display:l,element:t,size:i,color:n,ref:s},r.createElement("svg",{role:"img","aria-hidden":p,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":c},d?r.createElement("title",{id:c},d):null,r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.5 8.5h.012c.02 0 .041.002.062.005L10.5 8.5a.502.502 0 01.284.089l.018.013c.014.01.027.02.04.033l.012.011 2.142 2.143a.5.5 0 01-.637.765l-.07-.058L11 10.207V16a.5.5 0 01-.992.09L10 16v-5.793l-1.29 1.29a.5.5 0 01-.637.057l-.07-.058a.5.5 0 01-.057-.637l.058-.07 2.142-2.143.013-.011a.503.503 0 01.039-.033l-.052.044A.502.502 0 0110.5 8.5zm-.5-5c1.817 0 3.457.968 4.356 2.49l.071.127.073.004a3.746 3.746 0 013.495 3.541L18 9.86c0 1.448-.652 2.465-1.717 3.082a4.246 4.246 0 01-1.554.54l-.164.018H14.5a.5.5 0 01-.09-.992l.09-.008.02.002c.068-.006.202-.027.381-.073a3.44 3.44 0 00.88-.352C16.552 11.631 17 10.931 17 9.86c0-1.5-1.196-2.714-2.693-2.747l-.167.001-.33.012-.14-.297A4.06 4.06 0 0010 4.5c-2.105 0-3.814 1.508-4.035 3.526l-.017.203-.032.54-.536-.074C4.128 8.522 3 9.402 3 10.67c0 .876.36 1.37.997 1.635.312.13.64.186.915.196L6.5 12.5a.5.5 0 01.09.992l-.09.008H5.101a3.625 3.625 0 01-1.489-.272C2.618 12.814 2 11.968 2 10.67c0-1.656 1.28-2.869 2.82-2.987l.184-.009.026-.153c.432-2.255 2.373-3.918 4.746-4.016L10 3.5z"})))});i.displayName="UploadToCloudIcon"},74513:(e,l,t)=>{e.exports=t(79990)(function(e,l,t){return e+(t?"_":"")+l.toLowerCase()})},77264:(e,l,t)=>{"use strict";t.r(l),t.d(l,{DeleteIcon:()=>i});var o=t(36669),r=t(55729),a=t(96316);let i=r.forwardRef(({as:e,display:l,element:t="ICON",size:i,color:n,title:d,decorative:p},s)=>{let c=`DeleteIcon-${(0,o.GV)()}`;if(!p&&null==d)throw Error("[DeleteIcon]: Missing a title for non-decorative icon.");return r.createElement(a.IconWrapper,{as:e,display:l,element:t,size:i,color:n,ref:s},r.createElement("svg",{role:"img","aria-hidden":p,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":c},d?r.createElement("title",{id:c},d):null,r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.25 2c.966 0 1.75.784 1.75 1.75L13.999 5H17.5a.5.5 0 01.09.992L17.5 6h-1.501L16 16.25a1.75 1.75 0 01-1.606 1.744L14.25 18H5.74C4.774 18 4 17.217 4 16.25L3.999 6H2.5a.5.5 0 01-.09-.992L2.5 5h3.499L6 3.75a1.75 1.75 0 011.606-1.744L7.75 2zm2.749 4h-10L5 16.25c0 .383.276.694.64.743l.1.007h8.51a.75.75 0 00.75-.75L14.999 6zM8.5 9a.5.5 0 01.492.41L9 9.5v4a.5.5 0 01-.992.09L8 13.5v-4a.5.5 0 01.5-.5zm3 0a.5.5 0 01.492.41L12 9.5v4a.5.5 0 01-.992.09L11 13.5v-4a.5.5 0 01.5-.5zm.75-6h-4.5a.75.75 0 00-.75.75L6.999 5h6L13 3.75a.75.75 0 00-.648-.743L12.25 3z"})))});i.displayName="DeleteIcon"},88162:(e,l,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/file-uploader",function(){return t(9450)}])}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=88162)),_N_E=e.O()}]);