/**
 * Main header
 */

define([
    'jQuery',
    'underscore',
    'Backbone',
    'text!views/header/template.html!strip'],
    function ($, _, Backbone, template) {
        var HeaderView = Backbone.View.extend({
            render:function () {
                this.$el.html(_.template(template));
                return this;
            },
        });

        return HeaderView;
    });
