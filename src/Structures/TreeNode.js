
/**
 * Represents a node of a Binary Search Tree
 * Can be used to create BST, AVL Trees, Red-Black
 * Trees, Splay Tree, Treap and Tango trees. 
 */
function TreeNode(data) {
	var nodeData = data;
	var parent = null;
	var children = [null, null];
	var height = null;
	var subtreeHeight = null;
	var balanceFactor = 0;
	
	/**
	 * Readjusts the height value of children nodes when a change in structure takes place.
	 */
	this.changeChildrenHeight = function() {
		var childQueue = new Queue();
		var curNode;
		var curNodeChildren;
		var curNodeHeight;
		childQueue.enqueue(this);
		while (!childQueue.isEmpty()) {
			curNode = childQueue.dequeue();
			curNodeChildren = curNode.getAllChildren();
			curNodeHeight = curNode.getHeight();
			if (curNodeChildren !== null) {
				for (var i = 0; i < curNode.getChildrenLength(); i++) {
					if (typeof curNodeChildren[i] !== 'undefined' && curNodeChildren[i]) {
						curNodeChildren[i].setHeight(curNodeHeight + 1);
						childQueue.enqueue(curNodeChildren[i]);
					}
				}		
			}
		}
	};
	
	/**
	 * Counts the number of nodes from the node calling the function.
	 */
	this.countChildNodes = function() {
		var nodeCount = 0;
		var countQueue = new Queue();
		var countNode;
		var countNodeChildren;
		var countNodeData;
		countQueue.enqueue(this);
		while (!countQueue.isEmpty()) {
			countNode = countQueue.dequeue();
			countNodeData = countNode.getNodeData();
			nodeCount++;
			countNodeChildren = countNode.getAllChildren();
			if (countNodeChildren !== null) {
				for (var i = 0; i < countNode.getChildrenLength(); i++) {
					if (typeof countNodeChildren[i] !== 'undefined' && countNodeChildren[i]) {
						countQueue.enqueue(countNodeChildren[i]);
					}
				}		
			}
		}
		return nodeCount;
	};
	
	/**
	* Check if a tree node is a root node.
	* @return True if parent is null (root condition), false otherwise.
	*/
	this.isRoot = function() {
		if (parent === null) return true;
		else return false;
	};
		
	/**
	*Check if a tree node is a leaf
	* @return True if no children exist (leaf condition), false otherwise.
	*/
	this.isLeaf = function() {
		if (children.length === 0) return true;
		else return false;
	};

	/**
	 * Checks the current node for empty children. Finds the
	 * index of the next empty child node
	 * @param the current node to check
	 * @return returns the index of the next empty child node.
	 */
	this.isEmptyNode = function(node) {
			
	};
			
	/**
	* Sets the height of the current node. Increases overall performance.
	* @param data The height of the current node.
	*/
	this.setHeight = function(data) {
		height = data;
	};

	/**
	 * Sets the data of the current node.
	 * @param data The 
	 */
	this.setNodeData = function(data) {
		if (typeof data !== 'undefined' && data) {
			nodeData = data;
		}
	};	
		
	/**
	 * Sets the nth (0 inclusive) child of the current node. 
	 * @param nth the child number (0 inclusive).
	 * @param node the node to set the nth child as.
	 */
	this.setNthChild = function(nth, node) {
		children[nth] = node;
	};
				
	/**
	 * Sets the parent of the current node.
	 * @param node the node to set the parent as.
	 */
	this.setParent = function(node) {
		parent = node;
	};
		
	/**
	 * Path retracing algorithm. Retraces path of node and calculates
	 * balance factor as it goes. Works from most added leaf up to parent.
	 */
	this.setBalanceFactor() {
		balanceFactor = 0;
		var node = this;
		var nodeParent = node.getParent();
		var nodeParentChild;
		while (nodeParent !== null) {
			for (var i = 0; i < nodeParent.getChildrenLength(); i++) {
				nodeParentChild = nodeParent.getNthChild(i);
				if (nodeParentChild && nodeParentChild !== 'undefined' && nodeParentChild.getNodeValue() === node.getNodeValue()) [
					if (i === 0) {
						//left subtree
						nodeParent.balanceFactor = parseInt(balanceFactor.replace("-","").trim()) + 1;
					} else if (i === 1) {
						//right subtree
						nodeParent.balanceFactor = parseInt("-" + (parseInt(balanceFactor.replace("-","").trim()) + 1));
					}
					nodeParent = nodeParent.getParent();
					break;
				}
			}
		}
	};
		
	/**
	 * Get the height of the current node.
	 * @return The height of the current node.
	 */
	this.getHeight = function() {
		return height;
	};
				
	/**
	 * Get the data of the current node.
	 * @return The data of the current node.
	 */
	this.getNodeData = function() {
		return nodeData;
	};
				
	/**
	 * Gets the nth child (0 inclusive) of the current node.
	 * @param nth the child number to get (0 inclusive).
	 * @return The nth child of the current node.
	 */
	this.getNthChild = function(nth) {
		return children[nth];
	};
				
	/**
	 * Gets an array of all children for the current node.
	 * @return An array of children for the current node.
	 */
	this.getAllChildren = function() {
		var len = children.length;
		var childCount = 0;
		for (var i = 0; i < len; i++) {
			if (typeof children[i] !== 'undefined' && children[i]) childCount++;
		}
		if (childCount > 0) return children;
		else return null;
	};
				
	/**
	 * Gets the parent of a current node.
	 * @return the parent of a current node.
	 */
	this.getParent = function() {
		if (parent !== null) return parent;
		else return false;
	};
					
	/**
	* Retrieve the number of children for the current node.
	* @return The number of children.
	*/
	this.getNumberOfChildren = function() {
		var retVal = 0;
		for (var i = 0; i < children.length; i++) {
			if (typeof children[i] !== 'undefined' && children[i]) retVal++;
		}
		return retVal;
	};

	/**
	 * Retrieves the length of children array (n) of a n-ary tree. 
	 * @return the length of the children array.
	 */
	this.getChildrenLength = function() {
		return children.length;
	};
	
	this.getBalanceFactor = function() {
		var balanceQueue = new Queue();
		var curNode;
		var curNodeChildren;
		var curNodeHeight;
		var subtreeHeight;
		childQueue.enqueue(this);
		while (!childQueue.isEmpty()) {
			curNode = childQueue.dequeue();
			curNodeChildren = curNode.getAllChildren();
			curNodeHeight = curNode.getHeight();
			if (curNodeChildren !== null) {
				for (var i = 0; i < curNode.getChildrenLength(); i++) {
					if (typeof curNodeChildren[i] !== 'undefined' && curNodeChildren[i]) {
						curNodeChildren[i].setHeight(curNodeHeight + 1);
						childQueue.enqueue(curNodeChildren[i]);
					}
				}		
			}
		}
	};
	
	/**
	 * Removes the nth child of the current node.
	 * @param nth the child number (0 inclusive).
	 */
	this.removeNthChild = function(nth) {
		if (children[nth] !== null) children[nth] = null;
	};

	/**
	 * Removes all children of the current node.
	 */
	this.removeAllChildren = function() {
		children = [null, null];
	};

	/**
	 * removes the parent of the current node.
	 */
	this.removeParent = function() {
		if (parent !== null) parent = null;
	};
	
	/**
	 * Removes a node (deletes all associated information).
	 */
	this.removeNode = function() {
		parent = null;
		children = [null, null];
		nodeData = null;
		height = null;
	};
	
	this.toString = function() {
		var retVal = nodeData + "|" + height;
		return retVal;
	};
}

