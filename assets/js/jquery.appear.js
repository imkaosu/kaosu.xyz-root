var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function($){$.fn.appear=function(fn,options){var settings=$.extend({data:undefined,one:true,accX:0,accY:0},options);return this.each(function(){var t=$(this);t.appeared=false;if(!fn){t.trigger('appear',settings.data);return;}
var w=$(window);var check=function(){if(!t.is(':visible')){t.appeared=false;return;}
var a=w.scrollLeft();var b=w.scrollTop();var o=t.offset();var x=o.left;var y=o.top;var ax=settings.accX;var ay=settings.accY;var th=t.height();var wh=w.height();var tw=t.width();var ww=w.width();if(y+th+ay>=b&&y<=b+wh+ay&&x+tw+ax>=a&&x<=a+ww+ax){if(!t.appeared)t.trigger('appear',settings.data);}else{t.appeared=false;}};var modifiedFn=function(){t.appeared=true;if(settings.one){w.unbind('scroll',check);var i=$.inArray(check,$.fn.appear.checks);if(i>=0)$.fn.appear.checks.splice(i,1);}
fn.apply(this,arguments);};if(settings.one)t.one('appear',settings.data,modifiedFn);else t.bind('appear',settings.data,modifiedFn);w.scroll(check);$.fn.appear.checks.push(check);(check)();});};$.extend($.fn.appear,{checks:[],timeout:null,checkAll:function(){var length=$.fn.appear.checks.length;if(length>0)while(length--)($.fn.appear.checks[length])();},run:function(){if($.fn.appear.timeout)clearTimeout($.fn.appear.timeout);$.fn.appear.timeout=setTimeout($.fn.appear.checkAll,20);}});$.each(['append','prepend','after','before','attr','removeAttr','addClass','removeClass','toggleClass','remove','css','show','hide'],function(i,n){var old=$.fn[n];if(old){$.fn[n]=function(){var r=old.apply(this,arguments);$.fn.appear.run();return r;}}});})(jQuery);

}
/*
     FILE ARCHIVED ON 02:44:59 Feb 10, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 05:47:35 Oct 30, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.988
  exclusion.robots: 0.058
  exclusion.robots.policy: 0.029
  esindex: 0.017
  cdx.remote: 68.978
  LoadShardBlock: 135.257 (3)
  PetaboxLoader3.datanode: 81.277 (4)
  PetaboxLoader3.resolve: 110.882 (2)
  load_resource: 61.675
*/