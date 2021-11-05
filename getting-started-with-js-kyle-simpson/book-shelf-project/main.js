// creating class Bookshelf
// creating instance of this class 
// adding five books 
// excluding the books that incldude the word Great

class Bookshelf {
  constructor(books){
    this.books = [];
  }

  addFavoriteBook = (book) => {  
    book.includes('Great')?'' : 
    this.books.push(book);
  }
  
  printFavoriteBooks = (books) => {
    for ( book of books){
        console.log(book)
    }
  }
}
let shelf = new Bookshelf();
shelf.addFavoriteBook('A Song of Ice and Fire');
shelf.addFavoriteBook('The Great Gatsby');
shelf.addFavoriteBook('Crime & Punishment');
shelf.addFavoriteBook('Great Expectations');
shelf.addFavoriteBook('You Don\'t know JS');
console.log(shelf.books);
