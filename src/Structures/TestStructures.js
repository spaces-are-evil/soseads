function startTest() {
	/*
	var testQueue = new Queue();
	testQueue.enqueue(0);
	console.log(testQueue.toString());
	testQueue.enqueue(2);
	console.log(testQueue.toString());
	testQueue.enqueue(3);
	console.log(testQueue.toString());
	testQueue.enqueue(4);
	console.log(testQueue.toString());
	testQueue.enqueue(5);
	console.log(testQueue.toString());
	testQueue.enqueue(6);
	console.log(testQueue.toString());
	testQueue.enqueue(7);
	console.log("Is empty? " + testQueue.isEmpty());
	var newObj = {name: null, age: 21};
	testQueue.enqueue(newObj);
	console.log(testQueue.toString());
	console.log(testQueue.peek());
	testQueue.dequeue();
	testQueue.dequeue();
	testQueue.dequeue();
	console.log(testQueue.toString());
	testQueue.enqueue(1);
	console.log(testQueue.toString());
	newQueue = new Queue();
	newQueue.enqueue(1);
	console.log(testQueue.toString());
	console.log(newQueue.toString());
	console.log(newQueue.dataArr);
	*/
	
	/*
	var buffer = new CircularBuffer(7);
	buffer.write(0);
	buffer.write('a');
	buffer.write(1);
	buffer.write('b');
	buffer.write(2);
	buffer.write('c');
	buffer.write(3);
	buffer.write(0);
	buffer.write('a');
	buffer.write(1);
	buffer.write('b');
	buffer.write(2);
	buffer.write('c');
	buffer.write(3);
	buffer.write(0);
	buffer.write('a');
	buffer.write(1);
	buffer.write('b');
	buffer.write(2);
	buffer.write('c');
	buffer.write(3);
	buffer.write();
	buffer.write(null);
	var newObj = {};
	buffer.write(newObj);
	console.log("Is buffer full? " + buffer.isFull());
	console.log("Is buffer empty?" + buffer.isEmpty());
	var readVal = buffer.read();
	console.log("Read value: " + readVal);
	var readVal = buffer.read();
	console.log("Read value: " + readVal);
	var readVal = buffer.read();
	console.log("Read value: " + readVal);
	var readVal = buffer.read();
	console.log("Read value: " + readVal);
	var readVal = buffer.read();
	console.log("Read value: " + readVal);
	var readVal = buffer.read();
	console.log("Read value: " + readVal);
	var readVal = buffer.read();
	console.log("Read value: " + readVal);
	console.log("Is buffer full? " + buffer.isFull());
	console.log("Is buffer empty?" + buffer.isEmpty());
	*/

	var stack = new Stack();
	console.log(stack.toString());
	stack.push(a);
	stack.push(0);
	console.log(stack.toString());
	stack.push('a');
	console.log(stack.toString());
	stack.push(1);
	console.log(stack.toString());
	stack.push('b');
	console.log(stack.toString());
	stack.push(2);
	console.log(stack.toString());
	stack.push('c');
	console.log(stack.toString());
	console.log("Is empty? " + stack.isEmpty());
	stack.pop(); //0
	console.log(stack.toString());
	stack.pop(); //a
	console.log(stack.toString());
	stack.pop(); //1
	console.log(stack.toString());
	stack.pop(); //b
	console.log(stack.toString());
	stack.pop(); //2
	console.log(stack.toString());
	stack.pop(); //c
	console.log(stack.toString());
	console.log("Is empty? " + stack.isEmpty());
	
	/*
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
	*/
	
}