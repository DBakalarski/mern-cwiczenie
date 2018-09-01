import cuid from 'cuid';

let books = [{ id: 1, title: 'Harry Potter', price: 25}, { id: 2, title: 'the Witcher', price: 35}]

/*********** GET BOOKS ****************/

export function getBooks(req, res) {
  res.write(JSON.stringify(books))
  res.end();
}

/*********** REMOVE BOOK ****************/

export function removeBook(req, res) {
  books = books.filter(book => book.id != req.params.id)
  res.write(JSON.stringify(books))
  res.end();
}
