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
 * Represents a binary search tree.
 * Uses BinaryTreeNodes to build a binary search tree.
 * Currently works with numeric values only.
 */
function BinarySearchTree() {
		/**
	 * Represents a node of a Binary Search Tree
	 * Can be used to create BST, AVL Trees, Red-Black
	 * Trees, Splay Tree, Treap, Tango and Huffman trees.
	 * NOTICE: Optional parameters cannot be skipped.
	 * If you want to pass height, all other parameters must be filled.
	 * @param data Data the node will house. Null if not set
	 * @param left The ngit ode's left child. Null if not set
	 * @param right The node's right child. Null if not set
	 * @param parent The node's parent. Null if not set
	 * @param height The node's height. Null if not set
	 */
	function BinaryTreeNode(data, parent, left, right, height) {
		var nodeData = data || null,
		 	nodeParent = parent || null,
			leftChild = left || null,
			rightChild = right || null,
			nodeHeight = height || null,
			subtreeHeight;
		
		/**
		 * Readjusts the height value of children nodes when a change in structure takes place.
		 * Uses level order traversal (breadth first search).
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
					curNode.rightChild.nodeHeight = curNode.nodeHeight + 1;
					childQueue.enqueue(curNode.rightChild);
				}
			}
		};
		
		/**
		 * Counts the number of nodes from the node calling the function.
		 * Uses level order traversal (breadth first search).
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
					countQueue.enqueue(curNode.leftChild);
				} 
				if (curNode.rightChild) {
					countQueue.enqueue(curNode.rightChild);
				}	
			}
			return nodeCount;
		};
		
		/**
		* Check if a binary tree node is a root node.
		* @return True if parent is null (root condition), false otherwise.
		*/
		this.isRoot = function() {
			return (this.nodeParent === null) ? true : false;
		};
			
		/**
		*Check if a binary tree node is a leaf
		* @return True if no children exist (leaf condition), false otherwise.
		*/
		this.isLeaf = function() {
			return (!leftChild && !rightChild) ? true : false;
		};
				
		/**
		 * Checks if node has a parent.
		 * @return true if node has parent, false otherwise.
		 */
		this.hasParent = function() {
			return (this.nodeParent) ? true : false;
		};
		
		/**
		 * Checks if node has exactly 1 child.
		 * @return true if node has either a left or right child.
		    returns false if it has neither or both.
		 */
		this.hasChild = function() {
			//XOR implementation
			return ((leftChild && !rightChild) || (!leftChild && rightChild)) ? true : false;
		};
		
		/**
		 * Checks if node has both children.
		 * @return true if node has both children, false otherwise.
		 */
		this.hasChildren = function() {
			return (leftChild && rightChild) ? true : false;
		};
			
		/**
		 * Checks if node has a left child.
		 * @return true if node has a left child, false otherwise.
		 */
		this.hasLeftChild = function() {
			return (leftChild) ? true : false;
		};
			
		/**
		 * Checks if node has a right child.
		 * @return true if node has a right child, false otherwise.
		 */
		this.hasRightChild = function() {
			return (rightChild) ? true : false;
		};

		/**
		 * Get the height of the current node.
		 * @return The height of the current node if found, -1 if node height not found.
		 */
		this.getHeight = function() {
			return (nodeHeight || nodeHeight === 0) ? nodeHeight : false;
		};
					
		/**
		 * Get the data of the current node.
		 * @return The data of the current node if found, -1 if node data not found.
		 */
		this.getNodeData = function() {
			return (nodeData === 0 || nodeData) ? nodeData : false;
		};
					
		/**
		 * Gets the left child  of the current node.
		 * @return The left child of the current node if found, -1 if left child not found.
		 */
		this.getLeftChild = function() {
			return (leftChild) ? leftChild : false;
		};

		/**
		 * Gets the right child  of the current node.
		 * @return The right child of the current node if found, -1 if right child not found.
		 */
		this.getRightChild = function() {
			return (rightChild) ? rightChild : false;
		};
					
		/**
		 * Gets the parent of a current node.
		 * @return the parent of a current node if found, -1 if parent not found.
		 */
		this.getParent = function() {
			return (nodeParent) ? nodeParent : false;
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
			var patt = new RegExp("[0-9a-zA-Z]+");
			if (patt.test(data)) {
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
		 };

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
		 };
					
		/**
		 * Sets the parent of the current node.ss
		 * @param node the node to set the parent as.
		 */
		this.setParent = function(node) {
			if (node instanceof BinaryTreeNode) {
				nodeParent = node;
			}
			else { 
				throw new ReferenceError('BinaryTreeNode.setParent(node): node must be of type BinaryTreeNode');
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
			if (nodeParent) {	
				nodeParent = null;
			} else {
				throw new RangeError("BinaryTreeNode.deleteRightChild(): Cannot delete a non-existent parent.");
			}
		};
		
		/**
		 * Removes the current node.
		 */
		this.deleteNode = function() {
			nodeParent = null;
			leftChild = null;
			rightChild = null;
			nodeData = null;
			nodeHeight = null;
			subtreeHeight = null;
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



	var root;
	var treeHeight = 0;
	var searchSuccess = false;
	var foundNode = null;
	
	/**
	 * Retrieves the height of the binary search tree. 
	 * @return the height of the binary search tree.
	 */
	this.getTreeHeight = function() {
		return treeHeight;
	};
	
   	/**
	 * Performs a pre order traversal on the binary search tree.
	 * If searching for a node value, returns the node that matches that value.
	 * If searching for a new node for adding, returns a newly created node that has the parent, node value and height set.
	 * @param node the BinaryTreeNode to start the search from (usually the root node). 
	 * @param data the value to search for.
	 * @param add FLAG: true if we are adding a new node, false if we are searching for a node value. False if not set;
	 * @return the BinaryTreeNode that matches the search -OR- 
	 	-1 if that match was not found -OR- 
	 	an object containing the node to add the child at and whether its left or right -OR- 
	 	false if the node value to add already existed in the tree. 
	 */

	this.preOrderSearch = function(node, data, add) {
		var nodeData,
			newNode;
		add = add || false;
		if (isVarObjEmpty(node)) {
			throw new ReferenceError();
		} else {
			nodeData = node.getNodeData();
		}
		if (data === nodeData && !add) {
			return node;
		} else if (data === nodeData && add) {
			return false;
		} else if (data !== nodeData) {
			if (data < nodeData) {
				if (node.getLeftChild()) {
					return this.preOrderSearch(node.getLeftChild(), data, add);
				} else if (!node.getLeftChild() && add) {
					return {addNode: node, leftOrRight: "left"};
				}
			} else if (data > nodeData) {
				if (node.getRightChild()) {
					return this.preOrderSearch(node.getRightChild(), data, add);
				} else if (!node.getRightChild() && add) {
					return {addNode: node, leftOrRight: "right"};
				}
			}	
		}
		return -1;	
	};	

	/**
	 * Searches the left subtree of node to find the maximum value node.
	 * @param node the node to start at, will use this nodes data to find the max value node less than this one.
	 * @return the node with the max value smaller than the node given in the parameter.
	 */
	this.findMaxNode = function(node) {
		var nextNode = node.getLeftChild(),
			maxNode = nextNode,
			maxFound = false;
		while (!maxFound) {
			if (nextNode.hasRightChild()) {
				nextNode = nextNode.getRightChild();
				maxNode = (nextNode.getNodeData() > maxNode.getNodeData()) ? nextNode : maxNode;
			} 
			else if (nextNode.hasLeftChild()) {
				nextNode = nextNode.getLeftChild();
			}
			else {
				maxFound = true;
			}
		}
		return maxNode;
	};

	/**
	 * Adds a BinaryTreeNode to the binary search tree
	 * @param data the value to add as a BinaryTreeNode.
	 */

	this.addNode = function(data) {
		var whichChild,
			whichNode,
			foundNode,
			addNode,
		    patt = new RegExp("[0-9a-zA-Z]+");
		if (!patt.test(data)) {
			throw new ReferenceError("BinarySearchTree.addNode(data): data must be alphanumerical character(s).");
		}
		if (!root) {
			root = new BinaryTreeNode(data);
			root.setHeight(0);
		} else { 
			foundNode = this.preOrderSearch(root, data, true);
			if (foundNode) {
				whichNode = foundNode.addNode;
				whichChild = foundNode.leftOrRight;
				if (!whichNode.getLeftChild() && !whichNode.getRightChild()) {
					treeHeight++;
				}
				addNode = new BinaryTreeNode(data, whichNode, null, null, whichNode.getHeight() + 1);
				if (whichChild === "left") {
					whichNode.setLeftChild(addNode);
				} else if (whichChild === "right") {
					whichNode.setRightChild(addNode);
				}
			} else {
				console.log("Node with given data already exists");
			}
		}
	};



	/**
	 * Removes a BinaryTreeNode from the binary search tree.
	 * Removes leaves, nodes with 1 subtree and nodes with 2 subtrees.
	 * Node with 1 subtree: creates link between parent and subtree.
	 * Node with 2 subtrees: searches left subtree to find maximum value. Replaces deleted node value with found max.
	 * @param data the value to delete from the subtree.
	 */
	this.deleteNode = function(data) {
		var node = this.preOrderSearch(root, data, false),
			nodeParent,
			nodeChild,
			newNode,
			newNodeParent,
			newNodeChild,
			patt = new RegExp("[0-9a-zA-Z]+");
		if (!patt.test(data)) {
			throw new ReferenceError("BinarySearchTree.addNode(data): data must be alphanumerical character(s).");
		}
		if (node === -1) {
			throw new ReferenceError("BinarySearchTree.deleteNode(data): node with given data did not exist in binary search tree.");
		}

		//check if deleteNode has a parent, if no parent exists we are deleting root
		if (node.hasParent()) {
			nodeParent = node.getParent();
		} else {
			nodeParent = false;
		}

		//deleteNode with no children
		if (!node.hasChild() && !node.hasChildren()) {

		}

		//deleteNode has 1 child
		if (node.hasChild()) {
			if (node.hasLeftChild()) {
				nodeChild = node.getLeftChild();
			} else if (node.hasRightChild()) {
				nodeChild = node.getRightChild();
			}
			if (nodeParent) {
				if (nodeParent.hasLeftChild()) {
					nodeParent.setLeftChild(nodeChild);
				} else if (nodeParent.hasRightChild()) {
					nodeParent.setRightChild(nodeChild);
				}
			}
		}

		node.deleteNode();
















		/*
		deleteNodeParent = deleteNode.getParent();
		if (deleteNode.hasChild() || deleteNode.hasChildren()) {
			//deleteNode has 1 child
			if (deleteNode.hasChild()) {
				replaceNode = deleteNode.getLeftChild() || deleteNode.getRightChild();
				console.log(replaceNode.toString());
			}
			//deleteNode has 2 children
			else if (deleteNode.hasChildren()) {
				//find the maximum value node within the left subtree of deleteNode.
				replaceNode = this.findMaxNode(deleteNode);
				console.log(replaceNode.toString());
				//get info of replaceNode for linking replaceNode's parent to replaceNode's child.
				//replaceNode can have at most 1 left child. A right child would indicate that repalceNode is not the max.
				replaceNodeChild = replaceNode.getLeftChild() || replaceNode.getRightChild();
				replaceNodeParent = replaceNode.getParent();
				console.log(replaceNodeChild.toString());
				console.log(replaceNodeParent.toString());
				//set replaceNode's parent's children to replaceNode's child if replaceNode has child.
				if (replaceNodeChild) {
					if (replaceNodeParent.getLeftChild() === replaceNode) {
						replaceNodeParent.setLeftChild(replaceNodeChild);
					}
					else if (replaceNodeParent.getRightChild() === replaceNode) {
						replaceNodeParent.setRightChild(replaceNodeChild);
					}					
				}
			}

			//set parent of replaceNode only if it exists. If no parent, we are deleting root.
			if (deleteNodeParent) {
				replaceNode.setParent(deleteNodeParent);
			} else {
				root = replaceNode;
			}

			//set children of replaceNode to the children of deleteNode if they exist.
			if (deleteNode.getLeftChild()) {
				var leftChild = deleteNode.getLeftChild();
				console.log(leftChild.toString());
				replaceNode.setLeftChild(leftChild);
			}
			if (deleteNode.getRightChild()) {
				var rightChild = deleteNode.getRightChild();
				console.log(rightChild.toString());
				replaceNode.setRightChild(rightChild);
			}
		}

		//Clears node data. Also handles the case of a leaf node as conditions fail for previous if statements.
		deleteNode.deleteNode();
	*/
	};

	/**
	 * Checks if the tree is a degenerate (every parent has only 1 child).
	 * @return true if tree is degenerate, false otherwise.
	 */
	this.isDegenerate = function() {
		var nodeCount = root.countChildNodes();
		return (nodeCount === treeHeight + 1) ? true : false;
	};	
	
	/**
	 * Prints the tree in an array format.
	 * Uses level order traversal (breadth first search).
	 * Array format: [h(0), h+1(0), h+1(1), h+2(0), h+2(1), h+2(2), h+2(3),...]
	 */
	this.toString = function() {
		var printQueue = new Queue(),
			printStr = [],
			printNode;

		printQueue.enqueue(root);
		while (!printQueue.isEmpty()) {
			printNode = printQueue.dequeue();
			if (printNode !== "<>") {
				printStr.push(printNode.getNodeData() + "|" + printNode.getHeight());
				if (printNode.getLeftChild()) {
					printQueue.enqueue(printNode.getLeftChild());
				} else {
					printQueue.enqueue("<>");
				}
				if (printNode.getRightChild()) {
					printQueue.enqueue(printNode.getRightChild());
				} else {
					printQueue.enqueue("<>");
				}
			} else {
				printStr.push(printNode);
			}
		}
		return printStr.toString();
	};
}