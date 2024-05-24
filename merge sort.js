const MAX = 20;
const THREAD_MAX = 4;

const a = new Array(MAX);
let part = 0;

function merge(low, mid, high) {
	const left = a.slice(low, mid + 1);
	const right = a.slice(mid + 1, high + 1);

	let i = 0, j = 0, k = low;

	while (i < left.length && j < right.length) {
		if (left[i] <= right[j]) {
			a[k] = left[i];
			i++;
		} else {
			a[k] = right[j];
			j++;
		}
		k++;
	}

	while (i < left.length) {
		a[k] = left[i];
		i++;
		k++;
	}

	while (j < right.length) {
		a[k] = right[j];
		j++;
		k++;
	}
}

function mergeSort(low, high) {
	if (low < high) {
		const mid = low + Math.floor((high - low) / 2);

		mergeSort(low, mid);
		mergeSort(mid + 1, high);

		merge(low, mid, high);
	}
}

function mergeSortThreaded() {
	for (let i = 0; i < THREAD_MAX; i++) {
		const start = part * (MAX / 4);
		const end = (part + 1) * (MAX / 4) - 1;

		setTimeout(() => {
			mergeSort(start, end);
		});

		part++;
	}

	// Adding a delay to ensure threads complete before merging
	setTimeout(() => {
		merge(0, Math.floor((MAX / 2 - 1) / 2), MAX / 2 - 1);
		merge(MAX / 2, Math.floor(MAX / 2 + (MAX - 1 - MAX / 2) / 2), MAX - 1);
		merge(0, Math.floor((MAX - 1) / 2), MAX - 1);

		console.log("Sorted array:", a);
	}, 500);
}

// Driver Code
function main() {
	// Generating random values in array
	for (let i = 0; i < MAX; i++) {
		a[i] = Math.floor(Math.random() * 101);
	}

	const t1 = performance.now();
	mergeSortThreaded();
	const t2 = performance.now();

	console.log(`Time taken: ${(t2 - t1) / 1000} seconds`);
}

// Invoke the main function
main();
