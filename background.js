chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    if(details.url.indexOf("api.localau.vip/ads") != -1){
      return {cancel: true};
    }
    if(details.url.indexOf("iyingshi5.tv/nplayer/admin/api.php") != -1){
        return {redirectUrl: "https://run.mocky.io/v3/1bdb01d7-f643-4673-bd0d-066c5785f3a2"};
    }
    return {cancel: (details.url.indexOf("audio/advert") != -1)};
  },
  { urls: ["*://*.iyingshi5.tv/*", "*://*.guazitv.tv/*","*://guazitv.tv/*","*://*.guazitv8.com/audio/advert/*", "*://www.iyingshi9.tv/*", "*://api.localau.vip/*"] },
  ["blocking"]
);
