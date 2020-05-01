const db = require('../data/dbConfig.js');
  
function getAll() {
  return db('avengers');
} 

async function insert(avenger) {
  const [id] = await db('avengers').insert(avenger, 'id');

  return db('avengers').where({ id }).first();
}

function remove(avengerName) {
  return db('avengers')
    .where({ name: avengerName })
    .del();
}

module.exports = {
  getAll,
  insert,
  remove
};