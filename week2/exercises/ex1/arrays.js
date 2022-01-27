const myFavMovies = ['Back to the Future', 'The Fifth Element', 'Spirited Away', 'Roman Holiday', 'Coco'];
console.log(myFavMovies);

const extraMovie = window.prompt('What is your favorite movie?');
myFavMovies.push(extraMovie);
console.log('My Fav Movies updated');

window.alert(myFavMovies.join(', '));
console.log(myFavMovies.toString());
