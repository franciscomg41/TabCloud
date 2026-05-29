chrome.storage.local.get(['openin', 'deleteconfirm', 'encryption', 'tempWindowNames'], (result) => {
    let updates = {};
    if (result.openin === undefined) updates.openin = 'window';
    if (result.deleteconfirm === undefined) updates.deleteconfirm = 'yes';
    if (result.encryption === undefined) updates.encryption = 'no';
    if (result.tempWindowNames === undefined) updates.tempWindowNames = "{}";
    
    if (Object.keys(updates).length > 0) {
        chrome.storage.local.set(updates);
    }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    
    if (request.tabs) {
        chrome.storage.local.get(['openin', 'supportPinned'], (settings) => {
            
            const openInMode = settings.openin || 'window';

            if (openInMode === 'window') {
                chrome.windows.create({}, (window) => {
                    chrome.tabs.query({ windowId: window.id }, (tabs) => {
                        if (tabs.length > 0) {
                            chrome.tabs.remove(tabs[0].id);
                        }
                    });
                    
                    request.tabs.forEach((tab) => {
                        let curTab = {
                            windowId: window.id,
                            url: tab.url,
                            active: false
                        };
                        
                        if (settings.supportPinned == 1 && tab.pinned) {
                            curTab.pinned = true;
                        }
                        
                        chrome.tabs.create(curTab);
                    });
                });
            } else if (openInMode === 'tab') {
                request.tabs.forEach((tab) => {
                    chrome.tabs.create({ url: tab.url });
                });
            }
        });
    }
    
    return true; 
});