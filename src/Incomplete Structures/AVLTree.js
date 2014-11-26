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
				var curNode = root;
				
				while (!newNodeFound) {
					var curNodeData = curNode.getNodeData();
					var children = curNode.getAllChildren();
					height++;
					//left path
					if (data === curNodeData) {
						heightChange = false;
						break;
					}
					if (data < curNodeData) {
						if (children && typeof children !== 'undefined' && children[0] && typeof children[0] !== 'undefined') {
							curNode = children[0];
						} else {
							var addNode = new TreeNode(data);
							addNode.setParent(curNode);
							addNode.setHeight(height + 1);
							curNode.setNthChild(0, addNode);
							newNodeFound = true;
						}
					} 
					//right path
					else {
						if (children && typeof children !== 'undefined' && children[1] && typeof children[1] !== 'undefined') {
							curNode = children[1];
						} else {
							var addNode = new TreeNode(data);
							addNode.setParent(curNode);
							addNode.setHeight(height + 1);
							curNode.setNthChild(1, addNode);
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