describe("Queue data structure", function() {
	var queue = null;

	function initializeQueue() {
		queue.enqueue(0);
		queue.enqueue('a');
		queue.enqueue(1);
		queue.enqueue('b');
		queue.enqueue(2);
		queue.enqueue('c');		
	}


	beforeEach(function() {
		queue = new Queue();
		initializeQueue();
	});

	it ("Gets the right size", function() {
		expect(queue.size()).toBe(6);
		queue.enqueue(3);
		queue.enqueue('d');
		expect(queue.size()).toBe(8);
	});

	it ("Clear empties the queue and is empty when no queue elements exist", function() {
		queue.clear();
		expect(queue.isEmpty()).toBeTruthy();

	});

	it ("Is Not Empty when queue elements exist", function() {
		expect(queue.isEmpty()).toBe(false);
	});

	it ("Dequeues", function() {
		var head = queue.dequeue();
		expect(head).toEqual(0);
		head = queue.dequeue();
		expect(head).toEqual('a');
		head = queue.dequeue();
		expect(head).toEqual(1);
		head = queue.dequeue();
		expect(head).toEqual('b');
		head = queue.dequeue();
		expect(head).toEqual(2);
		head = queue.dequeue();
		expect(head).toEqual('c');
		expect(queue.isEmpty()).toBeTruthy();
	});

	it("Throws error if dequeuing an empty queue", function() {
		queue.clear();
		expect(function() {
			queue.dequeue();
		}).toThrowError("Queue.dequeue(): cannot dequeue an empty queue");
	});

	it ("Enqueues truthy values", function() {
		queue.clear();
		expect(function() {
			queue.enqueue(true);
			expect(queue.dequeue()).toBe(true);
			queue.enqueue(0);
			expect(queue.dequeue()).toEqual(0);
			var newObj = {age: 21};
			queue.enqueue(newObj);
			expect(queue.dequeue()).toEqual(newObj);
			var newObj1 = {name: null, age: 21};
			queue.enqueue(newObj1);
			expect(queue.dequeue()).toEqual(newObj1);
			queue.enqueue('z');
			expect(queue.dequeue()).toEqual('z');
			queue.enqueue("not false");
			expect(queue.dequeue()).toEqual("not false");
		}).not.toThrowError("Queue.enqueue(object): object must be a valid variable or object. Objects must have at least 1 parameter that is initialized and not null.");
	});

	it ("Throws error if enqueuing falsey objects", function() {
		expect(function() {
			queue.enqueue();
		}).toThrowError("Queue.enqueue(object): object must be a valid variable or object. Objects must have at least 1 parameter that is initialized and not null.");
		expect(function() {
			queue.enqueue(false);
		}).toThrowError("Queue.enqueue(object): object must be a valid variable or object. Objects must have at least 1 parameter that is initialized and not null.");
		expect(function() {
			queue.enqueue(null);
		}).toThrowError("Queue.enqueue(object): object must be a valid variable or object. Objects must have at least 1 parameter that is initialized and not null.");
		expect(function() {
			queue.enqueue("");
		}).toThrowError("Queue.enqueue(object): object must be a valid variable or object. Objects must have at least 1 parameter that is initialized and not null.");
		expect(function() {
			var newObj;
			queue.enqueue(newObj);
		}).toThrowError("Queue.enqueue(object): object must be a valid variable or object. Objects must have at least 1 parameter that is initialized and not null.");
		expect(function() {
			var newObj = {};
			queue.enqueue(newObj);
		}).toThrowError("Queue.enqueue(object): object must be a valid variable or object. Objects must have at least 1 parameter that is initialized and not null.");
		expect(function() {
			var newObj = {name: null};
			queue.enqueue(newObj);
		}).toThrowError("Queue.enqueue(object): object must be a valid variable or object. Objects must have at least 1 parameter that is initialized and not null.");
		expect(function() {
			var newObj = {name: null, age: null};
			queue.enqueue(newObj);
		}).toThrowError("Queue.enqueue(object): object must be a valid variable or object. Objects must have at least 1 parameter that is initialized and not null.");
	});

	it ("Allows objects to enqueue with at least 1 set parameter", function() {
		var newObj = {name: null, age: 21};
		queue.dequeue(); //0
		queue.dequeue(); //a
		queue.dequeue(); //1
		queue.dequeue(); //b
		queue.dequeue(); //2
		queue.dequeue(); //c
		queue.enqueue(newObj);
		var peek = queue.peek();
		expect(peek).toEqual(newObj);
	});

	it ("Is cleared", function() {
		queue.clear();
		expect(queue.isEmpty()).toBeTruthy();

	});

	it ("Peeks", function() {
		var head = queue.peek();
		expect(head).toEqual(0);
		queue.dequeue();
		head = queue.peek();
		expect(head).toEqual('a');

	});

	it ("Throws error when peeking an empty queue", function() {
		queue.dequeue(); //0
		queue.dequeue(); //a
		queue.dequeue(); //1
		queue.dequeue(); //b
		queue.dequeue(); //2
		queue.dequeue(); //c
		expect(function() {
			var peek = queue.peek();
		}).toThrowError("Queue.peek(): cannot peek an empty queue");		
	});

	it ("Converts to string", function() {
		var queueStr = queue.toString();
		expect(queueStr).toEqual("[0, a, 1, b, 2, c]");
	});
});