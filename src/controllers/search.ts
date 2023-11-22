import { Request, Response } from 'express';
import { Pet } from '../models/pets';
import { menuObject } from '../utils/menuObjects';

export const searchController = (req: Request, res: Response) => {
  const query: string = req.query.q as string;

  if (!query) {
    res.redirect('/');
    return;
  }

  const list = Pet.getFromName(query);

  res.render('pages/page', {
    menu: menuObject(''),
    list
  });

};

