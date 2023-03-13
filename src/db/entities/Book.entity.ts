import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { AppDataSource } from "../../data-source";
import { BookDataInterface } from "../../interfaces/BookDataInterface";


@Entity()
export class Book extends BaseEntity {

  constructor(bookData: BookDataInterface) {
    super()

    this.title = bookData.title;
    this.author = bookData.author;
  }
    
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  author: string;


  static async getAll() {
    return await AppDataSource.manager.find(Book);
  }

  static async getById(id: string) {
    const booksArray = await AppDataSource.manager.findBy(Book, { id: id});
    return booksArray[0];
  }
}