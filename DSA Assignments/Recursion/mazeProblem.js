// function to display the path
function display(ans)
{
console.log(ans.join(" "))
}

// a function which check whether our step is safe or
// not
function issafe(r, c, visited, n, m)
{
	return (r < n && c < m && visited[r] != -1);
}

function FindPaths(grid, r, c, n, m, ans)
{
	// when we hit the last cell we reach to destination
	// then directly push the path
	if (r == n - 1 && c == m - 1) {
		ans.push(grid[r]);
		display(ans); // function to display the path
					// stored in ans vector
		ans.pop(); // remove last element because we need
				// to backtrack to explore more path
		return;
	}
	
	// we will store the current value in ch and mark
	// the visited place as -1
	ch = grid[r];

	ans.push(ch); // add the path in ans array
	grid[r] = -1; // mark the visited place with -1

	// if is it safe to take next downward step then
	// take it
	if (issafe(r + 1, c, grid, n, m)) {
		FindPaths(grid, r + 1, c, n, m, ans);
	}
	// if is it safe to take next rightward step then
	// take it
	if (issafe(r, c + 1, grid, n, m)) {
		FindPaths(grid, r, c + 1, n, m, ans);
	}
	// backtracking step we need to make values original
	// so to we can visit it by some another path
	grid[r] = ch;
	// remove the current path element we explore
	ans.pop()
	return;
}

let n = 3, m = 3;
let grid = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ];
let ans = [] 

	FindPaths(grid, 0, 0, n, m,
			ans); 

console.log(display(grid))