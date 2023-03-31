setTimeout(function() {
  // if we're dealing with a figma tab and it didn't launch the desktop app we
  // want to avoid closing the tab
  if (
    document.url.indexOf('figma') > -1 &&
    document.body.innerText.toLowerCase().indexOf('figma app') === -1
  ) {
    return;
  }
  chrome.runtime.sendMessage({}, function() {});
}, 6000);
