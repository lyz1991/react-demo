// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
      "arrowFunctions": true,
      "classes": true,
      "modules": true,
      "defaultParams": true
    },
    sourceType: 'module'
  },
  globals: {
    "pull": true,
    "preA": true
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  // required to lint *.vue files
  plugins: [
    'html',
    'react'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    // allow paren-less arrow functions
    'arrow-parens': 0,
    'no-console': 0,
    'no-alert': 0,
    // allow async-await
    'generator-star-spacing': 0,
    "no-unused-vars": 0,
    // 'comma-dangle': ["error", "always-multiline"],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "eqeqeq": [0, "allow-null"]
  }
}
