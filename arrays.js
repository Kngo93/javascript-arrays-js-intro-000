var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (arr, element) {
  var newArray = [element, ...arr];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray (arr, element) {
  arr.unshift(element);
  return arr;
}

function accessElementInArray(arr, index) {
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray (arr){
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(array){
  var newArray = = array.slice(1);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray (array) {
  var newArray = array.slice(0, array.length - 1);
  return newArray;
}
