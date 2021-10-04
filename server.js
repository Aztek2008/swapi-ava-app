import express from 'express';
import fetch from 'node-fetch';
import favicon from 'express-favicon';
import path from 'path';

import { fileURLToPath } from 'url';
import fs from 'fs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3030;

const app = express();

app.use(express.json());
app.use(favicon(__dirname + '/build/favicon.png'));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

const getData = async (query) => {
  try {
    const response = await fetch(`https://swapi.dev/api/${query}/`);
    const json = await response.json();

    fs.writeFileSync(
      `./src/collections/${query}.json`,
      JSON.stringify(json.results, null, 2)
    );

    console.log(`${query}.json created at /collections`);
  } catch (error) {
    console.log(error);
  }
};

getData('people');
getData('films');
getData('species');
getData('starships');
getData('planets');

app.get('/*', (req, res) =>
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
);

app.listen(PORT, () => console.log('Server is up...'));
