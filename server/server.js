import cookieParser from 'cookie-parser';
import favicon from 'express-favicon';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import fetch from 'node-fetch';
import express from 'express';
import request from 'request';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import fs from 'fs';
import router from './router/index.js';
import errorMiddleware from './middlewares/error-middleware.js';
// import characters from '../src/collections/people.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

const app = express();

app.use(express.json());
app.use(favicon(__dirname + '/build/favicon.png'));
// app.use(express.static(__dirname));
// app.use(express.static(path.join(__dirname, '/build')));
app.use(cookieParser());
app.use(cors());
app.use('/api', router);

const getJsonData = async (query) => {
  try {
    const response = await fetch(`https://swapi.dev/api/${query}/`);
    const json = await response.json();

    fs.writeFileSync(
      `../src/collections/${query}.json`,
      JSON.stringify(json.results, null, 2)
    );

    console.log(`${query}.json created at src/collections`);
  } catch (error) {
    console.log(error);
  }
};

const getImages = async (id) => {
  try {
    const url = `https://starwars-visualguide.com/assets/img//characters/${id}.jpg`;
    const pathTo = `../src/images/${id}.jpg`;

    request.head(url, (err, res, body) => {
      request(url)
        .pipe(fs.createWriteStream(pathTo))
        .on('close', function () {
          console.log('✅ Images downloading done!');
        });
    });
  } catch (error) {
    console.log(error);
  }
};

const pathToPeopleJson = '../src/collections/people.json';

if (!fs.existsSync(pathToPeopleJson)) {
  getJsonData('people');
  getJsonData('films');
  getJsonData('species');
  getJsonData('starships');
  getJsonData('planets');
}

if (fs.existsSync(pathToPeopleJson)) {
  fs.mkdir('../src/images', { recursive: true }, (err) => {
    if (err) throw err;
  });

  fs.readFile(pathToPeopleJson, 'utf-8', async (err, jsonStr) => {
    if (err) {
      return console.log(`err`, err);
    }

    let characters = await JSON.parse(jsonStr);

    await characters?.forEach(async (_, idx) => {
      await getImages(idx);
    });
  });
}

// app.get('/*', (req, res) =>
//   res.sendFile(path.join(__dirname, 'build', 'index.html'))
// );
app.use(errorMiddleware);

const start = async () => {
  try {
    const connect = await mongoose.connect(MONGO_URI);

    connect && console.log(`MongoDB connected.`);

    app.listen(PORT, () => console.log(`Server is up on port ${PORT}...`));
  } catch (error) {
    console.log(`error:`, error.message);
  }
};

start();
