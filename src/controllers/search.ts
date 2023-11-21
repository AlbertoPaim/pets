import { Request, Response } from 'express';

export const searchController = (req: Request, res: Response) => {

  return res.json({ message: 'hello search' });
};

