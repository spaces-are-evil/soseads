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
	 * Not doing data validation here, handled in the singly linked list "class".
	 */
	function SinglyLinkedListNode(obj, n) {
		var object = object || null;
		var next = n || null;
		/**
		 * Gets object (data) from the current node.
		 * @return the object (data) of the current node. -1 if no object exists
		 */
		SinglyLinkedListNode.getObject = function() {
			return (!isVarObjEmpty(object)) ? object : null;
		};

		/**
		 * Checks if the current node has a next node set.
		 * @return True if current node has a next node, false otherwise.
		 */
		SinglyLinkedListNode.hasNext = function() {
			return (!isVarObjEmpty(next)) ? true : false;
		};

		/**
		 * Retrieves the next node of the current node.
		 * @return The next node of the current node.
		 */
		SinglyLinkedListNode.getNext = function() {
			return (!isVarObjEmpty(next)) ? next : null;
		};

		/**
		 * Sets the next node for the current node.
		 * @param n The next node to set for the current node.
		 */
		SinglyLinkedListNode.setNext = function(n) {
			next = n || null;
		};

		/**
		 * Sets the object (data) for the current node.
		 * @param obj The object (data) to set for the current node.
		 */
		SinglyLinkedListNode.setObject = function(obj) {
			object = obj || null;
		};
	}

	var head = null,
		listCount = 0;

	/**
	 *	Returns the object in the node at the specified index
	 * @param i index of the node.
	 * @return object of the node at given index.
	 */
	SinglyLinkedList.get = function(i) {
		if (i >= listCount) {
 			throw new RangeError("SinglyLinkedList.get(i): index out of bounds: cannot access uninstantiated indices.");
 		}
 		if (!isNaN(i) || i % 1 !== 0) {
 			throw new RangeError("SinglyLinkedList.get(i): i must be a whole integer value >= 0.");
 		}
		if (isVarObjEmpty(head)) {
			throw new ReferenceError("SinglyLinkedList.get(i): cannot get node from an empty singly linked list.");
		}
		var curNode = head;
		for (var j = 0; j < listCount; j++) {
			if (j === i) {
				return curNode.object;
			}
			curNode = curNode.getNext();
		}
	};

	/**
	 * Returns the object in the first node (head).
	 * @return object in the head.
	 */
	SinglyLinkedList.getFirst = function() {
		if (isVarObjEmpty(head)) {
			throw new ReferenceError("SinglyLinkedList.getFirst(): cannot get node from an empty singly linked list.");
		}
		return head.object;
	};

	/**
	 * Returns the object in the last node (tail).
	 * @return object in the tail.
	 */
	SinglyLinkedList.getLast = function() {
		if (isVarObjEmpty(head)) {
			throw new ReferenceError("SinglyLinkedList.getLast(): cannot get node from an empty singly linked list.");
		}
		var curNode = head;
		while (curNode.hasNext()) {
			curNode = curNode.getNext();
		}
		return curNode.object;
	};

	/**
	 *
	 *
	 */
	SinglyLinkedList.set = function(i, obj) {
		this.dataArr[index] = object;
	};

	/**
	 *
	 *
	 */
	SinglyLinkedList.setFirst = function(obj) {
		this.dataArr[index] = object;
	};

	/**
	 *
	 *
	 */
	SinglyLinkedList.setLast = function(obj) {
		this.dataArr[index] = object;
	};

	/**
	 * Adds a new node at an index in the singly linked list.
	 * @param i the index to add at.
	 * @param obj the object (data) to add.
	 */
 	SinglyLinkedList.add = function(i, obj) {
 		if (isVarObjEmpty(obj)) {
 			throw new ReferenceError("SinglyLinkedList.add(i, obj): objects cannot be null, undefined or uninstantiated. Objects must have 1 valid property");
 		}
 		if (i > listCount) {
 			throw new RangeError("SinglyLinkedList.add(i, obj): index out of bounds: cannot access uninstantiated indices.");
 		}
 		if (!isNaN(i) || i % 1 !== 0) {
 			throw new RangeError("SinglyLinkedList.add(i, obj): i must be a whole integer value >= 0");
 		}

 		if (i === 0) {
 			addAtFront(obj);
 		} else if (i === (listCount - 1)) {
 			addAtEnd(obj);
 		} else {
 			var newNode = new SinglyLinkedListNode(object, null),
			curNode = head,
			prevNode = null,

			indCount = 0;	

			while (curNode.hasNext()) {
				if (i === (indCount - 1)) {
					prevNode = curNode;
				}
				curNode = curNode.getNext();
				indCount++;
			}
			prevNode.setNext(newNode);
			newNode.setNext(curNode);
			listCount++;
 		}
	};

	/**
	 * Adds a new node to the front of a singly linked list given an object (data). 
	 * @param obj The object (data) to add to the singly linked list.
	 */
	SinglyLinkedList.addFirst = function(obj) {
		var next = null;
		if (isVarObjEmpty(obj)) {
			throw new ReferenceError("SinglyLinkedList.add(obj): objects cannot be null, undefined or uninstantiated. Objects must have 1 valid property");
		} 
		if (!isVarObjEmpty(head)) {
			next = head;
		}
		head = new SinglyLinkedListNode(obj, next);
		listCount++;
	};

	/**
	 * Adds a new node to the end of a singly linked list given an object (data). 
	 * @param obj The object (data) to add to the singly linked list.
	 */
	SinglyLinkedList.addLast = function(obj) {
		if (isVarObjEmpty(obj)) {
			throw new ReferenceError("SinglyLinkedList.add(obj): objects cannot be null, undefined or uninstantiated. Objects must have 1 valid property");
		} 
		var curNode = head,
			newNode = new SinglyLinkedListNode(obj);
		if (isVarObjEmpty(head)) {
			head = newNode;
		} else {
			while (curNode.hasNext()) {
				curNode = curNode.getNext();
			}
			curNode.setNext(newNode);
		}
		listCount++;
	};

	/**
	 * Removes a node from the singly linked list if it exists.
	 * Throws an error if the object does not exist.
	 * @param obj the object (data) to remove.
	 */
	SinglyLinkedList.remove = function(obj) {
 		if (isVarObjEmpty(obj)) {
 			throw new ReferenceError("SinglyLinkedList.remove(obj): objects cannot be null, undefined or uninstantiated. Objects must have 1 valid property");
 		}
		listCount--;
	};

	/**
	 * Removes the first node (head) in the singly linked list.
	 */
	SinglyLinkedList.removeFirst = function() {
		if (isVarObjEmpty(head)) {
			throw new ReferenceError("SinglyLinkedList.removeFirst(): cannot remove nodes from an empty list.");
		}
		if (head.hasNext()) {
			head = head.getNext();
		} else {
			head.object = null;
			head.next = null;
		}
		listCount--;
	};

	/**
	 * Removes the last node (tail) in the singly linked list.
	 */
	SinglyLinkedList.removeLast = function() {
		var curNode = head,
			prevNode = ;
		for (var i = 0; i < listCount; i++) {
			curNode = curNode.getNext();
		}
	};

	/**
	 * Clears the singly linked list of all information.
	 */
	SinglyLinkedList.clear = function() {
		var tmpNext = null;
		for (var i = 0; i < listCount; i++) {
			tmpNext = head.getNext();
			head.object = null;
			head.next = null;
			head = tmpNext;
		}
	};

	/**
	 * Checks if an object exists in the singly linked list.
	 * @param obj the object to check for.
	 * @return true if the obj was found, false otherwise.
	 */
	SinglyLinkedList.contains = function(obj) {
		var curNode = head;
		for (var i = 0; i < listCount; i++) {
			if (curNode.getObject() === obj) {
				return true;
			}
			curNode = curNode.getNext();
		}
		return false;
	};	

	/**
	 * Returns the number of objects in the singly linked list.
	 * @return The number of objects in the singly linked list.
	 */
	SinglyLinkedList.size = function() {
		return listCount;
	};

	/**
	 * Returns a string representation of the singly linked list.
	 * @ return string representation of the singly linked list.
	 */
	SinglyLinkedList.toString = function() {
		var curNode = head,
			printStr = "";
		while (curNode.hasNext()) {
			printStr = printStr + curNode.object.toString() + " -> " + curNode.next.object.toString() + "\n";
		}
		printStr = printStr + curNode.object.toString();
	};
}

