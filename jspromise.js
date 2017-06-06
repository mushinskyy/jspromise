var PROMISE_PENDING = 0;
var PROMISE_FULFILLED = 1;
var PROMISE_REJECTED = 2;

function Promise() {
	var state = PROMISE_PENDING;

	this.callbacks = new Array();

	this.then = function(onResolve, onReject) {
					var callback = { 
						"onResolve": onResolve, 
						"onReject" onReject 
					};

					this.callbacks.push(callback);
				}

	//this.resolve = function(value) { this.complete() }

}