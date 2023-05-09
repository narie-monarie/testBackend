import express, { Express, Request, Response } from "express";
import userRoutes from './routes/userRoutes';

const app: Express = express();
app.use(express.json());
app.use('/user', userRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
})


app.listen(3000, () => {
    console.log(`app is listening on posrt 3000`)
})