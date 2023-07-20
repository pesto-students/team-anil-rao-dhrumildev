

function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
      let key = arr[i];
      let j = i-1;
      while(j>=0 && arr[j]>key){
        arr[j+1] = arr[j];
        j--;
      }
      arr[j+1]=key;
    }
    return arr;
  }
  
  let input = [275,150,200,350,400]
  let sortedArray = insertionSort(input)
  console.log(sortedArray)


  function selectionSort(arr){
    const len = arr.length;
    // iterate throught the array
    for(let i=0;i<len;i++){
      let minIndex = i;
      // find the minimum element from unsorted portion
      for(let j=i+1;j<len;j++){
        if(arr[j]<arr[minIndex]){
          minIndex = j;
        }
      }
      if(minIndex!==i){
        [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
      }
    }
    return arr;
  }
  
  let input = [275,150,200,350,400]
  let sortedArray = selectionSort(input)
  console.log(sortedArray)


  function bubbleSort(arr){
    let n = arr.length;
    let swapped;
    do {
      swapped = false;
      for(let i=0;i<n-1;i++){
        if(arr[i]>arr[i+1]){
          let temp = arr[i];
          arr[i]=arr[i+1]
          arr[i+1]= temp
          swapped = true;
        }
      }
      n--
    } while(swapped)
    return arr;
  }
  
  
  let input = [275,150,200,350,400]
  let sortedArray = bubbleSort(input)
  console.log(sortedArray)