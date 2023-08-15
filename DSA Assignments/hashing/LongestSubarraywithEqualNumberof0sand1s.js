class LargestSubArray {

	// This function Prints the starting and ending
	// indexes of the largest subarray with equal
	// number of 0s and 1s. Also returns the size
	// of such subarray.

	findSubArray(arr, n) {
		let sum = 0;
		let maxsize = -1;
		let startindex = 0;
		let endindex = 0;
		// Pick a starting point as i

		for (let i = 0; i < n - 1; i++) {
			sum = (arr[i] == 0) ? -1 : 1;

			// Consider all subarrays starting from i

			for (let j = i + 1; j < n; j++) {
				if (arr[j] == 0)
					sum += -1;
				else
					sum += 1;

				// If this is a 0 sum subarray, then
				// compare it with maximum size subarray
				// calculated so far

				if (sum == 0 && maxsize < j - i + 1) {
					maxsize = j - i + 1;
					startindex = i;
				}
			}
		}
		endindex = startindex + maxsize - 1;
		if (maxsize == -1)
			console.log("No such subarray");
		else
			console.log(startindex + " to " + endindex);

		return maxsize;
	}

	/* Driver program to test the above functions */

	main() {
		const sub = new LargestSubArray();
		const arr = [1, 0, 0, 1, 0, 1, 1];
		const size = arr.length;
		sub.findSubArray(arr, size);
	}
}
const sub = new LargestSubArray();
sub.main();
