"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3011],{1458:(e,t,r)=>{r.d(t,{_:()=>s,u:()=>i});var o=r(76127),a=r(64928),n=r(55729),i=n.createContext({options:{},setChart:()=>{console.error("setChart not implemented. Is this component wrapped in the ChartProvider component?")},setChartRef:()=>{console.error("setChartRef not implemented. Is this component wrapped in the ChartProvider component?")}}),s=n.forwardRef(({element:e="CHART_PROVIDER",children:t,highchartsOptions:r,options:s,...l},c)=>{let[u,d]=n.useState(),[m,p]=n.useState();if(r&&!s)return n.createElement(o.az,{...(0,o.x8)(l),ref:c,element:e,position:"relative"},n.createElement(i.Provider,{value:{chart:u,setChart:d,chartRef:m,setChartRef:p,options:r}},t));let h=(0,a.Fv)(s);return n.createElement(o.az,{...(0,o.x8)(l),ref:c,element:e,position:"relative"},n.createElement(i.Provider,{value:{chart:u,setChart:d,chartRef:m,setChartRef:p,options:h}},t))});s.displayName="ChartProvider"},64928:(e,t,r)=>{r.d(t,{Fv:()=>x,Qx:()=>f,rm:()=>h});var o=r(27717),a=r(55729),n=r(69402),i=r.n(n),s=Object.create,l=Object.defineProperty,c=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyNames,d=Object.getPrototypeOf,m=Object.prototype.hasOwnProperty,p=((e,t,r)=>(r=null!=e?s(d(e)):{},((e,t,r,o)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let r of u(t))m.call(e,r)||void 0===r||l(e,r,{get:()=>t[r],enumerable:!(o=c(t,r))||o.enumerable});return e})(e&&e.__esModule?r:l(r,"default",{value:e,enumerable:!0}),e)))(((e,t)=>function(){return t||(0,e[u(e)[0]])((t={exports:{}}).exports,t),t.exports})({"../../../node_modules/deepmerge/dist/cjs.js"(e,t){var r=function(e){var t,r,a;return!!(t=e)&&"object"==typeof t&&(r=e,"[object RegExp]"!==(a=Object.prototype.toString.call(r))&&"[object Date]"!==a&&r.$$typeof!==o)},o="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function a(e,t){return!1!==t.clone&&t.isMergeableObject(e)?l(Array.isArray(e)?[]:{},e,t):e}function n(e,t,r){return e.concat(t).map(function(e){return a(e,r)})}function i(e){return Object.keys(e).concat(Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return e.propertyIsEnumerable(t)}):[])}function s(e,t){try{return t in e}catch{return!1}}function l(e,t,o){(o=o||{}).arrayMerge=o.arrayMerge||n,o.isMergeableObject=o.isMergeableObject||r,o.cloneUnlessOtherwiseSpecified=a;var c,u,d=Array.isArray(t);return d===Array.isArray(e)?d?o.arrayMerge(e,t,o):(u={},(c=o).isMergeableObject(e)&&i(e).forEach(function(t){u[t]=a(e[t],c)}),i(t).forEach(function(r){s(e,r)&&!(Object.hasOwnProperty.call(e,r)&&Object.propertyIsEnumerable.call(e,r))||(s(e,r)&&c.isMergeableObject(t[r])?u[r]=(function(e,t){if(!t.customMerge)return l;var r=t.customMerge(e);return"function"==typeof r?r:l})(r,c)(e[r],t[r],c):u[r]=a(t[r],c))}),u):a(t,o)}l.all=function(e,t){if(!Array.isArray(e))throw Error("first argument should be an array");return e.reduce(function(e,r){return l(e,r,t)},{})},t.exports=l}})()),h=e=>{if(null==e)throw Error("[usePasteHighchartsTheme]: Must provide highcharts options into this function. Options are deepmerged against the theme and returned for usage.");let t=a.useContext(o.Dx);if(!t)throw Error("[usePasteHighchartsTheme]: must be used within the @twilio-paste/theme provider. https://paste.twilio.design/introduction/for-engineers/manual-installation#setting-up-the-theme-provider");let r=a.useMemo(()=>{let e=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});return Object.keys(t.dataVisualization).sort((t,r)=>e.compare(t,r)).map(e=>t.dataVisualization[e])},[t]);return(0,p.default)(e,{colors:r,chart:{backgroundColor:t.backgroundColors.colorBackgroundBody},title:{style:{color:t.textColors.colorText,font:`${t.fontWeights.fontWeightBold} ${t.fontSizes.fontSize40} ${t.fonts.fontFamilyText}`}},subtitle:{style:{color:t.textColors.colorTextWeak,font:`${t.fontSizes.fontSize20} ${t.fonts.fontFamilyText}`}},legend:{itemStyle:{font:`${t.fontSizes.fontSize10} ${t.fonts.fontFamilyText}`,color:t.textColors.colorText},itemHoverStyle:{color:t.textColors.colorTextWeak},title:{style:{color:t.textColors.colorText}}},xAxis:{lineColor:t.textColors.colorText,tickColor:t.textColors.colorText,labels:{style:{color:t.textColors.colorText,font:`${t.fontWeights.fontWeightMedium} ${t.fontSizes.fontSize10} ${t.fonts.fontFamilyText}`}},title:{style:{color:t.textColors.colorText,font:`${t.fontWeights.fontWeightSemibold} ${t.fontSizes.fontSize30} ${t.fonts.fontFamilyText}`}}},yAxis:{labels:{style:{color:t.textColors.colorText,font:`${t.fontWeights.fontWeightMedium} ${t.fontSizes.fontSize10} ${t.fonts.fontFamilyText}`}},title:{style:{color:t.textColors.colorText,font:`${t.fontWeights.fontWeightSemibold} ${t.fontSizes.fontSize30} ${t.fonts.fontFamilyText}`}}},labels:{style:{color:t.textColors.colorText}},tooltip:{backgroundColor:t.backgroundColors.colorBackgroundBodyInverse,borderColor:t.borderColors.colorBorderInverse,borderWidth:t.borderWidths.borderWidth10,borderRadius:t.radii.borderRadius30.replace("px",""),padding:12,style:{fontFamily:t.fonts.fontFamilyText,color:t.textColors.colorTextInverse,fontSize:t.fontSizes.fontSize30}},credits:{style:{color:t.textColors.colorTextWeaker}},plotOptions:{series:{borderColor:"transparent"}}})},f=(e,t,...r)=>{if(void 0===e)throw Error("[applyPasteHighchartsModules]: Must provide highcharts into this function.");if(void 0===t)throw Error('[applyPasteHighchartsModules]: Must provide accessibility module into this function. You can do this using `import HighchartsAccessibility Module from "highcharts/modules/accessibility"`');t(e),r.forEach(t=>t(e))},y=({title:e,subtitle:t,isXTimeAxis:r,showLegend:n=!0,zoomingType:i,panningType:s,chart:l,type:c,yAxisTitle:u,xAxisTitle:d,xAxisCategories:m,pointFormatter:p,enableCredits:h=!1,isAnimated:f=!0,accessibility:y,...x})=>{let b=a.useContext(o.Dx);return{accessibility:{enabled:!0,...y},chart:{resetZoomButton:{theme:{style:{display:"block",fontFamily:b.fonts.fontFamilyText}}},type:c,zoomType:i,panKey:"shift",panning:{enabled:!!s,type:s},animation:f,...l},title:{text:e?.text,style:{display:e?.hide?"none":"block"}},subtitle:{text:t?.text,style:{display:e?.hide?"none":"block"}},xAxis:{type:r?"datetime":void 0,title:{text:d?.text,style:{display:d?.hide?"none":"block"}},categories:m},yAxis:{title:{text:u?.text,style:{display:u?.hide?"none":"block"}}},legend:{enabled:n},tooltip:{backgroundColor:b.backgroundColors.colorBackgroundBodyInverse,borderColor:b.borderColors.colorBorderInverse,borderWidth:b.borderWidths.borderWidth10,borderRadius:b.radii.borderRadius30?.replace("px",""),padding:12,useHTML:!!p,style:{fontFamily:b.fonts.fontFamilyText,color:b.textColors.colorTextInverse,fontSize:b.fontSizes.fontSize30},pointFormatter:p?function(){return p(this)}:void 0},credits:{enabled:h,style:{fontFamily:b.fonts.fontFamilyText,color:b.textColors.colorTextWeak,fontSize:b.fontSizes.fontSize10}},...x}},x=e=>{switch(e.type){case"line":return(({series:e,type:t,zoomingType:r,panningType:o,...a})=>({series:e.map(e=>({...e,type:t})),plotOptions:{series:{stickyTracking:!1}},...y({...a,type:t,zoomingType:r,panningType:o})}))(e);case"area":return(({series:e,type:t,zoomingType:r,panningType:o,...a})=>({series:e.map(e=>({...e,type:t})),plotOptions:{series:{stickyTracking:!1}},...y({...a,type:t,zoomingType:r,panningType:o})}))(e);case"column":return(({chart:e,series:t,type:r,stackingType:o,showDataLabels:a,...n})=>{let{yAxis:s,...l}=y({...n,type:r});return{series:t.map(e=>({...e,type:r})),plotOptions:{column:{stacking:o,dataLabels:{enabled:a},borderRadius:2}},yAxis:i().merge({stackLabels:{enabled:a}},s),...l}})(e);default:return(({chart:e,series:t,type:r,...o})=>({series:t.map(e=>({...e,type:r})),...y({...o,type:r})}))(e)}}},70752:(e,t,r)=>{r.d(t,{e:()=>p});var o=r(72387),a=r(76127),n=r(1458),i=r(64928),s=r(69402),l=r(76393),c=r.n(l),u=r(76955),d=r.n(u),m=r(55729);let p=m.memo(()=>{(0,i.Qx)(s,d());let e=m.useRef(null),{options:t,setChart:r,setChartRef:l}=m.useContext(n.u),u=(0,i.rm)(t),[p,h]=m.useState(s.merge(u,{plotOptions:{series:{animation:!1}},credits:{...u.credits,enabled:!0}}));return m.useLayoutEffect(()=>{h(s.merge(p,t,{plotOptions:{series:{animation:!1}},credits:{...u.credits,enabled:!0}}))},[t]),m.useEffect(()=>{e.current&&l(e.current)},[e.current]),(0,o.Y)(a.az,{gridArea:"base-chart",ref:e,position:"relative",children:(0,o.Y)(c(),{highcharts:s,options:p,constructorType:p.chart?.map?"mapChart":void 0,updateArgs:[!0,!0,!1],callback:e=>{e?.series?.length>0&&r(e)}})})})},86722:(e,t,r)=>{r.d(t,{Dv:()=>i,Ef:()=>m,Gf:()=>h,HD:()=>d,Jv:()=>s,LE:()=>u,YQ:()=>c,aJ:()=>l,aN:()=>o,ln:()=>p,md:()=>n,tt:()=>a});let o=`
const ChartProviderExample = () => {
    const lineSeriesData = [
        {
            name: "Installation",
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
        },
        {
            name: "Manufacturing",
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
        },
    ]

    return (
        <ChartProvider options={{
                type: "line",
                series: lineSeriesData,
                title: {
                    text: "Solar Employment Growth by Sector",
                },
            }}>
            <BaseChart />
        </ChartProvider>
    );
};

render(<ChartProviderExample />);
`.trim(),a=`
const ChartProviderExample = () => {
    const lineSeriesData = [
        {
            name: "Installation",
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
            type: "line",
        },
        {
            name: "Manufacturing",
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
            type: "line",
        },
        {
            name: "Sales & Distribution",
            data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
            type: "column",
        },
        {
            name: "Project Development",
            data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
            type: "column",
        },
    ]

    return (
        <ChartProvider highchartsOptions={{title: {floating: true, align: "right", text: "Custom charting title"}, series: lineSeriesData}}>
            <BaseChart />
        </ChartProvider>
    );
};

render(<ChartProviderExample />);
`.trim(),n=`
const DefaultLineExample = () => {
    const lineSeriesData = [
        {
            name: "Installation",
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
        },
        {
            name: "Manufacturing",
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
        },
    ]

    return (
        <ChartProvider
            options={{
                type: "line",
                series: lineSeriesData,
                title: {
                    text: "Solar Employment Growth by Sector",
                },
            }}
        >
            <BaseChart />
        </ChartProvider>
    );
};

render(<DefaultLineExample />);
`.trim(),i=`
const LineTimeSeriesPanZoomExample = () => {
    const exampleDataStructure = [
        [1167609600000, 0.7537],
        [1167696000000, 0.7537],
        [1167782400000, 0.7559],
    ]

    return (
        <ChartProvider
            options={{
                type: "line",
                series: [{ data: usdEurData, name: "USD to EUR" }],
                title: {
                    text: "USD to EUR exchange rate",
                },
                subtitle: {
                    text: "Zooming and panning enabled - use drag to zoom and shift+drag to pan",
                },
                isXTimeAxis: true,
                zoomingType: "xy",
                panningType: "xy",
                xAxisTitle: {
                    text: "Date",
                },
                yAxisTitle: {
                    text: "Exchange rate",
                },
            }}
        >
            <BaseChart />
        </ChartProvider>
    );
};

render(<LineTimeSeriesPanZoomExample />);
`.trim(),s=`
const DefaultAreaExample = () => {
    const areaSeriesData = [
        {
            name: "Installation",
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
        },
        {
            name: "Manufacturing",
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
        },
    ]

    return (
        <ChartProvider
            options={{
                type: "area",
                series: areaSeriesData,
                title: {
                    text: "Solar Employment Growth by Sector",
                },
            }}
        >
            <BaseChart />
        </ChartProvider>
    );
};

render(<DefaultAreaExample />);
`.trim(),l=`
const AreaTimeSeriesPanZoomExample = () => {
    const exampleDataStructure = [
        [1167609600000, 0.7537],
        [1167696000000, 0.7537],
        [1167782400000, 0.7559],
    ]

    return (
        <ChartProvider
            options={{
                type: "area",
                series: [{ data: usdEurData, name: "USD to EUR" }],
                title: {
                    text: "USD to EUR exchange rate",
                },
                subtitle: {
                    text: "Zooming and panning enabled - use drag to zoom and shift+drag to pan",
                },
                isXTimeAxis: true,
                zoomingType: "xy",
                panningType: "xy",
                xAxisTitle: {
                    text: "Date",
                },
                yAxisTitle: {
                    text: "Exchange rate",
                },
            }}
        >
            <BaseChart />
        </ChartProvider>
    );
};

render(<AreaTimeSeriesPanZoomExample />);
`.trim(),c=`
const DefaultColumnExample = () => {
    const columnSeriesData = [
        {
            name: "Apples",
            data: [3, 5, 1, 13],
        },
        {
            name: "Oranges",
            data: [14, 8, 8, 12],
        },
        {
            name: "Pear",
            data: [0, 2, 6, 3],
        },
    ]

    return (
        <ChartProvider
            options={{
                type: "column",
                series: columnSeriesData,
                title: {
                    text: "Fruit popularity",
                },
            }}
        >
            <BaseChart />
        </ChartProvider>
    );
};

render(<DefaultColumnExample />);
`.trim(),u=`
const ColumnStackedNormalExample = () => {
    const columnSeriesData = [
        {
            name: "Apples",
            data: [3, 5, 1, 13],
        },
        {
            name: "Oranges",
            data: [14, 8, 8, 12],
        },
        {
            name: "Pear",
            data: [0, 2, 6, 3],
        },
    ]

    return (
        <ChartProvider
            options={{
                type: "column",
                series: columnSeriesData,
                title: {
                    text: "Fruit popularity",
                },
                stackingType: "normal",
                showDataLabels: true,
            }}
        >
            <BaseChart />
        </ChartProvider>
    );
};

render(<ColumnStackedNormalExample />);
`.trim(),d=`
const ColumnStackedPercentExample = () => {
    const columnSeriesData = [
        {
            name: "Apples",
            data: [3, 5, 1, 13],
        },
        {
            name: "Oranges",
            data: [14, 8, 8, 12],
        },
        {
            name: "Pear",
            data: [0, 2, 6, 3],
        },
    ]

    return (
        <ChartProvider
            options={{
                type: "column",
                series: columnSeriesData,
                title: {
                    text: "Fruit popularity",
                },
                stackingType: "percent",
            }}
        >
            <BaseChart />
        </ChartProvider>
    );
};

render(<ColumnStackedPercentExample />);
`.trim(),m=`
const ColumnGroupedAxisExample = () => {
    const columnSeriesData = [
        {
            name: "Apples",
            data: [3, 5, 1, 13],
        },
        {
            name: "Oranges",
            data: [14, 8, 8, 12],
        },
        {
            name: "Pear",
            data: [0, 2, 6, 3],
        },
    ]

    return (
        <ChartProvider
            options={{
                type: "column",
                series: columnSeriesData,
                title: {
                    text: "Fruit popularity",
                },
                xAxisCategories: ["2020", "2021", "2022", "2023"],
            }}
        >
            <BaseChart />
        </ChartProvider>
    );
};

render(<ColumnGroupedAxisExample />);
`.trim(),p=`
const SimpleChartAccessibilityExample = () => {
    const lineSeriesData = [
        {
            name: "Installation",
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
        },
        {
            name: "Manufacturing",
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
        },
    ]

    return (
        <ChartProvider options={{
                type: "line",
                series: lineSeriesData,
                title: {
                    text: "Solar Employment Growth by Sector, 2010-2016",
                    hide: true,
                },
                subtitle: {
                    text: "Source: thesolarfoundation.com",
                    hide: true,
                },
                accessibility: {
                    description: "This is a line chart showing the solar employment growth by sector from 2010 to 2016.",
                    point: {
                        descriptionFormatter: function (point) {
                            return "The point " + point.index + " has a value of " + point.y;
                        },
                    },
                    series: {
                        descriptionFormatter: function (series) {
                            return "The series " + series.name + " has a total of " + series.points.length + " points";
                        },
                    },
                },
            }}>
            <BaseChart />
        </ChartProvider>
    );
};

render(<SimpleChartAccessibilityExample />);
`.trim(),h=`
const SimpleChartAccessibilityDefaultExample = () => {
    const lineSeriesData = [
        {
            name: "Installation",
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
        },
        {
            name: "Manufacturing",
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
        },
    ]

    return (
        <ChartProvider options={{
                type: "line",
                series: lineSeriesData,
                title: {
                    text: "Solar Employment Growth by Sector, 2010-2016",
                    hide: true,
                },
                subtitle: {
                    text: "Source: thesolarfoundation.com",
                    hide: true,
                }
            }}>
            <BaseChart />
        </ChartProvider>
    );
};

render(<SimpleChartAccessibilityDefaultExample />);
`.trim()}}]);