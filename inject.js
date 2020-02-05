(function(open) {
     XMLHttpRequest.prototype.open = function(method, url, async, user, password) {
         if(url.includes('.mp4')){
            url = url.substr(0,-10);
          }
          if (url.includes('Customize') && url.includes('list?')) {
              console.log(url);
              url = "https://louleo.github.io/ps/json/ads.json";
          }
         if (url.includes('Statistics') && url.includes('ads_show?')) {
             console.log(url);
             url = "https://louleo.github.io/ps/json/code.json";
         }
         open.apply(this, arguments);
     };
 })(XMLHttpRequest.prototype.open);
