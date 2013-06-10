/**
 * User list
 */

define([
    'jQuery',
    'underscore',
    'Backbone',
    'models/Profile',
    'text!views/users/template.html!strip'
    ],
    function ($, _, Backbone, Profile, template) {
        var view = Backbone.View.extend({
        footer: 'defaultfooter',
            initialize:function(params) {
		this.model = new Profile();
            },
            render:function () {
               $(this.el).html(_.template(template)(this.model.toJSON()));
               return this;
            }
        });

        return view;
    });
