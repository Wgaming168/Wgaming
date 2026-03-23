// Victoria Pools Auto-Delete
// Automatically deletes results older than 14 days

function autoDeleteOldResults() {
    if (typeof lotteryData === 'undefined') {
        console.log('Victoria Pools: No data found');
        return;
    }
    
    var today = new Date();
    var twoWeeksAgo = new Date();
    twoWeeksAgo.setDate(today.getDate() - 14);
    
    var originalCount = lotteryData.length;
    
    var filtered = lotteryData.filter(function(entry) {
        var entryDate = new Date(entry.date);
        return entryDate >= twoWeeksAgo;
    });
    
    lotteryData.length = 0;
    Array.prototype.push.apply(lotteryData, filtered);
    
    if (originalCount !== lotteryData.length) {
        console.log('Victoria Pools: Deleted ' + (originalCount - lotteryData.length) + ' old results');
    }
    
    // Save to localStorage
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('victoriaLotteryData', JSON.stringify(lotteryData));
    }
}

// Load saved data
function loadSavedData() {
    if (typeof localStorage !== 'undefined' && typeof lotteryData !== 'undefined') {
        var saved = localStorage.getItem('victoriaLotteryData');
        if (saved) {
            var parsed = JSON.parse(saved);
            if (parsed.length > lotteryData.length) {
                lotteryData.length = 0;
                Array.prototype.push.apply(lotteryData, parsed);
            }
        }
    }
}

// Run on load
loadSavedData();
autoDeleteOldResults();

// Auto-delete every 24 hours
setInterval(autoDeleteOldResults, 24 * 60 * 60 * 1000);

// Save on unload
window.addEventListener('beforeunload', function() {
    if (typeof lotteryData !== 'undefined' && typeof localStorage !== 'undefined') {
        localStorage.setItem('victoriaLotteryData', JSON.stringify(lotteryData));
    }
});

// Quick add function
function addDailyResults(date, draw10pm, draw12am, draw2am, draw4am) {
    var newEntry = {
        date: date,
        draw10pm: draw10pm.toString(),
        draw12am: draw12am.toString(),
        draw2am: draw2am.toString(),
        draw4am: draw4am.toString()
    };
    
    var existingIndex = lotteryData.findIndex(function(entry) {
        return entry.date === date;
    });
    
    if (existingIndex !== -1) {
        lotteryData[existingIndex] = newEntry;
    } else {
        lotteryData.unshift(newEntry);
    }
    
    autoDeleteOldResults();
    
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('victoriaLotteryData', JSON.stringify(lotteryData));
    }
    
    return true;
}

window.addDailyResults = addDailyResults;
