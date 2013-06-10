// Filename: router.js
/**
 * Primary router
 */
define([
  'jQuery',
  'underscore',
  'Backbone',
  'headerview'
  ], function($, _, Backbone, headerView ) {
	var openRoutes = ['login', 'register', 'about', 'error'];
	var AppRouter = Backbone.Router.extend({
		currentPage: null,
		routes: {
			// Default cover-all route for plain views
			':route' : 'changePage',
			':route/:param' : 'changePage',
			// Default
			'*actions': 'defaultAction'
		},
		defaultAction: function(actions){
			// We have no matching route, lets just log what the URL was
			console.log('No route:', actions);
		},
		changePage: function(route, params) {
			console.log("ROUTER: change to '" + route + "'");

			// If there is no authToken and this page is not open then we need to kick you to login
			if (!localStorage.getItem("authToken") && !_.contains(openRoutes, route)) {
				console.log("ROUTER: No authToken, redirecting to login");
				window.location = '#login';
			} else {
				require(['scripts/views/' + route + '/index.js'], function(pageClass) {
					console.log("ROUTER: created " + pageClass);

					var page = new pageClass(params);
					$(page.el).attr('data-role', 'page');
					page.render();

					// Attach and render the header and footer
					var header = new headerView();
					header.render();

					if (page.footer) {
						require(['app', 'scripts/views/' + page.footer + '/index.js'],function(app,footer) {
							var footer = new footer({
								page: page
							});
							footer.render();
							$(page.el).prepend($(header.el));
							$(page.el).append($(footer.el));
							$('body').append($(page.el));
							$.mobile.changePage($(page.el), {changeHash:false});
						});
					} else {
						$('body').append($(page.el));
						$.mobile.changePage($(page.el), {changeHash:false});
					}
				});
			}
		}
	});

	var initialize = function(){
		console.log('ROUTER: initialize');
		var approuter = new AppRouter;
		Backbone.history.start();
	};

	return {
		initialize: initialize
	};
});
