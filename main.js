import { movies } from './data.js';

const listOfBooks = document.querySelector(".list-of-books");
const selectedGenre = document.querySelector("#genre");
const searchMovieBar = document.querySelector(".search-movie-bar");
const searchButton = document.querySelector(".search-button");


const displayMovies = (movies) => {
listOfBooks.innerHTML = '';

movies.forEach(({title, author, genre} ) =>
{
    const booksCards = document.createElement('div');
    booksCards.className = "book-card";

    booksCards.innerHTML = ` <img src="/homeworks/books/image.jpeg" alt="book-cover"/>
    <div class="title">${title}</div>
    <span>${author}</span>
    `;
    listOfBooks.appendChild(booksCards);
});

};

const filterMovies = () => {
    const selectedGenreValue = selectedGenre.value;
    if (selectedGenre === "all") {
        displayMovies(movies);
    } else {
        const filteredMovies = movies.filter(movie => movie.genre === selectedGenreValue);
        displayMovies(filteredMovies);
    }
};

const searchMovie = () => {
    const searchMovieBarValue = searchMovieBar.value.toLowerCase(); 
    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchMovieBarValue) ||
        movie.author.toLowerCase().includes(searchMovieBarValue)
    );

    displayMovies(filteredMovies);
};



displayMovies(movies);
selectedGenre.addEventListener('change', filterMovies);
searchButton.addEventListener('click', searchMovie);

