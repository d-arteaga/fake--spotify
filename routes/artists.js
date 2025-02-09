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
  db.query(`
    SELECT a.name AS artist, a.ranking, s.name AS topSong, a.listeners
    FROM Artist a
    INNER JOIN Song s ON s.artist = a.name
    WHERE s.listens = (
      SELECT MAX(s2.listens)
      FROM Song s2
      WHERE s2.artist = a.name
    )
    ORDER BY a.ranking;
  `, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

export default router;
