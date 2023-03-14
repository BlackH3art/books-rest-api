import { Router } from "express";
import { BooksController } from "../controllers/BooksController";

export class BooksRouter {
  public router: Router;
  public path: string;
  private controller: BooksController;

  constructor() {
    this.router = Router();
    this.path = "/books";
    this.controller = new BooksController();

    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/', this.controller.getAllBooks);
    this.router.post('/add', this.controller.addBook);
    this.router.delete('/delete/:id', this.controller.deleteBook);
  }
}