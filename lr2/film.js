const personalMovieDB = {
    privat: true,
    movies: {
        "Головолмка 2": 10,
        "Хранители снов": 10,
        "Душа": 10
    }
};

function setPrivate() {
    let u;
    while (true) {
        u = prompt("Угадайте правильный ответ. Введите true или false:").toLowerCase();
        switch (u) {
            case "true":
                personalMovieDB.privat = true;
                return;
            case "false":
                personalMovieDB.privat = false;
                return;
            default:
                alert("Введите true или false.");
        }
    }
}

function displayMovies() {
    if (!personalMovieDB.privat) {
        const ggg = document.getElementById("movieTable");
        let table = '<table><tr><th>Название фильма</th><th>Оценка</th></tr>';

        for (let movie in personalMovieDB.movies) {
            table += `<tr><td>${movie}</td><td>${personalMovieDB.movies[movie]}</td></tr>`;
        }

        table += '</table>';
        ggg.innerHTML = table;
    }
}

setPrivate();
displayMovies();