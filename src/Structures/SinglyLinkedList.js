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
 * Singly Linked List data structure
 * Backed by a javascript array.
 */
function SinglyLinkedList() {

	/**
	 * Singly Linked List Node: Used in Singly Linked List data structure
	 * Private member of singly linked list since it is not used externally.
	 */
	function SinglyLinkedListNode(obj, n) {
		var object = object || null;
		var next = n || null;
		/**
		 * Gets object (data) from the current node.
		 * @return the object (data) of the current node. -1 if no object exists
		 */
		SinglyLinkedListNode.getObject = function() {
			return (isVarObjEmpty(object)) ? object : null;
		};

		/**
		 * Checks if the current node has a next node set.
		 * @return True if current node has a next node, false otherwise.
		 */
		SinglyLinkedListNode.hasNext = function() {
			return (isObjVarEmpty(next)) ? true : false;
		};

		/**
		 * Retrieves the next node of the current node.
		 * @return The next node of the current node.
		 */
		SinglyLinkedListNode.getNext = function() {
			return (isObjVarEmpty(next)) ? next : null;
		};

		/**
		 * Sets the next node for the current node.
		 * @param n The next node to set for the current node.
		 */
		SinglyLinkedListNode.setNext = function(n) {
			next = n;
		};

		/**
		 * Sets the object (data) for the current node.
		 * @param obj The object (data) to set for the current node.
		 */
		SinglyLinkedListNode.setObject = function(obj) {
			object = obj;
		};
	}

	var head = null;
	var listCount = 0;

	/**
	 *
	 *
	 */
	SinglyLinkedList.add = function(object) {
		var newNode = new SinglyLinkedListNode(object, null);
		if (this.head === null) {
			this.head = newNode;
		} else {
			var curNode = this.head;
			while (curNode.hasNext()) {
				curNode = curNode.getNext();
			}
			curNode.setNext(newNode);
		}
	};

	/**
	 *
	 *
	 */
	SinglyLinkedList.addAt = function(index, object) {
		var newNode = new SinglyLinkedListNode(object, null);
		var head
		this.dataArr[index] = object;
	};

	/**
	 *
	 *
	 */
	SinglyLinkedList.addAll = function(objectList) {
		this.dataArr.concat(objectList);
	};

	/**
	 *
	 *
	 */
	SinglyLinkedList.addAllAt = function(index, objectList) {
		this.dataArr.splice(index, 0, objectList);
	};

	/**
	 *
	 *
	 */
	SinglyLinkedList.clear = function() {
		this.dataArr = [];
	};

	/**
	 *
	 *
	 */
	SinglyLinkedList.contains = function(object) {
		if (this.dataArr.indexOf(object) !== -1) return true;
		return false;
	};

	/**
	 *
	 *
	 */
	SinglyLinkedList.get = function(index) {
		return this.dataArr[index];
	};

	/**
	 *
	 *
	 */
	SinglyLinkedList.indexOf = function(object) {
		return this.dataArr.indexOf(object);
	};

	/**
	 *
	 *
	 */
	SinglyLinkedList.lastIndexOf = function(object) {
		return this.dataArr.lastIndexOf(object);
	};

	/**
	 *
	 *
	 */
	SinglyLinkedList.removeAt = function(index) {
		this.dataArr.splice(index,1);
	};

	/**
	 *
	 *
	 */
	SinglyLinkedList.remove = function(object) {
		var index = this.dataArr.indexOf(object);
		if (index !== -1) {
			this.dataArr.splice(index, 1);
		}
	};

	/**
	 *
	 *
	 */
	SinglyLinkedList.set = function(index, object) {
		this.dataArr[index] = object;
	};

	/**
	 *
	 *
	 */
	SinglyLinkedList.size = function() {
		return this.dataArr.length;
	};

	/**
	 *
	 *
	 */
	SinglyLinkedList.toArray = function() {
		return this.dataArr;
	};
}

