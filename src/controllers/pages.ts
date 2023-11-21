import { Request, Response } from 'express';

export const home = (req: Request, res: Response) => {

  return res.json({ message: 'hello' });
};

export const dogs = (req: Request, res: Response) => {

  return res.json({ message: 'hello' });
};

export const cats = (req: Request, res: Response) => {

  return res.json({ message: 'hello' });
};

export const fishes = (req: Request, res: Response) => {

  return res.json({ message: 'hello' });
};


