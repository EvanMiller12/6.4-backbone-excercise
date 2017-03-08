var $ = require('jquery');
var Backbone = require('backbone');

var models = require('./models/contact.js');
var views = require('./views/contact.js');

var AppRouter = Backbone.Router.extend({

  initialize: function(){
    var contacts = new models.ContactCollection();
    var contactForm = new views.ContactForm({collection: contacts});
   $('.form').append(contactForm.render().$el);

    contacts.fetch();
  }
});

var appRouter = new AppRouter();

module.exports = appRouter;
