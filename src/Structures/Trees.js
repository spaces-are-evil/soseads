/**
 * Represents a binary search tree.
 * Uses TreeNodes to build a binary search tree.
 * Currently works with numeric values only.
 */
function BinarySearchTree() {
	var root;
	var treeHeight = 0;
	var searchSuccess = false;
	var foundNode = null;
	this.getRoot = function() {
		return root;
	};

	/**
	 * Retrieves the height of the binary search tree. 
	 * @return the height of the binary search tree.
	 */
	this.getTreeHeight = function() {
		return treeHeight;
	};
	
	/**
	 * Adds a TreeNode to the binary search tree
	 * @param data the value to add as a TreeNode.
	 */
	this.addNode = function(data) {
		var newNodeFound = false;
		var heightChange =true;
		var height = 0;
		//ensure the data passed to the function is valid
		if (typeof data !== 'undefined' && data) {
			//check if root value set, if not then we are adding root.
			if (typeof root !== 'undefined' && root) {
				var currNode = root;
				
				while (!newNodeFound) {
					var currNodeData = currNode.getNodeData();
					var children = currNode.getAllChildren();
					height++;
					//left path
					if (data === currNodeData) {
						heightChange = false;
						break;
					}
					if (data < currNodeData) {
						if (children && typeof children !== 'undefined' && children[0] && typeof children[0] !== 'undefined') {
							currNode = children[0];
						} else {
							var addNode = new TreeNode(data);
							addNode.setParent(currNode);
							addNode.setHeight(height);
							currNode.setNthChild(0, addNode);
							newNodeFound = true;
						}
					} 
					//right path
					else {
						if (children && typeof children !== 'undefined' && children[1] && typeof children[1] !== 'undefined') {
							currNode = children[1];
						} else {
							var addNode = new TreeNode(data);
							addNode.setParent(currNode);
							addNode.setHeight(height);
							currNode.setNthChild(1, addNode);
							newNodeFound = true;
						}
					}
				}
			} 
			//set root value.
			else {
				root = new TreeNode(data);
				root.setHeight(0);
			}
		}
		if (treeHeight < height && heightChange) treeHeight = height;
	};
	
	/**
	 * Performs a pre order traversal on the binary search tree.
	 * Finds a TreeNode that matches the value being searched for.
	 * @param node the TreeNode to start the search from (usually the root node). 
	 * @param data the value to search for.
	 * @return the TreeNode that matches the search, -1 if no match is found.
	 */
	this.preOrderSearch = function(node, data) {
		if (!searchSuccess) {	
			//not a real node, step back
			if (!node) return;
			else {
				//found node
				var nodeData = node.getNodeData()
				if (nodeData === data) {
					foundNode = node;
					searchSuccess = true;
					return node;
				} else {
					searchSuccess = false;
					foundNode = -1;
				}
			}
			//Recursive steps
			var children = node.getAllChildren();
			//check if children don't exist, step back if so
			if (!children) return;
			else {
				for (var i = 0; i < children.length; i++) {
					//make sure children exist before recursively calling
					if (children[i]) {
						var curNode = children[i];
						this.preOrderSearch(curNode, data);
					}
				}
			}
		}
		return foundNode;
	};	

	/**
	 * Removes a TreeNode from the binary search tree.
	 * Removes leaves, nodes with 1 subtree and nodes with 2 subtrees.
	 * Node with 1 subtree: creates link between parent and subtree.
	 * Node with 2 subtrees: searches left subtree to find maximum value. Replaces deleted node value with found max.
	 * @param data the value to delete from the subtree.
	 */
	this.deleteNode = function(data) {
		var node = this.preOrderSearch(root, data);
		var parent = node.getParent();
		var deletePos = 0;
		var children = node.getAllChildren();
		var childNode = null;
		
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
			var maxNode = new TreeNode(null);
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


function AVLTree() { 
	var root;
	var treeHeight = 0;
	
	this.getSubtreeHeight = function(node) {
		var nodeChildren;
		var leftSubtree;
		var rightSubtree;
		
	};
	
	
	/**
	 * Adds a TreeNode to the AVL tree
	 * @param data the value to add as a TreeNode.
	 */
	this.addNode = function(data) {
		var newNodeFound = false;
		var heightChange =true;
		var height = 0;
		//ensure the data passed to the function is valid
		if (typeof data !== 'undefined' && data) {
			//check if root value set, if not then we are adding root.
			if (typeof root !== 'undefined' && root) {
				var currNode = root;
				
				while (!newNodeFound) {
					var currNodeData = currNode.getNodeData();
					var children = currNode.getAllChildren();
					height++;
					//left path
					if (data === currNodeData) {
						heightChange = false;
						break;
					}
					if (data < currNodeData) {
						if (children && typeof children !== 'undefined' && children[0] && typeof children[0] !== 'undefined') {
							currNode = children[0];
						} else {
							var addNode = new TreeNode(data);
							addNode.setParent(currNode);
							addNode.setHeight(height + 1);
							currNode.setNthChild(0, addNode);
							newNodeFound = true;
						}
					} 
					//right path
					else {
						if (children && typeof children !== 'undefined' && children[1] && typeof children[1] !== 'undefined') {
							currNode = children[1];
						} else {
							var addNode = new TreeNode(data);
							addNode.setParent(currNode);
							addNode.setHeight(height + 1);
							currNode.setNthChild(1, addNode);
							newNodeFound = true;
						}
					}
				}
			} 
			//set root value.
			else {
				root = new TreeNode(data);
				
			}
		}
		if (treeHeight < height && heightChange) treeHeight = height;
	};
	
	this.rotateLeftLeft = function() {
	
	};
	
	this.rotateLeftRight = function() {
	
	};
	
	this.rotateRightLeft = function() {
	
	};
	
	this.rotateRightRight = function() {
	
	};
}
/*
var RedBlackTree = new Class({

});

var SplayTree = new Class({ 

});

var Treap = new Class({ 

});

var TangoTree = new Class({

});
*/