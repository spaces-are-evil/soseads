describe("Queue data structure", function() {
	var queue = null;

	function initializeQueue() {
		queue.enqueue(1);
		queue.enqueue('a');
		queue.enqueue(2);
		queue.enqueue('b');
		queue.enqueue(3);
		queue.enqueue('c');		
	}


	beforeEach(function() {
		queue = new Queue();
		initializeQueue();
	});

	it ("Gets the right size", function() {
		expect(queue.size()).toBe(6);
		queue.enqueue(4);
		queue.enqueue('d');
		expect(queue.size()).toBe(8);
	});

	it ("Is empty when no queue elements exist", function() {
		queue.dequeue(); //1
		queue.dequeue(); //a
		queue.dequeue(); //2
		queue.dequeue(); //b
		queue.dequeue(); //3
		queue.dequeue(); //c
		expect(queue.isEmpty()).toBeTruthy();

	});

	it ("Is Not Empty when queue elements exist", function() {
		queue.dequeue(); //1
		queue.dequeue(); //a
		queue.dequeue(); //2
		expect(queue.isEmpty()).toBe(false);
	});

	it ("Is Not Empty when queue elements exist", function() {
		queue.dequeue(); //1
		queue.dequeue(); //a
		queue.dequeue(); //2
		expect(queue.isEmpty()).toBe(false);
	});


	it ("Dequeues", function() {
		var head = queue.dequeue();
		expect(head).toEqual(1);
		head = queue.dequeue();
		expect(head).toEqual('a');
		head = queue.dequeue();
		expect(head).toEqual(2);
		head = queue.dequeue();
		expect(head).toEqual('b');
		head = queue.dequeue();
		expect(head).toEqual(3);
		head = queue.dequeue();
		expect(head).toEqual('c');
		expect(queue.isEmpty()).toBeTruthy();
	});

	it("Throws error if dequeuing an empty queue", function() {
		queue.dequeue(); //1
		queue.dequeue(); //a
		queue.dequeue(); //2
		queue.dequeue(); //b
		queue.dequeue(); //3
		queue.dequeue(); //c
		expect(function() {
			queue.dequeue();
		}).toThrowError("Queue.peek(): cannot dequeue an empty queue");
	});

	it ("Enqueues truthy values", function() {
		queue.enqueue(4);
		queue.enqueue('d');
		queue.dequeue(); //1
		queue.dequeue(); //a
		queue.dequeue(); //2
		queue.dequeue(); //b
		queue.dequeue(); //3
		queue.dequeue(); //c
		var head = queue.dequeue();
		expect(head).toEqual(4);
		head = queue.dequeue();
		expect(head).toEqual('d');
		expect(queue.isEmpty()).toBeTruthy();
	});

	it ("Cannot enqueue falsey values", function() {
		expect(function() {
			queue.enqueue(false);
		}).toThrowError("Queue.enqueue(): cannot enqueue a falsey object");
		expect(function() {
			queue.enqueue(null);
		}).toThrowError("Queue.enqueue(): cannot enqueue a falsey object");
		expect(function() {
			queue.enqueue("");
		}).toThrowError("Queue.enqueue(): cannot enqueue a falsey object");
		expect(function() {
			queue.enqueue();
		}).toThrowError("Queue.enqueue(): cannot enqueue a falsey object");

	});

	it ("Is cleared", function() {
		queue.clear();
		expect(queue.isEmpty()).toBeTruthy();

	});

	it ("Peeks", function() {
		var head = queue.peek();
		expect(head).toEqual(1);
		queue.dequeue();
		head = queue.peek();
		expect(head).toEqual('a');

	});

//	it ("Converts to string", function() {
//
//
//	});
});