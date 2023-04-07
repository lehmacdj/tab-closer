browser.runtime.onMessage.addListener(
  function (req, sender) {
    switch (req.type) {
    case 'closeTab':
      browser.tabs.remove(sender.tab.id);
      break;
    default:
        console.log('Unknown message type: ' + req.type);
    }
  }
);
