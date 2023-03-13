import { DataSource } from 'typeorm';
import { Book } from './db/entities/Book.entity';

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  entities: [Book],
  entitySkipConstructor: true,
  synchronize: true,
  migrations: [],
  subscribers: []
});