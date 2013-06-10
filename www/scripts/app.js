/**
 * App Logic
 */

define([
	'jQuery',
	'router',
	],
	function ($, router) {
		return {
			protocol: 'http://',
			host: 'localhost',
			urls: {
				login: '/api/login',
				profile: '/api/profile',
			},
			header:null,
			footer:null,
			getUrl: function(url, data) {
				data.token = this.getAuthToken();
				var str = [];
				for(var p in data) {
                                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(data[p]));
                                }
				var newUrl = this.protocol + this.host + this.urls[url] + '?' + str.join("&");
				console.log('APP: getUrl URL is ' + newUrl);
				return newUrl;
			},
			init: function () {
				router.initialize();			
				window.location = '#home';
			},
			getAuthToken: function() {
				return localStorage.getItem('authToken');
			},
			setAuthToken: function(newToken) {
				localStorage.setItem('authToken', newToken);
			}
		};
	}
);
