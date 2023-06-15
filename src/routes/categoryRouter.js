import express from 'express';
import { Category } from '../../db/models';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { catName } = req.body;
    const newCat = await Category.create({ catName });
    res.json(newCat);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

router
  .route('/:id')
  .delete(async (req, res) => {
    try {
      const { id } = req.params;
      await Category.destroy({ where: { id } });
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  })
  .patch(async (req, res) => {
    try {
      const { id } = req.params;
      const { catName } = req.body;
      await Category.update({ catName }, { where: { id } });
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  });

export default router;
