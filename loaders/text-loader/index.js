const loaderUtils = require('loader-utils')
module.exports = function(content) {
  	this.cacheable && this.cacheable();
    const options = loaderUtils.getOptions(this) || {};
    const context = options.context || this.rootContext;
    const url = loaderUtils.interpolateName(
    this,
       '[hash].[ext]',
      {
      context,
      content,
      regExp: options.regExp,
      }
    );
    if (options.emitFile === undefined || options.emitFile) {
      console.log('emit', url, content)
      this.emitFile(url, content);
    }
    const publicPath = "__webpack_public_path__ + " + JSON.stringify(url);
    console.log(22);
	  return "module.exports = " + publicPath + ";";
};

module.exports.raw = true;