import { AppDataSource } from './data-source';
import { App } from './App/App';

const port = process.env.PORT || 3500;
const app: App = new App(port, []);


AppDataSource.initialize()
  .then(() => {
    app.startServer();
  })
  .catch((err) => {
    console.error("Error initialiazing Data Source: ", err);
  })
