const webpackConfig = require('../../webpack.config');


module.exports = webpackConfig({
  projectConfig: {
    publicPath: '/one/',
  },
});
