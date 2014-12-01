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
	if (!obj && obj !== 0) {
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
		//ensuring value of add is retained.
		add = add || false;
		
		//failsafe if bad node is passed in, halts execution
		if (isVarObjEmpty(node)) {
			throw new ReferenceError();
		} else {
			nodeData = node.getNodeData();
		}
		//found node value and not adding, return node.
		if (data === nodeData && !add) {
			return node;
		//found node value and adding (already exists), return false
		} else if (data === nodeData && add) {
			return false;
		//no match found, continue regardless.
		} else if (data !== nodeData) {
			if (data < nodeData) {
				if (node.getLeftChild()) {
					return preOrderValueSearch(node.getLeftChild(), data, add);
				//no left child but we are adding new node, this is the place to add.
				} else if (!node.getLeftChild() && add) {
					return {addNode: node, leftOrRight: "left"};
				}
			} else if (data > nodeData) {
				if (node.getRightChild()) {
					return preOrderValueSearch(node.getRightChild(), data, add);
				//no right child but we are adding new node, this is the place to add.
				} else if (!node.getRightChild() && add) {
					return {addNode: node, leftOrRight: "right"};
				}
			}	
		}
		//the only reason code would reach this far is all nodes have been touched 
		//and no value was found. Return -1 for node not found.
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
			
			//go to next largest node, store value if greater than whats currently stored in maxNodeValue.
			if (nextNode.hasRightChild()) {
				nextNode = nextNode.getRightChild();
				maxNode = (nextNode.getNodeData() > maxNode.getNodeData) ? nextNode : maxNode;
			} 
			//go to next smallest node, don't store value.
			else if (nextNode.hasLeftChild()) {
				nextNode = nextNode.getLeftChild();
			}
			
			//no child found, max value reached.
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
			addNode,
		    regExp = "[0-9a-zA-Z]+";
		if (!regExp.test(data)) {
			throw new ReferenceError("BinarySearchTree.addNode(data): data must be alphanumerical character(s).");
		}
		//root does not exist, adding root
		if (!root) {
			root = new BinaryTreeNode(data);
			root.setHeight(0);
		} else {
			newNode = preOrderSearch(root, data, true);
			//if preOrderSearch found a new node, newNode will be truthy. 
			//if preOrderSearch found data already existing, newNode would be falsy.
			if (newNode) {
				whichNode = newNode.addNode;
				//increase height of tree if node has no left or right children.
				if (!whichNode.getLeftChild() && !whichNode.getRightChild()) {
					treeHeight++;
				}
				whichChild = newNode.leftOrRight;
				addNode = new BinaryTreeNode(data, whichNode, null, null, whichNode.getHeight() + 1);
				if (whichChild === "left") {
					whichNode.setLeftChild(addNode);
				} else if (whichChild === "right") {
					whichNode.setRightChild(addNode);
				}
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
		var deleteNode = preOrderSearch(root, data, false),
			deleteNodeParent = deleteNode.getParent(),
			replaceNode,
			replaceNodeParent,
			replaceNodeChild,
			regExp = "[0-9a-zA-Z]+";
		
		if (!regExp.test(data)) {
			throw new ReferenceError("BinarySearchTree.addNode(data): data must be alphanumerical character(s).");
		}
		if (deleteNode === -1) {
			throw new ReferenceError("BinarySearchTree.deleteNode(data): node with given data did not exist in binary search tree.");
		} 
		if (deleteNode.hasChild() || deleteNode.hasChildren()) {}
			//deleteNode has 1 child
			if (deleteNode.hasChild()) {
				replaceNode = deleteNode.getLeftChild() || deleteNode.getRightChild();
			}
			//deleteNode has 2 children
			else if (deleteNode.hasChildren()) {
				//find the maximum value node within the left subtree of deleteNode.
				replaceNode = findMaxNode(deleteNode);

				//get info of replaceNode for linking replaceNode's parent to replaceNode's child.
				//replaceNode can have at most 1 left child. A right child would indicate that repalceNode is not the max.
				replaceNodeChild = replaceNode.getLeftChild() || replaceNode.getRightChild();
				replaceNodeParent = replaceNode.getParent();
				
				//set replaceNode's parent's children to replaceNode's child.
				if (replaceNodeParent.getLeftChild() === replaceNode) {
					replaceNodeParent.setLeftChild(replaceNodeChild);
				}
				else if (replaceNodeParent.getRightChild() === replaceNode) {
					replaceNodeParent.setRightChild(replaceNodeChild);
				}

			}

			//set parent of replaceNode only if it exists. If no parent, we are deleting root.
			if (deleteNodeParent) {
				replaceNode.setParent(deleteNodeParent);

			}

			//set children of replaceNode to the children of deleteNode if they exist.
			if (deleteNode.getLeftChild()) {
				replaceNode.setLeftChild(deleteNode.getLeftChild());
			}
			if (deleteNode.getRightChild()) {
				replaceNode.setRightChild(deleteNode.getRightChild());
			}
		}

		//Clears node data. Also handles the case of a leaf node as conditions fail for previous if statements.
		deleteNode.deleteNode();

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
			if (printNode) {
				printStr.push(printNode.getNodeData() + "|" + printNode.getHeight());
				if (printNode.getLeftChild()) {
					printQueue.enqueue(printNode.getLeftChild());
				} else {
					printNode.enqueue("");
				}
				if (printNode.getRightChild()) {
					printQueue.enqueue(printNode.getRightChild());
				} else {
					printNode.enqueue("");
				}
			} else {
				printStr.push(tempNode);
			}
			console.log("QUEUE: " + printQueue.toString());
			
		}
		console.log("TREE ARRAY: " + printStr.toString());
	};
}