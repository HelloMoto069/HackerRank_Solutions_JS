function gridChallenge(grid) {
    // Write your code here
     let prev_row = Array(grid[0].length).fill(0)
    for (let row of grid){
        row = row.split('').sort()
        for (let i in row){
            if(row[i]<prev_row[i]){
                return "NO"
            }
        }
        prev_row = row
    }
    return 'YES'

}
