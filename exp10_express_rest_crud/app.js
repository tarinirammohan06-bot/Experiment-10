const express = require('express');
const sqlite3 = require('sqlite3');
const { initializeDatabase } = require('./db');

const app = express();
const port = 3000;

// Make sure the database file and the students table exist
initializeDatabase();

// Connect to SQLite database
const db = new sqlite3.Database('./mydatabase.db', (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// Middleware to parse request body as JSON
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Student');
});

// READ: get all students
app.get('/students', (req, res) => {
  db.all('SELECT * FROM students', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// READ: get a single student by id
app.get('/students/:id', (req, res) => {
  const id = req.params.id;
  db.get('SELECT * FROM students WHERE id = ?', [id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!row) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.json(row);
  });
});

// CREATE: add a new student
app.post('/students', (req, res) => {
  const { name, age, grade } = req.body;
  db.run(
    'INSERT INTO students (name, age, grade) VALUES (?, ?, ?)',
    [name, age, grade],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ id: this.lastID });
    }
  );
});

// UPDATE: update an existing student
app.put('/students/:id', (req, res) => {
  const id = req.params.id;
  const { name, age, grade } = req.body;
  db.run(
    'UPDATE students SET name = ?, age = ?, grade = ? WHERE id = ?',
    [name, age, grade, id],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ updatedID: id });
    }
  );
});

// DELETE: remove a student
app.delete('/students/:id', (req, res) => {
  const id = req.params.id;
  db.run('DELETE FROM students WHERE id = ?', id, function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ deletedID: id });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
