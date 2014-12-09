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
	} 
	else {
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
 * Array List data structure.
 * Basically a javascript array by another name with some added
 * functionality.
 */
function ArrayList() {
	dataArr = [];

	/**
	 * Adds an object to the end of the array list.
	 * @param object the object to add.
	 */
	this.add = function(obj) {
		if (isVarObjEmpty(obj)) {
			throw new ReferenceError("ArrayList.add(obj): objects cannot be null, undefined or uninstantiated. Objects must have 1 valid property");
		} 
		else {
			dataArr.push(object);	
		}
	};

	/**
	 * Adds an object at a specified index in the array list.
	 * If object exists at index, shifts that object and all others
	 * to the right.
	 * @param i the index to add at
	 * @param obj the object to add
	 */ 
	this.addAt = function(i, obj) {
		if (!isNaN(i) || i < 0) {
			throw new RangeError("ArrayList.get(i): i must be a positive integer value (0 inclusive)");
		}
		if (isVarObjEmpty(obj)) {
			throw new ReferenceError("ArrayList.add(obj): objects cannot be null, undefined or uninstantiated. Objects must have 1 valid property");
		} 
		else {
			dataArr.splice(i, 0, obj);	
		}
	};

	/**
	 * Clears the array list of all objects.
	 */
	this.clear = function() {
		this.dataArr = [];
	};

	/**
	 * Checks if an object exists in the array list.
	 * @param obj The object to search for.
	 * @return True if ArrayList contains object, false otherwise.
	 */
	this.contains = function(obj) {
		if (isVarObjEmpty(obj)) {
			throw new ReferenceError("ArrayList.contains(obj): objects cannot be null, undefined or uninstantiated. Objects must have 1 valid property");
		} 
		else {
			return (this.dataArr.indexOf(obj) !== -1) ? true : false;
		}
	};

	/**
	 * Returns an object in the array list at the specified index.
	 * @param i index of object to get.
	 * @return the object at the given index.
	 */
	this.get = function(i) {
		if (!isNaN(i) || i < 0) {
			throw new RangeError("ArrayList.get(i): i must be a positive integer value (0 inclusive)");
		} 
		else if ( i > dataArr.length) {
			throw new RangeError("ArrayList.get(i): index out of bounds: i=" + i + " is greater than ArrayList.length=" + dataArr.length);
		} 
		else {
			return this.dataArr[index];
		}
	};

	/**
	 * Returns the first found index of an object in the array.
	 * Returns -1 if no object is found.
	 * @param obj The object to find the index for.
	 * @return the first index of the given object.
	 */
	this.indexOf = function(obj) {
		if (isVarObjEmpty(obj)) {
			throw new ReferenceError("ArrayList.indexOf(obj): objects cannot be null, undefined or uninstantiated. Objects must have 1 valid property");
		}
		return this.dataArr.indexOf(obj);
	};

	/**
	 * Returns the last found index of an object in the array.
	 * Returns -1 if no object is found.
	 *
	 */
	this.lastIndexOf = function(obj) {
		if (isVarObjEmpty(obj)) {
			throw new ReferenceError("ArrayList.lastIndexOf(obj): objects cannot be null, undefined or uninstantiated. Objects must have 1 valid property");
		}
		return this.dataArr.lastIndexOf(obj);
	};

	/**
	 * Removes an object at a given index.
	 * @param i the index of the object to remove.
	 */
	this.removeAt = function(i) {
		if (!isNaN(i) || i < 0) {
			throw new RangeError("ArrayList.get(i): i must be a positive integer value (0 inclusive)");
		} 
		else if () {

		}
		else {
			this.dataArr.splice(i,1);	
		}
	};

	/**
	 * Removes an object from the arraylist if the object exists in the arraylist.
	 * @param obj The object to remove from the arraylist.
	 */
	this.remove = function(obj) {
		if (isVarObjEmpty(obj)) {
			throw new ReferenceError("ArrayList.remove(obj): objects cannot be null, undefined or uninstantiated. Objects must have 1 valid property");
		} else {
			var index = this.dataArr.indexOf(obj);
			if (index === -1) {
				throw new ReferenceError("ArrayList.remove(obj): object does not exist in arraylist.");
			} else {
				this.dataArr.splice(index, 1);
			}
		}
	};

	/**
	 * 
	 *
	 */
	this.set = function(i, obj) {
		this.dataArr[i] = obj;
	};

	/**
	 * Returns the number of items in the ArrayList.
	 * @return the number of items in the ArrayList.
	 */
	this.size = function() {
		return this.dataArr.length;
	};

	/**
	 * Returns an array representation of the ArrayList.
	 * @return an array representation of the ArrayList.
	 */
	this.toArray = function() {
		return this.dataArr;
	};
}

