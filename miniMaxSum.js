function miniMaxSum(arr) {
    // Write your code here
    const answerArray = [];
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        let sums = arr.reduce((acc, curr, index) => {
            if (index !== i) {
                return acc + curr;
            }
            return acc;
        }, 0);
        answerArray.push(sums);
    }
    console.log(answerArray[arr.length - 1], answerArray[0]);

}
