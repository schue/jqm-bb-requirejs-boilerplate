/**
 * Created by Piotr Walczyszyn (outof.me | @pwalczyszyn)
 *
 * User: pwalczys
 * Date: 2/16/12
 * Time: 9:23 AM
 */

define(['libs/backbone/backbone-0.9.1'],
    function () {
        var backbone = Backbone.noConflict();
	backbone.emulateHTTP = true;
        backbone.emulateJSON = true;
	return backbone;
    });
