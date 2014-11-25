/**
 * Helper function to ensure that a variable or object is empty.
 * Examines variables to see if they are an object. If they are an object
 * this checks to make sure that at least 1 parameter in the project is set.
 * For purposes of this library, the following conditions hold:
 * 		- variables that are undefined, null or equal an empty string are empty.
 * 		- we allow 0 to be a truthy value.
 * 		- Objects without parameters are empty.
 * 		- Objects with parameters are empty if all parameters are undefined, null or equal an empty string.
 * 		- Objects with parameters are not empty as long as one parameter is set.
 * @param obj The variable or object to examine.
 * @return True if the variable or object is empty, false otherwise.
 */
function isVarObjEmpty(obj) {
	var propCount = 0,
		validPropCount = 0;
	if (!obj && obj !== 0) {
		return true;
	} else {
		for (var i in obj) {
			propCount++;
			if (obj.hasOwnProperty(i) && (obj[i] || obj[i] === 0)) {
				validPropCount++;
			}
		}
	}
	if (typeof obj === 'object' && propCount >= 0 && validPropCount === 0) {
		return true;
	} else {
		return false;
	}
}

/**
 * Queue Data Structure. FIFO (First in first out) data structure.
 */
function Queue() {
	var dataArr = [];
	
	/**
	 * Retrieves the size of the queue.
	 * @return Queue size.
	 */
	this.size = function() {
		return dataArr.length;
	};

	/**
	 * Checks if queue is empty.
	 * @return True if queue is empty, false otherwise.
	 */
	this.isEmpty = function() {
		if (dataArr.length === 0) {
			return true;
		} else {
			for (var i in dataArr) {
				return false;
			}			
		}

	};
	
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
		if(!isVarObjEmpty(object) && (object || object === 0)) {
			dataArr.push(object);
		}
		else /*if (!object || isVarObjEmpty(object))*/ {
			throw new ReferenceError("Queue.enqueue(): cannot enqueue a falsey object");
		}
	};

	/**
	 * Retrieves the object at the head of the queue, but does not remove it.
	 * Throws error if queue is empty.
	 * @return the head object.
	 * @throws {ReferenceError} if queue is empty.
	 */
	this.peek = function() {
		if (dataArr.length === 0) {
			throw new ReferenceError("Queue.peek(): cannot peek an empty queue");
		}
		else {
			return dataArr[0];
		}
	};

	/**
	 * Removes and returns the head of the queue. 
	 * Returns null if the queue is empty.
	 * @return The head of the queue.
	 * @throws {ReferenceError} if queue is empty.
	 */
	this.dequeue = function() {
		if (dataArr.length === 0) {
			throw new ReferenceError("Queue.dequeue(): cannot dequeue an empty queue");
		}
		else {
			return dataArr.splice(0,1)[0];
		}
	};
	
	/**
	 * Returns a string representation of the queue. Represented as 
	 * [a1,a2,....,an-1,an] where an is the index - 1 of the element in the queue.
	 * Returns [] if queue is empty.
	 */
	this.toString = function() {
		var retStr = "[";
		for (var i = 0; i < dataArr.length; i++) {
			if (i > 0) {
				retStr+= " ";
			}
			retStr += dataArr[i].toString();
			if (i < dataArr.length - 1) {
				retStr += ",";
			}
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
	if (!size) {
		throw new RangeError("cannot instantiate ciruclar buffer with no size.");
	}
	else {
		bufSize = size;
		bufArr = new Array(bufSize);
	}

 	/**
 	 * Checks if the circular buffer is empty.
 	 * @return True if circular buffer is empty, false otherwise.
 	 */
	this.isEmpty = function() {
		return (bufCount === 0) ? true : false;
	};

	/**
 	 * Checks if the circular buffer is full.
 	 * @return True if circular buffer is full, false otherwise.
 	 */
	this.isFull = function() {
		return (bufCount === bufSize) ? true : false;
	};

	/**
 	 * Writes an object to the circular buffer. Will produce a buffer 
 	 * override message in the console log if overriding a value.
 	 * @param object The object to write to the circular buffer.
 	 */
	this.write = function(object) {
		if (!bufArr[bufEnd] && bufCount < bufSize) {
			bufCount++;
		}
		if (bufArr[bufEnd]) {
			console.log("BUFFER OVERRIDE: POSITION: " + bufEnd + " | OLD OBJECT: " + bufArr[bufEnd].toString() + " | NEW OBJECT: " + object.toString());
		}
		bufArr[bufEnd] = object; 
		bufEnd = (bufEnd + 1) % bufSize;
	};

	/**
	 * Retrieves the oldest object from the circular buffer. 
	 * Removes oldest object from the circular buffer.
	 * @return the oldest object in the circular buffer.
	 */
	this.read = function() {
		if (!bufArr[bufStart]) {
			throw new ReferenceError("read(): you cannot read from an empty circular buffer");
		}
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
		for (var i = 0; i < bufArr.length; i++) {
			if (i > 0) {
				retStr+= " ";
			}
			retStr += bufArr[i].toString();
			if (i < bufArr.length - 1) {
				retStr += ",";
			}
		}
		retStr += "] - REMINDER: The last element points to the first element.";
		return retStr;
	};
}


function Deque() {
		
}