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
	if (obj === 0) {
		return false;
	}
	else if (!obj && obj !== 0) {
		return true;
	} else {
		for (var i in obj) {
			propCount++;
			if (obj.hasOwnProperty(i) && (obj[i] || obj[i] === 0)) {
				validPropCount++;
			}
		}
	}
	return (typeof obj === 'object' && propCount >= 0 && validPropCount === 0) ? true : false;
}
//############################################################################################################################################
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
		if(!isVarObjEmpty(object)) {
			dataArr.push(object);
		}
		else {
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

//############################################################################################################################################

/**
 * Deque (Double Endeded Queue) Data Structure. Pronounced deck.
 * Backed by an array and uses array functions to perform deque functions.
 */
 function Deque() {
 	var dataArr = [];

 	/**
 	 * Returns the number of elements in the deque.
 	 * @return number of elements in deque.
 	 */
 	this.size = function() {
 		return dataArr.length;
 	};

 	/**
 	 * Checks if the deque is empty or not.
 	 * @return true if the deque has no elements, false otherwise.
 	 */
 	this.isEmpty = function() {
 		return (dataArr.length === 0) ? true : false;
 	};

 	/**
 	 * Empties the deque of all elements and sets it back to default size.
 	 */
 	this.clear = function() {
 		dataArr = [];
 	};
 	/**
 	 * Adds an element to the end of the deque.
 	 * Throws error if trying to add a falsy element (other than 0).
 	 * @param object the element to add to the end of the deque.
 	 */
 	this.push = function(object) {
 		if (!isVarObjEmpty(object)) {
 			dataArr.push(object);
 		} else {
 			throw new ReferenceError("Deque.push(object): object must be a valid variable or object. 
 				Objects must have at least 1 parameter that is initialized and not null.");
 		}
 		
 	};

 	/**
 	 * Adds an element to the beginning of the deque.
 	 * Throws error if trying to add a falsy element (other than 0).
 	 * @param object the element to add to the beginning of the deque.
 	 */
 	this.unshift = function(object) {
 		 if (!isVarObjEmpty(object)) {
 			dataArr.unshift(object);
 		} else {
 			throw new ReferenceError("Deque.unshift(object): object must be a valid variable or object. 
 				Objects must have at least 1 parameter that is initialized and not null.");
 		}
 		
 	};

 	/**
 	 * Removes and returns the last element in the deque.
 	 * Throws error if trying to remove element in an empty deque.
 	 * @return the last element in the deque.
 	 */
 	this.pop = function() {
 		if (dataArr.length > 0) {
 			return dataArr.pop();
 		} else {
 			throw new ReferenceError("Deque.pop(): cannot pop from an empty deque.");
 		}
 	};

 	/**
 	 * Removes and returns the first element in the deque.
 	 * Throws error if trying to remove element in an empty deque.
 	 * @return the first element in the deque.
 	 */
 	this.shift = function() {
 		if (dataArr.length > 0) {
 			return dataArr.shift();
 		} else {
 			throw new ReferenceError("Deque.shift(): cannot shift from an empty deque.");
 		}
 	};

 	/**
 	 * Returns but does not remove the last element in the deque.
 	 * Throws error if trying to examine element in an empty deque.
 	 * @return the last element in the deque.
 	 */
 	this.last = function() {
 		if (dataArr.length > 0) {
 			return dataArr[dataArr.length - 1];
 		} else {
 			throw new ReferenceError("Deque.last(): cannot examine elements in an empty deque.");
 		}
 	};

 	/**
 	 * Returns but does not remove the first element in the deque.
 	 * Throws error if trying to examine element in an empty deque.
 	 * @return the first element in the deque.
 	 */
 	this.first = function() {
 		if (dataArr.length > 0) {
 			return dataArr[0];
 		} else {
 			throw new ReferenceError("Deque.first(): cannot examine elements in an empty deque.");
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

//############################################################################################################################################

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
			throw new ReferenceError("CircularBuffer.write(object): object must be either a truthy variable 
				(including 0) or an object with at least 1 initialized parameter.");
		} else {
			if (!bufArr[bufEnd] && bufCount < bufSize) {
				bufCount++;
			}
			if (bufArr[bufEnd] || bufArr[bufEnd] === 0) {
				console.log("CIRCULAR BUFFER OVERRIDE: POSITION: " + bufEnd + " | OLD OBJECT: " + 
					bufArr[bufEnd].toString() + " | NEW OBJECT: " + object.toString());
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

//############################################################################################################################################

/**
 * Represents a Stack data structure. JavaScript arrays
 * are pretty much stacks, this class removes the need to
 * access by index even though it is already present in 
 * javascript arrays.
 *
 */
function Stack() {
	var dataArr = [];

	/**
	 * Checks if the stack is empty or not.
	 * @return true if the stack is empty, false otherwise.
	 */
	this.isEmpty = function() {
		return (dataArr.length === 0) ? true : false;
	}

	/**
	 * Returns the number of elements in the stack.
	 * @return number of elements in the stack..
	 */
	this.size = function() {
		return dataArr.length;
	}

	/**
	 * Empties the stack of all elements.
	 */
	this.clear = function() {
		dataArr = [];
	};

	/**
	 * Returns the object on the top of the stack
	 * without removing the object.
	 * @return The object on the top of the stack. Returns null if stack is empty.
	 */
	this.peek = function() {
		if (dataArr.length > 0) {
			return dataArr[dataArr.length - 1];	
		} else {
			throw new ReferenceError("Stack.peek(): cannot peek an empty stack.");
		
		}
		
	};

	/**
	 * @Override overrides the Array.pop function.
	 * Returns the object on the top of the stack
	 * and removes it from the stack.
	 * @return The object on top of the stack.
	 */
	this.pop = function() {
		if (dataArr.length > 0) {
			return dataArr.pop();
		} else {	
			throw new ReferenceError("Stack.pop(): cannot pop an empty stack");
		
		}
	};

	/**
	 * @Override overrides the Array.push function.
	 * Adds an object to the top of the stack.
	 * @param object the object to add.
	 */
	this.push = function(object) {
		if (!isVarObjEmpty(object)) {
			dataArr.push(object);
		} else {
			throw new ReferenceError("Stack.push(): cannot push an uninitialized object onto the stack");
		}
		
	};

	/**
	 * Returns a string representation of the stack. Represented as 
	 * [a1,a2,....,an-1,an] where an is the index - 1 of the element in the queue.
	 * Returns [] if stack is empty.
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

//############################################################################################################################################

