//updating the DOM

const app = document.getElementById('root');
const logo = document.createElement('img');
logo.src = 'logo.png';

app.appendChild(logo);

//Using FETCH API to fetch JSON data from url/local:

  fetch('./matrix.json')     //fetch returns a promise - When the JSON data is fetched from the file, then the function will run with the JSON data in the response.
  .then((response) => {
    return response.json()  // the .json() method parses the JSON response into a JS object literal
  })

  .then((data) => {
    // working with JSON data here
    console.log(data)

    const descriptionContainer = document.createElement('div');
      descriptionContainer.textContent = data.description;
      app.appendChild(descriptionContainer);

      const actorsContainer = document.createElement('div');
      //using this method is not secure but it'll do for now
      actorsContainer.innerHTML += '<b>Actors:</b> <br /><br />';
      actorsContainer.innerHTML += data.actors; //can also use .textContext

    app.appendChild(actorsContainer);

  })
  .catch((err) => {         //If anything goes wrong (like the JSON file cannot be found), the catch function will run.
    console.log('ooops')
  })



//https://howtocreateapps.com/fetch-and-display-json-html-javascript/*/