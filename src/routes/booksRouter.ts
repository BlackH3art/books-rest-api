import { Router } from "express";
import { addBook, deleteBook, getAllBooks } from "../controllers/booksController";

export const booksRouter = Router();

booksRouter.get('/', getAllBooks);
booksRouter.post('/add', addBook);
booksRouter.delete('/delete/:id', deleteBook);