var $ = require('jquery');
var Backbone = require('backbone');
var contactFormTemplate = require('../../templates/contact_form.hbs');

var ContactForm = Backbone.View.extend({
  tagName: 'form',
  id: 'contact-form',
  class: 'well',

  events: {
    'submit': 'addContact',
  },

  addContact: function(event){
    event.preventDefault();

    var contacts = {
      firstName: $('#first-name').val(),
      lastName: $('#last-name').val(),
      phoneNumber: $('#phone-number').val(),
      address: $('#address').val(),
    }
    this.collection.create(contacts);
  },

  render: function(){
    this.$el.html(contactFormTemplate());
    return this;
  }
});

module.exports = {
  ContactForm: ContactForm
}
