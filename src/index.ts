import express, { Express, Request, Response } from 'express';


const app: Express = express();
const port = process.env.PORT || 3500;

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Books REST API');
});

app.listen(port, () => {
  console.log(`
    Server is listening at http://localhost:${port}
  `);
});