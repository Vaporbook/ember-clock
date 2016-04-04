import Ember from 'ember';

// private representation of time
var time = 0;
// self ref
var self;
// cog to affect with rollover tick
var self;

export default Ember.Component.extend({

  tagName: 'span',

  init: function () {
  	
  	this._super(arguments);
  	
  	self = this;

  },
  hours: 0,

  message: '',

  actions: {
  	
    tick: function () {
      time++;
    	self.set('hours', time);
    }
  }

});
