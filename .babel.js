module.exports = function(api) {
  return {
    "presets": ["babel-preset-exponent"],
    "env": {
      "development": {
        "plugins": ["transform-react-jsx-source"]
      }
    }
  }
}
