
/**
 * Represents a node of a Binary Search Tree
 * Can be used to create BST, AVL Trees, Red-Black
 * Trees, Splay Tree, Treap, Tango and Huffman trees.
 * NOTICE: Optional parameters cannot be skipped.
 * If you want to pass height, all other parameters must be filled.
 * @param data Data the node will house. Null if not set
 * @param parent The node's parent. Null if not set
 * @param left The node's left child. Null if not set
 * @param right The node's right child. Null if not set
 * @param height The node's height. Null if not set
 */
function TreeNode(data, parent, left, right, height) {
	var nodeData = data || null,
	 	parent = parent || null,
		leftChild = left || null,
		rightChild = right || null,
		nodeHeight = height || null,
		subtreeHeight,
		balanceFactor;
	
	/**
	 * Readjusts the height value of children nodes when a change in structure takes place.
	 */
	this.changeChildrenHeight = function() {
		var childQueue = new Queue(),
			curNode;
		childQueue.enqueue(this);
		while (!childQueue.isEmpty()) {
			curNode = childQueue.dequeue();
			if (curNode.leftChild) {
				curNode.leftChild.nodeHeight = curNode.nodeHeight + 1;
				childQueue.enqueue(curNode.leftChild);
			} 
			if (curNode.rightChild) {
				curNode.rightChild.nodeHeight = curNode.nodeHeight + 1;c
				childQueue.enqueue(curNode.rightChild);
			}
		}
	};
	
	/**
	 * Counts the number of nodes from the node calling the function.
	 */
	this.countChildNodes = function() {
		var nodeCount = 0,
			countQueue = new Queue(),
			curNode;
		countQueue.enqueue(this);
		while (!countQueue.isEmpty()) {
			curNode = countQueue.dequeue();
			nodeCount++;
			if (curNode.leftChild) {
				childQueue.enqueue(curNode.leftChild);
			} 
			if (curNode.rightChild) {
				childQueue.enqueue(curNode.rightChild);
			}	
		}
		return nodeCount;
	};
	
	/**
	* Check if a tree node is a root node.
	* @return True if parent is null (root condition), false otherwise.
	*/
	this.isRoot = function() {
		return (parent === null) ? true : false;
	};
		
	/**
	*Check if a tree node is a leaf
	* @return True if no children exist (leaf condition), false otherwise.
	*/
	this.isLeaf = function() {
		return (leftChild && rightChild) ? true : false;
	};
			
	/**
	* Sets the height of the current node. Increases overall performance.
	* @param data The height of the current node.
	*/
	this.setHeight = function(data) {
		if (!isNaN(data)) {
			nodeHeight = data;
		}
		else {
			throw new RangeError('TreeNode.setHeight(data): data must be a valid integer');
		}
	};

	/**
	 * Sets the data for the current node.
	 * @param object The data to set for the current node.
	 */
	this.setNodeData = function(data) {
		var regExp = "[0-9a-zA-Z]+";
		if (regExp.test(data.toString())) {
			nodeData = data;
		}
		else {
			throw new RangeError('TreeNode.setNodeData(data): binary search trees only accept alphanumerical characters');
		}
	};	
		
	/**
	 * Sets the left child of the current node.
	 * @param node The node that the left child will be.
	 */
	 this.setLeftChild = function(node) {
	 	if (node instanceof TreeNode) {
	 		leftChild = node;
	 	} else {
	 		throw new ReferenceError("TreeNode.setLeftChild(node): node must be of type TreeNode.");
	 	}
	 }

	/**
	 * Sets the right child of the current node.
	 * @param node The node that the left child will be.
	 */
	 this.setRightChild = function(node) {
	 	if (node instanceof TreeNode) {
	 		rightChild = node;
	 	} else {
	 		throw new ReferenceError("TreeNode.setRightChild(node): node must be of type TreeNode.");
	 	}
	 }
				
	/**
	 * Sets the parent of the current node.
	 * @param node the node to set the parent as.
	 */
	this.setParent = function(node) {
		if (node instanceof TreeNode) {
			parent = node;
		}
		else { 
			throw new ReferenceError('TreeNode.setParent(node): node must be of type TreeNode');
		}
	};
		
	/**
	 * Path retracing algorithm. Retraces path of node from child to parent
	 * and calculates balance factor as it goes.
	 */
	this.setBalanceFactor = function() {
		var node,
			newBalanceFactor = 0;
		try {
			var node = this;
		} catch (err) {};
		
		while (node.parent !== null) {
			if (node.parent.leftChild && node.parent.leftChild.nodeData === node.nodeData) {
				node.parent.balanceFactor = parseInt(balanceFactor.replace("-","").trim()) + 1;
			}
			if (node.parent.rightChild && node.parent.rightChild.nodeData === node.nodeData) {
				node.parent.balanceFactor = parseInt("-" + (parseInt(balanceFactor.replace("-","").trim()) + 1));
			}
			try {
				node = node.parent.parent;
			} catch (err) {
				break;
			}
			
		}
	};
		
	/**
	 * Get the height of the current node.
	 * @return The height of the current node.
	 */
	this.getHeight = function() {
		if (nodeHeight !== 0 || !nodeHeight) {
			throw new ReferenceError('TreeNode.getHeight(): current node height not set.');
		}
		return nodeHeight;
	};
				
	/**
	 * Get the data of the current node.
	 * @return The data of the current node.
	 */
	this.getNodeData = function() {
		if (nodeData !== 0 || !nodeData) {
			throw new ReferenceError('TreeNode.getNodeData(): current node data not set.');
		}
		return nodeData;
	};
				
	/**
	 * Gets the left child  of the current node.
	 * @return The left child of the current node.
	 */
	this.getLeftChild = function() {
		if (!leftChild) {
			throw new ReferenceError('TreeNode.getNthChild(): child' + nth + "does not exist for current node.");
		}
		return children[nth];
	};

	/**
	 * Gets the right child  of the current node.
	 * @return The right child of the current node.
	 */
	this.getLeftChild = function() {
		if (!rightChild) {
			throw new ReferenceError('TreeNode.getNthChild(): child' + nth + "does not exist for current node.");
		}
		return children[nth];
	};
				
	/**
	 * Gets the parent of a current node.
	 * @return the parent of a current node.
	 */
	this.getParent = function() {
		if (parent) {
			return parent;
		}
		else { 
			throw new ReferenceError('TreeNode.getParent(): no parent exists for current node.');
		}
	};

	/**
	 * Gets the balance factor for the current node;
	 * @return the balance factor of the current node.
	 *
	 */
	this.getBalanceFactor = function() {
		if (balanceFactor || balanceFactor === 0) {
			return balanceFactor;
		} 
		else { 
			throw new ReferenceError('TreeNode.getBalanceFactor(): balance factor not set for current node.');
		}
	};
	
	/**
	 * Removes the left child and link for the current node.
	 */
	this.deleteLeftChild = function() {
		if (leftChild) {
			leftChild = null;
		}
		else {
			throw new RangeError("TreeNode.deleteLeftChild(): Cannot delete a non-existent child.");
		}
	};

	/**
	 * Removes the right child and link for the current node.
	 */
	this.deleteRightChild = function() {
		if (rightChild) {
			rightChild = null;
		}
		else {
			throw new RangeError("TreeNode.deleteRightChild(): Cannot delete a non-existent child.");
		}
	}

	/**
	 * Removes the parent link for the current node.
	 */
	this.deleteParent = function() {
		if (parent) {	
			parent = null;
		} else {
			throw new RangeError("TreeNode.deleteRightChild(): Cannot delete a non-existent parent.");
		}
	};
	
	/**
	 * Removes the current node.
	 */
	this.deleteNode = function() {
		parent = null;
		leftChild = null;
		rightChild = null;
		nodeData = null;
		nodeHeight = null;
		subtreeHeight = null;
		balanceFactor = null;
	};
	
	/**
	 * Returns a string representation of the node.
	 * Currently returns Node Value|Height. (ex 7|1 Node Value = 7, Height = 1)
	 * @return A string representation of the node.
	 */
	this.toString = function() {
		var retVal = nodeData + "|" + nodeHeight;
		return retVal;
	};
}

