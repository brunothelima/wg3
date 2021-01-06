const { resolve } = require('path')

module.exports = {
  verbose: true,
  preset: 'ts-jest',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\js$': 'babel-jest'
  },
  moduleFileExtensions: ['vue', 'js', 'json', 'ts'],
  moduleNameMapper: {
    '^/@src/(.*)$': resolve(__dirname, 'src/$1'),
  }
}
