import { addRecord } from "./addRecord";

// Add API mock data to the table
export function getDataFromAPI() {
  const books = ["lGjFtMRqp_YC", "Buu4rQEACAAJ"];

  for (let i = 0; i < books.length; i++) {
    fetch(`https://www.googleapis.com/books/v1/volumes/${books[i]}`).then(
      (response) =>
        response.json().then((book) => {
          const title = book.volumeInfo.title;
          const author = book.volumeInfo.authors[0];
          const isbn = book.volumeInfo.industryIdentifiers[0].identifier;

          addRecord(title, author, isbn);
        })
    );
  }
}
