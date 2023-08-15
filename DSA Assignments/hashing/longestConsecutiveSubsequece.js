const longestConsecutiveSubsequence = (arr,n) => {
    let S = new Set();
    let ans = 0;
 
    // Hash all the array elements
    for (let i = 0; i < n; i++)
        S.add(arr[i]);
 
    // check each possible sequence from
    // the start then update optimal length
    for (let i = 0; i < n; i++)
    {
     
        // if current element is the starting
        // element of a sequence
        if (!S.has(arr[i] - 1))
        {
         
            // Then check for next elements
            // in the sequence
            let j = arr[i];
            while (S.has(j))
                j++;
 
            // update optimal length if
            // this length is more
            ans = Math.max(ans, j - arr[i]);
        }
    }
    return ans;
}

console.log(longestConsecutiveSubsequence([1, 9, 3, 10, 4, 20, 2],7))