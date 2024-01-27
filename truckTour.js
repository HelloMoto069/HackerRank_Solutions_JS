
function truckTour(pp) {
    // Write your code here
    let difs = pp.map(p => p[0] - p[1]);
    let mod = difs.length;  
     
    for(let i = 0; i < difs.length ; i++)
    {
        let full = true;
        let sum = 0;
        
        for(let j = i; j < i + mod ; j++)
        {
            sum += difs[j % mod];
            if (sum < 0)
            {
                full = false;
                break;
            }
        }
        
        if (full && sum > 0) 
        {
            console.log(i);
            return i;  
        }      
    }

}
