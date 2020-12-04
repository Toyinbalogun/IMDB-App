// This .onclick function will trigger the AJAX Call
let movieSearchbtn = document.getElementById('find-movie')

//add eventlistener to the btn
movieSearchbtn.addEventListener('click', function (event) {
  event.preventDefault()

  //grab the text from the input box
  let movieTitle = document.getElementById('movie-input').value

  //constructing URL
  let queryURL =
    'https://www.omdbapi.com/?t=' + movieTitle + '&apikey=trilogy'

  fetch(queryURL)
    .then(function (response) {
      return response.json()
    })
    .then(function (movieData) {
      document.getElementById(
        'movie-view'
      ).textContent = JSON.stringify(movieData)
    })

})