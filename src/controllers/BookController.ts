import { Request, Response } from "express";
import { Book } from "../db/entities/Book.entity";
import { BookDataInterface } from "../interfaces/BookDataInterface";


export class BookController {
  
  public async getAllBooks(req: Request, res: Response) {

    try {
      const books = await Book.getAll();
      res.status(200).json(books);
  
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Error while getting books", data: error });
    }
  }

  public async addBook(req: Request, res: Response) {

    const bookData: BookDataInterface = req.body;
    const book = await Book.createBook(bookData);
  
    try {
      await book.save();
      res.status(201).json(book);
      
    } catch (error: unknown) {
      res.status(500).json({ msg: "Error while saving", data: error });
    }  
  }

  public async deleteBook(req: Request, res: Response) {

    const { id } = req.params;
  
    try {
      const book = await Book.getById(id);
      if(!book) return res.status(404).json({ msg: "Not found" });
  
      await book.remove();
      res.status(204).json();
  
    } catch (error) {
      res.status(500).json({ msg: "Error while deleting", data: error });
    }
  }
}