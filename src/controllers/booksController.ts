import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Book } from "../db/entities/Book.entity";

import { BookDataInterface } from "../interfaces/BookDataInterface";


export const getAllBooks = async (req: Request, res: Response) => {

  try {
    /* 
      ----------- BUG -------------
      I didn't liked "mixed" approach within my controllers where sometimes I could use my ActiveRecord pattern
      and sometimes I had to use "AppDataSource.manager" which acts kind of like DataMapper pattern.
      TypeOrm documentation example with getting all rows frome table, doesn't work:
      https://typeorm.io/active-record-data-mapper

      So I decided to abstract away this logic to my ActiveRecord, and here very weird issue occured. 
      Everything works fine until you will remove unused line 29 with:
        const books1 = await AppDataSource.manager.find(Book);

      If you remove this line then suddenly whole app crashes, and every route responds with 500 server crash.
      Even if this call is completely unused, somehow it is crucial for whole app to work properly
      which makes no sense.

      Error message:
        "No metadata for \"Book\" was found."
    */
    const books1 = await AppDataSource.manager.find(Book);

    const books = await Book.getAll();
    res.status(200).json(books);

  } catch (error) {
    console.log(error);
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
    const book = await Book.getById(id);
    if(!book) return res.status(404).json({ msg: "Not found" });

    await book.remove();
    res.status(204).json();

  } catch (error) {
    res.status(500).json({ msg: "Error while deleting", data: error });
  }
}