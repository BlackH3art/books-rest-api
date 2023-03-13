import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { BookDataInterface } from "../../interfaces/BookDataInterface";


@Entity()
export class Book extends BaseEntity {
    
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  author: string;


  static async createBook(bookData: BookDataInterface) {
    const newBook = new Book();
    
    newBook.title = bookData.title;
    newBook.author = bookData.author;

    return newBook;
  }

  static async getAll() {
    return Book.find();
  }

  static async getById(id: string) {
    const booksArray = await Book.findBy({ id });
    return booksArray[0];
  }
}