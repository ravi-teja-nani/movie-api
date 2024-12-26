import { Request, Response } from 'express';
import { movies } from '../models/db';


export const getMovies = (req: Request, res: Response) => {
    res.send(movies);
};


export const searchMovies = (req: Request, res: Response) => {
    const query = (req.query.q as string || '').toLowerCase();
    const result = movies.filter(m => 
        m.title.toLowerCase().includes(query) || m.genre.toLowerCase().includes(query)
    );
    res.send(result);
};

export const addMovie = (req: Request, res: Response) => {
    const { title, genre, rating, link } = req.body;
    const newMovie = { id: String(movies.length + 1), title, genre, rating, link };
    movies.push(newMovie);
    res.status(201).send(newMovie);
};


export const updateMovie = (req: Request, res: Response) => {
    const { id } = req.params;
    const movie = movies.find(m => m.id === id);
    if (!movie) {
        res.status(404).send({ message: 'Movie not found' })
        return
    };

    Object.assign(movie, req.body);
    res.send(movie);
};

export const deleteMovie = (req: Request, res: Response) => {
    const { id } = req.params;
    const index = movies.findIndex(m => m.id === id);
    if (index === -1) {
        res.status(404).send({ message: 'Movie not found' });
    } 

    movies.splice(index, 1);
    res.status(204).send();
};
