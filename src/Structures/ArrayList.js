function ArrayList() {
	dataArr = [];
	this.add = function(object) {
		this.dataArr.push(object);
	};

	this.addAt = function(index, object) {
		this.dataArr[index] = object;
	};

	this.addAll = function(objectList) {
		this.dataArr.concat(objectList);
	};

	this.addAllAt = function(index, objectList) {
		this.dataArr.splice(index, 0, objectList);
	};

	this.clear = function() {
		this.dataArr = [];
	};

	this.contains = function(object) {
		if (this.dataArr.indexOf(object) !== -1) return true;
		return false;
	};

	this.get = function(index) {
		return this.dataArr[index];
	};

	this.indexOf = function(object) {
		return this.dataArr.indexOf(object);
	};

	this.lastIndexOf = function(object) {
		return this.dataArr.lastIndexOf(object);
	};

	this.removeAt = function(index) {
		this.dataArr.splice(index,1);
	};

	this.remove = function(object) {
		var index = this.dataArr.indexOf(object);
		if (index !== -1) {
			this.dataArr.splice(index, 1);
		}
	};

	this.set = function(index, object) {
		this.dataArr[index] = object;
	};

	this.size = function() {
		return this.dataArr.length;
	};

	this.toArray = function() {
		return this.dataArr;
	};
}

