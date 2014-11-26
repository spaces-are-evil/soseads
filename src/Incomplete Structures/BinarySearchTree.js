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
		//silly, but ensuring value of add is retained.
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
	 * Recursively searches the left subtree of node to find the maximum value node.
	 * @param node the node to start at, will use this nodes data to find the max value node less than this one.
	 * @param data (optional) the data of the node to start at. will grab that information either way. Used in recurisve calls.
	 * @return the node with the max value smaller than the node given in the parameter.
	 */
	this.findMaxNode = function(node, data) {
		var nodeData = data || node.getNodeData();
	}

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
		var deleteNode,
			parentNode,
			regExp = "[0-9a-zA-Z]+";
		
		if (!regExp.test(data)) {
			throw new ReferenceError("BinarySearchTree.addNode(data): data must be alphanumerical character(s).");
		}			

		deleteNode = preOrderSearch(root, data, false);
		
		//node to delete not found
		if (deleteNode === -1) {
			throw new ReferenceError("BinarySearchTree.deleteNode(data): node with given data did not exist in binary search tree.");
		} 
		//node to delete found
		else {
			if (deleteNode.hasParent()) {
				parentNode = deleteNode.getparent();
			}
			





			//node has no children (leaf)
			if (!deleteNode.hasChild() && !deleteNode.hasChildren()) {
				deleteNode.deleteNode();
			}
			//node has 1 child
			else if (deleteNode.hasChild()) {
				if (deleteNode.getLeftChild()) {

				} 
				else {

				}
			}
			//node has 2 children
			else if (deleteNode.hasChildren()) {

			}

		}


























		
		searchSuccess = false;
		foundNode = null;
		if (parent === null) return;
		//delete a leaf
		if (node.getNumberOfChildren() === 0) {
			
			for (var i = 0; i < parent.getChildrenLength(); i++) {
				if (typeof parent.getNthChild(i) !== 'undefined' && parent.getNthChild(i)) {
					if (parent.getNthChild(i).getNodeData() === data) {
						parent.setNthChild(i, null);
						break;
					}
				}
			}
			node.removeNode();
			delete node;
		//delete a node with 1 subtree.
		//get root of subtree
		} else if (node.getNumberOfChildren() === 1){
			//HACK: getChildrenLength always returns 2 for BST, using it for two different subtrees.
			//PURPOSE: avoiding magic numbers.
			for (var i = 0; i < parent.getChildrenLength(); i++) {
				if (typeof node.getNthChild(i) !== 'undefined' && node.getNthChild(i)) {
					childNode = node.getNthChild(i);
				}
				if (typeof parent.getNthChild(i) !== 'undefined' && parent.getNthChild(i)) {
					if (parent.getNthChild(i).getNodeData() === data) {
						deletePos = i;
					}
				}
			}
			node.removeNode();
			parent.setNthChild(deletePos, childNode);
			childNode.setParent(parent);
			childNode.setHeight(childNode.getHeight() - 1);
			childNode.changeChildrenHeight();
			delete node;
		//delete a node with 2 subtrees.
		} else if (node.getNumberOfChildren() === 2) {
			var maxQueue = new Queue();
			var maxNode = new BinaryTreeNode(null);
			var curNode = null;
			var curNodeChildren = null;
			var curNodeData = null;
			var maxNodeParent = null;
			var nodeData = node.getNodeData();
			maxQueue.enqueue(node);
			while (!maxQueue.isEmpty()) {
				curNode = maxQueue.dequeue();
				curNodeData = curNode.getNodeData();
				curNodeChildren = curNode.getAllChildren();
				if (curNodeData > maxNode.getNodeData() && curNodeData < nodeData) maxNode = curNode;
				if (curNodeChildren !== null) {
					for (var i = 0; i < curNode.getChildrenLength(); i++) {
						if (typeof curNode.getNthChild(i) !== 'undefined' && curNode.getNthChild(i) && curNode.getNthChild(i).getNodeData() < nodeData) maxQueue.enqueue(curNode.getNthChild(i));
					}	
				}
			}
			node.setNodeData(maxNode.getNodeData());
			maxNodeParent = maxNode.getParent();
			for (var i = 0; i < maxNodeParent.getChildrenLength(); i++) {
				if (typeof maxNodeParent.getNthChild(i) !== 'undefined' && 
				maxNodeParent.getNthChild(i) && 
				maxNodeParent.getNthChild(i).getNodeData() === maxNode.getNodeData()) 
					maxNodeParent.setNthChild(i, null);
			}
			maxNode.removeNode();
			delete maxNode;
			node.changeChildrenHeight();
		}
	};
	
	/**
	 * Checks if the tree is a degenerate (every parent has only 1 child).
	 *
	 */
	this.isDegenerate = function() {
		var nodeCount = root.countChildNodes();
		if (nodeCount === treeHeight + 1) return true;
		return false;
	};	
	/*
	this.printTree() {
		

	}
				
	this.isBalanced = function() {

	};
				
	this.isComplete = function() {

	}
				

	*/
}