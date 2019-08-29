const path = require('path');

/**
 * Determine the array of extensions that should be used to resolve modules.
 */
module.exports = {
  alias: {
    Shared: path.resolve(__dirname, '../src/shared/'),
    Containers: path.resolve(__dirname, '../src/containers/'),
    Utils: path.resolve(__dirname, '../src/utils/'),
    PropTypes: path.resolve(__dirname, '../src/shared/prop-types/'),
  },
  extensions: ['*', '.js', '.jsx'],
  modules: [path.join(__dirname, 'app'), 'node_modules'],
};
