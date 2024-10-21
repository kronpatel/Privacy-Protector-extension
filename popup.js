// Clear specific browsing data
document.getElementById('clearDataButton').addEventListener('click', () => {
    let options = {};
    if (document.getElementById('clearCookies').checked) {
        options.cookies = true;
    }
    if (document.getElementById('clearCache').checked) {
        options.cache = true;
    }
    if (document.getElementById('clearHistory').checked) {
        options.history = true;
    }

    chrome.browsingData.remove({ "since": 0 }, options, function() {
        document.getElementById('status').textContent = 'Selected browsing data cleared!';
    });
});

// Block specific website
document.getElementById('blockSiteButton').addEventListener('click', () => {
    const site = document.getElementById('blockSiteInput').value;
    if (site) {
        chrome.declarativeNetRequest.updateDynamicRules({
            addRules: [{
                id: new Date().getTime(),
                priority: 1,
                action: { type: 'block' },
                condition: {
                    urlFilter: site,
                    resourceTypes: ['main_frame']
                }
            }]
        }, () => {
            document.getElementById('status').textContent = `${site} is now blocked!`;
        });
    }
});
