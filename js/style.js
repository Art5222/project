'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?',' ');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
personalMovieDB.movies[prompt('Один из последных просмотренных фильмов ?',' ')]=+prompt('На сколько оцените его?',' ');
personalMovieDB.movies[prompt('Один из последных просмотренных фильмов ?',' ')]=+prompt('На сколько оцените его?',' ');


