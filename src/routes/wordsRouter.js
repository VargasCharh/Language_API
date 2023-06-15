import express from 'express';
import { Word } from '../../db/models';

const router = express.Router();

router.post('/', async (req, res) => {
  const { word, langId, catId } = req.body;
  try {
    const newWord = await Word.create({ word, langId, catId });
    res.json(newWord);
  } catch (error) {
    console.error(error);
  }
});

router
  .route('/:id')
  .delete(async (req, res) => {
    try {
      const { id } = req.params;
      await Word.destroy({ where: { id } });
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  })
  .patch(async (req, res) => {
    try {
      const { id } = req.params;
      const { word, langId, catId } = req.body;
      await Word.update({ word, langId, catId }, { where: { id } });
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  });

export default router;
