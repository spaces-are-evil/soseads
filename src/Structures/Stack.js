/**
 * Represents a Stack data structure. JavaScript arrays
 * are pretty much stacks, this class removes the need to
 * access by index even though it is already present in 
 * javascript arrays.
 *
 */
function Stack() {
	this.dataArr = new Array(0);
}
/**
 * Empties the stack.
 */
Stack.prototype.empty = function() {
	this.dataArr = new Array(0);
};

/**
 * Returns the object on the top of the stack
 * without removing the object.
 * @return The object on the top of the stack. Returns null if stack is empty.
 */
Stack.prototype.peek = function() {
	if (this.dataArr.length === 0) return null;
	return this.dataArr[dataArr.length - 1];
};

/**
 * Returns the object on the top of the stack
 * and removes it from the stack.
 * @return The object on top of the stack.
 */
Stack.prototype.pop = function() {
	return this.dataArr.pop;
	
};

/**
 * Adds an object to the top of the stack.
 * @param object the object to add.
 */
Stack.prototype.push = function(object) {
	this.dataArr.push(object);
};

/**
 * Searches the stack for a given object.
 * @return True if object found, false otherwise.
 */
Stack.prototype.search = function(object) {
	for (var data in dataArr) {
		if (dataArr[data] == object) return true;
	};
	return false;
};

/**
 * Returns an array representation of the stack.
 */
Stack.prototype.toArray = function() {
	return this.dataArr;
};