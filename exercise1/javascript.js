const add = document.querySelector("add");
const books = document.querySelector("books");

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

function addBooktoLibrary(book){
    myLibrary.concat(book);
}

const book1 = new Book('goosebumps', 'rl grime', 200, true);

function addBook(){
let title = "title";
let author = "author";
let pages = 5;
let read = true;

const newBook = new Book(title, author, pages, read);
books.appendChild(newBook);
myLibrary.concat(newBook);
console.log(5);



}

add.addEventListener('click', addBook);

