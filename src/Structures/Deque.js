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
	return (typeof obj === 'object' && propCount >= 0 && validPropCount === 0) ? true : false;
}
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
 		if (!isVarObjEmpty(object) && (object || object === 0)) {
 			dataArr.push(object);
 		} else {
 			throw new ReferenceError("Deque.push(object): object must be a valid variable or object. Objects must have at least 1 parameter that is initialized and not null.");
 		}
 		
 	};

 	/**
 	 * Adds an element to the beginning of the deque.
 	 * Throws error if trying to add a falsy element (other than 0).
 	 * @param object the element to add to the beginning of the deque.
 	 */
 	this.unshift = function(object) {
 		 if (!isVarObjEmpty(object) && (object || object === 0)) {
 			dataArr.unshift(object);
 		} else {
 			throw new ReferenceError("Deque.unshift(object): object must be a valid variable or object. Objects must have at least 1 parameter that is initialized and not null.");
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