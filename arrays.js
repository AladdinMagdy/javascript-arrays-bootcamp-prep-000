var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element){
  
  var arr = [element, ...array];
 return arr;
}
<<<<<<< HEAD
function destructivelyAddElementToBeginningOfArray(array, element){
 array.unshift(element);
 return array;
}
function addElementToEndOfArray(array, element){
 var arr = [...array, element];
 return arr;
}
function destructivelyAddElementToEndOfArray(array, element){
 array.push(element);
 return array;
}
function accessElementInArray(array, index){
 return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
 return array;
}
function removeElementFromBeginningOfArray(array){

 return array.slice(1);
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
 return array;
}
function removeElementFromEndOfArray(array){
  
 return array.slice(0, array.length - 1);
=======
function addElementToBeginningOfArray(array, element){
  
  var arr = [element, ...array];
 return arr;
>>>>>>> 18f8b5acc8cdb648ece2d1d99e3cad08c7797e3c
}