module.exports = {
  hooks: {
    "page": function(page) {
      page.content += '<script src="https://embed.runkit.com" data-element-id="runkit-code"></' + 'script>';
      return page;
    }
  },
  blocks: {
    runkit: {
      process: function(block) {
        return '<div id="runkit-code" >' + block.body + '</div>';
      }
    }

  }
};