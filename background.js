chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status !== 'complete') return;

  let match = 'https://calender.google.com/calender/r'
  if (tab.url.substring(0, match.length) === match) {
    chrome.tabs.executeScript(tabId, { file: 'fireflies.js' });
  }
});
