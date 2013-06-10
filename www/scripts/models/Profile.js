/**
 * Profile - User profile
 */

define([
    'Backbone',
    'app'
	],
    function (Backbone, app) {
        var profile = Backbone.Model.extend({
		// This is data set up
		url: function() {
			return app.getUrl('profile', {foo: 'bar'})
		},
		defaults: {
			firstName: '',
			lastName: '',
			email: ''
		},

		// This is actual behavior
		initialize: function() {
			console.log('PROFILE: Initialize');
		},
		test: function() {
			console.log('PROFILE: Test called');
		}
        });

        return profile;
});
