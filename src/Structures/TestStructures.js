function startTest() {
	/*
	var testQueue = new Queue();
	testQueue.enqueue(1);
	console.log(testQueue.toArray());
	testQueue.enqueue(2);
	console.log(testQueue.toArray());
	testQueue.enqueue(3);
	console.log(testQueue.toArray());
	testQueue.enqueue(4);
	console.log(testQueue.toArray());
	testQueue.enqueue(5);
	console.log(testQueue.toArray());
	testQueue.enqueue(6);
	console.log(testQueue.toArray());
	testQueue.enqueue(7);
	console.log(testQueue.toArray());
	console.log(testQueue.peek());
	testQueue.dequeue();
	testQueue.dequeue();
	testQueue.dequeue();
	console.log(testQueue.toArray());
	testQueue.enqueue(1);
	console.log(testQueue.toArray());
	newQueue = new Queue();
	newQueue.enqueue(1);
	console.log(testQueue.toArray());
	console.log(newQueue.toArray());
	console.log(newQueue.dataArr);
	*/	
	
	var bst = new BinarySearchTree();
	bst.addNode(10);
	bst.addNode(7);
	bst.addNode(5);
	bst.addNode(15);
	bst.addNode(9);
	bst.addNode(12);
	bst.addNode(1);
	bst.addNode(11);
	bst.addNode(17);
	
	var printTree = new TreeTraverse();
	printTree.preOrderTraversal(bst);
	
	bst.deleteNode(10);
	printTree.preOrderTraversal(bst);
	bst.deleteNode(1);
	printTree.preOrderTraversal(bst);
	
	var bst2 = new BinarySearchTree();
	bst2.addNode(1);
	bst2.addNode(2);
	bst2.addNode(3);
	bst2.addNode(4);
	bst2.addNode(5);
	bst2.addNode(6);
	bst2.addNode(7);
	bst2.addNode(8);
	bst2.addNode(9);
	printTree.preOrderTraversal(bst2);
	console.log("Is Degenerate? " + bst2.isDegenerate());
	
	
}