/**
 * Address model
 */

define([
    'Backbone',
    'app'
    ],
    function (Backbone, app) {
        var address = Backbone.Model.extend({
		idAttribute: "contactMechId",
		url: function() {
			return app.getUrl('address', {contactMechId: this.id})
		},
		// This is data set up
		defaults: {
			id: '',
			fullName: '',
			address1: '',
			address2: '',
			postalCode: '',
			city: '',
			stateProvinceGeoId: '',
			countryGeoId: ''
		},

		// This is actual behavior
		initialize: function(params) {
			console.log('ADDRESS: Initialize');
		},
        });

        return address;
});
