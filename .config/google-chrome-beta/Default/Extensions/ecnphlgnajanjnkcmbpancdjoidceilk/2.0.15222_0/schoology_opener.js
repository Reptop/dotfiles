chrome.webRequest.onHeadersReceived.addListener((function(e){if(/(kamihq\.com|kamipdf\.com)/.test(e.initiator))return;const t=e.responseHeaders.find((e=>"location"==e.name));let s=new URL(t.value),a="Kami Assignment",n=s.searchParams.get("content-disposition");if(n){const e=/filename=".+k_sch_[^_]+_(.+).pdf"/;let t=n.match(e)[1];t&&(a=t)}return n&&n.includes("k_sch_")?(chrome.tabs.get(e.tabId,(t=>{chrome.tabs.sendMessage(e.tabId,{redirectUrl:t.url,filename:a})})),chrome.tabs.sendMessage(e.tabId,{redirectUrl:e.initiator}),chrome.tabs.sendMessage(e.tabId,{file_link:e.url,filename:a}),{cancel:!0}):void 0}),{urls:["https://*/attachment/*/source/*"]},["blocking","responseHeaders"]);