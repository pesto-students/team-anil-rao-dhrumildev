function calcWordFrequencies(inputText) {

        let wordList = inputText.split(' ');
        let wordFrequency = {};
      
        for (let i = 0; i < wordList.length; i++) {
          let word = wordList[i];
      
          if (word in wordFrequency) {
            wordFrequency[word] += 1;
          } else {
            wordFrequency[word] = 1;
          }
        }
      
        for (let word in wordFrequency) {
          console.log(word + ' ' + wordFrequency[word]);
        }    
     
   
}

const inputText = prompt('Enter a list of words: ');
calcWordFrequencies(inputText);