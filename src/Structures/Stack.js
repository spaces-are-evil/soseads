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
	 * Empties the stack.
	 */
	this.empty = function() {
		dataArr = [];
	};

	/**
	 * Returns the object on the top of the stack
	 * without removing the object.
	 * @return The object on the top of the stack. Returns null if stack is empty.
	 */
	this.peek = function() {
		if (dataArr.length === 0) {
			throw new ReferenceError("Stack.peek(): cannot peek an empty stack");
		} else {
			return dataArr[dataArr.length - 1];	
		}
		
	};

	/**
	 * Returns the object on the top of the stack
	 * and removes it from the stack.
	 * @return The object on top of the stack.
	 */
	this.pop = function() {
		if (dataArr.length === 0) {
			throw new ReferenceError("Stack.pop(): cannot pop an empty stack");
		} else {
			return dataArr.pop;
		}
	};

	/**
	 * Adds an object to the top of the stack.
	 * @param object the object to add.
	 */
	this.push = function(object) {
		if (!object) {
			throw new ReferenceError("Stack.push: cannot push an uninitialized object onto the stack");
		} else {
			this.dataArr.push(object);
		}
		
	};

	/**
	 * Searches the stack for a given object.
	 * @return True if object found, false otherwise.
	 */
	this.search = function(object) {
		for (var data in dataArr) {
			if (dataArr[data] === object) {
				return true;
			}
		}
		return false;
	};

	/**
	 * Returns an array representation of the stack.
	 */
	this.toArray = function() {
		return this.dataArr;
	};
}
