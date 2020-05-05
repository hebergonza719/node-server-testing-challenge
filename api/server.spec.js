const request = require('supertest');
const server = require('./server.js');

describe('server', () => {
  it('should set the testing env', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });

  describe('Get /', () => {
    it('should return 200', () => {
      return request(server).get('/')
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it('should return 200 with async/await', async () => {
      const res = await request(server).get('/');
      expect(res.status).toBe(200);
    });

    it('should return {api: running', async () => {
      const res = await request(server).get('/');
      expect(res.body).toEqual({ api: "running" });
    });
  });

  // describe('Post /api/avengers', () => {
  //   it('should return 201', async () => {
  //     const res = await request(server)
  //       .post('/api/avengers')
  //       .send({ name: "Winter Soldier"});
  //     expect(res.status).toBe(201);
  //   });
  // });

  // describe('Delete /api/avengers', () => {
  //   it('should return 200', async () => {
  //     const res = await request(server)
  //       .delete('/api/avengers')
  //       .send('Winter Soldier');
  //     expect(res.status).toBe(200);
  //   });
  // });
});