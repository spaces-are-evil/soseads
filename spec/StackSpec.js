describe("Stack data structure", function() {
	var stack = null;

	function initializeStack() {
		stack.push(0);
		stack.push('a');
		stack.push(1);
		stack.push('b');
		stack.push(2);
		stack.push('c');		
	}


	beforeEach(function() {
		stack = new Stack();
		initializeStack();
	});

	it ("Gets the right size", function() {
		expect(stack.size()).toBe(6);
		stack.push(3);
		stack.push('d');
		expect(stack.size()).toBe(8);
	});

	it ("Is not empty when stack elements exist", function() {
		expect(stack.isEmpty()).toBeFalsy();
	});

	it ("Is empty when all stack elements are popped", function() {
		stack.pop(); //0
		stack.pop(); //a
		stack.pop(); //1
		stack.pop(); //b
		stack.pop(); //2
		stack.pop(); //c
		expect(stack.isEmpty()).toBeTruthy();
	});

	it ("Is empty after calling the clear function", function() {
		stack.clear();
		expect(stack.isEmpty()).toBeTruthy();
	});

	it ("Throws error when trying to peek an empty stack", function() {
		stack.clear();
		expect(function() {
			var top = stack.peek();
		}).toThrowError("Stack.peek(): cannot peek an empty stack.");
	});

	it ("Peeks the proper element", function() {
		var top = stack.peek();
		expect(top).toBe('c');
		top = stack.peek();
		expect(top).toBe('c');
		stack.push(4);
		top = stack.peek();
		expect(top).toBe(4);
	});

	it ("Pops the proper elements", function() {
		var top = stack.pop();
		expect(top).toBe('c');
		top = stack.pop();
		expect(top).not.toBe('c');
		expect(top).toBe(2);
		top = stack.pop();
		expect(top).not.toBe(2);
		expect(top).toBe('b');
	});

	it ("Throws an error when trying to pop an empty stack", function() {
		stack.clear();
		expect(function() {
			stack.pop();
		}).toThrowError("Stack.pop(): cannot pop an empty stack");
	});

	it ("Pushes valid objects on the stack.", function() {
		expect(function() {
			var newObj = {age: 21};
			stack.push(newObj);
			stack.push(true);
			stack.push(0);
			stack.push("not empty");
			stack.push('a');
		}).not.toThrowError("Stack.push(): cannot push an uninitialized object onto the stack");

	});

	it ("Throws an error when pushing invalid objects on the stack.", function() {
		var newVar;
		var newObj1 = {};
		var newObj2 = {name: null};
		expect(function() {
			stack.push(newObj1);
		}).toThrowError("Stack.push(): cannot push an uninitialized object onto the stack");
		expect(function() {
			stack.push(newObj2);
		}).toThrowError("Stack.push(): cannot push an uninitialized object onto the stack");
		expect(function() {
			stack.push(false);
		}).toThrowError("Stack.push(): cannot push an uninitialized object onto the stack");
		expect(function() {
			stack.push("");
		}).toThrowError("Stack.push(): cannot push an uninitialized object onto the stack");
		expect(function() {
			stack.push('');
		}).toThrowError("Stack.push(): cannot push an uninitialized object onto the stack");
		expect(function() {
			stack.push(null);
		}).toThrowError("Stack.push(): cannot push an uninitialized object onto the stack");
		expect(function() {
			stack.push(newVar);
		}).toThrowError("Stack.push(): cannot push an uninitialized object onto the stack");
	});
	
	it ("Gives the proper representation when using toString() on stack.", function() {
		var str = stack.toString();
		expect(str).toBe("[0, a, 1, b, 2, c]");
	});
});