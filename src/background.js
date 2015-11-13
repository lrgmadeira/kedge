chrome.browserAction.onClicked.addListener( (tab) => {

  chrome.tabs.executeScript(tab.id, {
    file: 'index.js',
    allFrames: true
  }, function(){
    console.log('in cb')
    if (chrome.runtime.lastError) {
      alert(chrome.runtime.lastError.message);
      return;
    }
  })
})