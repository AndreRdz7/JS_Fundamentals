// book constructor
function Book(title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//ui constructor

function UI() {}
UI.prototype.addBooktoList = function(book){
    const list = document.getElementById('book-list');
    //create tr
    const row = document.createElement('tr');
    //insert cols
    row.innerHTML = `
        <tr>${book.title}</tr>
        <tr>${book.author}</tr>
        <tr>${book.isbn}</tr>
        <tr><a href="#" class="delete">X<a></tr>
    `;
    list.appendChild(row);
}

UI.prototype.clearFields = funcion(){
    document.getElementById('title') = '';
    document.getElementById('author') = '';
    document.getElementById('isbn') = '';
}

//event listener
document.getElementById('book-form').addEventListener('submit',function(e){
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;
    const book = new Book(title,author,isbn);
    console.log(book);
    const ui = new UI();
    //add book to list
    ui.addBooktoList(book);
    //clear field
    ui.clearFields();
    e.preventDefault();
});