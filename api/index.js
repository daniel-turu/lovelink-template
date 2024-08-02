const server = require('./server');

module.exports = (req, res) => {
  return new Promise((resolve, reject) => {
    server(req, res, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};
