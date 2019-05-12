
const Database = require('./database')

exports.setupNewUser = function setupNewUser(info, callback) {
  let user = {
    name: info.name,
    nameLowercase: info.name.toLowerCase()
  };

  try {
    Database.save(user, callback);
  } catch (err) {
    callback(err);
  }
};

