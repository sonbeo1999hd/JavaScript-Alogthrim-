var arr = [100, 50, 83, 42, 7, 14];
function quick_sort(Array, left, right) {
    let l = left, r = right;
    mid = Math.floor((l + r) / 2);
    do {
        while (Array[l] < Array[mid]) l++;
        while (Array[r] > Array[mid]) r--;
        if (l <= r) {
            let x = Array[l];
            Array[l] = Array[r];
            Array[r] = x;
            l++;
            r--;
        }
    }while (l <= r)
    if (l < right) quick_sort(Array, l, right);
    if (r > left) quick_sort(Array, left, r);
    return Array;
}

console.log('Quick Sort');
console.log(quick_sort(arr, 0, arr.length-1));