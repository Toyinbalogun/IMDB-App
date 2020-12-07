// This .onclick function will trigger the AJAX Call
let movieSearchbtn = document.getElementById('find-movie')
let revbtn = document.getElementById('ratRevBtn')

//add eventlistener to the btn
movieSearchbtn.addEventListener('click', function (event) {
  event.preventDefault()
  
  $('#movie-form').hide()

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
      console.log(movieData.Title)
      console.log(movieData.Released)
      console.log(movieData.Genre)
      console.log(movieData.Plot)
      console.log(movieData.Poster)
      console.log(movieData.Actors)
      console.log(movieData.Director)
      

      //display movie title on html page
      let mTitle = document.getElementById('title')
      let myandgen = document.getElementById('card-rel')
      let mplot = document.getElementById('plot')
      let mActors = document.getElementById('actors')
      let mDirec = document.getElementById('directors')
      let mImg = document.getElementById('poster')
      let imgsrc = movieData.Poster

      mTitle.textContent = movieData.Title
      myandgen.textContent = "Release Date: " + movieData.Released + " " + "(" + movieData.Genre + ")"
      mImg.setAttribute("src",  imgsrc )
      mplot.textContent = "Plot: " +movieData.Plot
      mActors.textContent = "Cast[4]: " +movieData.Actors
      mDirec.textContent = "Director: " +movieData.Director
    

      // document.getElementById(
      //   'movie-view'
      // ).textContent = JSON.stringify(movieData)
    })
})

revbtn.addEventListener('click', function (event) {
  event.preventDefault()

  let ratings = []
  let reveiws = []

  //grab the text from the input box
  let rating = document.getElementById('rating').value
  ratings.push(rating)
  
  let review = document.getElementById('review').value
  reveiws.push(review)

  window.sessionStorage.setItem("ratings", JSON.stringify(ratings));
  var storedArray = JSON.parse(sessionStorage.getItem("items"));


  let sum = 0
  for(let i=0; i < ratings.length; i++){
    sum += parseFloat(ratings[i])
  }

  let avgR = sum/ratings.length
  
  console.log(rating)
  console.log(ratings)
  console.log(review)
  console.log(reveiws)
  console.log(avgR)

  $('#ratecard').hide()

  let updateRating = document.getElementById('updateRating')
  let updateReview = document.getElementById('updateReview')

  updateRating.textContent = "Movie Rating: " + avgR
  updateReview.textContent = "Movie Reviews: " + review

})