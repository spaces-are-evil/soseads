
/**
 * Represents a node of a Binary Search Tree
 * Can be used to create BST, AVL Trees, Red-Black
 * Trees, Splay Tree, Treap and Tango trees. 
 */
function TreeNode(data) {
	var nodeData = data;
	var parent = null;
	var children = [null, null];
	var nodeHeight = null;
	var subtreeHeight = null;
	var balanceFactor = 0;
	
	/**
	 * Readjusts the height value of children nodes when a change in structure takes place.
	 */
	this.changeChildrenHeight = function() {
		var childQueue = new Queue();
		var curNode;
		childQueue.enqueue(this);
		while (!childQueue.isEmpty()) {
			curNode = childQueue.dequeue();
			if (curNode.children !== null) {
				for (var i = 0; i < curNode.children.length; i++) {
					if (curNode.children[i]) {
						curNode.children[i].nodeHeight = curNode.nodeHeight + 1;
						childQueue.enqueue(curNode.children[i]);
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
		countQueue.enqueue(this);
		while (!countQueue.isEmpty()) {
			countNode = countQueue.dequeue();
			nodeCount++;
			if (countNode.children !== null) {
				for (var i = 0; i < countNode.children.length; i++) {
					if (typeof countNode.children[i] !== 'undefined' && countNode.children[i]) 
						countQueue.enqueue(countNode.children[i]);
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
		return (parent === null) ? true : false;
	};
		
	/**
	*Check if a tree node is a leaf
	* @return True if no children exist (leaf condition), false otherwise.
	*/
	this.isLeaf = function() {
		return (children.length === 0) ? true : false;
	};
			
	/**
	* Sets the height of the current node. Increases overall performance.
	* @param data The height of the current node.
	*/
	this.setHeight = function(data) {
		if (!isNaN(data))
			height = data;
		else
			throw new RangeError('setHeight(): must be a valid integer');
	};

	/**
	 * Sets the data for the current node.
	 * @param object The data to set for the current node.
	 */
	this.setNodeData = function(data) {
		if (!isNaN(data))
			nodeData = data;
		else
			throw new RangeError('setNodeData(): binary search trees only accept ')
	};	
		
	/**
	 * Sets the nth (0 inclusive) child of the current node. 
	 * @param nth the child number (0 inclusive).
	 * @param node the node to set the nth child as.
	 */
	this.setNthChild = function(nth, node) {
		if (!isNaN(nth)) throw new RangeError('setNthChild(): nth must be a whole number');
		if (node instanceof TreeNode)
			children[nth] = node;
		else
			throw new ReferenceError('setNthChild(): Node must be of type TreeNode');
	};
				
	/**
	 * Sets the parent of the current node.
	 * @param node the node to set the parent as.
	 */
	this.setParent = function(node) {
		if (node instanceof TreeNode)
			parent = node;
		else 
			throw new ReferenceError('setParent(): Node must be of type TreeNode');
	};
		
	/**
	 * Path retracing algorithm. Retraces path of node and calculates
	 * balance factor as it goes. Works from most added leaf up to parent.
	 */
	this.setBalanceFactor = function() {
		balanceFactor = 0;
		var node = this;
		while (node.parent !== null) {
			for (var i = 0; i < node.parent.children.length; i++) {
				if (node.parent.children[i] && node.parent.children[i].nodeData === node.nodeData) {
					if (i === 0) 
						//left subtree
						node.parent.balanceFactor = parseInt(balanceFactor.replace("-","").trim()) + 1;
					else if (i === 1) 
						//right subtree
						node.parent.balanceFactor = parseInt("-" + (parseInt(balanceFactor.replace("-","").trim()) + 1));
					node = node.parent.parent;
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
		if (nodeHeight !== 0 && !nodeHeight) throw new ReferenceError('getHeight(): current node height not set.');
		return nodeHeight;
	};
				
	/**
	 * Get the data of the current node.
	 * @return The data of the current node.
	 */
	this.getNodeData = function() {
		if (nodeData !== 0 && !nodeData) throw new ReferenceError('getNodeData(): current node data not set.');
		return nodeData;
	};
				
	/**
	 * Gets the nth child (0 inclusive) of the current node.
	 * @param nth the child number to get (0 inclusive).
	 * @return The nth child of the current node.
	 */
	this.getNthChild = function(nth) {
		if (!isNaN(nth)) throw new RangeError('getNthChild(): nth must be a whole number');
		if (!children[nth]) throw new ReferenceError('getNthChild(): child' + nth + "does not exist for current node.");
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
			if (children[i]) 
				childCount++;
		}
		if (childCount > 0) 
			return children;
		else 
			throw new ReferenceError('getAllChildren(): no children exist for current node');
	};
				
	/**
	 * Gets the parent of a current node.
	 * @return the parent of a current node.
	 */
	this.getParent = function() {
		if (parent !== null) 
			return parent;
		else 
			throw new ReferenceError('getParent(): no parent exists for current node.')
	};
					
	/**
	* Retrieve the number of children for the current node.
	* @return The number of children.
	*/
	this.getNumberOfChildren = function() {
		var retVal = 0;
		for (var i = 0; i < children.length; i++) {
			if (typeof children[i] !== 'undefined' && children[i]) 
				retVal++;
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
	
	/**
	 * Gets the balance factor for the current node;
	 * @return the balance factor of the current node.
	 *
	 */
	this.getBalanceFactor = function() {
		if (!balanceFactor) throw new ReferenceError('getBalanceFactor(): balance factor not set for current node.').
		return balanceFactor;
	};
	
	/**
	 * Removes the nth child link for the current node.
	 * @param nth the child number (0 inclusive).
	 */
	this.removeNthChild = function(nth) {
		var regExp = "[0-9]+";
		if (regExp.test(data.toString))
			children[nth] = null;
		else
			throw new RangeError("removeNthChild(): Cannot access a non-integer index.");
	};

	/**
	 * Removes all children links for the current node.
	 */
	this.removeAllChildren = function() {
		children = [null, null];
	};

	/**
	 * Removes the parent link for the current node.
	 */
	this.removeParent = function() {
			parent = null;
	};
	
	/**
	 * Removes a node (sets associated information to null).
	 */
	this.removeNode = function() {
		parent = null;
		children = [null, null];
		nodeData = null;
		nodeHeight = null;
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

