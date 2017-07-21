module.exports = {
  hooks: {
    "page": function(page) {
      page.content += '<script src="https://embed.runkit.com" data-element-id="runkit-code"></script>';
      page.content = page.content.replace('class="lang-runkit"', 'class="lang-runkit" id="runkit-code"');

      return page;
    }
  }
};