<<<<<<< HEAD
function getURLParameter(e){return decodeURI((RegExp(e+"="+"(.+?)(&|$)").exec(location.search)||[,null])[1])}(function(e){e.fn.mostSlider=function(t){function d(){l=setInterval(function(){r.next()},n.pauseTime+n.aniSpeed)}var n=e.extend({animation:"fade",aniSpeed:1e3,background_center:!1,autoPlay:!0,pauseTime:3e3,metrics:{width:0,height:0},thumbnails:!1,navigation:!0,hideArrows:!0,linkable:!1,transparancy:!1,contentClass:"content",sbsContent:!1,contentAniDelay:300,socialButtons:!1,socialUrl:"",twitterID:""},t),r=this,i=r.width(),s=n.metrics.height/n.metrics.width,o=r.children(),u=o.length,a=1,f="right",l,c=!1,h=!1;r.css({position:"relative",width:"100%","line-height":"0"});r.children().each(function(t){switch(n.animation){default:e(this).css({width:"100%",height:"auto","line-height":"auto",position:"absolute","z-index":0,display:"none",overflow:"hidden"}).attr("id",t+1);e(this).is("iframe")&&e(this).css({width:r.find("#1").width(),height:r.find("#1").height()});e(this).find("> img:only-child").css({width:"100%",height:"auto"});e(this).find("> a > img:only-child").css({width:"100%",height:"auto"});if(e(this).find("img.bg").length>0)if(n.background_center==1&&n.metrics.width>0&&n.metrics.width!=""&&n.metrics.height>0&&n.metrics.height!=""){e(this).css({"background-image":"url("+e(this).find("img.bg").attr("src")+")","background-repeat":"no-repeat","background-position":"center center","background-size":"cover","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover"});e(this).find("img.bg").hide()}else e(this).find("img.bg").css({width:"100%",height:"auto"})}if(n.socialButtons==1){e(this).prepend('<div class="social" />');var i="none";e(this).attr("data-social")!=undefined&&(i=e(this).attr("data-social"));if(i.indexOf("facebook")>=0&&n.twitterID!=""){var s=document.URL,o=parseInt(t)+1;s.indexOf("?")>0?s=s+"&slider="+o:s=s+"?slider="+o;s=s.replace(/\:/g,"%3A").replace(/\//g,"%2F").replace(/\=/g,"%3D").replace(/\?/g,"%3F").replace(/\-/g,"%2D");e(this).find(".social").prepend('<div id="facebook"><iframe src="//www.facebook.com/plugins/like.php?href='+s+'&amp;width=130&amp;height=21&amp;colorscheme=light&amp;layout=button_count&amp;data-layout=simple&amp;action=like&amp;show_faces=false&amp;send=false" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:130px; height:21px;" allowTransparency="true"></iframe></div>')}if(i.indexOf("pinterest")>=0&&n.socialUrl!=""&&e(this).find(".pinterest").length==1){var s=n.socialUrl.replace(/:/g,"%3A").replace(/\//g,"%2F"),u=e(this).find(".pinterest"),a=u.get(0).src.replace(/:/g,"%3A").replace(/\//g,"%2F"),f=u.attr("alt");f=="undefined"&&(f="");e(this).find(".social").prepend('<div id="pinterest"><a href="//pinterest.com/pin/create/button/?url='+s+"&media="+a+"&description="+f+'" data-pin-do="buttonPin" data-pin-config="none"><img src="//assets.pinterest.com/images/pidgets/pin_it_button.png" /></a></div>')}if(i.indexOf("twitter")>=0&&n.twitterID!=""){var s=document.URL,o=parseInt(t)+1;if(s.indexOf("?")>0&&s.search("slider=")>0){slider_url=s.substr(s.search("slider="),8);s=s.replace(slider_url,"slider="+o)}else s.indexOf("?")>0&&s.search("slider=")<0?s=s+"&slider="+o:s=s+"?slider="+o;e(this).find(".social").prepend('<div id="twitter"><a href="https://twitter.com/share" class="twitter-share-button" data-text="'+s+'" data-url="'+s+'" data-via="'+n.twitterID+'" data-lang="de" data-count="none">Twittern</a></div>')}}});n.animation=="slide"?r.wrapInner('<div id="slides" style="position:absolute;width:100%;height:100%;overflow:hidden;line-height:0;" />'):r.wrapInner('<div id="slides" style="line-height:0;overflow:hidden;" />');this.init=function(){r.css("display","block");if(n.metrics.width>0&&n.metrics.height>0)if(r.width()<n.metrics.width){var e=s*r.width();r.find("#slides").css("height",e).children().css("height",e)}else r.find("#slides").css("height",n.metrics.height).children().css("height",n.metrics.height);else{var e=r.find("#slides #1").height();r.find("#slides").css("height",e).css("height",e)}h=!0};e(window).resize(function(){n.metrics.width>0&&n.metrics.height>0?r.width()<n.metrics.width?r.find("#slides").css("height",s*r.width()).children().css("height",s*r.width()):r.find("#slides").css("height",n.metrics.height).children().css("height",n.metrics.height):r.find("#slides").css("height",r.find("#slides #1").height())});r.find(".center").each(function(){e(this).css("display:","inline-block")});r.find(".fade").each(function(){e(this).css("display","none")});r.find(".from-top").each(function(){e(this).css({opacity:0,"margin-top":0})});r.find(".from-bottom").each(function(){e(this).css({opacity:0,"margin-top":0})});r.find(".from-left").each(function(){e(this).css({opacity:0,"margin-top":0})});r.find(".from-right").each(function(){e(this).css({opacity:0,"margin-top":0})});if(n.navigation==1){r.append('<div id="bullets" />');for(var p=1;p<=u;p++){n.thumbnails==1?r.find("#bullets").append('<div class="bullet" id="'+p+'"><img src="'+r.find("#slides #"+p).attr("data-thumb")+'" /></div>'):r.find("#bullets").append('<div class="bullet" id="'+p+'" />');p==1&&e("#bullets > #1").addClass("selected")}r.prepend('<div id="left" class="slider-nav" /><div id="right" class="slider-nav" />');if(n.hideArrows==1){r.find(".slider-nav").css("display","none");r.mouseenter(function(){r.find(".slider-nav").fadeIn(200)});r.mouseleave(function(){r.find(".slider-nav").fadeOut(200)})}}n.facebook==1&&n.socialButtons==1&&r.prepend('<div id="fb-root"></div>');this.goTo=function(e){if(c==0){c=!0;r.queue(function(){var t=a;e=parseInt(e);if(e<=u&&e>0&&e!=a&&e!=null&&e!=""){a=e;r.hideInner(a);r.find("#bullets > #"+t).removeClass("selected");r.find("#bullets > #"+a).addClass("selected");r.find("#slides #"+t).css("z-index",0);switch(n.animation){case"fade":if(n.transparancy==1){r.find("#slides #"+a).css("z-index",5).fadeIn(n.aniSpeed);r.find("#slides #"+t).css("z-index",5).fadeOut(n.aniSpeed,function(){r.showInner(a);r.hideInner(t);c=!1})}else r.find("#slides #"+a).css("z-index",5).fadeIn(n.aniSpeed,function(){r.find("#slides #"+t).css("display","none");r.showInner(a);r.hideInner(t);c=!1});break;case"slidedown":r.find("#slides #"+a).css("z-index",5).slideDown(n.aniSpeed,function(){r.find("#slides #"+t).css("display","none");r.showInner(a);r.hideInner(t);c=!1});break;case"slideup":r.find("#slides #"+a).css({"z-index":5,display:"block"});r.find("#slides #"+t).css("z-index",10).slideUp(n.aniSpeed,function(){r.find("#slides #"+t).css({"z-index":0,display:"none"});r.showInner(a);r.hideInner(t);c=!1});break;case"slide":var i=r.find("#slides #"+a),s=r.find("#slides #"+t);switch(f){case"right":i.css({"margin-left":s.width(),display:"block"}).animate({"margin-left":0},n.aniSpeed);s.css("margin-left",0).animate({"margin-left":s.width()*-1},n.aniSpeed,function(){s.css({"z-index":0,display:"none"});r.showInner(a);r.hideInner(t);c=!1});break;case"left":i.css({"margin-left":s.width()*-1,display:"block"}).animate({"margin-left":0},n.aniSpeed);s.css("margin-left",0).animate({"margin-left":s.width()},n.aniSpeed,function(){s.css({"z-index":0,display:"none"});r.showInner(a);r.hideInner(t);c=!1})}}}else console.log("ERROR in goTo Function: "+e+" is an unvalid index. (mostSlider)");r.clearQueue();return r})}};this.next=function(){var e;a<u?e=a+1:e=1;f="right";r.goTo(e);return r};this.prev=function(){var e;a<=1?e=u:e=a-1;f="left";r.goTo(e);return r};this.showInner=function(t){var i=0;n.sbsContent==1&&(i=n.contentAniDelay);var s=0;r.find("#"+t+" ."+n.contentClass).each(function(){var t=e(this);setTimeout(function(){if(t.hasClass("fade"))t.fadeIn();else if(t.hasClass("from-top")){t.css({"margin-top":"-20px"});t.animate({"margin-top":"0px",opacity:1})}else if(t.hasClass("from-bottom")){t.css({"margin-top":"20px"});t.animate({"margin-top":"0px",opacity:1})}else if(t.hasClass("from-left")){t.css({"margin-right":"30px"});t.animate({"margin-right":"0px",opacity:1})}else if(t.hasClass("from-right")){t.css({"margin-left":"30px"});t.animate({"margin-left":"0px",opacity:1})}},s);s+=i});return r};this.hideInner=function(e){r.find("#"+e+" .fade").css("display","none");r.find("#"+e+" .from-top").css("opacity",0);r.find("#"+e+" .from-bottom").css("opacity",0);r.find("#"+e+" .from-left").css("opacity",0);r.find("#"+e+" .from-right").css("opacity",0);return r};r.find("#right").click(function(){r.next();if(n.autoPlay==1){clearInterval(l);d()}});r.find("#left").click(function(){r.prev();if(n.autoPlay==1){clearInterval(l);d()}});r.find(".bullet").click(function(){e(this).attr("id")>a?f="right":f="left";r.goTo(e(this).attr("id"));if(n.autoPlay==1){clearInterval(l);d()}});n.autoPlay==1&&d();r.find("#slides #"+a).css("display","block");r.find("#bullets #"+a).addClass("selected");r.showInner(a);if(n.linkable==1){var v=getURLParameter("slider");v>0&&v<=u&&r.goTo(v)}var m=r.find("img").length;r.find("img").load(function(){h==0&&r.init()}).each(function(t){this.complete&&t==m-1&&e(this).load()});return r}})(jQuery);(function(e){var t=e.getElementsByTagName("SCRIPT")[0],n=e.createElement("SCRIPT");n.type="text/javascript";n.async=!0;n.src="//assets.pinterest.com/js/pinit.js";t.parentNode.insertBefore(n,t)})(document);(function(e,t,n){var r,i=e.getElementsByTagName(t)[0];if(e.getElementById(n))return;r=e.createElement(t);r.id=n;r.src="//connect.facebook.net/de_DE/all.js#xfbml=1";i.parentNode.insertBefore(r,i)})(document,"script","facebook-jssdk");!function(e,t,n){var r,i=e.getElementsByTagName(t)[0],s=/^http:/.test(e.location)?"http":"https";if(!e.getElementById(n)){r=e.createElement(t);r.id=n;r.src=s+"://platform.twitter.com/widgets.js";i.parentNode.insertBefore(r,i)}}(document,"script","twitter-wjs");
=======
function getURLParameter(e){return decodeURI((RegExp(e+"="+"(.+?)(&|$)").exec(location.search)||[,null])[1])}(function(e){e.fn.mostSlider=function(t){function v(){l=setInterval(function(){r.next()},n.pauseTime+n.aniSpeed)}var n=e.extend({animation:"fade",aniSpeed:1e3,background_center:!1,autoPlay:!0,pauseTime:3e3,metrics:{width:0,height:0},solidHeight:!1,thumbnails:!1,thumb_bg:!1,navigation:!0,hideArrows:!0,linkable:!1,transparancy:!1,contentClass:"content",sbsContent:!1,contentAniDelay:300,responsive_images:!1,responsive_break_tablet:481,responsive_break_desktop:1024,socialButtons:!1,socialUrl:"",twitterID:""},t),r=this,i=r.width(),s=n.metrics.height/n.metrics.width,o=r.children(),u=o.length,a=1,f="right",l,c=!1,h=!1,p=!1;if(e("html").is(".ie6, .ie7, .ie8")||e("body").is(".ie6, .ie7, .ie8"))p=!0;r.css({position:"relative",width:"100%","line-height":"0"});r.children().each(function(t){if(n.responsive_images=!0){var i=e(window).width();e(this).find("img[data-responsive-images='true']").each(function(){i>=n.responsive_break_desktop?e(this).attr("src",e(this).attr("data-image-desktop")):i>=n.responsive_break_tablet&&e(this).attr("src",e(this).attr("data-image-tablet"))})}switch(n.animation){default:e(this).css({width:"100%",height:"auto","line-height":"auto",position:"absolute","z-index":0,display:"none",overflow:"hidden"}).attr("id",t+1);e(this).is("iframe")&&e(this).css({width:r.find("#1").width(),height:r.find("#1").height()});e(this).find("> img:only-child").css({width:"100%",height:"auto"});e(this).find("> a > img:only-child").css({width:"100%",height:"auto"});if(e(this).find("img.portrait").length>0){e(this).find("img.portrait").css({width:"auto",height:"100%"});n.transparancy=!0}if(e(this).find("img.bg").length>0)if(n.background_center==1&&n.metrics.width>0&&n.metrics.width!=""&&n.metrics.height>0&&n.metrics.height!=""){e(this).css({"background-image":"url("+e(this).find("img.bg").attr("src")+")","background-repeat":"no-repeat","background-position":"center center","background-size":"cover","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover"});p&&e(this).css({filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(src="+e(this).find("img.bg").attr("src")+",sizingMethod='scale')","-ms-filter":'"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='+e(this).find("img.bg").attr("src")+",sizingMethod='scale')\""});e(this).find("img.bg").hide()}else e(this).find("img.bg").css({width:"100%",height:"auto"})}if(n.socialButtons==1){e(this).prepend('<div class="social" />');var s="none";e(this).attr("data-social")!=undefined&&(s=e(this).attr("data-social"));if(s.indexOf("facebook")>=0&&n.twitterID!=""){var o=document.URL,u=parseInt(t)+1;o.indexOf("?")>0?o=o+"&slider="+u:o=o+"?slider="+u;o=o.replace(/\:/g,"%3A").replace(/\//g,"%2F").replace(/\=/g,"%3D").replace(/\?/g,"%3F").replace(/\-/g,"%2D");e(this).find(".social").prepend('<div id="facebook"><iframe src="//www.facebook.com/plugins/like.php?href='+o+'&amp;width=130&amp;height=21&amp;colorscheme=light&amp;layout=button_count&amp;data-layout=simple&amp;action=like&amp;show_faces=false&amp;send=false" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:130px; height:21px;" allowTransparency="true"></iframe></div>')}if(s.indexOf("pinterest")>=0&&n.socialUrl!=""&&e(this).find(".pinterest").length==1){var o=n.socialUrl.replace(/:/g,"%3A").replace(/\//g,"%2F"),a=e(this).find(".pinterest"),f=a.get(0).src.replace(/:/g,"%3A").replace(/\//g,"%2F"),l=a.attr("alt");l=="undefined"&&(l="");e(this).find(".social").prepend('<div id="pinterest"><a href="//pinterest.com/pin/create/button/?url='+o+"&media="+f+"&description="+l+'" data-pin-do="buttonPin" data-pin-config="none"><img src="//assets.pinterest.com/images/pidgets/pin_it_button.png" /></a></div>')}if(s.indexOf("twitter")>=0&&n.twitterID!=""){var o=document.URL,u=parseInt(t)+1;if(o.indexOf("?")>0&&o.search("slider=")>0){slider_url=o.substr(o.search("slider="),8);o=o.replace(slider_url,"slider="+u)}else o.indexOf("?")>0&&o.search("slider=")<0?o=o+"&slider="+u:o=o+"?slider="+u;e(this).find(".social").prepend('<div id="twitter"><a href="https://twitter.com/share" class="twitter-share-button" data-text="'+o+'" data-url="'+o+'" data-via="'+n.twitterID+'" data-lang="de" data-count="none">Twittern</a></div>')}}});n.animation=="slide"?r.wrapInner('<div style="position:relative;width:100%;height:100%;"><div id="slides" style="position:absolute;width:100%;height:100%;overflow:hidden;line-height:0;" /></div>'):r.wrapInner('<div id="slides" style="line-height:0;overflow:hidden;" />');this.init=function(){r.css("display","block");if(n.metrics.width>0&&n.metrics.height>0)if(r.width()<n.metrics.width&&n.solidHeight==0){var e=s*r.width();r.find("#slides").css("height",e).children().css("height",e);n.animation=="slide"&&r.css("height",e)}else r.find("#slides").css("height",n.metrics.height).children().css("height",n.metrics.height);else{var e=r.find("#slides #1").height();r.find("#slides").css("height",e).css("height",e)}h=!0};e(window).resize(function(){n.metrics.width>0&&n.metrics.height>0?r.width()<n.metrics.width&&n.solidHeight==0?r.find("#slides").css("height",s*r.width()).children().css("height",s*r.width()):r.find("#slides").css("height",n.metrics.height).children().css("height",n.metrics.height):r.find("#slides").css("height",r.find("#slides #1").height())});r.find(".center").each(function(){e(this).css("display:","inline-block")});r.find(".fade").each(function(){e(this).css("display","none")});r.find(".from-top").each(function(){e(this).css({opacity:0,"margin-top":0})});r.find(".from-bottom").each(function(){e(this).css({opacity:0,"margin-top":0})});r.find(".from-left").each(function(){e(this).css({opacity:0,"margin-top":0})});r.find(".from-right").each(function(){e(this).css({opacity:0,"margin-top":0})});if(n.navigation==1){r.append('<div id="bullets" />');for(var d=1;d<=u;d++){n.thumbnails==1?n.thumb_bg==1?r.find("#bullets").append('<div class="bullet" style="background-image:url('+r.find("#slides #"+d).attr("data-thumb")+');" id="'+d+'"></div>'):r.find("#bullets").append('<div class="bullet" id="'+d+'"><img src="'+r.find("#slides #"+d).attr("data-thumb")+'" /></div>'):r.find("#bullets").append('<div class="bullet" id="'+d+'" />');d==1&&e("#bullets > #1").addClass("selected")}r.prepend('<div id="left" class="slider-nav" /><div id="right" class="slider-nav" />');if(n.hideArrows==1){r.find(".slider-nav").css("display","none");r.mouseenter(function(){r.find(".slider-nav").fadeIn(200)});r.mouseleave(function(){r.find(".slider-nav").fadeOut(200)})}}n.facebook==1&&n.socialButtons==1&&r.prepend('<div id="fb-root"></div>');this.goTo=function(e){if(c==0){c=!0;r.queue(function(){var t=a;e=parseInt(e);if(e<=u&&e>0&&e!=a&&e!=null&&e!=""){a=e;r.hideInner(a);r.find("#bullets > #"+t).removeClass("selected");r.find("#bullets > #"+a).addClass("selected");r.find("#slides #"+t).css("z-index",0);switch(n.animation){case"fade":if(n.transparancy==1){r.find("#slides #"+a).css("z-index",5).fadeIn(n.aniSpeed);r.find("#slides #"+t).css("z-index",5).fadeOut(n.aniSpeed,function(){r.showInner(a);r.hideInner(t);c=!1})}else r.find("#slides #"+a).css("z-index",5).fadeIn(n.aniSpeed,function(){r.find("#slides #"+t).css("display","none");r.showInner(a);r.hideInner(t);c=!1});break;case"slidedown":r.find("#slides #"+a).css("z-index",5).slideDown(n.aniSpeed,function(){r.find("#slides #"+t).css("display","none");r.showInner(a);r.hideInner(t);c=!1});break;case"slideup":r.find("#slides #"+a).css({"z-index":5,display:"block"});r.find("#slides #"+t).css("z-index",10).slideUp(n.aniSpeed,function(){r.find("#slides #"+t).css({"z-index":0,display:"none"});r.showInner(a);r.hideInner(t);c=!1});break;case"slide":var i=r.find("#slides #"+a),s=r.find("#slides #"+t);switch(f){case"right":i.css({"margin-left":s.width(),display:"block"}).animate({"margin-left":0},n.aniSpeed);s.css("margin-left",0).animate({"margin-left":s.width()*-1},n.aniSpeed,function(){s.css({"z-index":0,display:"none"});r.showInner(a);r.hideInner(t);c=!1});break;case"left":i.css({"margin-left":s.width()*-1,display:"block"}).animate({"margin-left":0},n.aniSpeed);s.css("margin-left",0).animate({"margin-left":s.width()},n.aniSpeed,function(){s.css({"z-index":0,display:"none"});r.showInner(a);r.hideInner(t);c=!1})}}}else console.log("ERROR in goTo Function: "+e+" is an unvalid index. (mostSlider)");r.clearQueue();return r})}};this.next=function(){var e;a<u?e=a+1:e=1;f="right";r.goTo(e);return r};this.prev=function(){var e;a<=1?e=u:e=a-1;f="left";r.goTo(e);return r};this.showInner=function(t){var i=0;n.sbsContent==1&&(i=n.contentAniDelay);var s=0;r.find("#"+t+" ."+n.contentClass).each(function(){var t=e(this);setTimeout(function(){if(t.hasClass("fade"))t.fadeIn();else if(t.hasClass("from-top")){t.css({"margin-top":"-20px"});t.animate({"margin-top":"0px",opacity:1})}else if(t.hasClass("from-bottom")){t.css({"margin-top":"20px"});t.animate({"margin-top":"0px",opacity:1})}else if(t.hasClass("from-left")){t.css({"margin-right":"30px"});t.animate({"margin-right":"0px",opacity:1})}else if(t.hasClass("from-right")){t.css({"margin-left":"30px"});t.animate({"margin-left":"0px",opacity:1})}},s);s+=i});return r};this.hideInner=function(e){r.find("#"+e+" .fade").css("display","none");r.find("#"+e+" .from-top").css("opacity",0);r.find("#"+e+" .from-bottom").css("opacity",0);r.find("#"+e+" .from-left").css("opacity",0);r.find("#"+e+" .from-right").css("opacity",0);return r};r.find("#right").click(function(){r.next();if(n.autoPlay==1){clearInterval(l);v()}});r.find("#left").click(function(){r.prev();if(n.autoPlay==1){clearInterval(l);v()}});r.find(".bullet").click(function(){e(this).attr("id")>a?f="right":f="left";r.goTo(e(this).attr("id"));if(n.autoPlay==1){clearInterval(l);v()}});n.autoPlay==1&&v();r.find("#slides #"+a).css("display","block");r.find("#bullets #"+a).addClass("selected");r.showInner(a);if(n.linkable==1){var m=getURLParameter("slider");m>0&&m<=u&&r.goTo(m)}var g=r.find("img").length;r.find("img").load(function(){h==0&&r.init()}).each(function(t){this.complete&&t==g-1&&e(this).load()});return r}})(jQuery);(function(e){var t=e.getElementsByTagName("SCRIPT")[0],n=e.createElement("SCRIPT");n.type="text/javascript";n.async=!0;n.src="//assets.pinterest.com/js/pinit.js";t.parentNode.insertBefore(n,t)})(document);(function(e,t,n){var r,i=e.getElementsByTagName(t)[0];if(e.getElementById(n))return;r=e.createElement(t);r.id=n;r.src="//connect.facebook.net/de_DE/all.js#xfbml=1";i.parentNode.insertBefore(r,i)})(document,"script","facebook-jssdk");!function(e,t,n){var r,i=e.getElementsByTagName(t)[0],s=/^http:/.test(e.location)?"http":"https";if(!e.getElementById(n)){r=e.createElement(t);r.id=n;r.src=s+"://platform.twitter.com/widgets.js";i.parentNode.insertBefore(r,i)}}(document,"script","twitter-wjs");
>>>>>>> parent of 1b6f744... removed unused things
