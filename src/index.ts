import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import 'reflect-metadata';
import { DataSource } from 'typeorm';


const app: Express = express();
const port = process.env.PORT || 3500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Books REST API');
});

const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
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
