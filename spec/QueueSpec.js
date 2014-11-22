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

	it ("Is empty", function() {
		queue.dequeue(); //1
		queue.dequeue(); //a
		queue.dequeue(); //2
		queue.dequeue(); //b
		queue.dequeue(); //3
		queue.dequeue(); //c
		expect(queue.isEmpty()).toBeTruthy();

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

	it ("Enqueues", function() {
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