var arr = [100, 50, 83, 42, 7, 14];
console.log(arr);
function selectionSort(array){
  for(let i = 0; i < array.length - 1; i++){
    let idmin = i;
    for(let j = i + 1; j < array.length; j++){
      if(array[j] < array[idmin]) idmin = j;
    }

    // swap
    let t = array[i];
    array[i] = array[idmin];
    array[idmin] = t; 
  }
  return array;
}
console.log("selectionSort")
console.log(selectionSort(arr));
