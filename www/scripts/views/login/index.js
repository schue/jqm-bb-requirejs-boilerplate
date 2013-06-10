/**
 * Login page
 */

define([
    'jQuery',
    'underscore',
    'Backbone',
    'workers/auth',
    'text!views/login/template.html!strip'
	],
    function ($, _, Backbone, auth, template) {
        var view = Backbone.View.extend({
	    events: {
		"submit #loginForm": "doLogin"
	    },
	    doLogin: function(e) {
		e.preventDefault();
		console.log('LOGIN: Setting authToken');
		auth.login($('#loginForm').serializeJSON(), {
			success: function(data) {
				window.location = '#home';
			},
			error: function(data) {
				window.location = '#error';
			}
		});
	    },
            render:function () {
               this.$el.html(_.template(template));
               return this;
            }
        });

        return view;
    });
