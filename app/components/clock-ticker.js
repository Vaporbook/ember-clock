import Ember from 'ember';

var time = 0; // private representation of time
var intervalDuration = 1000; // milliseconds
var self;

export default Ember.Component.extend({


  init: function () {
    
    this._super(arguments);
    
    self = this;

  },

  didRender: function () {

    console.log(self.attrs);

    // HACK because i dont know how else to reference sibling views...
    var secondsView = self.childViews[2];
    var minutesView = self.childViews[1];

    secondsView.actions.cog(self.childViews[1]);
    minutesView.actions.cog(self.childViews[0]);

    // ticker
    setInterval(
      function () {

        time += 1;

        self.set('ticks', time);

        secondsView.actions.tick();

      }, intervalDuration);

  },

  ticks: 0,

  actions: {

  }

});

