import 'dotenv/config';
import express, { Request, Response } from 'express';

const app = express();

app.use(express.json())

const PORT = process.env.PORT || 4000

app.get('/healthy', (req: Request, res: Response) => {
    res.send('Server is healthy')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})