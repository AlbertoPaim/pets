import { Router } from 'express';
import { cats, dogs, fishes, home } from '../controllers/pages';
import { searchController } from '../controllers/search';

const router = Router();

router.get('/', home);
router.get('/dogs', dogs);
router.get('/cats', cats);
router.get('/fishes', fishes);

router.get('/search', searchController);

export default router;

