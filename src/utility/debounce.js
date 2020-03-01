export function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

// You'll pass the debounce function the function to execute and the fire rate limit in milliseconds.  Here's an example usage:

// var myEfficientFn = debounce(function() {
// 	// All the taxing stuff you do
// }, 250);

// window.addEventListener('resize', myEfficientFn);