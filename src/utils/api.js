const url = 'https://forecast9.p.rapidapi.com/';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'c8ab2beb43msh312b84eeb772d8cp1d9b6cjsna5b9605acbdf',
    'x-rapidapi-host': 'forecast9.p.rapidapi.com',
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
