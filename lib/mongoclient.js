const mongojs = require('mongojs');
const url = 'mongodb://localhost:27017/loveletter'
const db = mongojs(url);

module.exports = {
  close: () => {
    db.close();
  },

  english: db.collection('english'),
  deutsch: db.collection('deutsch'),
  db: db,
};
