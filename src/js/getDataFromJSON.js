import { addRecord } from "./addRecord";

// Get mock data from the JSON file
import data from "./../../data.json";

// Add JSON mock data to the table
export function getDataFromJSON() {
  for (let i = 0; i < 3; i++) {
    const title = data.book[i].title;
    const author = data.book[i].author;
    const isbn = data.book[i].isbn;

    addRecord(title, author, isbn);
  }
}
