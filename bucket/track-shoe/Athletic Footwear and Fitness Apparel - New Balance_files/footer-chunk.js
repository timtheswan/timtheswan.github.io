(window.webpackJsonp=window.webpackJsonp||[]).push([["footer-chunk"],{"../storefront-reference-architecture/cartridges/app_storefront_base/cartridge/client/default/js/components/footer.js":
/*!****************************************************************************************************************************!*\
  !*** ../storefront-reference-architecture/cartridges/app_storefront_base/cartridge/client/default/js/components/footer.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */function(e,t,s){"use strict";var a=s(/*! ./scrollAnimate */"../storefront-reference-architecture/cartridges/app_storefront_base/cartridge/client/default/js/components/scrollAnimate.js");function n(e,t){var s;$.spinner().stop(),s=e.success?"alert-success":"alert-danger",0===$(".email-signup-message").length&&$("body").append('<div class="email-signup-message"></div>'),$(".email-signup-message").append('<div class="email-signup-alert text-center '+s+'">'+e.msg+"</div>"),setTimeout((function(){$(".email-signup-message").remove(),t.removeAttr("disabled")}),3e3)}e.exports=function(){$(".back-to-top").click((function(){a()})),$(".subscribe-email").on("click",(function(e){e.preventDefault();var t=$(this).data("href"),s=$(this),a=$("input[name=hpEmailSignUp]").val();$.spinner().start(),$(this).attr("disabled",!0),$.ajax({url:t,type:"post",dataType:"json",data:{emailId:a},success:function(e){n(e,s)},error:function(e){n(e,s)}})}))}}}]);
//# sourceMappingURL=footer-chunk.js.map