import express from 'express'
import cors from'cors';
import artistsRouter from './routes/artists.js';

const app = express();
// Enable CORS to allow requests from the React front-end
app.use(cors());
app.use('/api/artists', artistsRouter);



const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});