import express, { Request, Response } from 'express';
const app = express();

// database connections

// routes
app.get('/', (req: Request, res: Response) => {
  res.send('<div style=""> <h1> HELLO FIRAOL WELL COME TO THE TEST NODE </h1></div>');
});

// some more stuff

const APP_PORT = 2007;

app.listen(APP_PORT, () => {
  console.log(`Server started on port ${APP_PORT}`);
});
