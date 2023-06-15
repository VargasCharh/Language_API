import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../db/models';

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  if (!(name && email && password)) return res.sendStatus(400);

  try {
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { name, password: await bcrypt.hash(password, 10) },
    });

    if (!created) return res.sendStatus(403);

    req.session.user = {
      id: user.id,
      name: user.name,
    };

    return res.sendStatus(200);
  } catch (err) {
    return res.sendStatus(500);
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!(email && password)) return res.sendStatus(400);

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) return res.sendStatus(401);

    if (!(await bcrypt.compare(password, user.password))) return res.sendStatus(401);

    req.session.user = {
      id: user.id,
      name: user.name,
    };
    return res.sendStatus(200);
  } catch (err) {
    return res.sendStatus(500);
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid').sendStatus(200);
});

export default router;
