
/**
 * Represents a node of a Binary Search Tree
 * Can be used to create BST, AVL Trees, Red-Black
 * Trees, Splay Tree, Treap, Tango and Huffman trees.
 * NOTICE: Optional parameters cannot be skipped.
 * If you want to pass height, all other parameters must be filled.
 * @param data Data the node will house. Null if not set
 * @param left The node's left child. Null if not set
 * @param right The node's right child. Null if not set
 * @param parent The node's parent. Null if not set
 * @param height The node's height. Null if not set
 */
function BinaryTreeNode(data, parent, left, right, height) {
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
	* Check if a binary tree node is a root node.
	* @return True if parent is null (root condition), false otherwise.
	*/
	this.isRoot = function() {
		return (parent === null) ? true : false;
	};
		
	/**
	*Check if a binary tree node is a leaf
	* @return True if no children exist (leaf condition), false otherwise.
	*/
	this.isLeaf = function() {
		return (leftChild && rightChild) ? true : false;
	};
			
	/**
	 * Checks if node has a parent.
	 * @return true if node has parent, false otherwise.
	 */
	this.hasParent = function() {
		return (parent) ? true : false;
	}

	/**
	 * Checks if node has exactly 1 child.
	 * @return true if node has either a left or right child.
	    returns false if it has neither or both.
	 */
	this.hasChild = function() {
		if ((leftChild && !rightChild) || (!leftChild && rightChild)) {
			return true;
		} else {
			return false;
		}
	}
	/**
	 * Checks if node has both children.
	 * @return true if node has both children, false otherwise.
	 */
	this.hasChildren = function() {
		return (leftChild && rightChild) ? true : false;
	}
		
	/**
	 * Get the height of the current node.
	 * @return The height of the current node if found, -1 if node height not found.
	 */
	this.getHeight = function() {
		return (nodeHeight || nodeHeight === 0) nodeHeight : -1;
	};
				
	/**
	 * Get the data of the current node.
	 * @return The data of the current node if found, -1 if node data not found.
	 */
	this.getNodeData = function() {
		return (nodeData === 0 || nodeData) ? nodeData : -1;
	};
				
	/**
	 * Gets the left child  of the current node.
	 * @return The left child of the current node if found, -1 if left child not found.
	 */
	this.getLeftChild = function() {
		return (leftChild) ? leftChild : -1;
	};

	/**
	 * Gets the right child  of the current node.
	 * @return The right child of the current node if found, -1 if right child not found.
	 */
	this.getLeftChild = function() {
		return (rightChild) ? rightChild : -1;
	};
				
	/**
	 * Gets the parent of a current node.
	 * @return the parent of a current node if found, -1 if parent not found.
	 */
	this.getParent = function() {
		return (parent) ? parent : -1;
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
			throw new ReferenceError('BinaryTreeNode.getBalanceFactor(): balance factor not set for current node.');
		}
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
			throw new RangeError('BinaryTreeNode.setHeight(data): data must be a valid integer');
		}
	};

	/**
	 * Sets the data for the current node.
	 * @param object The data to set for the current node.
	 */
	this.setNodeData = function(data) {
		var regExp = "[0-9a-zA-Z]+";
		if (regExp.test(data)) {
			nodeData = data;
		}
		else {
			throw new RangeError('BinaryTreeNode.setNodeData(data): binary search trees only accept alphanumerical characters');
		}
	};	
		
	/**
	 * Sets the left child of the current node.
	 * @param node The node that the left child will be.
	 */
	 this.setLeftChild = function(node) {
	 	if (node instanceof BinaryTreeNode) {
	 		leftChild = node;
	 	} else {
	 		throw new ReferenceError("BinaryTreeNode.setLeftChild(node): node must be of type BinaryTreeNode.");
	 	}
	 }

	/**
	 * Sets the right child of the current node.
	 * @param node The node that the left child will be.
	 */
	 this.setRightChild = function(node) {
	 	if (node instanceof BinaryTreeNode) {
	 		rightChild = node;
	 	} else {
	 		throw new ReferenceError("BinaryTreeNode.setRightChild(node): node must be of type BinaryTreeNode.");
	 	}
	 }
				
	/**
	 * Sets the parent of the current node.
	 * @param node the node to set the parent as.
	 */
	this.setParent = function(node) {
		if (node instanceof BinaryTreeNode) {
			parent = node;
		}
		else { 
			throw new ReferenceError('BinaryTreeNode.setParent(node): node must be of type BinaryTreeNode');
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
	 * Removes the left child and link for the current node.
	 */
	this.deleteLeftChild = function() {
		if (leftChild) {
			leftChild = null;
		}
		else {
			throw new RangeError("BinaryTreeNode.deleteLeftChild(): Cannot delete a non-existent child.");
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
			throw new RangeError("BinaryTreeNode.deleteRightChild(): Cannot delete a non-existent child.");
		}
	}

	/**
	 * Removes the parent link for the current node.
	 */
	this.deleteParent = function() {
		if (parent) {	
			parent = null;
		} else {
			throw new RangeError("BinaryTreeNode.deleteRightChild(): Cannot delete a non-existent parent.");
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
		var retVal = nodeData;
		return retVal;
	};
}

