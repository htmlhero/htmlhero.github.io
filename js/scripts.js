(function() {
	function decode (input) {

		var keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
		var output = '';
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;

		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');

		while (i < input.length) {

			enc1 = keys.indexOf(input.charAt(i++));
			enc2 = keys.indexOf(input.charAt(i++));
			enc3 = keys.indexOf(input.charAt(i++));
			enc4 = keys.indexOf(input.charAt(i++));

			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;

			output = output + String.fromCharCode(chr1);

			if (enc3 !== 64) {
				output = output + String.fromCharCode(chr2);
			}
			if (enc4 !== 64) {
				output = output + String.fromCharCode(chr3);
			}

		}

		return output;

	}

	var el = document.getElementById('secret');

	if (el) {
		el.innerHTML = decode('PGEgaHJlZj0ibWFpbHRvOmFuZHJld0BodG1saGVyby5ydSI+YW5kcmV3QGh0bWxoZXJvLnJ1PC9hPg==');
	}
})();

window.addEventListener('load', function() {
	(function(m, e, t, r, i, k, a) {
		m[i] = m[i] || function() {
			(m[i].a = m[i].a || []).push(arguments)
		};
		m[i].l = 1 * new Date();
		k = e.createElement(t);
		a = e.getElementsByTagName(t)[0];
		k.src = r;
		a.parentNode.insertBefore(k, a);
	})(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');

	ym(41672319, 'init', {
		clickmap: true,
		trackLinks: true,
		accurateTrackBounce: true
	});
}, false);
