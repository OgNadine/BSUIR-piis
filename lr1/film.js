const numberOfFilms=prompt("Сколько фильмов вы уже посмотрели?");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {}
}
for(let i=0; i<2;i++){
    let movieName;
    let movieRating;

    while(true){
        movieName=prompt("Один из последних просмотренных фильмов?");
        if (movieName && movieName.length<=50){
            break;
        }else{
            alert("Нельзя вводить пустую строку и строку больше 50 символов");
        }
    }
    
    while(true){
        movieRating=prompt("На сколько оцените его?(от 1 до 5)");
        let rating=Number(movieRating);
        if (rating>=1 && rating<=5 && Number.isInteger(rating)){
            break;
        }else{
            alert("Введите число от 1 до 5");
        }
    }
    personalMovieDB.movies[movieName]=movieRating;
}
    console.log(personalMovieDB);