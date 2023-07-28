function deleteElementsOfArray(str) {
    let arr = str.split(',')

    arr = arr.filter((e) => !(e % 2 == 0 || e % 3 == 0))
    return arr
}

console.log(deleteElementsOfArray('9,12,15,18,21'))



function merge(arr,start,middle,end){
    let arr1 = arr.slice(start,middle+1);
    let arr2 = arr.slice(middle+1, end+1);
    let mergedArray = [];
    let i=0;
    let j=0;
    while(i<arr1.length && j<arr2.length){
      if(arr1[i]<=arr2[j]){
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }
  
    while(i<arr1.length){
      mergedArray.push(arr1[i]);
      i++;
    }
  
    while(j<arr2.length){
      mergedArray.push(arr2[j]);
        j++;
    }
  
    for(let k = start;k<=end;k++ ){
      arr[k] = mergedArray[k-start];
    }
    return arr;
  
  }
  function mergeSort(arr,start,end){
    if(start>=end){
      return
    }
    //Divide : calculate middle index of the array
    let middle = Math.floor((start + end)/2);
    //Conquer
    mergeSort(arr,start,middle)
    mergeSort(arr,middle+1,end)
  
    //Combine Step: merge the sorted left and right part
    merge(arr, start, middle, end)
  
  }