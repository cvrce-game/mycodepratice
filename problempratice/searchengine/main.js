import { InMemorySearchEngine } from "./InMemorySearchEngine.js";

const searchEngine = new InMemorySearchEngine();

// Adding documents to different namespaces
searchEngine.addDocument('books', { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', year: 2008 });
searchEngine.addDocument('books', { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', year: 2018 });
searchEngine.addDocument('books', { title: 'You Don’t Know JS', author: 'Kyle Simpson', year: 2015 });
searchEngine.addDocument('movies', { title: 'Inception', director: 'Christopher Nolan', year: 2010 });
searchEngine.addDocument('movies', { title: 'Interstellar', director: 'Christopher Nolan', year: 2014 });

// Searching and sorting within a namespace
console.log("Search Results:");
console.log(searchEngine.search('books', 'JavaScript', 'year', 'asc')); // Search for 'JavaScript' in 'books' namespace, sorted by 'year'
console.log(searchEngine.search('movies', 'Nolan', 'year', 'desc')); // Search for 'Nolan' in 'movies' namespace, sorted by 'year' descending