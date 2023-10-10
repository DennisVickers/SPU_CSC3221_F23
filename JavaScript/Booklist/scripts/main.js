class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    const list = document.getElementById('book-list');
    // Create tr element
    const row = document.createElement('tr');
    row.classList.add("book-row");
    // Insert cols
    row.innerHTML = `<td>${book.title}</td>
                     <td>${book.author}</td>
                     <td class="isbn">${book.isbn}</td>
                     <td><a href="#" class="delete">X</a></td>`;
    list.appendChild(row);

    // Write book to local storage
    localStorage.setItem(book.isbn, `["${book.title}","${book.author}"]`);
  }
  
  deleteBook(target) {
    if(target.className === 'delete') {
      const key = target.parentElement.parentElement.querySelector(".isbn");
      localStorage.removeItem(key.innerText);
      target.parentElement.parentElement.remove();
    }
  }

  showAlert(message, className) {
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.page-area');
    // Get form
    const form = document.querySelector('#book-form');
    // Insert alert
    container.insertBefore(div, form);

    // Timeout after 3 sec
    setTimeout(function(){
      document.querySelector('.alert').remove();
    }, 3000);
  }


  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

// Event Listener for add book
document.getElementById('book-form').addEventListener('submit', function(e){
  // Get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  // Validate
  if(title === '' || author === '' || isbn === '') {
    // Error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {

    // Add book to list
    ui.addBookToList(book);

    // Show success
    ui.showAlert('Book Added!', 'success');

    // Clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e){

  // Instantiate UI
  const ui = new UI();

  // Delete book
  ui.deleteBook(e.target);

  // Show message
  ui.showAlert('Book Removed!', 'success');

  e.preventDefault();
});

function LoadBooks() {
  const list = document.getElementById('book-list');

  for (let i = 0; i < localStorage.length; i++){
    let key = localStorage.key(i);
    let value = JSON.parse(localStorage.getItem(key));
    // console.log(key, value[0],value[1]);
      
    // Create tr element
    const row = document.createElement("tr");
    row.classList.add("book-row");
    // Insert cols
    row.innerHTML = `
      <td>${value[0]}</td>
      <td>${value[1]}</td>
      <td class="isbn">${key}</td>
      <td><a href="#" class="delete">X</a></td>
    `;
    list.appendChild(row);
  }
}

LoadBooks();