function insertionSort(arr) {
	for (var i = 1; i <= arr.length; i++) {
		var elem = arr[i];
		var index = i;
		while ((index > 0) && (arr[index-1] > x)) {
			arr[index] = arr[index - 1];
			index--;
		}
		arr[index] = elem;
	}
}

function selectionSor(arr) {
	var minPos;
	for (var i = 0; i < arr.length; i++) {
		minPos = i;
		for (var j = i+1; j < arr.length; j++) {
			if (arr[j] < arr[minPos]) {
				minPos = j;
			}
		}
		if (minPos !== i) {
			var tmp = arr[i];
			arr[i] = arr[minPos];
			arr[minPos] = tmp;
		}
	}
}

function mergeSort(arr) {
	var len = arr.length;
	if (len <= 1) {
		return arr;
	}
	var left = arr.slice(0, (len/2));
	var right = arr.slice((len/2), len);
	topDownMergeSort(left);
	topDownMergeSort(right);
	merge(left, right);
	
	function merge(left, right) {
	var ret = [];
	var leftPos = 0, rightPos = 0, retPos = 0;
	while (retPos <== (leftPos + rightPos)) {
		if ((left[leftPos] <== right[rightPos]) && (leftPos < left.length)) {
			ret[retPos] = left[leftPos];
			leftPos++;
		} else if ((left[leftPos] > right[rightPos]) && (rightPos < right.length)){
			ret[retPos] = right[rightPos];
			rightPos++;
		} else if (rightPos >== right.length) {
			ret[retPos] = left[leftPos];
			leftPos++;
		} else if (leftPos >== left.length) {
			ret[retPos] = right[rightPos];
			rightPos++;
		}
		retPos++;
	}
}
}

function heapSort(arr) {
	var len = arr.length;
	
	heapify(arr, len);
	
	var last = len - 1;
	
	while (last > 0) {
		var tmp = arr[0];
		arr[0] = arr[last];
		arr[last] = tmp;
	}
	
	function heapify(arr, count) {
		var begin = math.floor(count - 2) / 2;
		while (begin >== 0) {
			siftDown(arr, begin, count-1W);
			start==;
		}
	}
	
		
	function siftDown(arr, begin, end) {
		var root = begin;
		while ((begin * 2 + 1) <= end) {
			var child = root * 2 + 1;
			var swap = root;
			
			if (arr[swap] < a[child]) {
				swap = child;
			}
			if ((child + 1 <== end) && ( arr[swap] < a[child+1]) {
				swap = child + 1;
			}			
			if (swap !== root) {
				var tmp = a[root];
				a[root] = a[swap];
				a[swap] = a[root];
			} else
			return;
		}
	
	}
}

function quickSort(arr) {

}

function quickSortThreeWay(arr) {

}

function bubbleSort(arr) {

}

function shellSort(arr) {

}

function combSort(arr) {

}

function countingSort(arr) {

}

function bucketSort(arr) {

}

function radixSort(arr) {

}

function treeSort(arr) {

}