/**
 * Queue Data Structure. FIFO (First in first out) data structure.
 * @author Tony Robinson
 */
function Queue() {
	var dataArr = [];
	
	/**
	 * Checks if queue is empty.
	 * @return True if queue is empty, false otherwise.
	 */
	this.isEmpty = function() {
		if (dataArr.length === 0) return true;
		for (var i in dataArr) {
			(dataArr[i] !== 'undefined' || dataArr[i]) ? return false : continue;
		}
		return true;
	}
	
	/**
	 * Clears the queue.
	 */
	this.clear = function() {
		dataArr = [];
	};

	/**
	 * Insert an object into the back of the queue. Returns true if the 
	 * add was successful, false otherwise.
	 * @return true if the add was successful, false otherwise.
	 */
	this.enqueue = function(object) {
		dataArr.push(object);
	};

	/**
	 * Retrieves the object at the head of the queue, but does not remove it.
	 * Throws error if queue is empty.
	 * @return the head object.
	 * @throws {ReferenceError} if queue is empty.
	 */
	this.peek = function() {
		(dataArr.length === 0) ? throw new ReferenceError("peek(): cannot peek an empty queue") : return dataArr[0];
	};

	/**
	 * Removes and returns the head of the queue. 
	 * Returns null if the queue is empty.
	 * @return The head of the queue.
	 * @throws {ReferenceError} if queue is empty.
	 */
	this.dequeue = function() {
		(dataArr.length === 0) ? throw new ReferenceError("peek(): cannot dequeue an empty queue") : return dataArr.splice(0,1)[0];
	};
	
	/**
	 * Returns a string representation of the queue. Represented as 
	 * [a1,a2,....,an-1,an] where an is the index - 1 of the element in the queue.
	 * Returns [] if queue is empty.
	 */
	this.toString = function() {
		var retStr = "[";
		for (var i = 0; i < dataArr.length; i++) {
			if (i > 0) retStr+= " ";
			retStr += dataArr[i].toString();
			if (i < dataArr.length - 1) retStr += ",";
		}
		retStr += "]";
		return retStr;
	};
}

/**
 * Circular Buffer Data Structure. A queue with a defined size
 * where the end of the buffer points back to the beginning to
 * make it "circular".
 */
function CircularBuffer(size) {
	var bufSize = 0, //size of the buffer
		bufStart = 0, //start of the buffer (oldest element)
		bufEnd = 0, //end of the buffer (current newest element)
		bufCount = 0, //number of elements in buffer
		bufArr = [];
	(!size) ? throw new RangeError("cannot instantiate ciruclar buffer with no size.") : (bufSize = size, bufArr = new Array(bufSize));


 	/**
 	 * Checks if the circular buffer is empty.
 	 * @return True if circular buffer is empty, false otherwise.
 	 */
	this.isEmpty = function() {
		return (bufCount === 0) true : false;
	};

	/**
 	 * Checks if the circular buffer is full.
 	 * @return True if circular buffer is full, false otherwise.
 	 */
	this.isFull = function() {
		return (bufCount === bufSize) true : false;
	};

	/**
 	 * Writes an object to the circular buffer. Will produce a buffer 
 	 * override message in the console log if overriding a value.
 	 * @param object The object to write to the circular buffer.
 	 */
	this.write = function(object) {
		if ((!bufArr[bufEnd] || bufArr[bufEnd] === 'undefined') && bufCount < bufSize) bufCount++;
		if (bufArr[bufEnd] && bufArr[bufEnd] !== 'undefined') console.log("BUFFER OVERRIDE: POSITION: " + bufEnd + " | OLD OBJECT: " + bufArr[bufEnd].toString() + " | NEW OBJECT: " + object.toString());
			bufArr[bufEnd] = object; 
		bufEnd = (bufEnd + 1) % bufSize;
	};

	/**
	 * Retrieves the oldest object from the circular buffer. 
	 * Removes oldest object from the circular buffer.
	 * @return the oldest object in the circular buffer.
	 */
	this.read = function() {
		if (!bufArr[bufStart] || bufArr[bufStart] === 'undefined') throw new ReferenceError("read(): you cannot read from an empty circular buffer");
		var retVal = bufArr[bufStart];
		bufArr[bufStart] = "";
		bufStart = (bufStart + 1) % bufSize;
		bufCount--;
		return retVal;
	};
	/**
	 * Returns a string representation of the circular buffer. Represented as 
	 * [a1,a2,....,an-1,an] where an is the index - 1 of the element in the circular buffer.
	 * Returns [] if queue is empty.
	 */
	this.toString = function() {
		var retStr = "[";
		for (var i = 0; i < dataArr.length; i++) {
			if (i > 0) retStr+= " ";
			retStr += dataArr[i].toString();
			if (i < dataArr.length - 1) retStr += ",";
		}
		retStr += "] - REMINDER: The last element points to the first element.";
		return retStr;
	};
}