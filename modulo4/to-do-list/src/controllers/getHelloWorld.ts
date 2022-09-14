import { Request, Response } from 'express';

export default function getHelloWorld(req: Request, res: Response): void {
  res.status(200).send('Hello World!');
}