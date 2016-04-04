import Ember from 'ember';

// private representation of time
var time = 0;
// self ref
var self;
// cog to affect with rollover tick
var minutes;

export default Ember.Component.extend({

  tagName: 'span',

  init: function () {

  	this._super(arguments);

  	self = this;

  },

  didRender: function () {



  },

  seconds: 0,

  display: Ember.computed('seconds', function () {

    let s = parseInt(this.get('seconds'));
    return (s <= 10) ? "0"+s : this.get('seconds');
    
  }),

  actions: {

    tick: function () {
      time++;
      if(time > 59) {
        minutes.actions.tick();
        time = 0;
      }
      self.set('seconds', time);
    },

    cog: function (view) {

      minutes = view;

    }

  }

});

