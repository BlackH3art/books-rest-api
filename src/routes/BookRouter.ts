import { Router } from "express";
import { BookController } from "../controllers/BookController";

export class BookRouter {
  public router: Router;
  public path: string;
  private controller: BookController;

  constructor() {
    this.router = Router();
    this.path = "/books";
    this.controller = new BookController();

    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/', this.controller);
    this.router.post('/add', this.controller);
    this.router.delete('/delete/:id', this.controller);
  }
}