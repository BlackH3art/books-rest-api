import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Book } from "../db/entities/Book.entity";

import { BookDataInterface } from "../interfaces/BookDataInterface";


export const getAllBooks = async (req: Request, res: Response) => {

  try {
    const books = await AppDataSource.manager.find(Book);
    res.status(200).json(books);

  } catch (error) {
    res.status(500).json({ msg: "Error while getting books", data: error });
  }
}

export const addBook = async (req: Request, res: Response) => {

  const bookData: BookDataInterface = req.body;
  const book = new Book(bookData);

  try {
    await book.save();
    res.status(201).json(book);
    
  } catch (error: unknown) {
    res.status(500).json({ msg: "Error while saving", data: error });
  }  
}

export const deleteBook = async (req: Request, res: Response) => {

  const { id } = req.params;

  try {
    const book = await AppDataSource.manager.findBy(Book, { id: id});
    if(book.length === 0) return res.status(404).json({ msg: "Not found" });

    await AppDataSource.manager.delete(Book, book[0]);
    res.status(204).json();

  } catch (error) {
    res.status(500).json({ msg: "Error while deleting", data: error });
  }
}