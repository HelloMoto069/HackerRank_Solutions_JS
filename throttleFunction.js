function throttleFunction(func) {
  let lastCallTime = 0; 
  return function (...args) {
    const currentTime = Date.now(); 

    if (currentTime - lastCallTime >= 100) {
     
      lastCallTime = currentTime; 
      return func(...args);
    }

    
    return undefined;
  };
}

// Original function to be throttled
function add(a, b) {
  return a + b;
}

// Throttle the function
const throttledAdd = throttleFunction(add);
