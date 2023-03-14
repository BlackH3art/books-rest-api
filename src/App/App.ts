import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';

import 'reflect-metadata';


export class App {
  public app: Express;
  public port: number | string;

  constructor(port: number | string, routers: any[]) {
    this.app = express();
    this.port = port;

    this.initializeMiddlewares();
    this.initializeRouters(routers);
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  private initializeRouters(routers: any[]) {
    
    routers.forEach(router => {
      this.app.use(router.path, router.router);
    });

    this.app.use('/', (req: Request, res: Response) => res.send('Welcome to Books REST API'));
  }

  public startServer() {
    this.app.listen(this.port, () => {
      console.log(`
        Server is listening at http://localhost:${this.port}
      `);
    });
  }
}