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

$(".contact_btn").on('click',function(){$(".contact_btn i").removeClass('d-none');var post_data,output;var proceed="true";var str=$('#contact-form-data').serializeArray();$('#contact-form-data input').each(function(){if(!$(this).val()){proceed="false";}});if(proceed==="true"){var pathArray=window.location.pathname.split('/');var secondLevelLocation=pathArray[3];var accessURL;if(secondLevelLocation){accessURL="../vendor/contact-mailer.php";}else{accessURL="vendor/contact-mailer.php";}
$.ajax({type:'POST',url:accessURL,data:str,dataType:'json',success:function(response){if(response.type=='error'){output='<div class="alert-danger" style="padding:10px 15px; margin-bottom:30px;">'+response.text+'</div>';}else{output='<div class="alert-success" style="padding:10px 15px; margin-bottom:30px;">'+response.text+'</div>';$('.contact-form input').val('');$('.contact-form textarea').val('');}
if($("#result").length){$("#result").hide().html(output).slideDown();$(".contact_btn i").addClass('d-none');}else{if(response.type=='error'){Swal.fire({type:'error',icon:'error',title:'Oops...',html:'<div class="text-danger">'+response.text+'</div>',})
$(".contact_btn i").addClass('d-none');}else{Swal.fire({type:'success',icon:'success',title:'Success!',html:'<div class="text-success">'+response.text+'</div>',})
$(".contact_btn i").addClass('d-none');}}},error:function(){alert("Failer");}});}
else
{if($("#result").length){output='<div class="alert-danger" style="padding:10px 15px; margin-bottom:30px;">Please provide the missing fields.</div>';$("#result").hide().html(output).slideDown();$(".contact_btn i").addClass('d-none');}else{Swal.fire({icon:'error',type:'error',title:'Oops...',html:'<div class="text-danger">Please provide the missing fields.</div>'})
$(".contact_btn i").addClass('d-none');}}});$(".modal_contact_btn").on('click',function(){$(".modal_contact_btn i").removeClass('d-none');var post_data,output;var proceed="true";var str=$('#modal-contact-form-data').serializeArray();$('#modal-contact-form-data input').each(function(){if(!$(this).val()){proceed="false";}});if(proceed==="true"){var pathArray=window.location.pathname.split('/');var secondLevelLocation=pathArray[3];var accessURL;if(secondLevelLocation){accessURL="../vendor/contact-mailer.php";}else{accessURL="vendor/contact-mailer.php";}
$.ajax({type:'POST',url:accessURL,data:str,dataType:'json',success:function(response){if(response.type=='error'){output='<div class="alert-danger" style="padding:10px 15px; margin-bottom:30px;">'+response.text+'</div>';}else{output='<div class="alert-success" style="padding:10px 15px; margin-bottom:30px;">'+response.text+'</div>';$('.contact-form input').val('');$('.contact-form textarea').val('');}
if($("#quote_result").length){$("#quote_result").hide().html(output).slideDown();$(".modal_contact_btn i").addClass('d-none');}else{if(response.type=='error'){Swal.fire({type:'error',icon:'error',title:'Oops...',html:'<div class="text-danger">'+response.text+'</div>',})
$(".modal_contact_btn i").addClass('d-none');}else{Swal.fire({type:'success',icon:'success',title:'Success!',html:'<div class="text-success">'+response.text+'</div>',})
$(".modal_contact_btn i").addClass('d-none');}}},error:function(){alert("Failer");}});}
else{if($("#quote_result").length){output='<div class="alert-danger" style="padding:10px 15px; margin-bottom:30px;">Please provide the missing fields.</div>';$("#quote_result").hide().html(output).slideDown();$(".modal_contact_btn i").addClass('d-none');}else{Swal.fire({icon:'error',type:'error',title:'Oops...',html:'<div class="text-danger">Please provide the missing fields.</div>'})
$(".modal_contact_btn i").addClass('d-none');}}});

}
/*
     FILE ARCHIVED ON 02:44:59 Feb 10, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 05:51:49 Oct 30, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 2.654
  exclusion.robots: 0.037
  exclusion.robots.policy: 0.022
  esindex: 0.014
  cdx.remote: 26.364
  LoadShardBlock: 80.648 (3)
  PetaboxLoader3.datanode: 117.418 (4)
  PetaboxLoader3.resolve: 45.971 (2)
  load_resource: 85.968
*/