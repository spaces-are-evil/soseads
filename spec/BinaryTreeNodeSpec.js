describe("Binary Tree Node: Used in Binary Search Tree structure", function() {
	var node = null;
	function initializeNode() {
		
	}

	beforeEach(function() {
		node = new BinaryTreeNode(10);
	});

	it("is root node", function() {
		expect(node.isRoot()).toBeTruthy();
	});

	it("is not root node", function() {
		var node1 = new BinaryTreeNode(5);
		node.leftChild = node1;
		expect(node1.isRoot()).toBeFalsy();
	});

	it("is leaf node", function() {
		expect(node.isLeaf()).toBeTruthy();
	});

	it("is not leaf node", function() {
		var node1 = new BinaryTreeNode(5);
		node.leftChild = node1;
		expect(node.isleaf()).toBeFalsy();
	});

	it("has parent", function() {
		var node1 = new BinaryTreeNode(5);
		node.leftChild = node1;
		expect(node1.hasParent()).toBeTruthy();
	});

	it("does not have parent", function() {
		expect(node.hasParent()).toBeFasly();
	});
	/*-
	it("has no children", function() {

	});

	it("has 1 child", function() {

	});

	it("has 2 children", function() {

	});

	it("has left child", function() {

	});

	it("does not have left child", function() {

	});
	
	it("has right child", function() {

	});
	
	it("does not have right child", function() {

	});
	
	it("gets proper height", function() {

	});
	
	it("gets proper data", function() {

	});
	
	it("gets proper parent", function() {

	});
	
	it("sets height", function() {

	});
	
	it("sets node data", function() {

	});
	
	it("sets left child", function() {

	});
	
	it("sets right child", function() {

	});
	
	it("sets parent", function() {

	});
	
	it("deletes left child", function() {

	});
	
	it("deletes right child", function() {

	});
	
	it("deletes node", function() {

	});
	
	it("prints string representation of node", function() {

	});
*/
});