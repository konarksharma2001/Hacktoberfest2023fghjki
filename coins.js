<script>
// Javascript program to find minimum
// number of denominations

// All denominations of Indian Currency
let deno=[1, 2, 5, 10, 20,
	50, 100, 500, 1000];
let n = deno.length;

function findMin(V)
{
	// Initialize result
		let ans = [];

		// Traverse through all denomination
		for (let i = n - 1; i >= 0; i--)
		{
			// Find denominations
			while (V >= deno[i])
			{
				V -= deno[i];
				ans.push(deno[i]);
			}
		}

		// Print result
		for (let i = 0; i < ans.length; i++)
		{
			document.write(
				" " + ans[i]);
		}
}

// Driver code
n = 93;
document.write(
"Following is minimal number "
+"of change for " + n + ": ");
findMin(n);


// This code is contributed by rag2127
</script>
