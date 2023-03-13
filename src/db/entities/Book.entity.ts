import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
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
}