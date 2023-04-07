setTimeout(function() {
  // if we're dealing with a figma tab and it didn't launch the desktop app we
  // want to avoid closing the tab
  if (
    document.URL.indexOf('figma') > -1 &&
    document.body.innerText.toLowerCase().indexOf('figma app') === -1
  ) {
    console.log('skipping closing figma tab because desktop app not launched');
    return;
  }
  browser.runtime.sendMessage({ type: 'closeTab' });
}, 6000);
