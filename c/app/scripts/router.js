var $ = require('jquery');
var Backbone = require('backbone');

var models = require('./models/blog.js');
var views = require('./views/blog.js');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'blog/:id/': 'showBlog',
  },
  initialize: function(){
    this.blogPost = new models.BlogCollection();
  },
  index: function(){
    var blogFormItems = new views.BlogForm({collection: this.blogPost});
    $('.form').html(blogFormItems.render().$el);

    var blogListing = new views.BlogListView({collection: this.blogPost});
    $('.app').html(blogListing.render().el);

    this.blogPost.fetch();
  },
  showBlog: function(id){
    var blog = this.blogPost.findWhere({'_id': id});
    // if(!= blog){
    //   blog = new model.Blog();
    //   blog.fetch()
    // }
    var blogDetail = new views.BlogDetailView({model: blog});
    $('.app').html(blogDetail.render().el);
    this.blogPost.fetch();
  }
});

var appRouter = new AppRouter();

module.exports = appRouter;
