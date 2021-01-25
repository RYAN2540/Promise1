const url = 'https://restcountries.eu/rest/v2/all'
fetch(url)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => { // getting the data
    console.log(data)
  })
  .catch(error => console.log(error)) // handling error if something wrong happens
