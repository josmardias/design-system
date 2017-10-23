
          window.__NEXT_REGISTER_PAGE('/core/spacing', function() {
            var comp = module.exports=webpackJsonp([14],{1013:function(e,a,t){e.exports=t(1014)},1014:function(e,a,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){return e&&e.__esModule?e:{default:e}}var d=t(10),i=l(d),r=t(0),s=l(r);Object.defineProperty(a,"__esModule",{value:!0});var u=t(371),o=n(u),c=t(367),m=n(c),f=t(1),p=n(f),g=t(19),h=[{width:4,label:"XX-Small",varName:"psLayoutSpacingXXSmall"},{width:8,label:"X-Small",varName:"psLayoutSpacingXSmall"},{width:12,label:"Small",varName:"psLayoutSpacingSmall"},{width:16,label:"Medium",varName:"psLayoutSpacingMedium"},{width:24,label:"Large",varName:"psLayoutSpacingLarge"},{width:48,label:"X-Large",varName:"psLayoutSpacingXLarge"},{width:64,label:"XX-Large",varName:"psLayoutSpacingXXLarge"}],b=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},x=function(e){return s.default.createElement("div",{className:"parent","data-jsx":4089214419},e.children,s.default.createElement(i.default,{styleId:4089214419,css:'.parent[data-jsx="4089214419"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:calc(-0.5 * '+p.default.layout.spacingLarge+") calc(-0.5 * "+p.default.layout.spacingLarge+")}"}))},y=function(e){return"left"===e||"right"===e?"width":"height"},w=function(e,a,t){var l=(0,m.default)((0,o.default)({line:!0,lineSingleSide:"all"!==e.sides},"line"+b(a),!0));return s.default.createElement("div",{style:(0,o.default)({},y(a),e.width),key:t,className:l,"data-jsx":1190363179},s.default.createElement(i.default,{styleId:1190363179,css:'.line[data-jsx="1190363179"]{position:absolute;border-style:dashed;border-color:#ff00ce;border-width:0}.lineSingleSide[data-jsx="1190363179"]{background:#8fc4e9}.lineTop[data-jsx="1190363179"]{top:0;left:0;width:100%;border-bottom-width:1px}.lineRight[data-jsx="1190363179"]{top:0;right:0;height:100%;border-left-width:1px}.lineBottom[data-jsx="1190363179"]{bottom:0;left:0;width:100%;border-top-width:1px}.lineLeft[data-jsx="1190363179"]{top:0;left:0;height:100%;border-right-width:1px}'}))},E=function(e){return["top","right","bottom","left"].map(w.bind(void 0,e))},v=function(e){return"all"===e.sides?E(e):w(e,e.sides)},S=function(e){return"all"===e.sides?s.default.createElement("div",{style:{borderWidth:e.width},className:"border","data-jsx":3101882266},s.default.createElement(i.default,{styleId:3101882266,css:'.border[data-jsx="3101882266"]{position:absolute;top:0;left:0;height:100%;width:100%;border-style:solid;border-color:#8fc4e9;border-width:0}'})):null},j=function(e){return e.label?s.default.createElement("div",{className:"label","data-jsx":189144128},e.width+"px - "+e.label,s.default.createElement(i.default,{styleId:189144128,css:'.label[data-jsx="189144128"]{margin-top:'+p.default.layout.spacingXXSmall+";font-size:"+p.default.type.fontSizeXSmall+";font-weight:"+p.default.type.fontWeightBook+";line-height:"+p.default.type.lineHeightTight+"}"})):null},L=function(e){return s.default.createElement("div",{className:"root","data-jsx":2309134314},s.default.createElement("div",{className:"box","data-jsx":2309134314},S(e),v(e)),j(e),s.default.createElement(i.default,{styleId:2309134314,css:'.root[data-jsx="2309134314"]{margin:calc('+p.default.layout.spacingLarge+' / 2)}.box[data-jsx="2309134314"]{position:relative;height:150px;width:150px;background:#c6e0f2}'}))},N={Parent:x,Example:L},X=function(e){return s.default.createElement("div",{"data-jsx":3945045477},s.default.createElement("div",{className:"example","data-jsx":3945045477},s.default.createElement(N.Parent,null,h.map(function(e,a){return s.default.createElement(N.Example,{key:a,width:e.width,label:e.label,sides:"all"})}))),s.default.createElement(g.Code,{language:"css"},'@import "@pluralsight/ps-design-system-core";\n.mySelector { margin-top: var(--psLayoutSpacingLarge); }'),s.default.createElement(i.default,{styleId:3945045477,css:'.example[data-jsx="3945045477"]{margin:'+p.default.layout.spacingLarge+"}"}))},k=[{side:"top",attrName:"margin-top"},{side:"right",attrName:"margin-right"},{side:"bottom",attrName:"margin-bottom"},{side:"left",attrName:"margin-left"}],I=function(e){return s.default.createElement("div",{"data-jsx":1716579047},s.default.createElement("div",{className:"example","data-jsx":1716579047},s.default.createElement(N.Parent,null,k.map(function(e,a){return s.default.createElement(N.Example,{key:a,width:24,sides:e.side})}))),s.default.createElement(g.Code,{language:"css"},'@import "@pluralsight/ps-design-system-core";\n.mySelector { margin-top: var(--psLayoutSpacingLarge); }'),s.default.createElement(i.default,{styleId:1716579047,css:'.example[data-jsx="1716579047"]{margin-bottom:'+p.default.layout.spacingLarge+"}"}))};a.default=(0,g.withServerProps)(function(e){return s.default.createElement(g.Chrome,null,s.default.createElement(g.Content,null,s.default.createElement(g.PageHeading,null,"Spacing"),s.default.createElement(g.SectionHeading,null,"Spacing increments"),s.default.createElement(g.P,null,"Spacing can be applied using margin or padding. There are 7 available spacing sizes. Both margin and padding share the same predefined scale."),s.default.createElement(X,null),s.default.createElement(g.SectionHeading,null,"Individual spacing"),s.default.createElement(g.P,null,"Individual spacing can be applied to a single side of an element. Both margin and padding share the same predefined scale. The same 7 sizes are available."),s.default.createElement(I,null)))})}},[1013]);
            return { page: comp.default }
          })
        