const add = document.querySelector("#add");
const books = document.querySelector("#books");
const form = document.querySelector("#createBook");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");


let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        const output = `${title} by ${author} and has ${pages} pages.`;
        return output;
    }
}

function openTheForm() {
    document.getElementById("popupForm").style.display = "block";
  }
  
function closeTheForm() {
    document.getElementById("popupForm").style.display = "none";
  }


function displayLibrary(){
    let size = myLibrary.length;
    console.log(size);
    let index = size - 1;
    let title = myLibrary[index].title;
    console.log(title);
}

const book1 = new Book('goosebumps', 'rl grime', 200, true);



// function addBook(bookObject){ //this should be called after the display bookObject creation like inside the function
    
// let title = bookObject.title
// let author = bookObject.title
// let pages = bookObject.pages
// let read = bookObject.read


// displayLibrary();

// }

function getData(e){ //creates Book Object from form data
    const newBook = new Book(title.value, author.value, pages.value, read.value)
    myLibrary.push(newBook)
        // console.log(title.value);
    // console.log(author.value);
    // console.log(pages.value);
    // console.log(read.value);
    displayLibrary();


    e.preventDefault();
    form.reset();
    closeTheForm();


}



add.addEventListener('click', openTheForm);

form.addEventListener('submit', getData)