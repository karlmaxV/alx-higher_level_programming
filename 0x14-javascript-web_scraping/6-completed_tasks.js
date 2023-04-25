#!/usr/bin/node

const request = require('request');
const url = process.argv[2];
let results = Object();

function doTask (data, results) {
  for (const x in data) {
    if (data[x].completed) {
      const userId = data[x].userId;
      if (Object.prototype.hasOwnProperty.call(results, userId)) {
        results[userId] += 1;
      } else {
        results[userId] = 1;
      }
    }
  }
  return results;
}

request(url, (error, response, body) => {
  if (error) return console.log('error', error);
  const data = JSON.parse(body);
  results = doTask(data, results);
  console.log(results);
});
