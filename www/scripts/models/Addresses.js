/**
 * Addresses collection
 */

define([
    'Backbone',
    'app',
    'models/Address'
	],
    function (Backbone, app, Address) {
        var addresses = Backbone.Collection.extend({
		url: function() {
			return app.getUrl('addresses', {foo: 'bar'})
		},
		model: Address,
		// This is actual behavior
		initialize: function() {
			console.log('ADDRESSES: Initialize');
		},
		parse : function(resp, xhr) {
			console.log('ADDRESSES: parse', resp.addresses);
			return resp.addresses;
		}
        });

        return addresses;
});
