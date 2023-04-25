#!/usr/bin/node

const request = require('request');
const url = 'https://swapi-api.hbtn.io/api/films/'.concat(process.argv[2]);

request(url, (error, response, body) => {
  if (error) return console.log('error', error);
  console.log(JSON.parse(body).title);
});
