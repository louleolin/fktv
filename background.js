chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
      if((details.url.indexOf("list") != -1)&&(details.url.indexOf("Customize") !=-1)) {
          return {redirectUrl: "https://louleo.github.io/ps/json/ads.json"};
      }
      if((details.url.indexOf("ads_show") != -1)&&(details.url.indexOf("Statistics") !=-1)){
          return {redirectUrl: "https://louleo.github.io/ps/json/code.json"};
      }
    return {cancel:( (details.url.indexOf("list") != -1)&&(details.url.indexOf("Customize") !=-1) )||((details.url.indexOf("ads_show") != -1)&&(details.url.indexOf("Statistics") !=-1))};
  },
  { urls: ["*://*.kantv6.com/*"] },
  ["blocking"]
);
