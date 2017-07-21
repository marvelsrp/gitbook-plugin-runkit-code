module.exports = {
  // Map of hooks
  hooks: {
    "page:before": function(page) {
      console.log('page', page);
      // page.content = "# Title\n" +page.content;
      return page;
    }
  },

  // Map of new blocks
  blocks: {
    "runkit": function(page) {
      // page.content = page.content.replace("<b>", "<strong>")
      //   .replace("</b>", "</strong>");
      return page;
    }
  },

  // Map of new filters
  filters: {}
};