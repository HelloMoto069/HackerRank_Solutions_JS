function superDigit(n, k) {
    // Write your code here
     if (n.length === 1) return n;

    let sum = 0;
    for (let i=0; i < n.length; i++) {
        sum += parseInt(n[i]);
    }

    return superDigit(String(sum * k), 1);

}
