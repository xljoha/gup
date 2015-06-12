import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	beforeModel: function() {
		Ember.$("body").addClass("loading");
	},
	model: function(){
		return  this.store.find("draft", {drafts: true});
	},
	afterModel: function() {
		Ember.$("body").removeClass("loading");
	},

	actions: {
		refreshModel: function() {
			this.refresh();
		}

	}
});
