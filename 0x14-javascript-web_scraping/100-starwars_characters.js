#!/usr/bin/node

const request = require('request');
const filmsUrl = 'https://swapi-api.hbtn.io/api/films/'.concat(process.argv[2]);

function doRequest (url) {
  return new Promise((resolve, reject) => {
    request(url, (error, response) => {
      error ? reject(error) : resolve(response);
    });
  });
}

async function getFilm (url) {
  let res = await doRequest(url);
  res = JSON.parse(res.body).characters;
  return res;
}

async function getCharacters (data) {
  for (const x in data) {
    const res = await doRequest(data[x]);
    console.log(JSON.parse(res.body).name);
  }
}

(async () => {
  let film = '';
  try {
    film = await getFilm(filmsUrl);
    await getCharacters(film);
  } catch (err) {
    console.log(err);
  }
})();
