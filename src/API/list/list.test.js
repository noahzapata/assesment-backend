// const serverClone = require('supertest');
// const { cleanup, connect, disconnected } = require('../../database');

// const app = require('../../server');

// describe('List', () => {
//   beforeAll(async () => {
//     await connect();
//   });

//   beforeEach(async () => {
//     await cleanup();
//   });

//   afterAll(async () => {
//     await disconnected();
//   });

//   it('Should create a list correctly', async () => {
//     const user = { email: 'testingtwo@test.com', password: 'Test002' };
//      await serverClone(app).post('/auth/local/signup').send(user)
//     const list = { name: 'colors' };
//     const res = await serverClone(app)
//       .post('/api/lists')
//       .send(list)
//       .set(user);
//     expect(res.statusCode).toBe(201);
//   });
// });
