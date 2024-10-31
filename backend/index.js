// server.js
import express from 'express';
import connectDB from './db.js';
import blogrouter from './routes/blogs.js';
import authrouter from './routes/auth.js';

connectDB();

const app = express();
app.use(express.json());

app.use('/api/blogs', blogrouter);
app.use('/api/auth', authrouter);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
