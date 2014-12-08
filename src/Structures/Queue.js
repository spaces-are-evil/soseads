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

//FINISHED: 11/21/2014 10:55
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
			throw new ReferenceError("Queue.enqueue(object): object must be a valid variable or object. Objects must have at least 1 parameter that is initialized and not null.");
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