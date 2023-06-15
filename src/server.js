import express from 'express';
import session from 'express-session';
import store from 'session-file-store';
import path from 'path';
import jsxRender from './utils/jsxRender';
import indexRouter from './routes/indexRouter';
import authRouter from './routes/authRouter';
import wordsRouter from './routes/wordsRouter';
import categoryRouter from './routes/categoryRouter';
import langRouter from './routes/langRouter';
import { authMiddleware, localsMiddleware } from './middleware';

require('dotenv').config();

const PORT = process.env.SERVER_PORT || 3000;
const app = express();
const FileStore = store(session);

const sessionConfig = {
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: true,
  store: new FileStore(),
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

app.engine('js', jsxRender);
app.set('view engine', 'js');
app.set('views', path.join(__dirname, 'components'));

app.use(session(sessionConfig));
app.use(localsMiddleware);
app.use(authMiddleware);
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/api/words', wordsRouter);
app.use('/api/category', categoryRouter);
app.use('/api/language', langRouter);
app.user('/auth', authRouter);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
