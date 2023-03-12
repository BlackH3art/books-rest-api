import { Request, Response } from "express";
import { Book } from "../db/entities/Book.entity";

import { BookDataInterface } from "../interfaces/BookDataInterface";


export const getAllBooks = async () => {}

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

export const deleteBook = async () => {}