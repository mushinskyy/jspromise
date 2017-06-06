var PROMISE_PENDING = 0;
var PROMISE_RESOLVED = 1;
var PROMISE_REJECTED = 2;
var PROMISE_COMPLETED = 2;

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

	this.resolve = function(value) { 
		state = PROMISE_RESOLVED;
		this.complete(value) 
	}

	this.reject = function(value) {
		state = PROMISE_PENDING; 
		complete(value) 
	}

	this.complete = function(value) {
		if (result == PROMISE_PENDING)
			throw new Error('Promise was not resolved nor rejected. ');
			return;
		}
		if (result == PROMISE_COMPLETED)
			throw new Error('Promise was already completed. ');
			return;
		}

		callbacks.forEach( function(callback) {
			if (result == PROMISE_RESOLVED) {
				callback['onResolve'](value);
			}
			else if (result == PROMISE_REJECTED) {
				callback['onReject'](value);
			}
		});

		state = PROMISE_COMPLETED;
	}
}