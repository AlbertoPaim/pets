import { Request, Response } from 'express';
import { menuObject } from '../utils/menuObjects';
import { Pet } from '../models/pets';

interface Banner {
  title: string
  background: string
}

export const home = (req: Request, res: Response) => {
  const list = Pet.geAll();
  res.render('pages/page', {
    banner: {
      title: 'Todos os animais',
      background: 'allanimals.jpg'
    } as Banner,
    menu: menuObject('all'),
    list
  });

};

export const dogs = (req: Request, res: Response) => {
  const list = Pet.getFromType('dog');

  res.render('pages/page', {
    banner: {
      title: 'Cachorros',
      background: 'banner_dog.jpg'
    } as Banner,
    menu: menuObject('dog'),
    list
  });
};

export const cats = (req: Request, res: Response) => {
  const list = Pet.getFromType('cat');

  res.render('pages/page', {
    banner: {
      title: 'Gatos',
      background: 'banner_cat.jpg'
    } as Banner,
    menu: menuObject('cat'),
    list
  });
};

export const fishes = (req: Request, res: Response) => {
  const list = Pet.getFromType('fish');

  res.render('pages/page', {
    banner: {
      title: 'Peixes',
      background: 'banner_fish.jpg'
    } as Banner,
    menu: menuObject('fish'),
    list
  });
};


