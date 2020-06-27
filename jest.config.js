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
    // '^/@src/(.*)$': resolve(__dirname, 'src/$1'),
    '^/@assets/(.*)$': resolve(__dirname, 'src/assets/$1'),
    '^/@components/(.*)$': resolve(__dirname, 'src/components/$1'),
    '^/@composables/(.*)$': resolve(__dirname, 'src/composables/$1'),
    '^/@utils/(.*)$': resolve(__dirname, 'src/utils/$1'),
    '^/@pages/(.*)$': resolve(__dirname, 'src/pages/$1'),
    '^/@types/(.*)$': resolve(__dirname, 'src/types/$1')
  }
}
