function* arrToString(strArr) {
  for(let i=0;i<strArr.length;i++){
    yield Symbol(strArr[i]);
  }
}


  
  const arr = ["hello", "world", "test"];
  const symbolIterator = arrToString(arr);
  
  console.log(symbolIterator.next().value);
  console.log(symbolIterator.next().value);
  console.log(symbolIterator.next().value);
  