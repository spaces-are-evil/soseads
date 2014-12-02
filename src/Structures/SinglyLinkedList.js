function SinglyLinkedList() {
	function SinglyLinkedListNode(object, next) {
		this.object = object;
		this.next = next;

		SinglyLinkedListNode.getElement = function() {
			if (this.object !== null) return this.object;
			else return null;
		};

		SinglyLinkedListNode.hasNext = function() {
			if (this.next !== null) return true;
			else return false;
		};

		SinglyLinkedListNode.getNext = function() {
			if (this.next !== null) return this.next;
			else return null;
		};

		SinglyLinkedListNode.setNext = function(node) {
			this.next = node;
		};

		SinglyLinkedListNode.setObject = function(object) {
			this.object = object;
		};

	}

	var head = null;
	var listCount = 0;

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

	SinglyLinkedList.addAt = function(index, object) {
		var newNode = new SinglyLinkedListNode(object, null);
		var head
		this.dataArr[index] = object;
	};

	SinglyLinkedList.addAll = function(objectList) {
		this.dataArr.concat(objectList);
	};

	SinglyLinkedList.addAllAt = function(index, objectList) {
		this.dataArr.splice(index, 0, objectList);
	};

	SinglyLinkedList.clear = function() {
		this.dataArr = [];
	};

	SinglyLinkedList.contains = function(object) {
		if (this.dataArr.indexOf(object) !== -1) return true;
		return false;
	};

	SinglyLinkedList.get = function(index) {
		return this.dataArr[index];
	};

	SinglyLinkedList.indexOf = function(object) {
		return this.dataArr.indexOf(object);
	};

	SinglyLinkedList.lastIndexOf = function(object) {
		return this.dataArr.lastIndexOf(object);
	};

	SinglyLinkedList.removeAt = function(index) {
		this.dataArr.splice(index,1);
	};

	SinglyLinkedList.remove = function(object) {
		var index = this.dataArr.indexOf(object);
		if (index !== -1) {
			this.dataArr.splice(index, 1);
		}
	};

	SinglyLinkedList.set = function(index, object) {
		this.dataArr[index] = object;
	};

	SinglyLinkedList.size = function() {
		return this.dataArr.length;
	};

	SinglyLinkedList.toArray = function() {
		return this.dataArr;
	};


}

