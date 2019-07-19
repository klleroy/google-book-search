import axios from "axios";

export default {
     // gets all books from API
     getBooks: function(q) {
          return axios.get('/api/google', {params: {q: 'title' + q}});
     },
     // get book with a given id
     getSavedBooks: function() {
          return axios.get('/api/books');
     },
     // delets the book with the give id
     deleteBook: function(id) {
          return axios.delete('/api/books' + id);
     },
     // saved a book to the db
     saveBook: function(bookData) {
          return axios.post('/api/books', bookData);
     }
};