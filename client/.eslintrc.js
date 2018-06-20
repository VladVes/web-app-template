const path = require('path');

module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",

  "plugins": [
    "react",
    "import",
    "eslint-plugin-import"
  ],

  "env": {
    "browser": true,
    "node": true,
    "mocha": true,
    "es6": true
  },

  "rules": {
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "to", "hrefLeft", "hrefRight" ],
      "aspects": [ "noHref", "invalidHref", "preferButton" ]
    }],
    "max-len": ["error", {"code": 120, "ignoreRegExpLiterals": true, "tabWidth": 2}],
    "no-console": [1]
  },

  "settings": {
    "import/resolver": {
      "webpack": {
        "config": path.resolve(__dirname, "./config/webpack.config.js")
      }
    }
  }
};

