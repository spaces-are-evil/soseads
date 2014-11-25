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
 /* istanbul ignore next */
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
		throw new RangeError("CircularBuffer: cannot instantiate ciruclar buffer with no size.");
	}
	else {
		bufSize = size;
		bufArr = new Array(bufSize);
	}

	/**
	 * Returns the current number of elements in the buffer.
	 * @return Element count in the buffer.
	 */
	 this.size = function() {
	 	var size = 0;
	 	for (var i = 0; i < bufSize; i++) {
	 		if (bufArr[i] || bufArr[i] === 0) {
	 			size++;
	 		}
	 	}
	 	return size;
	 };

	 /**
	  * Clears out the circular buffer contents and resets
	  * to its initial size.
	  */
	 this.clear = function() {
	 	bufArr = new Array(bufSize);
	 	bufStart = 0;
	 	bufEnd = 0;
	 	bufCount = 0;
	 };

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
		if (isVarObjEmpty(object)) {
			throw new ReferenceError("CircularBuffer.write(object): object must be either a truthy variable (including 0) or an object with at least 1 initialized parameter.");
		} else {
			if (!bufArr[bufEnd] && bufCount < bufSize) {
				bufCount++;
			}
			if (bufArr[bufEnd] || bufArr[bufEnd] === 0) {
				console.log("CIRCULAR BUFFER OVERRIDE: POSITION: " + bufEnd + " | OLD OBJECT: " + bufArr[bufEnd].toString() + " | NEW OBJECT: " + object.toString());
			}
			bufArr[bufEnd] = object; 
			bufEnd = (bufEnd + 1) % bufSize;			
		}
	};

	/**
	 * Retrieves the oldest object from the circular buffer. 
	 * Removes oldest object from the circular buffer.
	 * @return the oldest object in the circular buffer.
	 */
	this.read = function() {
		if (!bufArr[bufStart] && bufArr[bufStart] !== 0) {
			throw new ReferenceError("CircularBuffer.read(): you cannot read from an empty circular buffer");
		}
		var retVal = bufArr[bufStart];
		bufArr[bufStart] = "";
		bufStart = (bufStart + 1) % bufSize;
		bufCount--;
		return retVal;
	};

	/**
	 * Retrieves the oldest object from the circular buffer
	 * without removing this object from the buffer.
	 * @return the oldest object in the circular buffer.
	 */
	this.peek = function() {
		if (!bufArr[bufStart] && bufArr[bufStart] !== 0) {
			throw new ReferenceError("CircularBuffer.peek(): cannot peek an empty circualr buffer.");
		}
		return bufArr[bufStart];
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
			if (bufArr[i] || bufArr[i] === 0) {
				retStr += bufArr[i].toString();
			} else {
				retStr += '#';
			}
			
			if (i < bufArr.length - 1) {
				retStr += ",";
			}
		}
		retStr += "] - REMINDER: The last element points to the first element.";
		return retStr;
	};
}