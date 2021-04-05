chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    /* comment out for kantv
      if((details.url.indexOf("list") != -1)&&(details.url.indexOf("Customize") !=-1)) {
          return {redirectUrl: "https://www.kantv6.com/index.php/Customize/list?params=%7B%22type%22%3A%7B%22logo%22%3A1%7D%7D"};
      }
      if((details.url.indexOf("ads_show") != -1)&&(details.url.indexOf("Statistics") !=-1)){
          return {redirectUrl: "https://www.kantv6.com/index.php/Customize/list?params=%7B%22type%22%3A%7B%22logo%22%3A1%7D%7D"};
      }
    return {cancel:( (details.url.indexOf("list") != -1)&&(details.url.indexOf("Customize") !=-1) )||((details.url.indexOf("ads_show") != -1)&&(details.url.indexOf("Statistics") !=-1))};
    */
    // if(details.url.indexOf("audio/advert") != -1){
    //   return {redirectUrl: "https://www.kantv6.com/index.php/Customize/list?params=%7B%22type%22%3A%7B%22logo%22%3A1%7D%7D"};
    // }
    if(details.url.indexOf("addon/wechat/api/checkLogin2") != -1 && details.url.indexOf("iyingshi") != -1){
      //return {cancel: true};
    }
    if(details.url.indexOf("api.localau.vip/ads") != -1){
      return {cancel: true};
    }
    return {cancel: (details.url.indexOf("audio/advert") != -1)};
  },
  { urls: ["*://*.kantv6.com/*", "*://*.guazitv.tv/*","*://guazitv.tv/*","*://*.guazitv8.com/audio/advert/*", "*://www.iyingshi9.tv/*", "*://api.localau.vip/*"] },
  ["blocking"]
);
