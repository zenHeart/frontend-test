module.exports = {
  save: user => {
    if (typeof user !== 'object') {
      throw new Error('must a object!');
    } else {
      console.log('**********');
    }
  }
};
