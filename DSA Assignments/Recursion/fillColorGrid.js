

function solve(arr,r,c)
{
	// Current color
	var idx = 1;

	// final grid
	var dp = new Array(r);
	
	var i,j;
	for(i=0;i<r;i++)
	dp[i] = new Array(c);
	for(i = 0; i < r; i++) {

		// if even row
		if (i % 2 == 0) {

			// traverse from left to
			// right
			for(j = 0; j < c; j++) {

				// if color has been exhausted
				//, move to the next color
				if (arr[idx - 1] == 0)
					idx++;

				// color the grid at
				// this position
				dp[i][j] = idx;

				// reduce the color count
				arr[idx - 1]--;
			}
		}
		else {

			// traverse from right to
			// left for odd rows
			for (j = c - 1; j >= 0; j--) {
				if (arr[idx - 1] == 0)
					idx++;
				dp[i][j] = idx;
				arr[idx - 1]--;
			}
		}
	}

	// print the grid
	for(i = 0; i < r; ++i) {
		for(j = 0; j < c; ++j) {
			console.log(dp[i][j]);
        }
        console.log('\n')
		
	}
}

// Driver code
	
	const r = 3, c = 5;
	const n = 5;
	const arr = [1, 2, 3, 4, 5];
	solve(arr, r, c);

