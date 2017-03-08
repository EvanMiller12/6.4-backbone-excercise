var $ = require('jquery');
var Backbone = require('backbone');

var blogFormTemplate = require('../../templates/blog_form.hbs')

var BlogForm = Backbone.View.extend({
  tagName: 'form',
  id: 'blog-form',
  className: 'well',

  events:{
    'submit': 'postBlog'
  },

  postBlog: function(event){
    event.preventDefault();

    var blogItems = {
      title: $('#title').val(),
      blogBody: $('#blogBody').val(),
    }
    this.collection.create(blogItems);
  },

  render: function(){
    this.$el.html(blogFormTemplate());
    return this;
  }
});

// var BlogList = Backbone.View.extend({
//   tagName: 'ul',
//   class: 'list-group',
//
//   initialize: function(){
//     this.listenTo(this.collection, 'add', this.renderBlogItems);
//   },
//
//   renderBlogItem: function(blog){
//     var blogItem = new BlogPostView({model: blog});
//     this.$el.append(blogItem.render().el);
//   },
//
//   render: function(){
//     return this;
//   }
// });
//
// var BlogPostView = Backbone.View.extend({
//   tagName: 'li',
//   className: 'list-group-item blog-item',
//   template: blogItemTemplate,
//
//   render: function(){
//     var context = this.model.toJSON();
//     this.$el.html(this.template(context));
//     return this;
//   }
// });

module.exports = {
  BlogForm: BlogForm,
  // BlogList: BlogList,
  // BlogPostView: BlogPostView
}
