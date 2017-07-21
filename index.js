module.exports = {
  // Map of hooks
  hooks: {
    "page": function(page) {
      page.content += '<script src="https://embed.runkit.com" data-element-id="runkit"></' + 'script>';
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