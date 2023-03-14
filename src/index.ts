import { AppDataSource } from './data-source';
import { App } from './App/App';
import { BooksRouter } from './routes/BooksRouter';

const port = process.env.PORT || 3500;
const app: App = new App(port, [
  new BooksRouter(),
]);


AppDataSource.initialize()
  .then(() => {
    app.startServer();
  })
  .catch((err) => {
    console.error("Error initialiazing Data Source: ", err);
  })
