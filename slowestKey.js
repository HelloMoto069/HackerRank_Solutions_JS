function slowestKey(keyTimes) {
    let maxDuration = 0;
    let slowestKey = '';

    for (let i = 0; i < keyTimes.length; i++) {
        const duration = keyTimes[i][1] - (i > 0 ? keyTimes[i - 1][1] : 0);
        
        if (duration > maxDuration) {
            maxDuration = duration;
            slowestKey = String.fromCharCode(keyTimes[i][0] + 'a'.charCodeAt(0));
        }
    }

    return slowestKey;
}

// Example usage:
const keyTimes = [[0, 2], [1, 5], [0, 9], [2, 15]];
const result = slowestKey(keyTimes);
console.log(result);
