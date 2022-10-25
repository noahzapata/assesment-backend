const serverClone = require('supertest');
const { cleanup, connect, disconnected } = require('../../database');
const app = require('../../server');

describe('User', () => {
  beforeAll(async () => {
    await connect();
  });

  beforeEach(async () => {
    await cleanup();
  });

  afterAll(async () => {
    await disconnected();
  });

  it('Should create a user correctly', async () => {
    const user = { email: 'testing@test.com', password: 'Test001' };
    const res = await serverClone(app).post('/auth/local/signup').send(user);
    expect(res.statusCode).toBe(201);
  });

  it('Should to return a token', async () => {
    const user = { email: 'testingtwo@test.com', password: 'Test002' };
    const res = await serverClone(app).post('/auth/local/signup').send(user);
    expect(res.body.data).toHaveProperty('token');
    expect(res.body.data.token).toMatch(/^(?:[\w-]*\.){2}[\w-]*$/);
  });

  it('Should not create a user', async () => {
    const user = { email: 'jairotestitest.com', password: 'Prueba123?' };
    const res = await serverClone(app).post('/auth/local/signup').send(user);
    expect(res.statusCode).toBe(400);
  });
});
