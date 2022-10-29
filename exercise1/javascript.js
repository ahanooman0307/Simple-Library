const add = document.querySelector("#add");
const books = document.querySelector("#books");

let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read

    this.info = function(){
        const output = `${title} by ${author} and has ${pages} pages.`;
        return output;
    }
}


function displayLibrary(){
let size = myLibrary.length;
console.log(size);
let index = size - 1;
let title = myLibrary[index].title;
console.log(title);
}

const book1 = new Book('goosebumps', 'rl grime', 200, true);
addBook(book1); 

function addBook(bookObject){ //this should be called after the display bookObject creation like inside the function
    
let title = bookObject.title
let author = bookObject.title
let pages = bookObject.pages
let read = bookObject.read

const newBook = new Book(title, author, pages, read);
myLibrary.push(newBook);
console.log(5);
displayLibrary();

}

add.addEventListener('click', addBook);

