chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "search") {
    chrome.search.query({
      text: request.keyWords,
      disposition: 'NEW_TAB'
    });
  }

  if (request.action === "openNewTab") {
    chrome.tabs.create({ url: request.url });
  }
});
