import express from 'express';
import mysql from 'mysql2';

const router = express.Router();
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'wumBo@ny9403',
    database: 'music'
  });
  

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

router.get('/', (req, res) => {
  db.query(`SELECT name, artist, album FROM Song ORDER BY listens DESC LIMIT 75`, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

export default router;
