const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/ping', (req, res) => res.send('pong'));

app.get('/api/project/:id', (req, res) => {
  const id = req.params.id;
  if (id === 'project1') {
    return res.sendFile(path.join(__dirname, '..', 'examples', 'sample-project.json'));
  }
  res.status(404).json({ error: 'project not found' });
});

app.get('/', (req, res) => {
  res.send('Craftmatics backend is running');
});

const port = process.env.PORT || 4000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${port}`);
});
