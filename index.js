var index = 0;
var codes = [];
module.exports = {
  hooks: {
    page: function(page) {
      page.content += '<script src="https://embed.runkit.com" data-element-id="runkit-code"></script>';
      for(var i in codes){
        page.content += codes[i];
      }
      codes = [];
      return page;
    }
  },
  blocks: {
    runkit: {
      process: function(block) {
        index++;
        codes.push('<script>' +
          'RunKit.createNotebook({' +
          'element: document.getElementById("runkit-code-'+index+'"), ' +
          'source: '+JSON.stringify(block.body)+'})' +
          '</script>');
        return '<div id="runkit-code-'+index+'" >'+block.body+'</div>';
      }
    }
  },
  filters: {}
};