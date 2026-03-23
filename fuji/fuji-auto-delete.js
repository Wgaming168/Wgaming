// 富士宝くじ | Fuji Lottery Auto-Delete Functionality
// 14日以上経過した結果を自動削除 | Automatically deletes results older than 14 days

function autoDeleteOldResults() {
    if (typeof lotteryData === 'undefined') {
        console.log('Fuji Lottery: No data found');
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
        console.log('富士宝くじ: ' + (originalCount - lotteryData.length) + '件の古い結果を削除しました | Deleted ' + (originalCount - lotteryData.length) + ' old results');
        console.log('現在 ' + lotteryData.length + '件の結果を保持 | Keeping ' + lotteryData.length + ' results');
    }
    
    // Save to localStorage for persistence
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('fujiLotteryData', JSON.stringify(lotteryData));
    }
    
    return filtered.length;
}

// Load saved data from localStorage
function loadSavedData() {
    if (typeof localStorage !== 'undefined' && typeof lotteryData !== 'undefined') {
        var saved = localStorage.getItem('fujiLotteryData');
        if (saved) {
            var parsed = JSON.parse(saved);
            if (parsed.length > lotteryData.length) {
                lotteryData.length = 0;
                Array.prototype.push.apply(lotteryData, parsed);
                console.log('富士宝くじ: ' + lotteryData.length + '件の結果を読み込みました | Loaded ' + lotteryData.length + ' results from storage');
            }
        }
    }
}

// Run on load
loadSavedData();
autoDeleteOldResults();

// Run auto-delete every 24 hours
setInterval(autoDeleteOldResults, 24 * 60 * 60 * 1000);

// Save data when page unloads
window.addEventListener('beforeunload', function() {
    if (typeof lotteryData !== 'undefined' && typeof localStorage !== 'undefined') {
        localStorage.setItem('fujiLotteryData', JSON.stringify(lotteryData));
    }
});

// 毎日の更新を簡単に | Easy daily update reminder
function addTodayResult(first, second, third) {
    var today = new Date();
    var todayStr = today.toISOString().split('T')[0];
    
    var existingIndex = lotteryData.findIndex(function(entry) {
        return entry.date === todayStr;
    });
    
    var newEntry = {
        date: todayStr,
        first: first.toString(),
        second: second.toString(),
        third: third.toString()
    };
    
    if (existingIndex !== -1) {
        lotteryData[existingIndex] = newEntry;
        console.log('富士宝くじ: ' + todayStr + 'の結果を更新しました | Updated result for ' + todayStr);
    } else {
        lotteryData.unshift(newEntry);
        console.log('富士宝くじ: ' + todayStr + 'の結果を追加しました | Added result for ' + todayStr);
    }
    
    autoDeleteOldResults();
    
    // Save to localStorage
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('fujiLotteryData', JSON.stringify(lotteryData));
    }
    
    return true;
}

// Export function for console use
if (typeof window !== 'undefined') {
    window.addTodayResult = addTodayResult;
    window.autoDeleteOldResults = autoDeleteOldResults;
    console.log('富士宝くじ: 自動削除システム稼働中 (14日間保存) | Auto-delete active (14-day retention)');
}
