var $ = require('jquery');

var models = require('./models/blog.js');
var views = require('./views/blog.js');

$(function(){

  var blogPostCollection = new models.BlogCollection();

  var blogForm = new views.BlogForm({collection: blogPostCollection});
  $('.form').append(blogForm.render().el);

  blogPostCollection.fetch();

});
