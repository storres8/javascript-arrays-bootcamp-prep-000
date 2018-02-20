var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars,softDrink){ 
  return [softDrink, ...chocolateBars];
} 

function destructivelyAddElementToBeginningOfArray(chocolateBars,softDrink) {
  chocolateBars.unshift("softDrink");
  return chocolateBars; 
}

function addElementToEndOfArray (chocolateBars,softDrink) { 
  return [...chocolateBars, softDrink]; 
} 

function destructivelyAddElementToEndOfArray (chocolateBars, softDrink) { 
  chocolateBars.push(softDrink) 
  return chocolateBars; 
} 

function accessElementInArray (array,index) { 
  return array[index];  
} 

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) { 
  chocolateBars.shift();
  return chocolateBars; 
} 

function removeElementFromBeginningOfArray (chocolateBars) { 
  chocolateBars.slice(1) 
  return chocolateBars 
} 

function destructivelyRemoveElementFromEndOfArray (chocolateBars) { 
  chocolateBars.pop(); 
  return chocolateBars; 
} 

function removeElementFromEndOfArray(chocolateBars) { chocolateBars.slice(0,chocolateBars.length - 1)
return chocolateBars } 

  



















