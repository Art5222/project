'use strict';
let numberOfFilms;

const personalMovieDB = {
    count:  numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
        personalMovieDB.count = numberOfFilms;       
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
                    const a = prompt('Один из последних просмотренных фильмов?', ''),
                          b = prompt('На сколько оцените его?', '');
                
                    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                        personalMovieDB.movies[a] = b;
                        console.log('done');
                    } else {
                        console.log('error');
                        i--;
                    }
                }
    } ,
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
                    console.log("Просмотрено довольно мало фильмов");
                } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                    console.log("Вы классический зритель");
                } else if (personalMovieDB.count >= 30) {
                    console.log("Вы киноман");
                } else {
                    console.log("Произошла ошибка");
                }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }

    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat === false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    } , writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
                    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);

        if (personalMovieDB.genres[i-1]===null || personalMovieDB.genres[i-1]===''){
            i--;
        }
                }
        personalMovieDB.genres.forEach((item,i)=>{
           console.log(`Любимый жанр #${i+1} - это ${item}`);
           
        });
    }



    
};
// personalMovieDB.start();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.writeYourGenres();
console.log(personalMovieDB);
