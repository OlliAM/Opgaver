import express from 'express';
import fs from 'fs/promises';
import path from 'path';

const app = express();

app.set('view engine', 'pug');

app.use('/public', express.static(path.join(process.cwd(), 'PUBLIC')));

async function readFolder(folderPath, relPath = '') {
  const entries = await fs.readdir(folderPath, { withFileTypes: true });
  return entries.map(entry => ({
    name: entry.name,
    type: entry.isDirectory() ? 'folder' : 'file',
    fullPath: path.join(relPath, entry.name).replace(/\\/g, '/')
  }));
}

app.get('/public', async (req, res) => {
  const basePath = path.join(process.cwd(), 'PUBLIC');
  const currentRelPath = req.query.path || '';
  const currentFullPath = path.join(basePath, currentRelPath);

  const contents = await readFolder(currentFullPath, currentRelPath);

  // Beregn parentPath til "gå tilbage"
  let parentPath = path.dirname(currentRelPath).replace(/\\/g, '/');
  if (parentPath === '.') parentPath = ''; // root PUBLIC
  // Lad parentPath være null kun hvis vi allerede er i root
  if (currentRelPath === '') parentPath = null;

  res.render('public', { contents, currentPath: currentRelPath, parentPath });
});

app.get('/', (req, res) => {
    res.redirect('/public')
})

app.listen(8000, () => console.log('Server kører på port 8000'));