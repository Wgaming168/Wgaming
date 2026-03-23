// Auto-Delete Functionality for Lottery Data
// This file automatically manages data retention (keeps only last 14 days)

// Function to delete entries older than 14 days
function autoDeleteOldResults() {
    if (typeof lotteryData === 'undefined') {
        console.error('lotteryData not found');
        return false;
    }
    
    var today = new Date();
    var twoWeeksAgo = new Date();
    twoWeeksAgo.setDate(today.getDate() - 14);
    
    var originalCount = lotteryData.length;
    
    // Filter to keep only results from last 14 days
    var filteredData = lotteryData.filter(function(entry) {
        var entryDate = new Date(entry.date);
        return entryDate >= twoWeeksAgo;
    });
    
    // Update the original array
    lotteryData.length = 0;
    Array.prototype.push.apply(lotteryData, filteredData);
    
    var deletedCount = originalCount - lotteryData.length;
    
    if (deletedCount > 0) {
        console.log('Auto-delete: Removed ' + deletedCount + ' result(s) older than 14 days');
        console.log('Keeping ' + lotteryData.length + ' result(s) from the last 14 days');
        
        // Optional: Save to localStorage for persistence
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('lotteryDataBackup', JSON.stringify(lotteryData));
        }
    }
    
    return deletedCount;
}

// Function to add new result (convenience function)
function addLotteryResult(date, first, second, third) {
    var newResult = {
        date: date,
        first: first.toString(),
        second: second.toString(),
        third: third.toString()
    };
    
    // Add to beginning of array (newest first)
    lotteryData.unshift(newResult);
    
    // Auto-delete old results
    autoDeleteOldResults();
    
    console.log('Added result for ' + date + ': ' + first + ', ' + second + ', ' + third);
    return true;
}

// Function to get results from last X days
function getRecentResults(days) {
    var today = new Date();
    var cutoffDate = new Date();
    cutoffDate.setDate(today.getDate() - days);
    
    return lotteryData.filter(function(entry) {
        var entryDate = new Date(entry.date);
        return entryDate >= cutoffDate;
    });
}

// Function to check data age and warn if needed
function checkDataAge() {
    if (lotteryData.length === 0) return;
    
    var oldestDate = new Date(lotteryData[lotteryData.length - 1].date);
    var today = new Date();
    var daysOld = Math.floor((today - oldestDate) / (1000 * 60 * 60 * 24));
    
    if (daysOld > 14) {
        console.warn('Warning: Some data is ' + daysOld + ' days old. Auto-delete will remove it.');
    }
    
    return daysOld;
}

// Run auto-delete when page loads
if (typeof window !== 'undefined') {
    // Run immediately
    autoDeleteOldResults();
    
    // Also run every 24 hours to clean up
    setInterval(autoDeleteOldResults, 24 * 60 * 60 * 1000);
    
    // Export functions to window for console access
    window.autoDeleteOldResults = autoDeleteOldResults;
    window.addLotteryResult = addLotteryResult;
    window.getRecentResults = getRecentResults;
    window.checkDataAge = checkDataAge;
    
    console.log('Auto-delete system active. Keeping only last 14 days of results.');
    checkDataAge();
}