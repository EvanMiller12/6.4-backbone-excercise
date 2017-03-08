var $ = require('jquery');
var Backbone = require('backbone');

var models = require('./models/blog.js');
var views = require('./views/blog.js');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'blog/:id/': 'showBlog'
  },

  initialize: function(){
    this.blogCollection = new models.BlogCollection();
  },

  index: function(){
    var postBlogForm = new views.BlogFormView({collection: this.blogCollection});
    $('.form').append(postBlogForm.render().$el);

    var blogList = new views.BlogListView({collection: this.blogCollection});
    $('.blog-title').html(blogList.render().el);

    this.blogCollection.fetch();
  },
  
  showBlog: function(id){
    var blog = this.blogCollection.findWhere({'_id': id});
    var blogDetail = new views.BlogDetailView({model: blog});
    $('.blog-details').html(blogDetail.render().el);
    this.blogCollection.fetch();
  }
});

var appRouter = new AppRouter();

module.exports = appRouter;
