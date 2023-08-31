/* JS program to solve N Queen Problem using
backtracking */
let result = []

// A utility function to print solution

/* A utility function to check if a queen can
be placed on board[row][col]. Note that this
function is called when "col" queens are
already placed in columns from 0 to col -1.
So we need to check only left side for
attacking queens */
function isSafe(board, row, col)
{
	// Check this row on left side
	for (let i = 0; i < col; i++)
		if (board[row][i])
			return false

	// Check upper diagonal on left side
	let i = row
	let j = col
	while (i >= 0 && j >= 0)
	{
		if(board[i][j])
			return false
		i -= 1
		j -= 1
	}

	// Check lower diagonal on left side
	i = row
	j = col
	while (j >= 0 && i < 4)
	{
		if(board[i][j])
			return false
		i = i + 1
		j = j - 1
	}
	return true
}

/* A recursive utility function to solve N
Queen problem */
function solveNQUtil(board, col)
{
	/* base case If all queens are placed
	then return true */
	if (col == 4)
	{
		let v = []
		for (let i of board)
		{
		for (var j = 0; j < i.length; j++)
		{
			if (i[j] == 1)
			v.push(j+1)
		}
		}
		result.push(v)
		return true
	}
	/* Consider this column and try placing
	this queen in all rows one by one */
	let res = false
	for (var i = 0; i < 4; i++)
	{
		/* Check if queen can be placed on
		board[i][col] */
		if (isSafe(board, i, col))
		{
			// Place this queen in board[i][col]
			board[i][col] = 1

			// Make result true if any placement
			// is possible
			res = solveNQUtil(board, col + 1) || res

			/* If placing queen in board[i][col]
			doesn't lead to a solution, then
			remove queen from board[i][col] */
			board[i][col] = 0 // BACKTRACK
		}
	}
	/* If queen can not be place in any row in
		this column col then return false */
	return res
}


/* This function solves the N Queen problem using
Backtracking. It mainly uses solveNQUtil() to
solve the problem. It returns false if queens
cannot be placed, otherwise return true and
prints placement of queens in the form of 1s.
Please note that there may be more than one
solutions, this function prints one of the
feasible solutions.*/


function solveNQ(n)
{
	result = []
	let board = new Array(n);
	for (var i = 0; i < n; i++)
		board[i] = new Array(n).fill(0)
	
	solveNQUtil(board, 0)
	result.sort()
	return result
}

// Driver Code
let n = 4
let res = solveNQ(n)
console.log(res)

// This code is contributed by phasing17
