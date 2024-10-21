chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'clearBrowsingData') {
        chrome.browsingData.remove({
            "since": 0
        }, {
            "cookies": true,
            "cache": true,
            "history": true
        }, () => {
            if (chrome.runtime.lastError) {
                sendResponse({ success: false, error: chrome.runtime.lastError.message });
            } else {
                sendResponse({ success: true });
            }
        });
        return true; // Keeps the message channel open for async response
    }
});
