function timeConversion(s) {
    // Write your code here
    let timeFormat = s.slice(-2);

    let hour = timeFormat == 'PM' && s.slice(0, 2) != '12' 
        ? parseInt(s.slice(0, 2)) + 12
        : s.slice(0, 2);

    let output = timeFormat == 'AM' && s.slice(0, 2) == '12' 
    ? s.slice(0, -2).replace(s.slice(0, 2), '00') 
    : s.slice(0, -2).replace((s.slice(0, 2)), hour.toString());
    
    return output;

}
