const request = require('supertest');
const { app, PORT } = require('../server');

beforeAll((done) => {
    server = app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
        done();
    });
});

afterAll((done) => {
    server.close(() => {
        console.log('Server closed');
        done();
    });
});

describe('GET /', () => {
    it('should return Hello World message', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ msg: "Hello World" });
    });
});