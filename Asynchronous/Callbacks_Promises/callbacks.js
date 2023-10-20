const books=[
  {title: "Book 1", body:"This is Book 1"},
  {title: "Book 2", body:"This is Book 2"}
]

function GetBooks() {
  let output = "";
  books.forEach((book) => {
    output += `<li>${book.title}</li>`;
  });
  document.body.innerHTML = output;
}

function CreateBook(newBook, callback) {
  setTimeout(() => {
    books.push(newBook);
    callback();
  }, 1000);
}

const newBook = {title: "Book 3", body:"This is Book 3"};
CreateBook(newBook, GetBooks);
