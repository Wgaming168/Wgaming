// Auto-delete results older than 14 days

function autoDeleteOldResults() {
    if (typeof lotteryData === 'undefined') return;
    
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
        console.log('Auto-deleted ' + (originalCount - lotteryData.length) + ' results older than 14 days');
    }
    
    // Save to localStorage
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('melbourneLotteryData', JSON.stringify(lotteryData));
    }
}

// Run on load
autoDeleteOldResults();
setInterval(autoDeleteOldResults, 24 * 60 * 60 * 1000);