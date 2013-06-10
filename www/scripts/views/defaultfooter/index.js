/**
 * FooterView
 */

define([
    'jQuery',
    'underscore',
    'Backbone',
    'text!views/defaultfooter/template.html!strip'],
    function ($, _, Backbone, template) {
        var FooterView = Backbone.View.extend({
            render:function () {
                this.$el.html(_.template(template));
                return this;
            },
        });

        return FooterView;
    });
