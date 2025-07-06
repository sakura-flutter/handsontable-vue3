!(function(){"use strict";var E=(x,S,n)=>new Promise((Q,F)=>{var r=y=>{try{z(n.next(y))}catch(Y){F(Y)}},p=y=>{try{z(n.throw(y))}catch(Y){F(Y)}},z=y=>y.done?Q(y.value):Promise.resolve(y.value).then(r,p);z((n=n.apply(x,S)).next())});(self.webpackChunk_sakura_flutter_handsontable_vue3=self.webpackChunk_sakura_flutter_handsontable_vue3||[]).push([[506],{86280:function(x,S,n){n.a(x,function(Q,F){return E(this,null,function*(){try{n.r(S),n.d(S,{demos:function(){return D}});var r=n(41741),p=n.n(r),z=n(17273),y=n.n(z),Y=n(75912),R=n.n(Y),L=n(92521),M=n(68939),T=n(14366),U=n(76183),J=n(20474),W=n(73669),B=n(72271),D={"src-table-demo-0":{component:R()(p()().mark(function H(){var g,o,v,C,$,a,u,f;return p()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(n.bind(n,92521));case 2:return g=e.sent,o=g.createVNode,e.next=6,Promise.resolve().then(n.bind(n,92521));case 6:return v=e.sent,C=v.defineComponent,e.next=10,Promise.resolve().then(n.bind(n,68939));case 10:return $=e.sent,a=$.HTable,e.next=14,Promise.resolve().then(n.bind(n,14366));case 14:return u=e.sent,f=u.registerAllModules,e.t0=y(),e.next=19,Promise.resolve().then(n.bind(n,76183));case 19:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=y(),e.next=24,Promise.resolve().then(n.bind(n,20474));case 24:return e.t3=e.sent,(0,e.t2)(e.t3),f(),e.abrupt("return",{default:C({setup:function(){return function(){return o("div",{class:"ht-theme-main-dark-auto"},[o(a,{data:[["Car1","A 160","01/14/2021",6999.95],["Car2","C4 Coupe","12/01/2022",8330],["Car3","A4 Avant","11/19/2023",33900],["Car4","Astra","02/02/2021",7e3],["Car5","320i Coupe","07/24/2022",30500]],colHeaders:["Car","Model","Registration date","Price"],rowHeaders:!0,manualColumnResize:!0,columns:[{type:"text"},{},{type:"date",dateFormat:"MM/DD/YYYY",correctFormat:!0,defaultDate:"01/01/2020",datePickerConfig:{firstDay:0,showWeekNumber:!0,disableDayFn:function(c){return c.getDay()===0||c.getDay()===6}}},{type:"numeric",numericFormat:{pattern:"$ 0,0.00"}}],stretchH:"all",licenseKey:"non-commercial-and-evaluation"},null)])}}})});case 28:case"end":return e.stop()}},H)}))(),asset:{type:"BLOCK",id:"src-table-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { defineComponent } from 'vue';
import { HTable } from '@sakura-flutter/handsontable-vue3';
import { registerAllModules } from 'handsontable/registry';

import 'handsontable/styles/handsontable.css';
import 'handsontable/styles/ht-theme-main.css';

registerAllModules();

export default defineComponent({
  setup() {
    return () => (
      <div class="ht-theme-main-dark-auto">
        <HTable
          data={[
            ['Car1', 'A 160', '01/14/2021', 6999.95],
            ['Car2', 'C4 Coupe', '12/01/2022', 8330],
            ['Car3', 'A4 Avant', '11/19/2023', 33900],
            ['Car4', 'Astra', '02/02/2021', 7000],
            ['Car5', '320i Coupe', '07/24/2022', 30500],
          ]}
          colHeaders={['Car', 'Model', 'Registration date', 'Price']}
          rowHeaders
          manualColumnResize
          columns={[
            {
              type: 'text',
            },
            {
              // 2nd cell is simple text, no special options here
            },
            {
              type: 'date',
              dateFormat: 'MM/DD/YYYY',
              correctFormat: true,
              defaultDate: '01/01/2020',
              // datePicker additional options
              // (see https://github.com/dbushell/Pikaday#configuration)
              datePickerConfig: {
                // First day of the week (0: Sunday, 1: Monday, etc)
                firstDay: 0,
                showWeekNumber: true,
                disableDayFn(date) {
                  // Disable Sunday and Saturday
                  return date.getDay() === 0 || date.getDay() === 6;
                },
              },
            },
            {
              type: 'numeric',
              numericFormat: {
                pattern: '$ 0,0.00',
              },
            },
          ]}
          stretchH="all"
          licenseKey="non-commercial-and-evaluation"
        />
      </div>
    );
  },
});`},vue:{type:"NPM",value:"3.5.17"},"@sakura-flutter/handsontable-vue3":{type:"NPM",value:"0.0.1"},handsontable:{type:"NPM",value:"15.3.0"}},entry:"index.tsx"},context:{vue:L,"@sakura-flutter/handsontable-vue3":M,"handsontable/registry":T,"handsontable/styles/handsontable.css":U,"handsontable/styles/ht-theme-main.css":J},renderOpts:{compile:function(){var H=R()(p()().mark(function o(){var v,C=arguments;return p()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([n.e(192),n.e(804)]).then(n.bind(n,48074));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,C));case 3:case"end":return a.stop()}},o)}));function g(){return H.apply(this,arguments)}return g}(),renderer:(yield n.e(244).then(n.bind(n,38244))).default,preflight:(yield n.e(38).then(n.bind(n,66038))).default}},"src-table-demo-1":{component:R()(p()().mark(function H(){var g,o,v,C,$,a,u,f,d,e,h,m,c,I,V;return p()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(n.bind(n,92521));case 2:return g=t.sent,o=g.createVNode,t.next=6,Promise.resolve().then(n.bind(n,92521));case 6:return v=t.sent,C=v.defineComponent,$=v.onMounted,a=v.onUpdated,u=v.onUnmounted,t.next=13,Promise.resolve().then(n.bind(n,68939));case 13:return f=t.sent,d=f.HTable,e=f.HColumn,t.next=18,Promise.resolve().then(n.bind(n,14366));case 18:return h=t.sent,m=h.registerAllModules,t.next=22,Promise.resolve().then(n.bind(n,73669));case 22:return c=t.sent,I=c.default,t.t0=y(),t.next=27,Promise.resolve().then(n.bind(n,76183));case 27:return t.t1=t.sent,(0,t.t0)(t.t1),t.t2=y(),t.next=32,Promise.resolve().then(n.bind(n,20474));case 32:return t.t3=t.sent,(0,t.t2)(t.t3),m(),V=C({props:["value","log"],setup:function(s){return s.log&&($(function(){console.log("onMounted",s.value)}),a(function(){console.log("onUpdated",s.value)}),u(function(){console.log("onUnmounted",s.value)})),function(){return o("div",{style:"color:black; background:lavender;"},[s.value])}}}),t.abrupt("return",{default:C({setup:function(){var s=function(P,G,X,Z,A,K,j){return o(V,{value:K,log:Z===0},null)};return function(){return o("div",{class:"ht-theme-main-dark-auto"},[o(d,{data:I.helper.createSpreadsheetData(200,5),rowHeaders:!0,colHeaders:!0,manualColumnResize:!0,stretchH:"all",height:300,licenseKey:"non-commercial-and-evaluation"},{default:function(){return[o(e,{renderer:s},null),o(e,{renderer:s},null),o(e,{renderer:function(G,X,Z,A,K,j){return"".concat(Z,"-").concat(A,": ").concat(j)}},null),o(e,null,null),o(e,null,null)]}})])}}})});case 37:case"end":return t.stop()}},H)}))(),asset:{type:"BLOCK",id:"src-table-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { defineComponent, onMounted, onUpdated, onUnmounted } from 'vue';
import { HTable, HColumn } from '@sakura-flutter/handsontable-vue3';
import { registerAllModules } from 'handsontable/registry';
import Handsontable from 'handsontable';

import 'handsontable/styles/handsontable.css';
import 'handsontable/styles/ht-theme-main.css';

registerAllModules();

const CellComponent = defineComponent({
  props: ['value', 'log'],
  setup(props) {
    if (props.log) {
      onMounted(() => {
        console.log('onMounted', props.value);
      });
      onUpdated(() => {
        console.log('onUpdated', props.value);
      });
      onUnmounted(() => {
        console.log('onUnmounted', props.value);
      });
    }

    return () => (
      <div style="color:black; background:lavender;">{props.value}</div>
    );
  },
});

export default defineComponent({
  setup() {
    const renderer = (instance, TD, row, col, prop, value, cellProperties) => {
      // console.log(instance, TD, row, col, prop, value, cellProperties);

      return <CellComponent value={value} log={col === 0} />;
    };

    return () => (
      <div class="ht-theme-main-dark-auto">
        <HTable
          data={Handsontable.helper.createSpreadsheetData(200, 5)}
          rowHeaders
          colHeaders
          manualColumnResize
          stretchH="all"
          height={300}
          licenseKey="non-commercial-and-evaluation"
        >
          <HColumn renderer={renderer} />
          <HColumn renderer={renderer} />
          <HColumn
            renderer={(instance, TD, row, col, prop, value) =>
              \`\${row}-\${col}: \${value}\`
            }
          />
          <HColumn />
          <HColumn />
        </HTable>
      </div>
    );
  },
});`},vue:{type:"NPM",value:"3.5.17"},"@sakura-flutter/handsontable-vue3":{type:"NPM",value:"0.0.1"},handsontable:{type:"NPM",value:"15.3.0"}},entry:"index.tsx"},context:{vue:L,"@sakura-flutter/handsontable-vue3":M,"handsontable/registry":T,handsontable:W,"handsontable/styles/handsontable.css":U,"handsontable/styles/ht-theme-main.css":J},renderOpts:{compile:function(){var H=R()(p()().mark(function o(){var v,C=arguments;return p()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([n.e(192),n.e(804)]).then(n.bind(n,48074));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,C));case 3:case"end":return a.stop()}},o)}));function g(){return H.apply(this,arguments)}return g}(),renderer:(yield n.e(244).then(n.bind(n,38244))).default,preflight:(yield n.e(38).then(n.bind(n,66038))).default}},"src-table-demo-2":{component:R()(p()().mark(function H(){var g,o,v,C,$,a,u,f,d,e,h,m,c,I,V,i,t,N;return p()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return N=function(){return V.helper.createSpreadsheetData(t(10,100),t(20,100))},l.next=3,Promise.resolve().then(n.bind(n,92521));case 3:return g=l.sent,o=g.createVNode,v=g.createTextVNode,C=g.Fragment,l.next=9,Promise.resolve().then(n.bind(n,92521));case 9:return $=l.sent,a=$.defineComponent,u=$.shallowRef,f=$.watch,l.next=15,Promise.resolve().then(n.bind(n,68939));case 15:return d=l.sent,e=d.HTable,h=d.HColumn,l.next=20,Promise.resolve().then(n.bind(n,14366));case 20:return m=l.sent,c=m.registerAllModules,l.next=24,Promise.resolve().then(n.bind(n,73669));case 24:return I=l.sent,V=I.default,l.next=28,Promise.resolve().then(n.bind(n,72271));case 28:return i=l.sent,t=i.random,l.t0=y(),l.next=33,Promise.resolve().then(n.bind(n,76183));case 33:return l.t1=l.sent,(0,l.t0)(l.t1),l.t2=y(),l.next=38,Promise.resolve().then(n.bind(n,20474));case 38:return l.t3=l.sent,(0,l.t2)(l.t3),c(),l.abrupt("return",{default:a({setup:function(){var G=u(),X=u(N());return f(X,function(Z){G.value.hotInstance.updateData(Z)}),function(){return o(C,null,[o("button",{onClick:function(){X.value=N()}},[v("update data")]),o("div",{class:"ht-theme-main-dark-auto"},[o(e,{ref:G,data:X.value,rowHeaders:!0,colHeaders:!0,height:300,licenseKey:"non-commercial-and-evaluation"},null)])])}}})});case 42:case"end":return l.stop()}},H)}))(),asset:{type:"BLOCK",id:"src-table-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { defineComponent, shallowRef, watch } from 'vue';
import { HTable, HColumn } from '@sakura-flutter/handsontable-vue3';
import { registerAllModules } from 'handsontable/registry';
import Handsontable from 'handsontable';
import { random } from 'lodash-es';

import 'handsontable/styles/handsontable.css';
import 'handsontable/styles/ht-theme-main.css';

registerAllModules();

function randomData() {
  return Handsontable.helper.createSpreadsheetData(
    random(10, 100), // rows
    random(20, 100), // cols
  );
}

export default defineComponent({
  setup() {
    const tableRef = shallowRef();
    const data = shallowRef(randomData());

    watch(data, (val) => {
      tableRef.value.hotInstance.updateData(val);
    });

    return () => (
      <>
        <button
          onClick={() => {
            data.value = randomData();
          }}
        >
          update data
        </button>

        <div class="ht-theme-main-dark-auto">
          <HTable
            ref={tableRef}
            data={data.value}
            rowHeaders
            colHeaders
            height={300}
            licenseKey="non-commercial-and-evaluation"
          />
        </div>
      </>
    );
  },
});`},vue:{type:"NPM",value:"3.5.17"},"@sakura-flutter/handsontable-vue3":{type:"NPM",value:"0.0.1"},handsontable:{type:"NPM",value:"15.3.0"},"lodash-es":{type:"NPM",value:"4.17.21"}},entry:"index.tsx"},context:{vue:L,"@sakura-flutter/handsontable-vue3":M,"handsontable/registry":T,handsontable:W,"lodash-es":B,"handsontable/styles/handsontable.css":U,"handsontable/styles/ht-theme-main.css":J},renderOpts:{compile:function(){var H=R()(p()().mark(function o(){var v,C=arguments;return p()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([n.e(192),n.e(804)]).then(n.bind(n,48074));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,C));case 3:case"end":return a.stop()}},o)}));function g(){return H.apply(this,arguments)}return g}(),renderer:(yield n.e(244).then(n.bind(n,38244))).default,preflight:(yield n.e(38).then(n.bind(n,66038))).default}}};F()}catch(H){F(H)}})},1)},68939:function(x,S,n){n.r(S),n.d(S,{HColumn:function(){return M},HTable:function(){return $}});var Q=n(47205),F=n.n(Q),r=n(6803),p=n(88692),z=n(42281),y=n(30613),Y=Symbol("tableContext"),R=(0,r.aZ)(F()(F()({},{name:"HTableColumn",inheritAttrs:!1}),{},{__name:"column",props:{renderer:{type:[Function,String]}},setup:function(u){var f=u,d=(0,r.l1)(),e=(0,r.f3)(Y),h=(0,r.Fl)(function(){var m=F()({},d),c=f.renderer;return c&&(m.renderer=typeof c=="function"?e.getRendererWrapper(c):c),m});return function(m,c){return(0,r.wg)(),(0,r.j4)((0,p.SU)(y.pL),(0,z.vs)((0,r.F4)(h.value)),null,16)}}})),M=R,T=n(6083),U=n.n(T),J=null;function W(a){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:document,f=arguments.length>2?arguments[2]:void 0,d=arguments.length>3?arguments[3]:void 0;u||(u=document),J||(J=u.createDocumentFragment());var e=d!=null?d:u.createElement("div");return J.appendChild(e),{portal:(0,r.h)(r.lR,{to:e,key:f},a()),portalContainer:e}}var B=function(){var u=new Map,f=function(){return u.clear()},d=new Map,e=function(){return d.clear()},h=new Map;function m(i){return function(N,s,l,P,G,X,Z){var A="".concat(l,"-").concat(P),K=N.guid,j="".concat(K,"-").concat(A),w="".concat(A,"-").concat(K);if(u.has(A)&&(s.innerHTML=u.get(A).innerHTML),s&&!s.getAttribute("ghost-table")){for(var q=d.get(w),O=h.get(j);s.firstChild;)s.removeChild(s.firstChild);if(q&&O)s.appendChild(O);else{var _=function(){return i(N,s,l,P,G,X,Z)},b=W(_,s.ownerDocument,w,O),nn=b.portal,k=b.portalContainer;h.set(j,k),s.appendChild(k),d.set(w,nn)}}return u.set("".concat(l,"-").concat(P),s),s}}var c=function(){};function I(i){c=i==null?void 0:i.setPortals}function V(){c(U()(d.values()))}(0,r.JJ)(Y,(0,p.qj)({getRendererWrapper:m,clearPortalCache:e,clearRenderedCellCache:f,setRenderersPortalManagerRef:I,pushCellPortalsIntoPortalManager:V}))},D=(0,r.aZ)({name:"RendersPortalManager",inheritAttrs:!1,setup:function(u,f){var d=f.expose,e=(0,p.XI)([]),h=function(c){e.value=c};return d({setPortals:h}),function(){return e.value}}}),H=(0,r.aZ)(F()(F()({},{inheritAttrs:!1}),{},{__name:"table-inner",props:{beforeViewRender:{},afterViewRender:{}},setup:function(u){var f=u,d=(0,r.FN)(),e=(0,r.f3)(Y),h=function(){for(var i,t=arguments.length,N=new Array(t),s=0;s<t;s++)N[s]=arguments[s];(i=f.beforeViewRender)===null||i===void 0||i.call.apply(i,[f].concat(N)),e.clearPortalCache(),e.clearRenderedCellCache()},m=function(){var i;e.pushCellPortalsIntoPortalManager();for(var t=arguments.length,N=new Array(t),s=0;s<t;s++)N[s]=arguments[s];(i=f.afterViewRender)===null||i===void 0||i.call.apply(i,[f].concat(N))};(0,r.Jd)(function(){e.clearPortalCache(),e.clearRenderedCellCache()});var c=!1,I=function(i){i==null?d.exposed={}:c||(c=!0,d.exposed=i)};return function(V,i){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)((0,p.SU)(y.sZ),(0,r.dG)({ref:I},V.$attrs,{"before-view-render":h,"after-view-render":m}),{default:(0,r.w5)(function(){return[(0,r.WI)(V.$slots,"default")]}),_:3},16),(0,r.Wm)((0,p.SU)(D),{ref:(0,p.SU)(e).setRenderersPortalManagerRef},null,512)],64)}}})),o=H,v=(0,r.aZ)(F()(F()({},{name:"HTable",inheritAttrs:!1}),{},{__name:"table",setup:function(u){var f=(0,r.FN)();B();var d=!1,e=function(m){m==null?f.exposed={}:d||(d=!0,f.exposed=m)};return function(h,m){return(0,r.wg)(),(0,r.j4)(o,(0,r.dG)({ref:e},h.$attrs),{default:(0,r.w5)(function(){return[(0,r.WI)(h.$slots,"default")]}),_:3},16)}}})),$=v},87824:function(x,S,n){n.r(S),n.d(S,{texts:function(){return Q}});const Q=[{value:"\u5C5E\u6027",paraId:0,tocIndex:5},{value:"\u8BF4\u660E",paraId:0,tocIndex:5},{value:"\u7C7B\u578B",paraId:0,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:5},{value:"renderer",paraId:0,tocIndex:5},{value:"Declare a custom renderer as a component",paraId:0,tocIndex:5},{value:"((...args: Parameters<typeof Handsontable.renderers.BaseRenderer>) => VNodeChild) | Handsontable.RendererType | string",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"\u5176\u5B83\u5C5E\u6027\u7EE7\u627F ",paraId:1,tocIndex:5},{value:"HotTable",paraId:1,tocIndex:5},{value:"\uFF0C\u7528\u6CD5\u5B8C\u5168\u4E00\u81F4",paraId:1,tocIndex:5}]}}]);
}());