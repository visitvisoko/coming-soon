const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@coming-soon': path.resolve(__dirname, 'src/coming-soon'),
    },
  },
};
