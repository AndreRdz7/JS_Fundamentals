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
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X<a></td>
    `;
    list.appendChild(row);
}

UI.prototype.deleteBook = function(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}

UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

UI.prototype.showAlert = function(message,className){
    //create div
    const div = document.createElement('div');
    //add class
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    //get parent
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    //insert alert
    container.insertBefore(div,form);
    //timeout after 3 secs
    setTimeout(function(){
        document.querySelector('.alert').remove();
    },3000);
}

//event listener
document.getElementById('book-form').addEventListener('submit',function(e){
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;
    const book = new Book(title,author,isbn);
    console.log(book);
    const ui = new UI();
    //validate
    if(title === '' || author === '' || isbn === ''){
        //error alert
        ui.showAlert('Please fill all fields','error');
    } else {
        //add book to list
        ui.addBooktoList(book);
        //show success
        ui.showAlert('Book Added!','success')
        //clear field
        ui.clearFields();
    }
    
    e.preventDefault();
});

//event listener for delete
document.getElementById('book-list').addEventListener('click',function(e){
    const ui = new UI();
    ui.deleteBook(e.target);
    ui.showAlert('Book Removed','success');
    e.preventDefault();
})