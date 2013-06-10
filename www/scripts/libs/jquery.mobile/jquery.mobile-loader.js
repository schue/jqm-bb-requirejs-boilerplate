/**
 * Created by Piotr Walczyszyn (outof.me | @pwalczyszyn)
 *
 * User: pwalczys
 * Date: 2/16/12
 * Time: 9:31 AM
 */

define(['jQuery', 'libs/jquery.mobile/jquery.mobile-1.1.1'],
    function ($) {
	console.log('JQUERY MOBILE: loaded');
	$('div[data-role="page"]').live('pagehide', function (event, ui) {
		    $(event.currentTarget).remove();
	});
        return $.mobile;
    });
