import { Request, Response, NextFunction } from 'express';
import { users } from '../models/db';

declare global {
    namespace Express {
        interface Request {
            user?: { id: string; username: string; role: 'admin' | 'basic' };
        }
    }
}

export const authenticate = (req: Request, res: Response, next: NextFunction): void => {
    const username = req.headers.username as string;
    const user = users.find(u => u.username === username);
    if (!user) {
        res.status(403).send({ message: 'Unauthorized' });
        return;
    }
    req.user = user;
    next();
};

// Middleware to authorize based on roles
export const authorize = (role: 'admin' | 'basic') => {
    return (req: Request, res: Response, next: NextFunction): void => {
        if (req.user?.role !== role) {
            res.status(403).send({ message: 'Forbidden' });
            return;
        }
        next();
    };
};
