if (document.querySelector('.video-js')){
 var clock = document.createElement('div');
 clock.id = "leo_clock";
 var leoclockdate = new Date();
 clock.innerHTML = leoclockdate.getHours()+':'+leoclockdate.getMinutes();
 document.querySelector('.video-js').append(clock);
 setInterval(function(){
  var leoclockdate = new Date();
  document.querySelector('#leo_clock').innerHTML=leoclockdate.getHours()+':'+(leoclockdate.getMinutes()>10?leoclockdate.getMinutes():('0'+leoclockdate.getMinutes()));
 },60000);
 document.querySelector('#vjs-fullscreen-button').addEventListener('click',function(){
  if(document.querySelector('.video-js').className.indexOf('vjs-fullscreen') > -1){
   document.querySelector('#leo_clock').setAttribute('style','position:fixed;z-index:99999;top:10px;right:10px;padding:10px 25px;font-size:25px;background-color:rgba(0,0,0,0.2);display:block!important;color:white;border-radius:50px;');
  }else{
   document.querySelector('#leo_clock').setAttribute('style','');
  }
 });
}
if (document.querySelector('#easiBox')) {
  document.querySelector('#easiBox').remove();
}
if (document.querySelector("iframe#my-iframe")) {
  setTimeout(function(){
    document.querySelector('iframe#my-iframe').contentDocument.querySelector('button.yzmplayer-icon.yzmplayer-full-icon').click();
    document.querySelector('iframe#my-iframe').contentDocument.querySelector('#player').requestFullscreen();
  },100);
}
if(document.querySelector("iframe#ads")){
  document.querySelector('iframe#ads').remove();
  document.querySelector('div#ads2').remove();
}
