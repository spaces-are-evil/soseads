describe("Circular Buffer data structure", function() {
	var buffer = null;

	function initializeBuffer() {
		buffer.write(0);
		buffer.write('a');
		buffer.write(1);
		buffer.write('b');
		buffer.write(2);
		buffer.write('c');		
	}


	beforeEach(function() {
		buffer = new CircularBuffer(7);
		initializeBuffer();
	});

	it ("Cannot initialize a buffer without a size", function(){
		expect(function() {
			buffer = new CircularBuffer();
		}).toThrowError("CircularBuffer: cannot instantiate ciruclar buffer with no size.");
	});

	it ("Gets the right size", function() {
		expect(buffer.size()).toBe(6);
		buffer.write(3);
		buffer.write('d');
		expect(buffer.size()).not.toBe(8);
		expect(buffer.size()).toBe(7);
	});

	it ("Is empty when no elements exist in buffer", function() {
		buffer.read();
		buffer.read();
		buffer.read();
		buffer.read();
		buffer.read();
		buffer.read();
		expect(buffer.isEmpty()).toBeTruthy();

	});

	it ("Is Not Empty when elements exist in the buffer", function() {
		buffer.read(); //0
		buffer.read(); //a
		buffer.read(); //1
		expect(buffer.isEmpty()).toBeFalsy();
	});

	it ("Is full when all positions in the buffer have elements", function() {
		buffer.write(3); //0
		buffer.write('d'); //a
		expect(buffer.isFull()).toBeTruthy();
	});

	it ("Is not full when some positions in the buffer have no elements", function() {
		buffer.read();
		expect(buffer.isFull()).toBeFalsy();
	});

	it ("Reads", function() {
		var readVar = buffer.read();
		expect(readVar).toEqual(0);
		readVar = buffer.read();
		expect(readVar).toEqual('a');
		readVar = buffer.read();
		expect(readVar).toEqual(1);
		readVar = buffer.read();
		expect(readVar).toEqual('b');
		readVar = buffer.read();
		expect(readVar).toEqual(2);
		readVar = buffer.read();
		expect(readVar).toEqual('c');
		expect(buffer.isEmpty()).toBeTruthy();
	});

	it("Throws error if reading an empty buffer", function() {
		buffer.read(); //0
		buffer.read(); //a
		buffer.read(); //1
		buffer.read(); //b
		buffer.read(); //2
		buffer.read(); //c
		expect(function() {
			buffer.read();
		}).toThrowError("CircularBuffer.read(): you cannot read from an empty circular buffer");
	});

	it ("Writes truthy values", function() {
		var newVar = 3;
		var newObj = {value: 'd'};
		buffer.read(); //0
		buffer.read(); //a
		buffer.read(); //1
		buffer.read(); //b
		buffer.read(); //2
		buffer.read(); //c
		buffer.write(newVar);
		buffer.write(newObj);
		var readVar = buffer.read();
		expect(readVar).toEqual(3);
		readVar = buffer.read();
		expect(readVar).toEqual(newObj);
		expect(buffer.isEmpty()).toBeTruthy();
	});

	it ("Throws error if writing falsey objects", function() {
		expect(function() {
			buffer.write();
		}).toThrowError("CircularBuffer.write(object): object must be either a truthy variable (including 0) or an object with at least 1 initialized parameter.");
		expect(function() {
			buffer.write(false);
		}).toThrowError("CircularBuffer.write(object): object must be either a truthy variable (including 0) or an object with at least 1 initialized parameter.");
		expect(function() {
			buffer.write(null);
		}).toThrowError("CircularBuffer.write(object): object must be either a truthy variable (including 0) or an object with at least 1 initialized parameter.");
		expect(function() {
			buffer.write("");
		}).toThrowError("CircularBuffer.write(object): object must be either a truthy variable (including 0) or an object with at least 1 initialized parameter.");
		expect(function() {
			var newObj;
			buffer.write(newObj);
		}).toThrowError("CircularBuffer.write(object): object must be either a truthy variable (including 0) or an object with at least 1 initialized parameter.");
		expect(function() {
			var newObj = {};
			buffer.write(newObj);
		}).toThrowError("CircularBuffer.write(object): object must be either a truthy variable (including 0) or an object with at least 1 initialized parameter.");
		expect(function() {
			var newObj = {name: null};
			buffer.write(newObj);
		}).toThrowError("CircularBuffer.write(object): object must be either a truthy variable (including 0) or an object with at least 1 initialized parameter.");
		expect(function() {
			var newObj = {name: null, age: null};
			buffer.write(newObj);
		}).toThrowError("CircularBuffer.write(object): object must be either a truthy variable (including 0) or an object with at least 1 initialized parameter.");
	});

	it ("Allows objects to write with at least 1 set parameter", function() {
		var newObj = {name: null, age: 21};
		buffer.write(newObj);
		buffer.read(); //0
		buffer.read(); //a
		buffer.read(); //1
		buffer.read(); //b
		buffer.read(); //2
		buffer.read(); //c
		var peek = buffer.peek();
		expect(peek).toBe(newObj);
	});

	it ("Write properly overrides existing elements when circular buffer is full", function() {
		console.log = jasmine.createSpy("log");
		expect(buffer.isFull()).toBeFalsy();
		buffer.write(3);
		expect(buffer.isFull()).toBeTruthy();
		buffer.write('d');
		expect(console.log).toHaveBeenCalledWith("CIRCULAR BUFFER OVERRIDE: POSITION: 0 | OLD OBJECT: 0 | NEW OBJECT: d");
		expect(buffer.isFull()).toBeTruthy();
		buffer.write(4);
		expect(console.log).toHaveBeenCalledWith("CIRCULAR BUFFER OVERRIDE: POSITION: 1 | OLD OBJECT: a | NEW OBJECT: 4");
		expect(buffer.isFull()).toBeTruthy();
		buffer.write('e');
		expect(console.log).toHaveBeenCalledWith("CIRCULAR BUFFER OVERRIDE: POSITION: 2 | OLD OBJECT: 1 | NEW OBJECT: e");
		expect(buffer.isFull()).toBeTruthy();
		buffer.write(5);
		expect(console.log).toHaveBeenCalledWith("CIRCULAR BUFFER OVERRIDE: POSITION: 3 | OLD OBJECT: b | NEW OBJECT: 5");
		expect(buffer.isFull()).toBeTruthy();
		buffer.write('f');
		expect(console.log).toHaveBeenCalledWith("CIRCULAR BUFFER OVERRIDE: POSITION: 4 | OLD OBJECT: 2 | NEW OBJECT: f");
		expect(buffer.isFull()).toBeTruthy();
		buffer.write(6);
		expect(console.log).toHaveBeenCalledWith("CIRCULAR BUFFER OVERRIDE: POSITION: 5 | OLD OBJECT: c | NEW OBJECT: 6");
		expect(buffer.isFull()).toBeTruthy();
		buffer.write('g');
		expect(console.log).toHaveBeenCalledWith("CIRCULAR BUFFER OVERRIDE: POSITION: 6 | OLD OBJECT: 3 | NEW OBJECT: g");
		expect(buffer.isFull()).toBeTruthy();
		buffer.write(7);
		expect(console.log).toHaveBeenCalledWith("CIRCULAR BUFFER OVERRIDE: POSITION: 0 | OLD OBJECT: d | NEW OBJECT: 7");
		expect(buffer.isFull()).toBeTruthy();
		buffer.write('h');
		expect(console.log).toHaveBeenCalledWith("CIRCULAR BUFFER OVERRIDE: POSITION: 1 | OLD OBJECT: 4 | NEW OBJECT: h");
		expect(buffer.isFull()).toBeTruthy();
		buffer.write(8);
		expect(console.log).toHaveBeenCalledWith("CIRCULAR BUFFER OVERRIDE: POSITION: 2 | OLD OBJECT: e | NEW OBJECT: 8");
		expect(buffer.isFull()).toBeTruthy();
		buffer.write('i');
		expect(console.log).toHaveBeenCalledWith("CIRCULAR BUFFER OVERRIDE: POSITION: 3 | OLD OBJECT: 5 | NEW OBJECT: i");
		expect(buffer.isFull()).toBeTruthy();
		buffer.write(9);
		expect(console.log).toHaveBeenCalledWith("CIRCULAR BUFFER OVERRIDE: POSITION: 4 | OLD OBJECT: f | NEW OBJECT: 9");
		expect(buffer.isFull()).toBeTruthy();
	});

	it ("Is cleared", function() {
		buffer.clear();
		expect(buffer.isEmpty()).toBeTruthy();

	});

	it ("Peeks", function() {
		var readVar = buffer.peek();
		expect(readVar).toEqual(0);
		buffer.read();
		readVar = buffer.peek();
		expect(readVar).toEqual('a');

	});

	it ("Throws error when peeking an empty circular buffer", function() {
		buffer.read(); //0
		buffer.read(); //a
		buffer.read(); //1
		buffer.read(); //b
		buffer.read(); //2
		buffer.read(); //c
		expect(function() {
			var peek = buffer.peek();
		}).toThrowError("CircularBuffer.peek(): cannot peek an empty circualr buffer.");		
	});

	it ("Converts to string", function() {
		var bufStr = buffer.toString();
		expect(bufStr).toBe("[0, a, 1, b, 2, c, #] - REMINDER: The last element points to the first element.");
	});
});