// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesArr){
    let directorsArr = moviesArr.map((movie => {
        return movie.director
    }))
    //console.log(moviesArr.length)
    return directorsArr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (movies) => {
    let spielbergDramas = movies.filter(el => {
        if (el.director == "Steven Spielberg" && el.genre.includes('Drama')) {
            return true;
        }
    })
return spielbergDramas.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){
    if (movies.length === 0){
        return 0;
    } 
    let totalMovies = movies.reduce((acc, elem) => {
        if (elem.rate === undefined){
            return acc;
        }
        else {
            return acc+elem.rate;
        }
    }, 0);
    return +(totalMovies/movies.length).toFixed(2);
}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMOviesRate(movies){
    if (movies.length === 0){
        return 0;
    } 

    if (movies.genre.includes('Drama')){
        let totalMovies = movies.reduce((acc, elem) => {
            if (elem.rate === undefined){
                return acc;
            }
            else {
                return acc+elem.rate;
            }
        }, 0);

        return +(totalMovies/movies.length).toFixed(2);
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies){
    let clonedArray = JSON.parse(JSON.stringify(movies));

    clonedArray.sort((a,b) => {
        if (a.year == b.year){
            if (a.title > b.title){
                return 1;
            } else if (a.title < b.title){
                return -1;
            } else {
                return 0;
            }
        }
        
        if(a.year > b.year){
            return 1
        } else if (a.year < b.year){
            return -1
        } else {
            return 0
        }
    })
    return clonedArray
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies){

    let clonedArray = JSON.parse(JSON.stringify(movies));

    clonedArray.sort((a,b) => {
        if (a.title > b.title){
            return 1;
        } else if (a.title < b.title){
            return -1;
        } else {
            return 0;
        }
    })
    return clonedArray;
};

console.log(orderAlphabetically(movies));
