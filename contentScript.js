window.addEventListener("load", function() {
    if (document.querySelector('#easiBox')) {
      document.querySelector('#easiBox').remove();
    }
    setTimeout(function(){
        var s = document.createElement('script');
        // TODO: add "script.js" to web_accessible_resources in manifest.json
        s.src = chrome.extension.getURL('inject.js');
        s.onload = function () {
            this.remove();
        };
        (document.head || document.documentElement).appendChild(s);
    },2000);
});
