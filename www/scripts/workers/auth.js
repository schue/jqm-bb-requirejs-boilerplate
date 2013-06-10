/**
 * Auth utilities
 */

define([
	'app',
	'router',
	],
	function (app, router) {
		return {
			login: function (data, callbacks) {
				console.log('LOG IN', data);
				$.post(app.getUrl('login'), data)
				.success(function(data) {
					console.log('LOG IN RESPONSE', data);
					if (data.status == 'success') {
						app.setAuthToken(data.token);
						callbacks.success(data);
					} else {
						callbacks.error(data);
					}
				})
				.error(function(data) {
					callbacks.error();
				});	
			}
		};
	}
);
