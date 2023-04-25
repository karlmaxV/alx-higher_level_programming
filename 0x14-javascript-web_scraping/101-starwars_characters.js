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
  const res = await doRequest(url);
  return JSON.parse(res.body).characters;
}

async function getCharacters (data) {
  for (const x in data) {
    const res = await doRequest(data[x]);
    console.log(JSON.parse(res.body).name);
  }
}

(async () => {
  let data = '';
  try {
    data = await getFilm(filmsUrl);
    await getCharacters(data);
  } catch (error) {
    console.log(error);
  }
})();
