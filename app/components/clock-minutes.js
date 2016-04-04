import Ember from 'ember';

 // private representation of time
var time = 0;
// self ref
var self;
// cog to affect with rollover tick
var hours;

export default Ember.Component.extend({

  tagName: 'span',

  init: function () {
  	
  	this._super(arguments);
  	
  	self = this;

  },
  minutes: 0,

  display: Ember.computed('minutes', function () {

    let s = parseInt(this.get('minutes'));
    return (s <= 10) ? "0"+s : this.get('minutes');
    
  }),

  actions: {
  	
    tick: function () {
      time++;
      if(time > 59) {
        hours.actions.tick();
        time = 0;
      }
    	self.set('minutes', time);
    },
    cog: function (view) {

      hours = view;

    }
  }

});
