var arr = [100, 50, 83, 42, 7, 14];
function mergeSort(arr){
    let length = arr.length;
    if(length < 2){
      return arr;
    }
    let mid = Math.floor(length/2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
  }
  function merge(left, right){
    let rs = [];
    let l =0, r = 0;
    while(l<left.length && r<right.length){
      if(left[l] < right[r]){
        rs.push(left[l++]);
      }else{
        rs.push(right[r++]);
      }
    }
    return rs.concat(left.slice(l).concat(right.slice(r)));
  }
  console.log("Merge Sort");
  console.log(mergeSort(arr));