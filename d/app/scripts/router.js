var $ = require('jquery');
var Backbone = require('backbone');

var models = require('./models/bookmark.js');
var views = require('./views/bookmark.js');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'tag/:id': 'showTag'
  },
  initialize: function(){
    this.bookmarkCollection = new models.BookmarkCollection();
  },
  index: function(){
    var bookmarkForm = new views.BookmarkFormView({collection: this.bookmarkCollection});
    $('.form').append(bookmarkForm.render().el);

    var urlList = new views.BookmarkListView({collection: this.bookmarkCollection});
    $('.url').append(urlList.render().el);

    var tagList = new views.TagListView({collection: this.bookmarkCollection});
    $('.tag').append(tagList.render().el);
    this.bookmarkCollection.fetch();
  },
  showTags: function(tag){
    var urlTag = this.bookmarkCollection.get(tag);
  }
});

var appRouter = new AppRouter();

module.exports = appRouter;
