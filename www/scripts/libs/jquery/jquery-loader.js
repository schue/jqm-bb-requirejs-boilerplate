/**
 * Created by Piotr Walczyszyn (outof.me | @pwalczyszyn)
 *
 * User: pwalczys
 * Date: 2/16/12
 * Time: 9:30 AM
 */

define(['libs/jquery/jquery-1.7.1'],
    function () {
	console.log('JQUERY: loaded');
	$.fn.serializeJSON=function() {
	    var json = {};
	    jQuery.map($(this).serializeArray(), function(n, i){
		    json[n['name']] = n['value'];
	    });
	    return json;
	};
	$(document).bind("mobileinit", function () {
		console.log('JQUERY MOBILE: init');
		$.mobile.ajaxEnabled = false;
		$.mobile.linkBindingEnabled = false;
		$.mobile.hashListeningEnabled = false;
		$.mobile.pushStateEnabled = false;
	});

        return $;
    });
