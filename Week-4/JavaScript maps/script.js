function calcWordFrequencies(inputText) {

        var wordList = inputText.split(' ');
        var wordFrequency = {};
      
        for (var i = 0; i < wordList.length; i++) {
          var word = wordList[i];
      
          if (word in wordFrequency) {
            wordFrequency[word] += 1;
          } else {
            wordFrequency[word] = 1;
          }
        }
      
        for (var word in wordFrequency) {
          console.log(word + ' ' + wordFrequency[word]);
        }    
     
   
}

const inputText = prompt('Enter a list of words: ');
calcWordFrequencies(inputText);