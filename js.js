(function() {

	var MAX = 8;
	var DUR = 4;
	var SEP = '    |   ';
	var NTS = [ {dur: DUR}, {dur: DUR/2}, {dur: DUR/4} ];

	function str(array) {
		var result = [];
		var length = array.length;
		for (var i = 0; i < length; i++) {
			var element = array[i];
			result.push(size(element, 2));
		};
		return result.join(' ');
	}

	function size(str, n) {
		str = str + '';
		var length = str.length;
		return length < n ? size(' '+str, n) : str;
	}

	function neg(n) {
		var percent = 25;
		var rand = Math.floor(Math.random() * 100);
		return n * (percent > rand ? -1 : 1);
	}

	function go() {
		var result = [];
		var length = NTS.length;
		var rest = MAX;
		while(rest > 0) {
			var rand = Math.floor(Math.random() * length);
			var nt = NTS[rand];
			if (nt.dur <= rest) {
				rest = rest - nt.dur
				result.push(neg(nt.dur));
				if (nt.dur > 1) {
					var diff = nt.dur - 1
					while (diff > 0) {
						result.push('');
						diff--;
					}
				}
			}
		}
		return result;
	}

	function start() {
		var clf1 = str(go()) + SEP + str(go());
		var clf2 = str(go()) + SEP + str(go());
		var display = document.getElementById('display');
		display.innerHTML = clf1 + '<br />'	+ clf2;
	}

	window.addEventListener('load', start, false);

})();
