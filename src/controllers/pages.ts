import { Request, Response } from 'express';
import { menuObject } from '../utils/menuObjects';

interface Banner {
  title: string
  background: string
}

export const home = (req: Request, res: Response) => {

  res.render('pages/page', {
    banner: {
      title: 'Todos os animais',
      background: 'allanimals.jpg'
    } as Banner,
    menu: menuObject('all')
  });

};

export const dogs = (req: Request, res: Response) => {

  res.render('pages/page', {
    banner: {
      title: 'Cachorros',
      background: 'banner_dog.jpg'
    } as Banner,
    menu: menuObject('dog')
  });
};

export const cats = (req: Request, res: Response) => {

  res.render('pages/page', {
    banner: {
      title: 'Gatos',
      background: 'banner_cat.jpg'
    } as Banner,
    menu: menuObject('cat')
  });
};

export const fishes = (req: Request, res: Response) => {

  res.render('pages/page', {
    banner: {
      title: 'Peixes',
      background: 'banner_fish.jpg'
    } as Banner,
    menu: menuObject('fish')
  });
};


