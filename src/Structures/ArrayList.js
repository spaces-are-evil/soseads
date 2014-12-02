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
 * Array List data structure.
 * Basically a javascript array by another name with some added
 * functionality.
 */
function ArrayList() {
	dataArr = [];

	/**
	 * Adds an element to the end of the array list.
	 * @param object the element to add.
	 */
	this.add = function(object) {
		
		dataArr.push(object);
	};

	/**
	 * Adds an element at a specified index in the array list.
	 * If element exists at index, shifts that element and all others
	 * to the right.
	 */
	this.addAt = function(index, object) {
		dataArr.splice(index, 0, object);

		dataArr[index] = object;
	};

	/**
	 *
	 *
	 */
	this.addAll = function(objectList) {
		this.dataArr.concat(objectList);
	};

	/**
	 *
	 *
	 */
	this.addAllAt = function(index, objectList) {
		this.dataArr.splice(index, 0, objectList);
	};

	/**
	 *
	 *
	 */
	this.clear = function() {
		this.dataArr = [];
	};

	/**
	 *
	 *
	 */
	this.contains = function(object) {
		if (this.dataArr.indexOf(object) !== -1) return true;
		return false;
	};

	/**
	 *
	 *
	 */
	this.get = function(index) {
		return this.dataArr[index];
	};

	/**
	 *
	 *
	 */
	this.indexOf = function(object) {
		return this.dataArr.indexOf(object);
	};

	/**
	 *
	 *
	 */
	this.lastIndexOf = function(object) {
		return this.dataArr.lastIndexOf(object);
	};

	/**
	 *
	 *
	 */
	this.removeAt = function(index) {
		this.dataArr.splice(index,1);
	};

	/**
	 *
	 *
	 */
	this.remove = function(object) {
		var index = this.dataArr.indexOf(object);
		if (index !== -1) {
			this.dataArr.splice(index, 1);
		}
	};

	/**
	 *
	 *
	 */
	this.set = function(index, object) {
		this.dataArr[index] = object;
	};

	/**
	 *
	 *
	 */
	this.size = function() {
		return this.dataArr.length;
	};

	/**
	 *
	 *
	 */
	this.toArray = function() {
		return this.dataArr;
	};
}

