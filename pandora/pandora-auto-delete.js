// Pandora Lottery Auto-Delete
// Magical results disappear after 14 days!

function autoDeleteOldResults() {
    if (typeof lotteryData === 'undefined') {
        console.log('Pandora: No magical data found');
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
        console.log('✨ Pandora: ' + (originalCount - lotteryData.length) + ' magical results have vanished ✨');
        console.log('📦 Keeping ' + lotteryData.length + ' boxes of history');
    }
    
    // Save to localStorage
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('pandoraLotteryData', JSON.stringify(lotteryData));
    }
}

// Load saved data
function loadSavedData() {
    if (typeof localStorage !== 'undefined' && typeof lotteryData !== 'undefined') {
        var saved = localStorage.getItem('pandoraLotteryData');
        if (saved) {
            var parsed = JSON.parse(saved);
            if (parsed.length > lotteryData.length) {
                lotteryData.length = 0;
                Array.prototype.push.apply(lotteryData, parsed);
                console.log('📦 Pandora: Loaded ' + lotteryData.length + ' magical results');
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
window.addEventListener
