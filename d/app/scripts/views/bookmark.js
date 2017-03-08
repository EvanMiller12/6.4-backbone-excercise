var $ = require('jquery');
var Backbone = require('backbone');

var formTemplate = require('../../templates/form_template.hbs');
var bookmarkUrlTemplate = require('../../templates/bookmark_list.hbs');
var bookmarkTagTemplate = require('../../templates/tag_list.hbs');
var bookmarkDetailTemplate = require('../../templates/bookmark_detail.hbs');


var BookmarkFormView = Backbone.View.extend({
  tagName: 'form',
  className: 'bookmark-form',
  events: {
    'submit': 'addUrl',
  },

  addUrl: function(event){
    event.preventDefault();

    var urlItems = {
      title: $('#title').val(''),
      url: $('#url').val(''),
      tag: $('#tag').val(''),
    }
    this.collection.create(urlItems);
  },

  render: function(){
    this.$el.html(formTemplate());
    return this;
  }
});

var BookmarkListView = Backbone.View.extend({
  tagName: 'ul',
  className: 'list-group',

  initialize: function(){
    this.listenTo(this.collection, 'add', this.addUrl);
    // this.listenTo(this.collection, 'reset', this.addTag)
  },

  addUrl: function(url){
    var newUrl = new BookmarkUrlView({model: url});
    this.$el.append(newUrl.render().el);
  },

  addTag: function(tag){
    var newTag = new BookmarkTagView({model: tag});
    this.$el.append(newTag.render().el);
  },

  render: function(){
    return this;
  }
});

var BookmarkUrlView = Backbone.View.extend({
  tagName: 'li',
  className: 'bookmark-list-item',
  template: bookmarkUrlTemplate,

  render: function(){
    var renderedTemplate = this.template(this.model.toJSON());
    this.$el.html(renderedTemplate);
    return this;
  }
});

var BookmarkTagView = Backbone.View.extend({
  tagName: 'li',
  className: 'bookmark-list-item',
  template: bookmarkTagTemplate,

  render: function(){
    var renderedTemplate = this.template(this.model.toJSON());
    this.$el.html(renderedTemplate);
    return this;
  }
});

var BookmarkDetailView = Backbone.View.extend({
  tagName: 'li',
  className: 'well',
  template: bookmarkDetailTemplate,

  render: function(){
    var renderedTemplate = this.template(this.model.toJSON());
    this.$el.html(renderedTemplate);
    return this;
  }
});

module.exports = {
  BookmarkFormView: BookmarkFormView,
  BookmarkListView: BookmarkListView,
  BookmarkUrlView: BookmarkUrlView,
  BookmarkTagView: BookmarkTagView,
  BookmarkDetailView: BookmarkDetailView
};
