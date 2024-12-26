import express from 'express';
import { authenticate, authorize } from '../middlewares/auth';
import {
    getMovies, searchMovies, addMovie, updateMovie, deleteMovie
} from '../controllers/movieController';

export const movieRoutes = express.Router();

// Public routes
movieRoutes.get('/movies', authenticate, getMovies);
movieRoutes.get('/search', authenticate, searchMovies);

// Admin routes
movieRoutes.post('/movies', authenticate, authorize('admin'), addMovie);
movieRoutes.put('/movies/:id', authenticate, authorize('admin'), updateMovie);
movieRoutes.delete('/movies/:id', authenticate, authorize('admin'), deleteMovie);
