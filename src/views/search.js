var SearchView = Backbone.View.extend({

  events: {
    'click button': 'handleSearch',
    'keyup input': 'onKeyUp'
  },

  handleSearch: function () {
    var query = this.$('input').val().trim()
    this.collection.search(query);
  },

  onKeyUp: function (event) {
    if (event.keyCode === 13) {
      this.handleSearch();
    }
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
