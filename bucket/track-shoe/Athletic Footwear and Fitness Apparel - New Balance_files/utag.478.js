//tealium universal tag - utag.478 ut4.0.202201132255, Copyright 2022 Tealium.com Inc. All Rights Reserved.
var _uxa=window._uxa||[];try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
var match=/ut\d\.(\d*)\..*/.exec(utag.cfg.v);if(utag.ut.loader===undefined||!match||parseInt(match[1])<41){u.loader=function(o,a,b,c,l,m){utag.DB(o);a=document;if(o.type=="iframe"){m=a.getElementById(o.id);if(m&&m.tagName=="IFRAME"){b=m;}else{b=a.createElement("iframe");}o.attrs=o.attrs||{};utag.ut.merge(o.attrs,{"height":"1","width":"1","style":"display:none"},0);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";}if(o.id){b.id=o.id;}for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){this.onreadystatechange=null;o.cb();}};}}if(o.type!="img"&&!m){l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}}};}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
u.ev={"view":1,"link":1};u.scriptrequested=false;u.livesignals_requested=false;function forceBoolean(flag){if(typeof flag==="string"){if(flag.toLowerCase()==="false"){return false;}else if(flag.toLowerCase()==="true"){return true;}}
return Boolean(flag);}
u.map={"cs_account":"id_project","page_type":"custom.1.Page_type","page_name":"custom.2.Page_name","product_category":"custom.3.Product_category","customer_id":"custom.4.customer_id","customer_status":"custom.5.customer_status","cp.utag_main_v_id":"custom.6.visitor_id","pdp_state":"custom.7.pdp_state","cart_product_quantity":"custom.8.cart_product_quantity","cs_products_in_cart":"custom.9.products_in_cart","product_gbu":"custom.10.product_gbu","product_line":"custom.11.product_line"};u.extend=[function(a,b){try{if(b['event_type'].toString().toLowerCase()=='cart_add_pdp'.toLowerCase()){window._uxa=window._uxa||[];window._uxa.push(['trackPageview',window.location.pathname+window.location.hash.replace('#','?__')+'?cs-popin-cart']);}}catch(e){utag.DB(e)}},function(a,b){try{if(b['event_type'].toString().toLowerCase()=='cart_add_cart'.toLowerCase()||b['event_type'].toString().toLowerCase()=='cart_add_mini_cart'.toLowerCase()){window._uxa=window._uxa||[];window._uxa.push(['trackPageview',window.location.pathname+window.location.hash.replace('#','?__')+'?cs-popin-edit-item']);}}catch(e){utag.DB(e)}}];u.contentsquareSignalsCallback=function(){if(typeof window.CS_CONF!=="undefined"&&!u.livesignals_requested){u.livesignals_requested=true;CS_CONF.signalsDetection=CS_CONF.signalsDetection||{};CS_CONF.signalsDetection.sendVarsToCS=forceBoolean(u.data.sendVarsToCS);CS_CONF.signalsDetection.sendEventsToReplay=forceBoolean(u.data.sendEventsToReplay);CS_CONF.signalsDetection.initSignals=function(){if(forceBoolean(u.data.sendToTealium)){this.sendToTealium=true;}
if(forceBoolean(u.data.ad_blocker_detection)){if(forceBoolean(u.data.adBlockerModule)){this.adBlockerModule=forceBoolean(u.data.adBlockerModule);if(typeof u.data.adBlockerEventName!=="undefined"){this.adBlockerEventName=u.data.adBlockerEventName;}
if(typeof u.data.adBlockerFileURL!=="undefined"){this.adBlockerFileURL=u.data.adBlockerFileURL;}
if(typeof u.data.adBlockerTimer!=="undefined"){this.adBlockerTimer=parseInt(u.data.adBlockerTimer);}}
if(typeof this.adBlockerSignal==="function"){this.adBlockerSignal();}}
if(forceBoolean(u.data.fraud_detection)){if(forceBoolean(u.data.excessivePasteModule)||forceBoolean(u.data.excessiveReloadModule)){if(typeof u.data.fraudCondition!=="undefined"){this.fraudCondition=u.data.fraudCondition;}}
if(forceBoolean(u.data.excessivePasteModule)){this.excessivePasteModule=forceBoolean(u.data.excessivePasteModule);if(typeof u.data.excessivePasteLowThreshold!=="undefined"){this.excessivePasteLowThreshold=parseInt(u.data.excessivePasteLowThreshold);}
if(typeof u.data.excessivePasteMediumThreshold!=="undefined"){this.excessivePasteMediumThreshold=parseInt(u.data.excessivePasteMediumThreshold);}
if(typeof u.data.excessivePasteHighThreshold!=="undefined"){this.excessivePasteHighThreshold=parseInt(u.data.excessivePasteHighThreshold);}
if(typeof u.data.excessivePasteEventName!=="undefined"){this.excessivePasteEventName=u.data.excessivePasteEventName;}}
if(forceBoolean(u.data.excessiveReloadModule)){this.excessiveReloadModule=forceBoolean(u.data.excessiveReloadModule);if(typeof u.data.excessiveReloadLowThreshold!=="undefined"){this.excessiveReloadLowThreshold=parseInt(u.data.excessiveReloadLowThreshold);}
if(typeof u.data.excessiveReloadMediumThreshold!=="undefined"){this.excessiveReloadMediumThreshold=parseInt(u.data.excessiveReloadMediumThreshold);}
if(typeof u.data.excessiveReloadHighThreshold!=="undefined"){this.excessiveReloadHighThreshold=parseInt(u.data.excessiveReloadHighThreshold);}
if(typeof u.data.excessiveReloadEventName!=="undefined"){this.excessiveReloadEventName=u.data.excessiveReloadEventName;}}
if(typeof this.fraudSignals==="function"){this.fraudSignals();}}
if(forceBoolean(u.data.friction_detection)){if(forceBoolean(u.data.consecutiveClickModule)){this.consecutiveClickModule=forceBoolean(u.data.consecutiveClickModule);if(typeof u.data.consecutiveClickClickableThreshold!=="undefined"){this.consecutiveClickClickableThreshold=parseInt(u.data.consecutiveClickClickableThreshold);}
if(typeof u.data.consecutiveClickNonClickableThreshold!=="undefined"){this.consecutiveClickNonClickableThreshold=parseInt(u.data.consecutiveClickNonClickableThreshold);}
if(typeof u.data.consecutiveClickEventName!=="undefined"){this.consecutiveClickEventName=u.data.consecutiveClickEventName;}}
if(forceBoolean(u.data.constantHoverModule)){this.constantHoverModule=forceBoolean(u.data.constantHoverModule);if(typeof u.data.constantHoverThreshold!=="undefined"){this.constantHoverThreshold=parseInt(u.data.constantHoverThreshold);}
if(typeof u.data.constantHoverEventName!=="undefined"){this.constantHoverEventName=u.data.constantHoverEventName;}}
if(forceBoolean(u.data.jsErrorClickModule)){this.jsErrorClickModule=forceBoolean(u.data.jsErrorClickModule);if(typeof u.data.jsErrorClickThreshold!=="undefined"){this.jsErrorClickThreshold=parseInt(u.data.jsErrorClickThreshold);}
if(typeof u.data.jsErrorClickEventName!=="undefined"){this.jsErrorClickEventName=parseInt(u.data.jsErrorClickEventName);}}
if(forceBoolean(u.data.rageClickModule)){this.rageClickModule=forceBoolean(u.data.rageClickModule);if(typeof u.data.rageClickClickableThreshold!=="undefined"){this.rageClickClickableThreshold=parseInt(u.data.rageClickClickableThreshold);}
if(typeof u.data.rageClickNonClickableThreshold!=="undefined"){this.rageClickNonClickableThreshold=parseInt(u.data.rageClickNonClickableThreshold);}
if(typeof u.data.rageClickEventName!=="undefined"){this.rageClickEventName=u.data.rageClickEventName;}}
if(forceBoolean(u.data.repeatedScrollModule)){this.repeatedScrollModule=forceBoolean(u.data.repeatedScrollModule);if(typeof u.data.repeatedScrollMinPercentThreshold!=="undefined"){this.repeatedScrollMinPercentThreshold=parseInt(u.data.repeatedScrollMinPercentThreshold);}
if(typeof u.data.repeatedScrollMaxPercentThreshold!=="undefined"){this.repeatedScrollMaxPercentThreshold=parseInt(u.data.repeatedScrollMaxPercentThreshold);}
if(typeof u.data.repeatedScrollAmountThreshold!=="undefined"){this.repeatedScrollAmountThreshold=parseInt(u.data.repeatedScrollAmountThreshold);}
if(typeof u.data.repeatedScrollEventName!=="undefined"){this.repeatedScrollEventName=u.data.repeatedScrollEventName;}}
if(typeof this.frictionSignals==="function"){this.frictionSignals();}}};utag.ut.loader({"type":"script","src":u.data.livesignals_url,"cb":null,"loc":"script","id":"utag_478_contentsquare_detection_services","attrs":{}});}};u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){utag.DB("send:478");utag.DB(b);var c,d,e,f,udh_collection=[];u.data={"base_url":"//t.contentsquare.net/uxa/##utag_id_project##.js","id_project":"74e63a2dc0c28","custom":{},"path":"","product_id":[],"product_name":[],"product_sku":[],"product_category":[],"product_quantity":[],"product_unit_price":[],"order_id":"","order_total":"","order_shipping":"","order_tax":"","order_currency":"","send_udh_audiences":"true","send_udh_data":{},"friction_detection":"false","fraud_detection":"false","ad_blocker_detection":"false","livesignals_url":"https://ct.contentsquare.net/www/tc/ls_CS.js","sendVarsToCS":"true","sendEventsToReplay":""};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};utag.DB("send:478:EXTENSIONS");utag.DB(b);c=[];for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(e[f].indexOf("custom.")===0){u.data.custom[[e[f].substr(7)]]=b[d];}else if(e[f].indexOf("send_udh_data.")===0||e[f].indexOf("send_data.")===0){u.data.send_udh_data[d]=e[f].split(".")[1];}else if(e[f]==="send_audiences"){u.data.send_udh_audiences=b[d];}else{u.data[e[f]]=b[d];}}}}
utag.DB("send:478:MAPPINGS");utag.DB(u.data);u.data.order_id=u.data.order_id||b._corder||"";u.data.order_total=u.data.order_total||b._ctotal||"";u.data.order_shipping=u.data.order_shipping||b._cship||"";u.data.order_tax=u.data.order_tax||b._ctax||"";u.data.order_currency=u.data.order_currency||b._ccurrency||"";if(u.data.product_id.length===0&&b._cprod!==undefined){u.data.product_id=b._cprod.slice(0);}
if(u.data.product_name.length===0&&b._cprodname!==undefined){u.data.product_name=b._cprodname.slice(0);}
if(u.data.product_sku.length===0&&b._csku!==undefined){u.data.product_sku=b._csku.slice(0);}
if(u.data.product_category.length===0&&b._ccat!==undefined){u.data.product_category=b._ccat.slice(0);}
if(u.data.product_quantity.length===0&&b._cquan!==undefined){u.data.product_quantity=b._cquan.slice(0);}
if(u.data.product_unit_price.length===0&&b._cprice!==undefined){u.data.product_unit_price=b._cprice.slice(0);}
u.data.base_url=u.data.base_url.replace("##utag_id_project##",u.data.id_project);u.data.path=u.data.path||location.pathname+location.hash.replace("#","?__");var custom,customVar;for(custom in u.data.custom){if(u.data.custom.hasOwnProperty(custom)&&custom!==""){customVar=custom.split(".");var customValue=u.data.custom[custom];var canPush=true;if(typeof customValue==='object'){if(!customValue.join('')){canPush=false;}}else{if(!customValue&&customValue!==0){canPush=false;}}
if(canPush){_uxa.push(["setCustomVariable",customVar[0],customVar[1],customValue,3]);}}}
if(forceBoolean(u.data.send_udh_audiences)){Object.keys(b).forEach(function(key){if(key.indexOf("va.audiences.")===0){_uxa.push(["trackDynamicVariable",{"key":"CDP_TL_Audience ID : "+key.substr(key.lastIndexOf("_")+1),"value":b[key]}]);}});}
Object.keys(u.data.send_udh_data).forEach(function(key){_uxa.push(["trackDynamicVariable",{"key":"CDP_TL_Badge ID : "+key.substr(key.lastIndexOf(".")+1),"value":u.data.send_udh_data[key]}]);});if(a==="view"){_uxa.push(["trackPageview",u.data.path]);}else{_uxa.push(["setPath",u.data.path]);}
if(u.data.order_id&&u.data.order_total){_uxa.push(["ecommerce:addTransaction",{"id":u.data.order_id,"revenue":u.data.order_total,"shipping":u.data.order_shipping,"tax":u.data.order_tax,"currency":u.data.order_currency}]);for(f=0;f<u.data.product_id.length;f++){if(u.data.product_name[f]&&u.data.product_sku[f]&&!isNaN(parseFloat(u.data.product_unit_price[f]))&&!isNaN(parseFloat(u.data.product_quantity[f]))){_uxa.push(["ecommerce:addItem",{"id":u.data.order_id,"name":u.data.product_name[f],"sku":u.data.product_sku[f],"category":u.data.product_category[f],"price":u.data.product_unit_price[f],"quantity":u.data.product_quantity[f]}]);}else{utag.DB(u.id+" (ContentSquare): Item not tracked in transaction: Required attribute(s) not populated");}}
_uxa.push(["ecommerce:send"]);}else{utag.DB(u.id+" (ContentSquare): Transaction not tracked: Required attribute(s) not populated");}
if(!u.livesignals_requested&&(forceBoolean(u.data.fraud_detection)||forceBoolean(u.data.friction_detection)||forceBoolean(u.data.ad_blocker_detection))){_uxa.push(["afterPageView",u.contentsquareSignalsCallback]);}
if(!u.scriptrequested){u.scriptrequested=true;u.loader({"type":"script","src":u.data.base_url,"cb":null,"loc":"script","id":"utag_478","attrs":{}});}
utag.DB("send:478:COMPLETE");}};utag.o[loader].loader.LOAD(id);}("478","newbalance.nb-us-new"));}catch(error){utag.DB(error);}
