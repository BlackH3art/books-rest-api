import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { booksRouter } from '../routes/booksRouter';

import 'reflect-metadata';


export class App {
  public app: Express;
  public port: number | string;

  constructor(port: number | string, controllers: any[]) {
    this.app = express();
    this.port = port;

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  private initializeControllers(controllers: any[]) {
    this.app.use('/books', booksRouter);
    this.app.use('/', (req: Request, res: Response) => res.send('Welcome to Books REST API'));

    controllers.forEach(controller => {
      this.app.use('/books', booksRouter);
    })
  }

  public startServer() {
    this.app.listen(this.port, () => {
      console.log(`
        Server is listening at http://localhost:${this.port}
      `);
    });
  }
}