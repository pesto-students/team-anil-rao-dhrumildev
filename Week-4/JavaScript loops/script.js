function drawTriangle(triangleSize) {

   // Your solution goes here
   for (let a = 1; a <= triangleSize; a++) {
      let str = ''
      for (b = 1; b <= a; b++) {
         str = str + '*'
      }
      console.log(str)
   }

}