const request = require('request');
const url = process.argv[2];
let count = 0;

request(url, (error, response, body) => {
  if (error) return console.log('error', error);
  const data = JSON.parse(body).results;

  for (const x in data) {
    for (const value of data[x].characters) {
      if (value.includes('18')) count++;
    }
  }
  return console.log(count);
});
