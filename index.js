module.exports = {
  // Map of hooks
  hooks: {
    "page": function(page) {
      page.content += '<script src="https://embed.runkit.com" data-element-id="runkit"></' + 'script>';
      return page;
    },
    "page:before": function(page) {
      console.log('page', page);
      // page.content = "# Title\n" +page.content;
      return page;
    }
  },

  // Map of new blocks
  blocks: {
    "runkit": function(page) {
      page.content = page.content.replace("<runkit>", "<div id=\"runkit\">");
      return page;
    }
  },

  // Map of new filters
  filters: {}
};