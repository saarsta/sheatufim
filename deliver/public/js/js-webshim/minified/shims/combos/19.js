jQuery.webshims.register("dom-extend",function(a,e,j,i,k){var s=e.modules,o=/\s*,\s*/,p={},u={},n={},x={},q={},v=a.fn.val,b=function(f,l,y,c,b){return b?v.call(a(f)):v.call(a(f),y)};a.fn.val=function(f){var l=this[0];arguments.length&&null==f&&(f="");if(!arguments.length)return!l||1!==l.nodeType?v.call(this):a.prop(l,"value",f,"val",!0);if(a.isArray(f))return v.apply(this,arguments);var y=a.isFunction(f);return this.each(function(c){l=this;1===l.nodeType&&(y?(c=f.call(l,c,a.prop(l,"value",k,"val",
!0)),null==c&&(c=""),a.prop(l,"value",c,"val")):a.prop(l,"value",f,"val"))})};var g="_webshimsLib"+Math.round(1E3*Math.random()),h=function(f,l,c){f=f.jquery?f[0]:f;if(!f)return c||{};var b=a.data(f,g);c!==k&&(b||(b=a.data(f,g,{})),l&&(b[l]=c));return l?b&&b[l]:b};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(f){a.fn[f.name]=function(){return this.map(function(){var a=h(this,
"shadowData");return a&&a[f.prop]||this})}});["removeAttr","prop","attr"].forEach(function(f){p[f]=a[f];a[f]=function(l,c,d,r,g){var h="val"==r,e=!h?p[f]:b;if(!l||!u[c]||1!==l.nodeType||!h&&r&&"attr"==f&&a.attrFn[c])return e(l,c,d,r,g);var z=(l.nodeName||"").toLowerCase(),m=n[z],w="attr"==f&&(!1===d||null===d)?"removeAttr":f,i,j,o;m||(m=n["*"]);m&&(m=m[c]);m&&(i=m[w]);if(i){if("value"==c)j=i.isVal,i.isVal=h;if("removeAttr"===w)return i.value.call(l);if(d===k)return i.get?i.get.call(l):i.value;i.set&&
("attr"==f&&!0===d&&(d=c),o=i.set.call(l,d));if("value"==c)i.isVal=j}else o=e(l,c,d,r,g);if((d!==k||"removeAttr"===w)&&q[z]&&q[z][c]){var s;s="removeAttr"==w?!1:"prop"==w?!!d:!0;q[z][c].forEach(function(a){if(!a.only||(a.only="prop"==f)||"attr"==a.only&&"prop"!=f)a.call(l,d,s,h?"val":w,f)})}return o};x[f]=function(c,d,t){n[c]||(n[c]={});n[c][d]||(n[c][d]={});var g=n[c][d][f],h=function(a,c,l){return c&&c[a]?c[a]:l&&l[a]?l[a]:"prop"==f&&"value"==d?function(a){return t.isVal?b(this,d,a,!1,0===arguments.length):
p[f](this,d,a)}:"prop"==f&&"value"==a&&t.value.apply?function(a){var c=p[f](this,d);c&&c.apply&&(c=c.apply(this,arguments));return c}:function(a){return p[f](this,d,a)}};n[c][d][f]=t;if(t.value===k){if(!t.set)t.set=t.writeable?h("set",t,g):e.cfg.useStrict&&"prop"==d?function(){throw d+" is readonly on "+c;}:a.noop;if(!t.get)t.get=h("get",t,g)}["value","get","set"].forEach(function(a){t[a]&&(t["_sup"+a]=h(a,g))})}});var w=!a.browser.msie||8<parseInt(a.browser.version,10),c=function(){var a=e.getPrototypeOf(i.createElement("foobar")),
c=Object.prototype.hasOwnProperty;return function(b,g,r){var m=i.createElement(b),A=e.getPrototypeOf(m);if(w&&A&&a!==A&&(!m[g]||!c.call(m,g))){var q=m[g];r._supvalue=function(){return q&&q.apply?q.apply(this,arguments):q};A[g]=r.value}else r._supvalue=function(){var a=h(this,"propValue");return a&&a[g]&&a[g].apply?a[g].apply(this,arguments):a&&a[g]},d.extendValue(b,g,r.value);r.value._supvalue=r._supvalue}}(),d=function(){var f={};e.addReady(function(c,l){var d={},b=function(f){d[f]||(d[f]=a(c.getElementsByTagName(f)),
l[0]&&a.nodeName(l[0],f)&&(d[f]=d[f].add(l)))};a.each(f,function(a,f){b(a);!f||!f.forEach?e.warn("Error: with "+a+"-property. methods: "+f):f.forEach(function(f){d[a].each(f)})});d=null});var c,d=a([]),b=function(d,b){f[d]?f[d].push(b):f[d]=[b];a.isDOMReady&&(c||a(i.getElementsByTagName(d))).each(b)};return{createTmpCache:function(f){a.isDOMReady&&(c=c||a(i.getElementsByTagName(f)));return c||d},flushTmpCache:function(){c=null},content:function(f,c){b(f,function(){var f=a.attr(this,c);null!=f&&a.attr(this,
c,f)})},createElement:function(a,f){b(a,f)},extendValue:function(f,c,d){b(f,function(){a(this).each(function(){h(this,"propValue",{})[c]=this[c];this[c]=d})})}}}(),m=function(a,c){if(a.defaultValue===k)a.defaultValue="";if(!a.removeAttr)a.removeAttr={value:function(){a[c||"prop"].set.call(this,a.defaultValue);a.removeAttr._supvalue.call(this)}};if(!a.attr)a.attr={}};a.extend(e,{getID:function(){var c=(new Date).getTime();return function(d){var d=a(d),b=d.attr("id");b||(c++,b="ID-"+c,d.attr("id",b));
return b}}(),extendUNDEFProp:function(c,d){a.each(d,function(a,d){a in c||(c[a]=d)})},createPropDefault:m,data:h,moveToFirstEvent:function(){var c=a._data?"_data":"data";return function(d,b,g){if((d=(a[c](d,"events")||{})[b])&&1<d.length)b=d.pop(),g||(g="bind"),"bind"==g&&d.delegateCount?d.splice(d.delegateCount,0,b):d.unshift(b)}}(),addShadowDom:function(){var c,d,b,t,r={init:!1,start:function(){if(!this.init)this.init=!0,this.height=a(i).height(),this.width=a(i).width(),setInterval(function(){var c=
a(i).height(),f=a(i).width();if(c!=r.height||f!=r.width)r.height=c,r.width=f,t({type:"docresize"})},400)}};t=function(g){clearTimeout(c);c=setTimeout(function(){if("resize"==g.type){var c=a(j).width(),f=a(j).width();if(f==d&&c==b)return;d=f;b=c;r.height=a(i).height();r.width=a(i).width()}a.event.trigger("updateshadowdom")},40)};a(j).bind("resize",t);a.event.customEvent.updateshadowdom=!0;return function(c,f,d){d=d||{};c.jquery&&(c=c[0]);f.jquery&&(f=f[0]);var b=a.data(c,g)||a.data(c,g,{}),l=a.data(f,
g)||a.data(f,g,{}),y={};if(d.shadowFocusElement){if(d.shadowFocusElement){if(d.shadowFocusElement.jquery)d.shadowFocusElement=d.shadowFocusElement[0];y=a.data(d.shadowFocusElement,g)||a.data(d.shadowFocusElement,g,y)}}else d.shadowFocusElement=f;b.hasShadow=f;y.nativeElement=l.nativeElement=c;y.shadowData=l.shadowData=b.shadowData={nativeElement:c,shadowElement:f,shadowFocusElement:d.shadowFocusElement};d.shadowChilds&&d.shadowChilds.each(function(){h(this,"shadowData",l.shadowData)});if(d.data)y.shadowData.data=
l.shadowData.data=b.shadowData.data=d.data;d=null;r.start()}}(),propTypes:{standard:function(a){m(a);if(!a.prop)a.prop={set:function(c){a.attr.set.call(this,""+c)},get:function(){return a.attr.get.call(this)||a.defaultValue}}},"boolean":function(a){m(a);if(!a.prop)a.prop={set:function(c){c?a.attr.set.call(this,""):a.removeAttr.value.call(this)},get:function(){return null!=a.attr.get.call(this)}}},src:function(){var c=i.createElement("a");c.style.display="none";return function(d,b){m(d);if(!d.prop)d.prop=
{set:function(a){d.attr.set.call(this,a)},get:function(){var d=this.getAttribute(b),l;if(null==d)return"";c.setAttribute("href",d+"");if(!a.support.hrefNormalized){try{a(c).insertAfter(this),l=c.getAttribute("href",4)}catch(g){l=c.getAttribute("href",4)}a(c).detach()}return l||c.href}}}}(),enumarated:function(a){m(a);if(!a.prop)a.prop={set:function(c){a.attr.set.call(this,c)},get:function(){var c=(a.attr.get.call(this)||"").toLowerCase();if(!c||-1==a.limitedTo.indexOf(c))c=a.defaultValue;return c}}}},
reflectProperties:function(c,d){"string"==typeof d&&(d=d.split(o));d.forEach(function(d){e.defineNodeNamesProperty(c,d,{prop:{set:function(c){a.attr(this,d,c)},get:function(){return a.attr(this,d)||""}}})})},defineNodeNameProperty:function(f,b,g){u[b]=!0;if(g.reflect)e.propTypes[g.propType||"standard"](g,b);["prop","attr","removeAttr"].forEach(function(d){var h=g[d];h&&(h="prop"===d?a.extend({writeable:!0},h):a.extend({},h,{writeable:!0}),x[d](f,b,h),"*"!=f&&e.cfg.extendNative&&"prop"==d&&h.value&&
a.isFunction(h.value)&&c(f,b,h),g[d]=h)});g.initAttr&&d.content(f,b);return g},defineNodeNameProperties:function(a,c,b,g){for(var h in c)!g&&c[h].initAttr&&d.createTmpCache(a),b&&(c[h][b]?e.log("override: "+a+"["+h+"] for "+b):(c[h][b]={},["value","set","get"].forEach(function(a){a in c[h]&&(c[h][b][a]=c[h][a],delete c[h][a])}))),c[h]=e.defineNodeNameProperty(a,h,c[h]);g||d.flushTmpCache();return c},createElement:function(c,b,g){var h;a.isFunction(b)&&(b={after:b});d.createTmpCache(c);b.before&&d.createElement(c,
b.before);g&&(h=e.defineNodeNameProperties(c,g,!1,!0));b.after&&d.createElement(c,b.after);d.flushTmpCache();return h},onNodeNamesPropertyModify:function(c,b,g,h){"string"==typeof c&&(c=c.split(o));a.isFunction(g)&&(g={set:g});c.forEach(function(a){q[a]||(q[a]={});"string"==typeof b&&(b=b.split(o));g.initAttr&&d.createTmpCache(a);b.forEach(function(c){q[a][c]||(q[a][c]=[],u[c]=!0);if(g.set){if(h)g.set.only=h;q[a][c].push(g.set)}g.initAttr&&d.content(a,c)});d.flushTmpCache()})},defineNodeNamesBooleanProperty:function(c,
d,b){b||(b={});if(a.isFunction(b))b.set=b;e.defineNodeNamesProperty(c,d,{attr:{set:function(a){this.setAttribute(d,a);b.set&&b.set.call(this,!0)},get:function(){return null==this.getAttribute(d)?k:d}},removeAttr:{value:function(){this.removeAttribute(d);b.set&&b.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:b.initAttr||!1})},contentAttr:function(a,c,d){if(a.nodeName){if(d===k)return a=a.attributes[c]||{},d=a.specified?a.value:null,null==d?k:d;"boolean"==typeof d?d?a.setAttribute(c,c):
a.removeAttribute(c):a.setAttribute(c,d)}},activeLang:function(){var c=[],d={},b,g,h=/:\/\/|^\.*\//,m=function(c,d,b){return d&&b&&-1!==a.inArray(d,b.availabeLangs||[])?(c.loading=!0,b=b.langSrc,h.test(b)||(b=e.cfg.basePath+b),e.loader.loadScript(b+d+".js",function(){c.langObj[d]?(c.loading=!1,i(c,!0)):a(function(){c.langObj[d]&&i(c,!0);c.loading=!1})}),!0):!1},w=function(a){d[a]&&d[a].forEach(function(a){a.callback()})},i=function(a,c){if(a.activeLang!=b&&a.activeLang!==g){var d=s[a.module].options;
if(a.langObj[b]||g&&a.langObj[g])a.activeLang=b,a.callback(a.langObj[b]||a.langObj[g],b),w(a.module);else if(!c&&!m(a,b,d)&&!m(a,g,d)&&a.langObj[""]&&""!==a.activeLang)a.activeLang="",a.callback(a.langObj[""],b),w(a.module)}};return function(h){if("string"==typeof h&&h!==b)b=h,g=b.split("-")[0],b==g&&(g=!1),a.each(c,function(a,c){i(c)});else if("object"==typeof h)if(h.register)d[h.register]||(d[h.register]=[]),d[h.register].push(h),h.callback();else{if(!h.activeLang)h.activeLang="";c.push(h);i(h)}return b}}()});
a.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(a,c){e[a]=function(a,d,b,g){"string"==typeof a&&(a=a.split(o));var f={};a.forEach(function(a){f[a]=e[c](a,d,b,g)});return f}});e.isReady("webshimLocalization",!0)});
(function(a,e){var j=a.webshims.browserVersion;if(!(a.browser.mozilla&&5<j)&&(!a.browser.msie||12>j&&7<j)){var i={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},k=function(a,e){a.getAttribute("role")||a.setAttribute("role",e)};a.webshims.addReady(function(j,o){a.each(i,function(e,i){for(var v=a(e,j).add(o.filter(e)),b=0,g=v.length;b<g;b++)k(v[b],i)});if(j===e){var p=e.getElementsByTagName("header")[0],u=e.getElementsByTagName("footer"),n=u.length;
p&&!a(p).closest("section, article")[0]&&k(p,"banner");n&&(p=u[n-1],a(p).closest("section, article")[0]||k(p,"contentinfo"))}})}})(jQuery,document);
jQuery.webshims.register("form-datalist",function(a,e,j,i,k){e.propTypes.element=function(j){e.createPropDefault(j,"attr");if(!j.prop)j.prop={get:function(){var e=j.attr.get.call(this);e&&(e=i.getElementById(e))&&j.propNodeName&&!a.nodeName(e,j.propNodeName)&&(e=null);return e||null},writeable:!1}};(function(){var s=a.webshims.cfg.forms,o=Modernizr.input.list;if(!o||s.customDatalist){var p=0,u={submit:1,button:1,reset:1,hidden:1,range:1,date:1},n=a.browser.msie&&7>parseInt(a.browser.version,10),x=
{},q=function(a){if(!a)return[];if(x[a])return x[a];var g;try{g=JSON.parse(localStorage.getItem("storedDatalistOptions"+a))}catch(h){}x[a]=g||[];return g||[]},v={_create:function(b){if(!u[a.prop(b.input,"type")]){var g=b.datalist,h=a.data(b.input,"datalistWidget");if(g&&h&&h.datalist!==g)h.datalist=g,h.id=b.id,h.shadowList.prop("className","datalist-polyfill "+(h.datalist.className||"")+" "+h.datalist.id+"-shadowdom"),s.positionDatalist?h.shadowList.insertAfter(b.input):h.shadowList.appendTo("body"),
a(h.datalist).unbind("updateDatalist.datalistWidget").bind("updateDatalist.datalistWidget",a.proxy(h,"_resetListCached")),h._resetListCached();else if(g){if(!(h&&h.datalist===g)){p++;var e=this;this.hideList=a.proxy(e,"hideList");this.timedHide=function(){clearTimeout(e.hideTimer);e.hideTimer=setTimeout(e.hideList,9)};this.datalist=g;this.id=b.id;this.hasViewableData=!0;this._autocomplete=a.attr(b.input,"autocomplete");a.data(b.input,"datalistWidget",this);this.shadowList=a('<div class="datalist-polyfill '+
(this.datalist.className||"")+" "+this.datalist.id+'-shadowdom" />');s.positionDatalist||a(b.input).hasClass("position-datalist")?this.shadowList.insertAfter(b.input):this.shadowList.appendTo("body");this.index=-1;this.input=b.input;this.arrayOptions=[];this.shadowList.delegate("li","mouseenter.datalistWidget mousedown.datalistWidget click.datalistWidget",function(c){var d=a("li:not(.hidden-item)",e.shadowList),g="mousedown"==c.type||"click"==c.type;e.markItem(d.index(c.currentTarget),g,d);"click"==
c.type&&(e.hideList(),s.customDatalist&&a(b.input).trigger("datalistselect"));return"mousedown"!=c.type}).bind("focusout",this.timedHide);b.input.setAttribute("autocomplete","off");a(b.input).attr({"aria-haspopup":"true"}).bind("input.datalistWidget",function(){if(!e.triggeredByDatalist)e.changedValue=!1,e.showHideOptions()}).bind("keydown.datalistWidget",function(c){var d=c.keyCode,g;if(40==d&&!e.showList())return e.markItem(e.index+1,!0),!1;if(e.isListVisible){if(38==d)return e.markItem(e.index-
1,!0),!1;if(!c.shiftKey&&(33==d||36==d))return e.markItem(0,!0),!1;if(!c.shiftKey&&(34==d||35==d))return c=a("li:not(.hidden-item)",e.shadowList),e.markItem(c.length-1,!0,c),!1;if(13==d||27==d)return 13==d&&(g=a("li.active-item:not(.hidden-item)",e.shadowList),e.changeValue(a("li.active-item:not(.hidden-item)",e.shadowList))),e.hideList(),s.customDatalist&&g&&g[0]&&a(b.input).trigger("datalistselect"),!1}}).bind("focus.datalistWidget",function(){a(this).hasClass("list-focus")&&e.showList()}).bind("mousedown.datalistWidget",
function(){a(this).is(":focus")&&e.showList()}).bind("blur.datalistWidget",this.timedHide);a(this.datalist).unbind("updateDatalist.datalistWidget").bind("updateDatalist.datalistWidget",a.proxy(this,"_resetListCached"));this._resetListCached();b.input.form&&(b.input.name||b.input.id)&&a(b.input.form).bind("submit.datalistWidget"+b.input.id,function(){if(!a(b.input).hasClass("no-datalist-cache")&&"off"!=e._autocomplete){var c=a.prop(b.input,"value"),d=(b.input.name||b.input.id)+a.prop(b.input,"type");
if(!e.storedOptions)e.storedOptions=q(d);if(c&&-1==e.storedOptions.indexOf(c)&&(e.storedOptions.push(c),c=e.storedOptions,d)){c=c||[];try{localStorage.setItem("storedDatalistOptions"+d,JSON.stringify(c))}catch(g){}}}});a(j).bind("unload.datalist"+this.id+" beforeunload.datalist"+this.id,function(){e.destroy()})}}else h&&h.destroy()}},destroy:function(){var b=a.attr(this.input,"autocomplete");a(this.input).unbind(".datalistWidget").removeData("datalistWidget");this.shadowList.remove();a(i).unbind(".datalist"+
this.id);a(j).unbind(".datalist"+this.id);this.input.form&&this.input.id&&a(this.input.form).unbind("submit.datalistWidget"+this.input.id);this.input.removeAttribute("aria-haspopup");b===k?this.input.removeAttribute("autocomplete"):a(this.input).attr("autocomplete",b)},_resetListCached:function(a){var g=this,h;this.needsUpdate=!0;this.lastUpdatedValue=!1;this.lastUnfoundValue="";this.updateTimer||(j.QUnit||(h=a&&i.activeElement==g.input)?g.updateListOptions(h):e.ready("WINDOWLOAD",function(){g.updateTimer=
setTimeout(function(){g.updateListOptions();g=null;p=1},200+100*p)}))},updateListOptions:function(b){this.needsUpdate=!1;clearTimeout(this.updateTimer);this.updateTimer=!1;this.shadowList.css({fontSize:a.css(this.input,"fontSize"),fontFamily:a.css(this.input,"fontFamily")});this.searchStart=s.customDatalist&&a(this.input).hasClass("search-start");var g=[],h=[],e=[],c,d,m,f;for(d=a.prop(this.datalist,"options"),m=0,f=d.length;m<f;m++){c=d[m];if(c.disabled)return;c={value:a(c).val()||"",text:a.trim(a.attr(c,
"label")||c.textContent||c.innerText||a.text([c])||""),className:c.className||"",style:a.attr(c,"style")||""};c.text?c.text!=c.value&&(c.className+=" different-label-value"):c.text=c.value;h[m]=c.value;e[m]=c}if(!this.storedOptions)this.storedOptions=a(this.input).hasClass("no-datalist-cache")||"off"==this._autocomplete?[]:q((this.input.name||this.input.id)+a.prop(this.input,"type"));this.storedOptions.forEach(function(a){-1==h.indexOf(a)&&e.push({value:a,text:a,className:"stored-suggest",style:""})});
for(m=0,f=e.length;m<f;m++)d=e[m],g[m]='<li class="'+d.className+'" style="'+d.style+'" tabindex="-1" role="listitem"><span class="option-label">'+d.text+'</span> <span class="option-value">'+d.value+"</span></li>";this.arrayOptions=e;this.shadowList.html('<div class="datalist-outer-box"><div class="datalist-box"><ul role="list">'+g.join("\n")+"</ul></div></div>");a.fn.bgIframe&&n&&this.shadowList.bgIframe();(b||this.isListVisible)&&this.showHideOptions()},showHideOptions:function(b){var g=a.prop(this.input,
"value").toLowerCase();if(!(g===this.lastUpdatedValue||this.lastUnfoundValue&&0===g.indexOf(this.lastUnfoundValue))){this.lastUpdatedValue=g;var h=!1,e=this.searchStart,c=a("li",this.shadowList);g?this.arrayOptions.forEach(function(d,b){var f;if(!("lowerText"in d))d.lowerText=d.text!=d.value?d.value.toLowerCase()+d.text.toLowerCase():d.text.toLowerCase();f=d.lowerText.indexOf(g);(f=e?!f:-1!==f)?(a(c[b]).removeClass("hidden-item"),h=!0):a(c[b]).addClass("hidden-item")}):c.length&&(c.removeClass("hidden-item"),
h=!0);this.hasViewableData=h;!b&&h&&this.showList();if(!h)this.lastUnfoundValue=g,this.hideList()}},setPos:function(){this.shadowList.css({marginTop:0,marginLeft:0,marginRight:0,marginBottom:0});var b=s.positionDatalist?a(this.input).position():e.getRelOffset(this.shadowList,this.input);b.top+=a(this.input).outerHeight();b.width=a(this.input).outerWidth()-(parseInt(this.shadowList.css("borderLeftWidth"),10)||0)-(parseInt(this.shadowList.css("borderRightWidth"),10)||0);this.shadowList.css({marginTop:"",
marginLeft:"",marginRight:"",marginBottom:""}).css(b);return b},showList:function(){if(this.isListVisible)return!1;this.needsUpdate&&this.updateListOptions();this.showHideOptions(!0);if(!this.hasViewableData)return!1;this.isListVisible=!0;var b=this;b.setPos();b.shadowList.addClass("datalist-visible").find("li.active-item").removeClass("active-item");a(j).unbind(".datalist"+b.id);a(i).unbind(".datalist"+b.id).bind("mousedown.datalist"+b.id+" focusin.datalist"+b.id,function(g){g.target===b.input||
b.shadowList[0]===g.target||a.contains(b.shadowList[0],g.target)?(clearTimeout(b.hideTimer),setTimeout(function(){clearTimeout(b.hideTimer)},9)):b.timedHide()}).bind("updateshadowdom.datalist"+b.id,function(){b.setPos()});return!0},hideList:function(){if(!this.isListVisible)return!1;var b=this,g=function(){b.changedValue&&a(b.input).trigger("change");b.changedValue=!1};b.shadowList.removeClass("datalist-visible list-item-active");b.index=-1;b.isListVisible=!1;if(b.changedValue){b.triggeredByDatalist=
!0;e.triggerInlineForm&&e.triggerInlineForm(b.input,"input");if(a(b.input).is(":focus"))a(b.input).one("blur",g);else g();b.triggeredByDatalist=!1}a(i).unbind(".datalist"+b.id);a(j).unbind(".datalist"+b.id).one("resize.datalist"+b.id,function(){b.shadowList.css({top:0,left:0})});return!0},scrollIntoView:function(b){var g=a("ul",this.shadowList),h=a("div.datalist-box",this.shadowList),e=b.position();e.top-=(parseInt(g.css("paddingTop"),10)||0)+(parseInt(g.css("marginTop"),10)||0)+(parseInt(g.css("borderTopWidth"),
10)||0);0>e.top?h.scrollTop(h.scrollTop()+e.top-2):(e.top+=b.outerHeight(),b=h.height(),e.top>b&&h.scrollTop(h.scrollTop()+(e.top-b)+2))},changeValue:function(b){if(b[0]){var b=a("span.option-value",b).text(),g=a.prop(this.input,"value");if(b!=g)a(this.input).prop("value",b).triggerHandler("updateInput"),this.changedValue=!0}},markItem:function(b,g,e){e=e||a("li:not(.hidden-item)",this.shadowList);if(e.length)0>b?b=e.length-1:b>=e.length&&(b=0),e.removeClass("active-item"),this.shadowList.addClass("list-item-active"),
e=e.filter(":eq("+b+")").addClass("active-item"),g&&(this.changeValue(e),this.scrollIntoView(e)),this.index=b}};(function(){o||e.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var b=a("select",this);b[0]?b=b[0].options:(b=a("option",this).get(),b.length&&e.warn("you should wrap your option-elements for a datalist in a select element to support IE and other old browsers."));return b}}});var b={autocomplete:{attr:{get:function(){var b=a.data(this,"datalistWidget");return b?
b._autocomplete:"autocomplete"in this?this.autocomplete:this.getAttribute("autocomplete")},set:function(b){var e=a.data(this,"datalistWidget");e?(e._autocomplete=b,"off"==b&&e.hideList()):"autocomplete"in this?this.autocomplete=b:this.setAttribute("autocomplete",b)}}}};o?((a("<datalist><select><option></option></select></datalist>").prop("options")||[]).length||e.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var b=this.options||[];if(!b.length){var e=a("select",this);
if(e[0]&&e[0].options&&e[0].options.length)b=e[0].options}return b}}}),b.list={attr:{get:function(){var b=e.contentAttr(this,"list");null!=b?this.removeAttribute("list"):b=a.data(this,"datalistListAttr");return null==b?k:b},set:function(b){a.data(this,"datalistListAttr",b);e.objectCreate(v,k,{input:this,id:b,datalist:a.prop(this,"list")})}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}):b.list={attr:{get:function(){var a=e.contentAttr(this,"list");return null==a?k:a},set:function(b){e.contentAttr(this,
"list",b);e.objectCreate(v,k,{input:this,id:b,datalist:a.prop(this,"list")})}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"};e.defineNodeNameProperties("input",b);if(a.event.customEvent)a.event.customEvent.updateDatalist=!0,a.event.customEvent.updateInput=!0,a.event.customEvent.datalistselect=!0;e.addReady(function(a,b){b.filter("datalist > select, datalist, datalist > option, datalist > select > option").closest("datalist").triggerHandler("updateDatalist")})})()}})()});
(function(a){var e=window.Modernizr,j=a.webshims,i=j.bugs,k=a('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required="" /><input type="date" required="" name="a" /><input type="submit" /></form>'),s=function(){if(k[0].querySelector)try{i.findRequired=!k[0].querySelector("select:required")}catch(a){i.findRequired=!1}};i.findRequired=!1;i.validationMessage=!1;i.valueAsNumberSet=!1;j.capturingEventPrevented=function(e){if(!e._isPolyfilled){var i=e.isDefaultPrevented,
b=e.preventDefault;e.preventDefault=function(){clearTimeout(a.data(e.target,e.type+"DefaultPrevented"));a.data(e.target,e.type+"DefaultPrevented",setTimeout(function(){a.removeData(e.target,e.type+"DefaultPrevented")},30));return b.apply(this,arguments)};e.isDefaultPrevented=function(){return!(!i.apply(this,arguments)&&!a.data(e.target,e.type+"DefaultPrevented"))};e._isPolyfilled=!0}};if(!e.formvalidation||i.bustedValidity)s();else if(j.capturingEvents(["input"]),j.capturingEvents(["invalid"],!0),
e.bugfreeformvalidation=!0,window.opera||a.browser.webkit||window.testGoodWithFix){var o=a("input",k).eq(0),p,u=function(a){j.loader.loadList(["dom-extend"]);j.ready("dom-extend",a)},n=function(i){var n=["form-extend","form-message","form-native-fix"];i&&(i.preventDefault(),i.stopImmediatePropagation());clearTimeout(p);setTimeout(function(){k&&(k.remove(),k=o=null)},9);if(!e.bugfreeformvalidation)j.addPolyfill("form-native-fix",{f:"forms",d:["form-extend"]}),j.modules["form-extend"].test=a.noop;j.isReady("form-number-date-api")&&
n.push("form-number-date-api");j.reTest(n);if(o)try{o.prop({disabled:!0,value:""}).prop("disabled",!1).is(":valid")&&u(function(){j.onNodeNamesPropertyModify(["input","textarea"],["disabled","readonly"],{set:function(b){!b&&this&&a.prop(this,"value",a.prop(this,"value"))}});j.onNodeNamesPropertyModify(["select"],["disabled","readonly"],{set:function(b){if(!b&&this)b=a(this).val(),(a("option:last-child",this)[0]||{}).selected=!0,a(this).val(b)}})})}catch(b){}(a.browser.opera||window.testGoodWithFix)&&
u(function(){var b=function(a){a.preventDefault()};["form","input","textarea","select"].forEach(function(e){var i=j.defineNodeNameProperty(e,"checkValidity",{prop:{value:function(){j.fromSubmit||a(this).bind("invalid.checkvalidity",b);j.fromCheckValidity=!0;var c=i.prop._supvalue.apply(this,arguments);j.fromSubmit||a(this).unbind("invalid.checkvalidity",b);j.fromCheckValidity=!1;return c}}})})})};k.appendTo("head");if(window.opera||window.testGoodWithFix){s();i.validationMessage=!o.prop("validationMessage");
if((e.inputtypes||{}).date){try{o.prop("valueAsNumber",0)}catch(x){}i.valueAsNumberSet="1970-01-01"!=o.prop("value")}o.prop("value","")}k.bind("submit",function(a){e.bugfreeformvalidation=!1;n(a)});p=setTimeout(function(){k&&k.triggerHandler("submit")},9);a("input, select",k).bind("invalid",n).filter('[type="submit"]').bind("click",function(a){a.stopImmediatePropagation()}).trigger("click");a.browser.webkit&&e.bugfreeformvalidation&&!j.bugs.bustedValidity&&function(){var e=/^(?:textarea|input)$/i,
i=!1;document.addEventListener("contextmenu",function(a){e.test(a.target.nodeName||"")&&(i=a.target.form)&&setTimeout(function(){i=!1},1)},!1);a(window).bind("invalid",function(a){if(a.originalEvent&&i&&i==a.target.form)a.wrongWebkitInvalid=!0,a.stopImmediatePropagation()})}()}})(jQuery);
jQuery.webshims.register("form-core",function(a,e,j,i,k,s){var o={radio:1},p={checkbox:1,radio:1},u=a([]),n=e.bugs,x=function(c){var c=a(c),b,e;b=u;if(o[c[0].type])e=c.prop("form"),b=(b=c[0].name)?e?a(e[b]):a(i.getElementsByName(b)).filter(function(){return!a.prop(this,"form")}):c,b=b.filter('[type="radio"]');return b},q=e.getContentValidationMessage=function(c,b,e){var f=a(c).data("errormessage")||c.getAttribute("x-moz-errormessage")||"";e&&f[e]&&(f=f[e]);"object"==typeof f&&(b=b||a.prop(c,"validity")||
{valid:1},b.valid||a.each(b,function(a,c){if(c&&"valid"!=a&&f[a])return f=f[a],!1}));if("object"==typeof f)f=f.defaultMessage;return f||""},v={number:1,range:1,date:1};a.extend(a.expr[":"],{"valid-element":function(c){return!(!a.prop(c,"willValidate")||!(a.prop(c,"validity")||{valid:1}).valid)},"invalid-element":function(c){return!(!a.prop(c,"willValidate")||(a.prop(c,"validity")||{valid:1}).valid)},"required-element":function(c){return!(!a.prop(c,"willValidate")||!a.prop(c,"required"))},"optional-element":function(c){return!!(a.prop(c,
"willValidate")&&!1===a.prop(c,"required"))},"in-range":function(c){if(!v[a.prop(c,"type")]||!a.prop(c,"willValidate"))return!1;c=a.prop(c,"validity");return!(!c||c.rangeOverflow||c.rangeUnderflow)},"out-of-range":function(c){if(!v[a.prop(c,"type")]||!a.prop(c,"willValidate"))return!1;c=a.prop(c,"validity");return!(!c||!c.rangeOverflow&&!c.rangeUnderflow)}});["valid","invalid","required","optional"].forEach(function(c){a.expr[":"][c]=a.expr.filters[c+"-element"]});a.expr[":"].focus=function(a){try{var b=
a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())}catch(e){}return!1};var b=a.event.customEvent||{};(n.bustedValidity||n.findRequired||!Modernizr.bugfreeformvalidation)&&function(){var c=a.find,b=a.find.matchesSelector,e=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/ig,f=function(a){return a+"-element"};a.find=function(){var a=Array.prototype.slice,b=function(b){var d=arguments,d=a.call(d,1,d.length);d.unshift(b.replace(e,f));return c.apply(this,
d)},d;for(d in c)c.hasOwnProperty(d)&&(b[d]=c[d]);return b}();if(!Modernizr.prefixed||Modernizr.prefixed("matchesSelector",i.documentElement))a.find.matchesSelector=function(a,c){c=c.replace(e,f);return b.call(this,a,c)}}();var g=a.prop,h={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};a.prop=function(c,b,e){var f=g.apply(this,arguments);if(c&&"form"in c&&h[b]&&e!==k&&a(c).hasClass("form-ui-invalid")&&(a.prop(c,"validity")||{valid:1}).valid)a(c).getShadowElement().removeClass("form-ui-invalid"),
"checked"==b&&e&&x(c).not(c).removeClass("form-ui-invalid").removeAttr("aria-invalid");return f};var w=function(c,b){var e;a.each(c,function(c,g){if(g)return e="customError"==c?a.prop(b,"validationMessage"):c,!1});return e};a(i).bind(s.validityUIEvents||"focusout change refreshvalidityui",function(c){var b,e;if(c.target&&(b=a(c.target).getNativeElement()[0],"submit"!=b.type&&a.prop(b,"willValidate"))){e=a.data(b,"webshimsswitchvalidityclass");var f=function(){var e=a.prop(b,"validity"),f=a(b).getShadowElement(),
g,h,i,j;a(b).trigger("refreshCustomValidityRules");e.valid?f.hasClass("form-ui-valid")||(g="form-ui-valid",h="form-ui-invalid",j="changedvaliditystate",i="changedvalid",p[b.type]&&b.checked&&x(b).not(b).removeClass(h).addClass(g).removeAttr("aria-invalid"),a.removeData(b,"webshimsinvalidcause")):(e=w(e,b),a.data(b,"webshimsinvalidcause")!=e&&(a.data(b,"webshimsinvalidcause",e),j="changedvaliditystate"),f.hasClass("form-ui-invalid")||(g="form-ui-invalid",h="form-ui-valid",p[b.type]&&!b.checked&&x(b).not(b).removeClass(h).addClass(g),
i="changedinvalid"));g&&(f.addClass(g).removeClass(h),setTimeout(function(){a(b).trigger(i)},0));j&&setTimeout(function(){a(b).trigger(j)},0);a.removeData(c.target,"webshimsswitchvalidityclass")};e&&clearTimeout(e);"refreshvalidityui"==c.type?f():a.data(c.target,"webshimsswitchvalidityclass",setTimeout(f,9))}});b.changedvaliditystate=!0;b.refreshCustomValidityRules=!0;b.changedvalid=!0;b.changedinvalid=!0;b.refreshvalidityui=!0;e.triggerInlineForm=function(c,b){a(c).trigger(b)};e.modules["form-core"].getGroupElements=
x;n=function(){e.scrollRoot=a.browser.webkit||"BackCompat"==i.compatMode?a(i.body):a(i.documentElement)};n();e.ready("DOM",n);e.getRelOffset=function(b,d){var b=a(b),e=a(d).offset(),f;a.swap(a(b)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){f=b.offset()});e.top-=f.top;e.left-=f.left;return e};e.validityAlert=function(){var b=!a.browser.msie||7<parseInt(a.browser.version,10)?"span":"label",d,g=!1,f=!1,h,k={hideDelay:5E3,showFor:function(b,c,e,i){k._create();var b=a(b),n=
a(b).getShadowElement(),o=k.getOffsetFromBody(n);k.clear();i?this.hide():(this.getMessage(b,c),this.position(n,o),d.css({fontSize:b.css("fontSize"),fontFamily:b.css("fontFamily")}),this.show(),this.hideDelay&&(g=setTimeout(h,this.hideDelay)),a(j).bind("resize.validityalert",function(){clearTimeout(f);f=setTimeout(function(){k.position(n)},9)}));e||this.setFocus(n,o)},getOffsetFromBody:function(a){return e.getRelOffset(d,a)},setFocus:function(f,g){var j=a(f).getShadowFocusElement(),k=e.scrollRoot.scrollTop(),
m=(g||j.offset()).top-30,n;e.getID&&"label"==b&&d.attr("for",e.getID(j));k>m&&(e.scrollRoot.animate({scrollTop:m-5},{queue:!1,duration:Math.max(Math.min(600,1.5*(k-m)),80)}),n=!0);try{j[0].focus()}catch(o){}n&&(e.scrollRoot.scrollTop(k),setTimeout(function(){e.scrollRoot.scrollTop(k)},0));setTimeout(function(){a(i).bind("focusout.validityalert",h)},10)},getMessage:function(b,c){c||(c=q(b[0])||b.prop("validationMessage"));c?a("span.va-box",d).text(c):this.hide()},position:function(b,c){c=c?a.extend({},
c):k.getOffsetFromBody(b);c.top+=b.outerHeight();d.css(c)},show:function(){"none"===d.css("display")&&d.css({opacity:0}).show();d.addClass("va-visible").fadeTo(400,1)},hide:function(){d.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(!1);clearTimeout(g);a(i).unbind(".validityalert");a(j).unbind(".validityalert");d.stop().removeAttr("for")},_create:function(){if(!d)d=k.errorBubble=a("<"+b+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+
b+">").css({position:"absolute",display:"none"}),e.ready("DOM",function(){d.appendTo("body");a.fn.bgIframe&&a.browser.msie&&7>parseInt(a.browser.version,10)&&d.bgIframe()})}};h=a.proxy(k,"hide");return k}();(function(){var b,d=[],e;a(i).bind("invalid",function(f){if(!f.wrongWebkitInvalid){var g=a(f.target),h=g.getShadowElement();h.hasClass("form-ui-invalid")||(h.addClass("form-ui-invalid").removeClass("form-ui-valid"),setTimeout(function(){a(f.target).trigger("changedinvalid").trigger("changedvaliditystate")},
0));if(!b)b=a.Event("firstinvalid"),b.isInvalidUIPrevented=f.isDefaultPrevented,h=a.Event("firstinvalidsystem"),a(i).triggerHandler(h,{element:f.target,form:f.target.form,isInvalidUIPrevented:f.isDefaultPrevented}),g.trigger(b);b&&b.isDefaultPrevented()&&f.preventDefault();d.push(f.target);f.extraData="fix";clearTimeout(e);e=setTimeout(function(){var e={type:"lastinvalid",cancelable:!1,invalidlist:a(d)};b=!1;d=[];a(f.target).trigger(e,e)},9);h=g=null}})})();a.fn.getErrorMessage=function(){var b="",
d=this[0];d&&(b=q(d)||a.prop(d,"customValidationMessage")||a.prop(d,"validationMessage"));return b};s.replaceValidationUI&&e.ready("DOM forms",function(){a(i).bind("firstinvalid",function(b){b.isInvalidUIPrevented()||(b.preventDefault(),a.webshims.validityAlert.showFor(b.target,a(b.target).prop("customValidationMessage")))})})});