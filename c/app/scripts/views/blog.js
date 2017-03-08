var $ = require('jquery');
var Backbone = require('backbone');

var blogFormTemplate = require('../../templates/blog_form.hbs');
var blogTitleTemplate = require('../../templates/blog_item.hbs');
var blogDetailTemplate = require('../../templates/blog_detail.hbs');

var BlogForm = Backbone.View.extend({
  tagName: 'form',
  id: 'blog-form',
  className: 'well',
  events: {
    'submit': 'postBlog'
  },

  postBlog: function(){
    var blog = {
      title: $('#title').val(),
      blogContent: $('#blog-content').val(),
    }
    this.collection.create(blog);
  },
  render: function(){
    this.$el.html(blogFormTemplate())
    return this;
  }
});

var BlogListView = Backbone.View.extend({
  tagName: 'ul',
  className: 'list-group',

  initialize: function(){
    this.listenTo(this.collection, 'add', this.addBlog)
  },
  addBlog: function(blog){
    var blogTitle = new BlogItemView({model: blog});
    this.$el.append(blogTitle.render().el);
  },
  render: function(){
    return this;
  }
});

var BlogItemView = Backbone.View.extend({
  tagName: 'li',
  className: 'list-group-item',
  template: blogTitleTemplate,

  render: function(){
    var renderedTemplate = this.template(this.model.toJSON());
    this.$el.html(renderedTemplate);
    return this;
  }
});

var BlogDetailView = Backbone.View.extend({
  className: 'well',
  template: blogDetailTemplate,
  // initialize: function(){
  //   this.listenTo(this.model.render, 'sync', this.addBlog)
  // },
  render: function(){
    var renderedTemplate = this.template(this.model.toJSON());
    this.$el.html(renderedTemplate);
    return this;
  }
});


module.exports = {
  BlogForm: BlogForm,
  BlogListView: BlogListView,
  BlogItemView: BlogItemView,
  BlogDetailView: BlogDetailView
};
