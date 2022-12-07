const numberOfFilms = prompt('Скільки фільмів ви вже подивились?', '');

 const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один із останніх переглянутих фільмів?', ''),
          b = prompt('На скільки ви його оціните?', '');
    if (a != null && b != null && a != '' && b != '' && a.length <50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.lof('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Перглянуто доволі мало фільмів");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Ви классний глядач");
} else if (personalMovieDB.count >= 30) {
    console.log("Ви кіноман");
} else {
    console.log("Сталась прикра помилка");
}

console.log(personalMovieDB);