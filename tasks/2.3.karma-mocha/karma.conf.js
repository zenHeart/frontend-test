module.exports = function(config) {
    config.set({
      frameworks: ['mocha', 'chai'],
  
      files: [
        'add.js',
        '*.test.js'
      ]
    });
  };