#!/usr/bin/node

const fs = require('fs');
const request = require('request');

request(process.argv[2], (error, response, body) => {
  if (error) return console.log('error', error);
  fs.writeFile(process.argv[3], body, 'utf8', (err) => {
    if (err) return console.log(err);
  });
});
