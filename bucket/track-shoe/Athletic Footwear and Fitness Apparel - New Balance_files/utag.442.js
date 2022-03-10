//tealium universal tag - utag.442 ut4.0.202108271627, Copyright 2021 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1,'link':1};u.initialized=false;u.map={"_emarsys_account":"account_id","page_type":"page_type","customer_email":"customer_email","event_type":"event_name","category_path":"category","search_term":"search_term","ut.env":"env","cart_product_variant_id":"cart_product_id","cart_product_quantity":"cart_product_quantity","cart_product_unit_price":"cart_product_unit_price"};u.extend=[function(a,b){try{if(/^cart_add/i.test(b['event_type'])){b['event_type']='cart_add'}}catch(e){utag.DB(e);}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={"account_id":"","base_url":"","page_type":"","customer_email":"","customer_id":"","event_name":"","category":"","search_term":"","env":"","cart_product_id":[],"cart_product_unit_price":[],"cart_product_quantity":[],"order_id":"","order_total":"","order_shipping":"","order_tax":"","order_currency":"","customer_city":"","customer_country":"","product_id":[],"product_name":[],"product_category":[],"product_quantity":[],"product_unit_price":[]};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
u.data.base_url="//cdn.scarabresearch.com/js/"+u.data.account_id+"/scarab-v2.js";u.data.order_id=u.data.order_id||b._corder||"";u.data.order_total=u.data.order_total||b._ctotal||"";u.data.order_shipping=u.data.order_shipping||b._cship||"";u.data.order_tax=u.data.order_tax||b._ctax||"";u.data.customer_city=u.data.customer_city||b._ccity||"";u.data.customer_country=u.data.customer_country||b._ccountry||"";u.data.order_currency=u.data.order_currency||b._ccurrency||"";if(u.data.product_id.length===0&&b._cprod!==undefined){u.data.product_id=b._cprod.slice(0);}
if(u.data.product_name.length===0&&b._cprodname!==undefined){u.data.product_name=b._cprodname.slice(0);}
if(u.data.product_category.length===0&&b._ccat!==undefined){u.data.product_category=b._ccat.slice(0);}
if(u.data.product_quantity.length===0&&b._cquan!==undefined){u.data.product_quantity=b._cquan.slice(0);}
if(u.data.product_unit_price.length===0&&b._cprice!==undefined){u.data.product_unit_price=b._cprice.slice(0);}
var productcartcontent=[];for(var i=0;i<u.data.product_id.length;i++){var qty=parseInt(u.data.product_quantity[i]||1);var price=parseFloat(u.data.product_unit_price[i]||0)
productcartcontent.push({"item":u.data.product_id[i],"quantity":qty,"price":(price*qty),});}
var allpagescartcontent;if(u.data.cart_product_id&&u.data.cart_product_id.length){allpagescartcontent=[];for(var i=0;i<u.data.cart_product_id.length;i++){var qty=parseInt(u.data.cart_product_quantity[i]||1);var price=parseFloat(u.data.cart_product_unit_price[i]||0)
allpagescartcontent.push({"item":u.data.cart_product_id[i],"quantity":qty,"price":(price*qty),});}}
window.ScarabQueue=window.ScarabQueue||[];if(a==='view'){if(u.data.env!=="prod"){}
if(u.data.customer_id){ScarabQueue.push(["setCustomerId",u.data.customer_id]);}
if(u.data.customer_email){ScarabQueue.push(["setEmail",u.data.customer_email]);}
if(u.data.page_type==='product'){ScarabQueue.push(['view',u.data.product_id[0]]);}
if(u.data.page_type==='category'){ScarabQueue.push(['category',u.data.category]);}
if(u.data.page_type==='search'){ScarabQueue.push(['searchTerm',u.data.search_term]);}
if(u.data.page_type==='cart'||u.data.page_type==='checkout'){ScarabQueue.push(['cart',allpagescartcontent||productcartcontent]);}
if(u.data.order_currency){ScarabQueue.push(['displayCurrency',u.data.order_currency.toLowerCase()]);}
if(u.data.order_id){ScarabQueue.push(['purchase',{"orderId":u.data.order_id,"items":productcartcontent}]);ScarabQueue.push(['cart',[]]);}
if(u.data.page_type!=='cart'&&u.data.page_type!=='checkout'&&!u.data.order_id){ScarabQueue.push(['cart',allpagescartcontent||[]]);}
ScarabQueue.push(['go']);}
if(a==='link'){var fireGo=false;if(u.data.event_name==='cart_add'){if(u.data.env!=="prod"){}
ScarabQueue.push(['cart',allpagescartcontent||productcartcontent]);fireGo=true;}
if(u.data.customer_email){ScarabQueue.push(["setEmail",u.data.customer_email]);fireGo=true;}
if(fireGo){ScarabQueue.push(['go']);}}
u.loader_cb=function(){u.initialized=true;};if(!u.initialized){u.loader({"type":"script","src":u.data.base_url,"cb":u.loader_cb,"loc":"script","id":'utag_442'});}else{u.loader_cb();}
}};utag.o[loader].loader.LOAD(id);})("442","newbalance.nb-us-new");}catch(error){utag.DB(error);}
