const db = require('../data/dbConfig.js');

const Avengers = require('./avengers-model.js');

describe('avengers model', () => {
  describe('insert()', () => {
    it('should insert an avenger into the db', async () => {
      await Avengers.insert({ name: 'Spider-man' });
      await Avengers.insert({ name: 'Hulk' });

      const addedAvengers = await db('avengers');
      expect(addedAvengers).toHaveLength(2);
    });

    it('should return recently added avenger', async () => {
      await Avengers.insert({ name: 'Thor' });

      const addedAvenger = await db('avengers').where({ name: 'Thor' }).first();
      expect(addedAvenger.name).toBe('Thor');
    });
  });

  describe('remove()', () => {
    it('should remove specified avenger', async () => {
      await Avengers.insert({ name: 'Captain America' });

      await Avengers.remove('Captain America');

      const listAvengers = await db('avengers');
      expect(listAvengers).toHaveLength(0);
    });

    it('should remove just one avenger', async () => {
      await Avengers.insert({ name: "Hawk-eye"});
      await Avengers.insert({ name: "Black Widow"});

      await Avengers.remove('Black Widow');

      const listAvengers = await db('avengers');
      expect(listAvengers).toHaveLength(1);
    });
  });
});

beforeEach(async () => {
  await db('avengers').truncate();
})