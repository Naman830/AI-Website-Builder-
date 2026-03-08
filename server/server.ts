import "dotenv/config";
import express, { Request, Response } from 'express';
import cors from "cors";

const app = express();

// Middleware
app.use(cors())
app.use(express.json());

const port = process.env.PORT || 3000;
const corsOption = {
    origin: process.env.TRUSTED_ORIGINS?.split(',') || [],
    credentials: true,
}


app.get('/', (req: Request, res: Response) => {
    res.send('Server is Live!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});