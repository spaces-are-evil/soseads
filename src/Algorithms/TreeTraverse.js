function TreeTraverse(object) {
	var tree = object;
	
	this.preOrderTraversal = function(tree) {
		var printQueue = new Queue();
		printQueue.enqueue(tree.getRoot());
		var printStr = [];
		while (!printQueue.isEmpty()) {
			tempNode = printQueue.dequeue();
			if (tempNode !== "#") {
				printStr.push(tempNode.getNodeData() + "|" + tempNode.getHeight());
				var children = tempNode.getAllChildren();
				if (children !== null) {
					for (var i = 0; i < children.length; i++) {
						if (typeof children[i] !== 'undefined' && children[i]) {
							printQueue.enqueue(children[i]);
							
						} else {
							printQueue.enqueue("#");
						}
					}
				} else if (children === null && tempNode.getHeight() <= tree.getTreeHeight()) {
					printQueue.enqueue("#");
					printQueue.enqueue("#");
				}
			} else {
				printStr.push(tempNode);
			}
			console.log("QUEUE: " + printQueue.toString());
			
		}
		console.log("TREE ARRAY: " + printStr.toString());
	};
}

