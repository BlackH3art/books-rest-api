import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import 'reflect-metadata';
import { booksRouter } from './routes/booksRouter';
import { AppDataSource } from './data-source';

const app: Express = express();
const port = process.env.PORT || 3500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/books', booksRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Books REST API');
});

AppDataSource.initialize()
  .then(() => {
    app.listen(port, () => {
      console.log(`
        Server is listening at http://localhost:${port}
      `);
    });
  })
  .catch((err) => {
    console.error("Error initialiazing Data Source: ", err);
  })
