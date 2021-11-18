// var card = document.querySelector('.card')


// for (const iterator of movies){
    
//     var item = document.createElement('li')
//     var img = document.createElement('img')
//     var title = document.createElement('h2')
//     var movie_year = document.createElement('p')
//     var imdb_rating = document.createElement('p')

//     img.setAttribute('src', iterator.smallThumbnail)
//     img.classList.add("avanger-image")
//     title.textContent = iterator.title;
//     movie_year.textContent = iterator.year;
//     imdb_rating.textContent = iterator.imdbRating;


//     item.appendChild(img)
//     item.appendChild(title)
//     item.appendChild(movie_year )
//     item.appendChild(imdb_rating)

//    card.appendChild(item)
// }\



let ota = document.querySelector(".father")

for(let i = 0; i  < 12; i++){
    let div =  document.createElement("div")
    div.innerHTML = `
        <img src="${movies[i].smallThumbnail}" width="310" height="180" class="card-img-top" alt="america">
        <div class="card-body">
        <h5 class="card-title">${movies[i].title}</h5>
        <p class="card-text"> 
            <img class="calendar" src="./image/calendar.png" width="16" height="16" alt="calendar"> ${movies[i].year}</p>
        <p class="card-text"> <img class="star" src="./image/star.png" width="16" height="16" alt="calendar">${movies[i].imdbRating}</p>
        </div>
        <div class="father-button">
        <button type="button " class="btn btn-outline-primary">Watch trailler</button>
        <button type="button" class="btn btn-outline-success">More  Info</button>
        <button type="button" class="btn btn-outline-danger">Bookmark</button>
        </div>
    </div>
    `
    div.style.width = "18rem"
    div.classList.add("card")
    ota.appendChild(div)
}