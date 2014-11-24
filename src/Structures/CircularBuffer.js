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
			console.log("CIRCULAR BUFFER OVERRIDE: POSITION: " + bufEnd + " | OLD OBJECT: " + bufArr[bufEnd].toString() + " | NEW OBJECT: " + object.toString());
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
			throw new ReferenceError("CircularBuffer.read(): you cannot read from an empty circular buffer");
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