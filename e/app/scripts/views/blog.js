var $ = require('jquery');
var Backbone = require('backbone');

var blogFormTemplate = require('../../templates/blog_form.hbs');
var blogPostTemplate = require('../../templates/blog_post.hbs');
var blogDetailTemplate = require('../../templates/blog_detail.hbs');

var BlogFormView = Backbone.View.extend({
  tagName: 'form',
  id: 'blog-form',
  className: 'well',
  events: {
    'submit': 'postBlog'
  },

  postBlog: function(event){
    event.preventDefault();

    var blogItems = {
      title: $('#title').val(),
      blog: $('#blog').val(),
    }
    this.collection.create(blogItems);
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
    this.listenTo(this.collection, 'add', this.addBlog);
  },

  addBlog: function(){
    var blogItem = new BlogItemView({model: blog});
    this.$el.append(blogItem.render().el);
  }
});

var BlogItemView = Backbone.View.extend({
  tagName: 'li',
  className: 'list-item-group',
  template: blogPostTemplate,
  events: {
    'click .delete-post': 'deletePost'
  },

  initialize: function(){
    this.listenTo(this.model, 'destroy', this.remove);
  },

  deletePost: function(event){
    event.preventDefault();

    this.model.destroy();
  },

  render: function(){
    var renderedTemplate = this.template(this.model.toJSON());
    this.$el.html(renderedTemplate);
    return this;
  }
});

var BlogDetailView = Backbone.View.extend({
  template: blogDetailTemplate,

  render: function(){
    var renderedTemplate = this.template(this.model.toJSON());
    this.$el.html(renderedTemplate);
    return this;
  }
});

module.exports = {
  BlogFormView: BlogFormView,
  BlogListView: BlogListView,
  BlogItemView: BlogItemView,
  BlogDetailView: BlogDetailView
}
