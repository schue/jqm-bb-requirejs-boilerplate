/**
 * Main
 */
 
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
require.config({
	shim: {
		'facebook' : {
			exports: 'FB'
	        }
        },
	paths:{
		facebook: '//connect.facebook.net/en_US/all.js',
		jQuery:'libs/jquery/jquery-loader',
		jQueryMobile:'libs/jquery.mobile/jquery.mobile-loader',
		jQueryTransit:'libs/jquery.transit/jquery.transit-loader',
		jGestures:'libs/jgestures/jgestures-loader',
		underscore:'libs/underscore/underscore-loader',
		Backbone:'libs/backbone/backbone-loader',
		order:'libs/require/order-1.0.5',
		text:'libs/require/text-1.0.6',
		domReady:'libs/require/domReady-1.0.0',
		headerview:'views/header/index',
		footerview:'views/footer/index'
	}
});

require([
    'order!jQuery',
    'order!jQueryMobile',
    ],
    function ($, jQueryMobile) {
        // After above initializations are done we can launch app.init
        // jQueryMobile is referenced in order to start its initialization
        require(['app'], function (app) {
		console.log('MAIN: Initializing app');
		app.init();
        })
    });
}
