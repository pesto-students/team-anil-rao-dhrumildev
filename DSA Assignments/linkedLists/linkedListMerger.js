function getSize(list){
    let count =0;
    let current = list.head;
    while(current){
      count++;
      current = current.next;
    }
    return count;
  }
  
  function findMergeNode(list1,list2){
    let sizeOfLL1 = getSize(list1);
    let sizeOfLL2 = getSize(list1);
    let diff = Math.abs(sizeOfLL1-sizeOfLL2);
  
    let current1 = list1.head;
    let current2 = list2.head;
    if(sizeOfLL1>sizeOfLL2){
      while(diff>0){
        current1 = current1.next;
        diff--;
      }
    } else {
      while(diff>0){
        current2 = current2.next;
        diff--;
      }
    }
  
    while(current1 && current2){
      if(current1 === current2){
        return current1.value;
      }
      current1 = current1.next;
      current2 = current2.next;
    }
  return -1;
  
  }