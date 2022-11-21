const books = [
    {title: 'Total loss', pages: 600, genre: 'fantasy', rating: 5},
    {title: 'Total enlightenment', pages: 250, genre: 'romance', rating: 2},
    {title: 'Big loss', pages: 400, genre: 'fantasy', rating: 7},
    {title: '10th Joy', pages: 32, genre: 'action', rating: 8},
    {title: 'Quickfix', pages: 15, genre: 'fantasy', rating: 1},
    {title: 'World Ender', pages: 199, genre: 'fantasy', rating: 3},
    {title: 'Paranormal', pages: 200, genre: 'thriller', rating: 9},
    {title: '300', pages: 600, genre: 'criminology', rating: 10},
    {title: 'Renewer', pages: 472, genre: 'biology', rating: 2},
];
//PRZYKŁADY:
//tworzymy funkcje
const filterTitleStartsWithTotal = (list) => list.filter((book) => book.title.startsWith('Total'));
const filterGenreIsFantasy = (list) => list.filter((book) => book.genre === 'fantasy');
const mapToPages = (list) => list.map(({pages}) => pages);
const sumPages = (book) => book.reduce((currSum, newPage) => currSum + newPage)
//tworzymy kompozycje
const badCompose = (fn1, fn2, fn3) => (x) => fn3(fn2(fn1(x)));
const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);
//tworzymy funkcję używającą kompozycji
const titleStartsWithTotalPages = compose(sumPages, mapToPages, filterTitleStartsWithTotal);
const genreIsFantasyPages = compose(sumPages, mapToPages, filterGenreIsFantasy);
//wypisujemy dla książek
console.log(titleStartsWithTotalPages(books));
console.log(genreIsFantasyPages(books));



console.log("***zad6***");
const lengthNoSpace = list => list.map(book => book.title.replace(/ /g,"").length);
const evenPages = list => list.filter(book => (book.pages) % 2 == 0);
const genreEndsY = list => list.filter(book => book.genre.endsWith('y'));

const Zadanie1 = compose(lengthNoSpace, genreEndsY, evenPages);
console.log(Zadanie1(books));


console.log("***zad7***");
const goodRating = list => list.filter(book => book.rating > 5).length;
const notEvenPages = list => list.filter(book => book.pages % 2 != 0);
const containNumbers = list => list.filter(book => /\d/g.test(book.title));

const Zadanie2 = compose(goodRating, notEvenPages, containNumbers);
console.log(Zadanie2(books));


console.log("***zad8***");
const byTitle = list => list.map(book => book.title);
const almostLongestTitle = list => list.sort((a,b) => a.length - b.length).at(-2);

const Zadanie3 = compose(almostLongestTitle, byTitle);
console.log(Zadanie3(books));

