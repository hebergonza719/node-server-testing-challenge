exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('avengers')
    .truncate()
    .then(function() {
      return knex('avengers').insert([
        { name: 'Black Widow' },
        { name: 'Captain America' },
        { name: 'Hawk-eye' },
      ]);
    });
};