import request from 'supertest';
import { app } from '../index';
import http from 'http';

let server: http.Server;

beforeAll((done) => {
    server = app.listen(4000, () => {
        done();
    });
});

afterAll((done) => {
    server.close(() => {
        done();
    });
});

describe('Movies API', () => {
    it('should list all movies', async () => {
        const res = await request(app)
            .get('/api/movies')
            .set('username', 'user');
        expect(res.status).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });

    it('should allow admin to add a movie', async () => {
        const res = await request(app)
            .post('/api/movies')
            .set('username', 'admin')
            .send({ title: 'Avatar', genre: 'Fantasy', rating: 7.9, link: 'https://example.com/avatar' });
        expect(res.status).toBe(201);
        expect(res.body.title).toBe('Avatar');
    });

    it('should not allow basic users to add a movie', async () => {
        const res = await request(app)
            .post('/api/movies')
            .set('username', 'user')
            .send({ title: 'Avatar', genre: 'Fantasy', rating: 7.9, link: 'https://example.com/avatar' });
        expect(res.status).toBe(403);
        expect(res.body.message).toBe('Forbidden');
    });
});