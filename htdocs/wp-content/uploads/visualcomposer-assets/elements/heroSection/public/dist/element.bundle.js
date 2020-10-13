(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./heroSection/index.js":function(e,n,t){"use strict";t.r(n);var o=t("./node_modules/vc-cake/index.js"),i=t.n(o),c=t("./node_modules/@babel/runtime/helpers/extends.js"),r=t.n(c),a=t("./node_modules/@babel/runtime/helpers/classCallCheck.js"),s=t.n(a),l=t("./node_modules/@babel/runtime/helpers/createClass.js"),d=t.n(l),u=t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),g=t.n(u),h=t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),v=t.n(h),p=t("./node_modules/@babel/runtime/helpers/inherits.js"),m=t.n(p),b=t("./node_modules/react/index.js"),f=t.n(b),k=t("./node_modules/classnames/index.js"),x=t.n(k),y=Object(o.getService)("cook"),w=Object(o.getService)("api"),C=function(e){function n(){return s()(this,n),g()(this,v()(n).apply(this,arguments))}return m()(n,e),d()(n,[{key:"componentDidMount",value:function(){w.publicEvents.trigger("heroSectionReady")}},{key:"render",value:function(){var e=this.props,n=e.id,t=e.atts,o=e.editor,i=t.description,c=t.backgroundImage,a=t.backgroundImagePosition,s=t.align,l=t.addButton,d=t.customClass,u=t.button,g=t.background,h=t.metaCustomId,v={},p=x()({"vce-hero-section-container":!0,"vce-hero-section-media--xs":!0}),m=x()({vce:!0,"vce-hero-section":!0,"vce-hero-section--min-height":!1,"vce-hero-section--alignment-start":"start"===s,"vce-hero-section--alignment-end":"end"===s}),b=["vce-hero-section--wrap-row"],k=this.getMixinData("backgroundColor");"string"==typeof d&&d&&(m=m.concat(" "+d));var w={};"image"===g&&c?w.backgroundImage="url(".concat(this.getImageUrl(c),")"):"color"===g&&k&&b.push("vce-hero-section--background-color-".concat(k.selector)),(k=this.getMixinData("backgroundPosition"))&&a&&b.push("vce-hero-section--background-position-".concat(k.selector));var C="";if(l){var j=y.get(u);C=j?j.render(null,!1):null}h&&(v.id=h),b=x()(b);var S=this.applyDO("margin background border animation"),_=this.applyDO("padding");return f.a.createElement("section",r()({className:p},o,v),f.a.createElement("div",r()({className:m,id:"el-"+n},S),f.a.createElement("div",r()({className:b,style:w},{}),f.a.createElement("div",{className:"vce-hero-section--wrap"},f.a.createElement("div",r()({className:"vce-hero-section--content"},_),f.a.createElement("div",{className:"vce-hero-section--content-container"},i),C)))))}}]),n}(w.elementComponent);(0,i.a.getService("cook").add)(t("./heroSection/settings.json"),function(e){e.add(C)},{css:t("./node_modules/raw-loader/index.js!./heroSection/styles.css"),editorCss:t("./node_modules/raw-loader/index.js!./heroSection/editor.css"),mixins:{backgroundColor:{mixin:t("./node_modules/raw-loader/index.js!./heroSection/cssMixins/backgroundColor.pcss")},backgroundPosition:{mixin:t("./node_modules/raw-loader/index.js!./heroSection/cssMixins/backgroundPosition.pcss")}}},"")},"./heroSection/settings.json":function(e){e.exports={tag:{type:"string",access:"protected",value:"heroSection"},description:{type:"htmleditor",access:"public",value:"<h1>Highland Traditions of Scotland</h1>\n<p>The region became culturally distinguishable from the Lowlands from the later Middle Ages into the modern period.</p>",options:{label:"Description",inline:!0,dynamicField:!0,skinToggle:"darkTextSkin"}},darkTextSkin:{type:"toggleSmall",access:"public",value:!1},background:{type:"dropdown",access:"public",value:"image",options:{label:"Background type",values:[{label:"Background image",value:"image"},{label:"Background color",value:"color"}]}},backgroundColor:{type:"color",access:"public",value:" #e7b460",options:{label:"Background color",cssMixin:{mixin:"backgroundColor",property:"backgroundColor",namePattern:"[\\da-f]+"},onChange:{rules:{background:{rule:"!value",options:{value:"image"}}},actions:[{action:"toggleVisibility"}]}}},backgroundImage:{type:"attachimage",access:"public",value:"hero-section-background.jpg",options:{label:"Image",multiple:!1,dynamicField:!0,defaultValue:"hero-section-background.jpg",onChange:{rules:{background:{rule:"!value",options:{value:"color"}}},actions:[{action:"toggleVisibility"}]},url:!1}},backgroundImagePosition:{type:"buttonGroup",access:"public",value:"center center",options:{label:"Image position",cssMixin:{mixin:"backgroundPosition",property:"backgroundPosition",namePattern:"[a-z]+"},values:[{label:"Left Top",value:"left top",icon:"vcv-ui-icon-attribute-background-position-left-top"},{label:"Center Top",value:"center top",icon:"vcv-ui-icon-attribute-background-position-center-top"},{label:"Right Top",value:"right top",icon:"vcv-ui-icon-attribute-background-position-right-top"},{label:"Left Center",value:"left center",icon:"vcv-ui-icon-attribute-background-position-left-center"},{label:"Center Center",value:"center center",icon:"vcv-ui-icon-attribute-background-position-center-center"},{label:"Right Center",value:"right center",icon:"vcv-ui-icon-attribute-background-position-right-center"},{label:"Left Bottom",value:"left bottom",icon:"vcv-ui-icon-attribute-background-position-left-bottom"},{label:"Center Bottom",value:"center bottom",icon:"vcv-ui-icon-attribute-background-position-center-bottom"},{label:"Right Bottom",value:"right bottom",icon:"vcv-ui-icon-attribute-background-position-right-bottom"}],onChange:{rules:{background:{rule:"value",options:{value:"image"}}},actions:[{action:"toggleVisibility"}]}}},align:{type:"buttonGroup",access:"public",value:"center",options:{label:"Content alignment",description:"Select the content alignment",values:[{label:"Left",value:"start",icon:"vcv-ui-icon-attribute-alignment-left"},{label:"Center",value:"center",icon:"vcv-ui-icon-attribute-alignment-center"},{label:"Right",value:"end",icon:"vcv-ui-icon-attribute-alignment-right"}]}},addButton:{type:"toggle",access:"public",value:!0,options:{label:"Add button"}},customClass:{type:"string",access:"public",value:"",options:{label:"Extra class name",description:"Add an extra class name to the element and refer to it from Custom CSS option."}},button:{type:"element",access:"public",value:{tag:"basicButton",alignment:"center"},options:{category:"Button",tabLabel:"Button",merge:{attributes:[{key:"alignment",type:"string"},{key:"buttonText",type:"string"},{key:"buttonUrl",type:"object"}]},onChange:{rules:{addButton:{rule:"toggle"}},actions:[{action:"toggleSectionVisibility"}]}}},designOptions:{type:"designOptions",access:"public",value:{},options:{label:"Design Options"}},editFormTab1:{type:"group",access:"protected",value:["description","background","backgroundImage","backgroundImagePosition","backgroundColor","align","addButton","metaCustomId","customClass"],options:{label:"General"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1","button","designOptions"]},relatedTo:{type:"group",access:"protected",value:["General"]},metaCustomId:{type:"customId",access:"public",value:"",options:{label:"Element ID",description:"Apply unique ID to element to link directly to it by using #your_id (for element ID use lowercase input only)."}},metaPublicJs:{access:"protected",type:"string",value:{libraries:[{libPaths:"public/dist/heroSection.min.js"}]}}}},"./node_modules/raw-loader/index.js!./heroSection/cssMixins/backgroundColor.pcss":function(e,n){e.exports=".vce-hero-section--background-color-$selector {\n  @if $backgroundColor != false {\n    background-color: $backgroundColor;\n  }\n}"},"./node_modules/raw-loader/index.js!./heroSection/cssMixins/backgroundPosition.pcss":function(e,n){e.exports=".vce-hero-section--background-position-$selector {\n  @if $backgroundPosition != false {\n    background-position: $backgroundPosition;\n  }\n}"},"./node_modules/raw-loader/index.js!./heroSection/editor.css":function(e,n){e.exports=".vce-hero-section-container {\n  min-height: 1em;\n}\n"},"./node_modules/raw-loader/index.js!./heroSection/styles.css":function(e,n){e.exports='.vce-hero-section {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n}\n\n.vce-hero-section--content {\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  padding-top: 75px;\n  padding-bottom: 75px;\n  color: #fff;\n}\n\n.vce-hero-section--wrap-row {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  overflow: hidden;\n  width: 100%;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  box-sizing: border-box;\n  background-size: cover;\n  background-position: center;\n}\n\n.vce-hero-section--wrap-row:before,\n.vce-hero-section--wrap-row:after {\n  content: " ";\n  display: table;\n}\n\n.vce-hero-section--wrap-row:after {\n  clear: both;\n}\n\n.vce-hero-section--min-height .vce-hero-section--wrap-row {\n  min-height: 450px;\n}\n\n.vce-hero-section--content {\n  margin-left: auto;\n  width: 100%;\n  padding-left: 2%;\n  padding-right: 2%;\n  margin-right: auto;\n  text-align: center;\n  box-sizing: border-box;\n}\n.vce-hero-section--content-container:not(:last-child) {\n  margin-bottom: 35px;\n}\n\n.vce-hero-section--content h1,\n.vce-hero-section--content h2,\n.vce-hero-section--content h3,\n.vce-hero-section--content h4,\n.vce-hero-section--content h5,\n.vce-hero-section--content h6 {\n  color: inherit;\n}\n\n.vce-hero-section--content h1 {\n  margin-bottom: 35px;\n}\n\n.vce-hero-section--content-container > *:first-child,\n.vce-hero-section--content-container > vcvhelper > *:first-child,\n.vce-hero-section--content-container > .vcvhelper > *:first-child {\n  margin-top: 0;\n}\n\n.vce-hero-section--content-container > *:last-child,\n.vce-hero-section--content-container > vcvhelper:last-child > *:last-child,\n.vce-hero-section--content-container > .vcvhelper:last-child > *:last-child {\n  margin-bottom: 0;\n}\n\n.vce-hero-section--content .vce {\n  margin-bottom: 0;\n}\n\n.vce-hero-section--alignment-start .vce-hero-section--content {\n  margin-left: 0;\n  text-align: left;\n}\n\n.vce-hero-section--alignment-end .vce-hero-section--content {\n  margin-right: 0;\n  text-align: right;\n}\n\n.vce-hero-section-media--xs .vce-hero-section--content {\n  padding-left: 35px;\n  padding-right: 35px;\n}\n\n.vce-hero-section-media--sm .vce-hero-section--content {\n  width: 66.66666666%;\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.vce-hero-section-media--sm .vce-hero-section--alignment-start .vce-hero-section--content {\n  margin-left: 8.33333333%;\n}\n\n.vce-hero-section-media--sm .vce-hero-section--alignment-end .vce-hero-section--content {\n  margin-right: 8.33333333%;\n}\n\n.vce-hero-section-media--md .vce-hero-section--content {\n  width: 50%;\n}\n\n.vce-hero-section-media--lg .vce-hero-section--content {\n  width: 33.33333333%;\n}\n\n\n/*\n * TODO: Make the row full width logic.\n */\n/*\n.vce-hero-section--fullbleed .vce-hero-section--wrap {\n  max-width: 1170px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.vce-hero-section--fullbleed .vce-hero-section--content {\n  text-align: center;\n}\n.vce-hero-section--fullbleed.vce-hero-section--alignment-start .vce-hero-section--content {\n  text-align: left;\n}\n.vce-hero-section--fullbleed.vce-hero-section--alignment-end .vce-hero-section--content {\n  text-align: left;\n}*/\n\n/*RTL support. */\n.rtl.vce-hero-section,\n[dir="rtl"].vce-hero-section,\n.rtl .vce-hero-section,\n[dir="rtl"] .vce-hero-section {\n  direction: rtl;\n  unicode-bidi: embed;\n}\n\n.rtl .vce-hero-section--alignment-start .vce-hero-section--content,\n[dir="rtl"] .vce-hero-section--alignment-start .vce-hero-section--content,\n.rtl.vce-hero-section--alignment-start .vce-hero-section--content,\n[dir="rtl"].vce-hero-section--alignment-start .vce-hero-section--content,\n.rtl .vce-hero-section--alignment-end .vce-hero-section--content,\n[dir="rtl"] .vce-hero-section--alignment-end .vce-hero-section--content,\n.rtl.vce-hero-section--alignment-end .vce-hero-section--content,\n[dir="rtl"].vce-hero-section--alignment-end .vce-hero-section--content {\n  text-align: right;\n}\n\n.ltr.vce-hero-section,\n[dir="ltr"].vce-hero-section,\n.ltr .vce-hero-section,\n[dir="ltr"] .vce-hero-section {\n  direction: ltr;\n  unicode-bidi: normal;\n}\n\n.ltr .vce-hero-section--alignment-end .vce-hero-section--content,\n[dir="ltr"] .vce-hero-section--alignment-end .vce-hero-section--content,\n.ltr.vce-hero-section--alignment-end .vce-hero-section--content,\n[dir="ltr"].vce-hero-section--alignment-end .vce-hero-section--content,\n.ltr .vce-hero-section--alignment-start .vce-hero-section--content,\n[dir="ltr"] .vce-hero-section--alignment-start .vce-hero-section--content,\n.ltr.vce-hero-section--alignment-start .vce-hero-section--content,\n[dir="ltr"].vce-hero-section--alignment-start .vce-hero-section--content {\n  text-align: left;\n}\n'}},[["./heroSection/index.js"]]]);