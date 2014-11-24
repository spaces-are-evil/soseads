function ArrayList() {
	dataArr = [];
}

ArrayList.prototype.add = function(object) {
	this.dataArr.push(object);
};

ArrayList.prototype.addAt = function(index, object) {
	this.dataArr[index] = object;
};

ArrayList.prototype.addAll = function(objectList) {
	this.dataArr.concat(objectList);
};

ArrayList.prototype.addAllAt = function(index, objectList) {
	this.dataArr.splice(index, 0, objectList);
};

ArrayList.prototype.clear = function() {
	this.dataArr = [];
};

ArrayList.prototype.contains = function(object) {
	if (this.dataArr.indexOf(object) !== -1) return true;
	return false;
};

ArrayList.prototype.get = function(index) {
	return this.dataArr[index];
};

ArrayList.prototype.indexOf = function(object) {
	return this.dataArr.indexOf(object);
};

ArrayList.prototype.lastIndexOf = function(object) {
	return this.dataArr.lastIndexOf(object);
};

ArrayList.prototype.removeAt = function(index) {
	this.dataArr.splice(index,1);
};

ArrayList.prototype.remove = function(object) {
	var index = this.dataArr.indexOf(object);
	if (index !== -1) {
		this.dataArr.splice(index, 1);
	}
};

ArrayList.prototype.set = function(index, object) {
	this.dataArr[index] = object;
};

ArrayList.prototype.size = function() {
	return this.dataArr.length;
};

ArrayList.prototype.toArray = function() {
	return this.dataArr;
};

/*
 * =================================================================
 */
 
function SinglyLinkedList() {
	var head = null;
	var listCount = 0;
}

SinglyLinkedList.prototype.add = function(object) {
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

SinglyLinkedList.prototype.addAt = function(index, object) {
	var newNode = new SinglyLinkedListNode(object, null);
	var head
	this.dataArr[index] = object;
};

SinglyLinkedList.prototype.addAll = function(objectList) {
	this.dataArr.concat(objectList);
};

SinglyLinkedList.prototype.addAllAt = function(index, objectList) {
	this.dataArr.splice(index, 0, objectList);
};

SinglyLinkedList.prototype.clear = function() {
	this.dataArr = [];
};

SinglyLinkedList.prototype.contains = function(object) {
	if (this.dataArr.indexOf(object) !== -1) return true;
	return false;
};

SinglyLinkedList.prototype.get = function(index) {
	return this.dataArr[index];
};

SinglyLinkedList.prototype.indexOf = function(object) {
	return this.dataArr.indexOf(object);
};

SinglyLinkedList.prototype.lastIndexOf = function(object) {
	return this.dataArr.lastIndexOf(object);
};

SinglyLinkedList.prototype.removeAt = function(index) {
	this.dataArr.splice(index,1);
};

SinglyLinkedList.prototype.remove = function(object) {
	var index = this.dataArr.indexOf(object);
	if (index !== -1) {
		this.dataArr.splice(index, 1);
	}
};

SinglyLinkedList.prototype.set = function(index, object) {
	this.dataArr[index] = object;
};

SinglyLinkedList.prototype.size = function() {
	return this.dataArr.length;
};

SinglyLinkedList.prototype.toArray = function() {
	return this.dataArr;
};
