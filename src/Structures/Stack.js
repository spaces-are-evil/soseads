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
	};

	/**
	 * Returns the number of elements in the stack.
	 * @return number of elements in the stack..
	 */
	this.size = function() {
		return dataArr.length;
	};

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
