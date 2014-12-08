

/*
 * ============================================================
 */
 
function DoublyLinkedListNode(object, head, tail) {
		this.object = object;
		this.head = head;
		this.tail = tail;
};

DoublyLinkedListNode.prototype.getElement = function() {
	if (this.object !== null) return this.object;
	else return null;
};

DoublyLinkedListNode.prototype.hasNext = function() {
	if (this.tail !== null) return true;
	else return false;
};

DoublyLinkedListNode.prototype.hasPrevious = function() {
	if (this.head !== null) return true;
	else return false;
};

DoublyLinkedListNode.prototype.getNext = function() {
	if (this.tail !== null) return this.tail;
	else return null;
};

DoublyLinkedListNode.prototype.getPrevious = function() {
	if (this.head !== null) return this.head;
	else return null;
};

DoublyLinkedListNode.prototype.setNext = function(node) {
	this.tail = node;
};

DoublyLinkedListNode.prototype.setPrevious = function(node) {
	this.head = node;
};

DoublyLinkedListNode.prototype.setObject = function(object) {
	this.object = object;
};