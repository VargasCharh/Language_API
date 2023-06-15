import express from 'express';
import { Language } from '../../db/models';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { langName } = req.body;
    const newLang = await Language.create({ langName });
    res.json(newLang);
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
      await Language.destroy({ where: { id } });
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  })
  .patch(async (req, res) => {
    try {
      const { id } = req.params;
      const { langName } = req.body;
      await Language.update({ langName }, { where: { id } });
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  });

export default router;
