describe("Deque data structure", function() {
	var deque = null;

	function initializeDeque() {
		deque.push(0);
		deque.push('a');
		deque.push(1);
		deque.push('b');
		deque.push(2);
		deque.push('c');		
	}

	beforeEach(function() {
		deque = new Deque();
		initializeDeque();
	});

	it("Gets the right size", function() {
		expect(deque.size()).toEqual(6);
		deque.unshift('z');
		deque.unshift(-1);
		expect(deque.size()).toEqual(8);
	});

	it("Clears the deque and is empty when no elements exist in the deque.", function() {
		deque.clear();
		expect(deque.isEmpty()).toBeTruthy();
	});

	it("Is not empty when elements exist in the deque.", function() {
		expect(deque.isEmpty()).toBeFalsy();
	});

	it("Examines the last element properly.", function() {
		expect(deque.last()).toBe('c');
	});

	it("Throws error if trying to examine the last element of an empty deque.", function() {
		deque.clear();
		expect(function() {
			var lastEle = deque.last();
		}).toThrowError("Deque.last(): cannot examine elements in an empty deque.");
	});

	it("Examines the first element properly.", function() {
		expect(deque.first()).toEqual(0);
	});

	it("Throws error if trying to examine the first element of an empty deque.", function() {
		deque.clear();
		expect(function() {
			var firstEle = deque.first();
		}).toThrowError("Deque.first(): cannot examine elements in an empty deque.");
	});

	it("Pushes elements to the end of the deque and pushes truthy elements.", function() {
		expect(function() {
			deque.push(true);
			expect(deque.last()).toBe(true);
			deque.push(0);
			expect(deque.last()).toEqual(0);
			var newObj = {age: 21};
			deque.push(newObj);
			expect(deque.last()).toEqual(newObj);
			var newObj1 = {name: null, age: 21};
			deque.push(newObj1);
			expect(deque.last()).toEqual(newObj1);
			deque.push('z');
			expect(deque.last()).toEqual('z');
			deque.push("not false");
			expect(deque.last()).toEqual("not false");
		}).not.toThrowError("Deque.push(object): object must be a valid variable or object. Objects must have at least 1 parameter that is initialized and not null.");
	});

	it("Throws error if trying to push falsy elements (other than 0).", function() {
		var newVar;
		var newObj1 = {};
		var newObj2 = {name: null};
		var newObj3 = {name: null, age: null};
		expect(function() {
			deque.push(newObj1);
		}).toThrowError("Deque.push(object): object must be a valid variable or object. Objects must have at least 1 parameter that is initialized and not null.");
		expect(function() {
			deque.push(newObj2);
		}).toThrowError("Deque.push(object): object must be a valid variable or object. Objects must have at least 1 parameter that is initialized and not null.");
		expect(function() {
			deque.push(newObj3);
		}).toThrowError("Deque.push(object): object must be a valid variable or object. Objects must have at least 1 parameter that is initialized and not null.");
		expect(function() {
			deque.push(false);
		}).toThrowError("Deque.push(object): object must be a valid variable or object. Objects must have at least 1 parameter that is initialized and not null.");
		expect(function() {
			deque.push("");
		}).toThrowError("Deque.push(object): object must be a valid variable or object. Objects must have at least 1 parameter that is initialized and not null.");
		expect(function() {
			deque.push('');
		}).toThrowError("Deque.push(object): object must be a valid variable or object. Objects must have at least 1 parameter that is initialized and not null.");
		expect(function() {
			deque.push(null);
		}).toThrowError("Deque.push(object): object must be a valid variable or object. Objects must have at least 1 parameter that is initialized and not null.");
		expect(function() {
			deque.push(newVar);
		}).toThrowError("Deque.push(object): object must be a valid variable or object. Objects must have at least 1 parameter that is initialized and not null.");
		expect(function() {
			deque.push();
		}).toThrowError("Deque.push(object): object must be a valid variable or object. Objects must have at least 1 parameter that is initialized and not null.");		
	});

	it("Unshifts elements to the beginning of the deque and unshifts truthy values.", function() {
		expect(function() {
			deque.unshift(true);
			expect(deque.first()).toBe(true);
			deque.unshift(0);
			expect(deque.first()).toEqual(0);
			var newObj = {age: 21};
			deque.unshift(newObj);
			expect(deque.first()).toEqual(newObj);
			var newObj1 = {name: null, age: 21};
			deque.unshift(newObj1);
			expect(deque.first()).toEqual(newObj1);
			deque.unshift('z');
			expect(deque.first()).toEqual('z');
			deque.unshift("not false");
			expect(deque.first()).toEqual("not false");
		}).not.toThrowError("Deque.unshift(object): object must be a valid variable or object. Objects must have at least 1 parameter that is initialized and not null.");
	});

	it("Throws error if trying to unshift falsy elements (other than 0).", function() {
		var newVar;
		var newObj1 = {};
		var newObj2 = {name: null};
		var newObj3 = {name: null, age: null};
		expect(function() {
			deque.unshift(newObj1);
		}).toThrowError("Deque.unshift(object): object must be a valid variable or object. Objects must have at least 1 parameter that is initialized and not null.");
		expect(function() {
			deque.unshift(newObj2);
		}).toThrowError("Deque.unshift(object): object must be a valid variable or object. Objects must have at least 1 parameter that is initialized and not null.");
		expect(function() {
			deque.unshift(newObj3);
		}).toThrowError("Deque.unshift(object): object must be a valid variable or object. Objects must have at least 1 parameter that is initialized and not null.");
		expect(function() {
			deque.unshift(false);
		}).toThrowError("Deque.unshift(object): object must be a valid variable or object. Objects must have at least 1 parameter that is initialized and not null.");
		expect(function() {
			deque.unshift("");
		}).toThrowError("Deque.unshift(object): object must be a valid variable or object. Objects must have at least 1 parameter that is initialized and not null.");
		expect(function() {
			deque.unshift('');
		}).toThrowError("Deque.unshift(object): object must be a valid variable or object. Objects must have at least 1 parameter that is initialized and not null.");
		expect(function() {
			deque.unshift(null);
		}).toThrowError("Deque.unshift(object): object must be a valid variable or object. Objects must have at least 1 parameter that is initialized and not null.");
		expect(function() {
			deque.unshift(newVar);
		}).toThrowError("Deque.unshift(object): object must be a valid variable or object. Objects must have at least 1 parameter that is initialized and not null.");
		expect(function() {
			deque.unshift();
		}).toThrowError("Deque.unshift(object): object must be a valid variable or object. Objects must have at least 1 parameter that is initialized and not null.");		
	

	});

	it("Properly pops elements from the end of the deque.",function() {
		expect(function() {
			expect(deque.pop()).toEqual('c');
			expect(deque.pop()).toEqual(2);
			expect(deque.pop()).toEqual('b');
			expect(deque.pop()).toEqual(1);
			expect(deque.pop()).toEqual('a');
			expect(deque.pop()).toEqual(0);
			expect(deque.isEmpty()).toBeTruthy();
		}).not.toThrowError("Deque.pop(): cannot pop from an empty deque.");
	});

	it("Throws error if popping elements from an empty deque.",function() {
		expect(function() {
			deque.clear();
			deque.pop();
		}).toThrowError("Deque.pop(): cannot pop from an empty deque.");
	});

	it("Properly shifts elements from the end of the deque.",function() {
		expect(function() {
			expect(deque.shift()).toEqual(0);
			expect(deque.shift()).toEqual('a');
			expect(deque.shift()).toEqual(1);
			expect(deque.shift()).toEqual('b');
			expect(deque.shift()).toEqual(2);
			expect(deque.shift()).toEqual('c');
			expect(deque.isEmpty()).toBeTruthy();			
		}).not.toThrowError("Deque.shift(): cannot shift from an empty deque.");
	});

	it("Throws error if popping elements from an empty deque.",function() {
		expect(function() {
			deque.clear();
			deque.shift();
		}).toThrowError("Deque.shift(): cannot shift from an empty deque.");
	});

	it ("Converts to string", function() {
		var dequeStr = deque.toString();
		expect(dequeStr).toEqual("[0, a, 1, b, 2, c]");
	});
});



