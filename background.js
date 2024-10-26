chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'setSpeed') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: (speed) => {
          document
            .querySelectorAll('video')
            .forEach((video) => (video.playbackRate = speed));
        },
        args: [message.speed],
      });
    });
  }
});
