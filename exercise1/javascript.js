const add = document.querySelector("#add");
const books = document.querySelector("#books"); //library
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


function updateLibrary(bookObject){

    
    
    let index = myLibrary.length - 1;


    const newBook = document.createElement('div');
    const title = document.createElement('div');
    const author = document.createElement('div');
    const pages = document.createElement('div');
    const read = document.createElement('div');
    
    if(bookObject.read == "on"){ //if statement to check if the book was read or not
        read.textContent = "Read";
    }
    else{
        read.textContent = "Not Read";
    }

    newBook.classList.toggle('book'); //gives newBook book class so that it can access css style
    
    newBook.setAttribute('id', `${index}`); //adds id to remove later if needed
    title.textContent = bookObject.title;
    author.textContent = bookObject.author;
    pages.textContent = bookObject.pages;
    newBook.appendChild(title);//adds new title element to book element
    newBook.appendChild(author);//adds new author element to book element
    newBook.appendChild(pages);//adds new pages element to book element
    newBook.appendChild(read);//adds new read element to book element


    // newBook.textContent = `${bookObject.title} \n ${bookObject.author}`;
    books.appendChild(newBook); //add book to library
    // title.textContent = bookObject.title;
    console.log(bookObject.title);

}






function getData(e){ //creates Book Object from form data
    const newBook = new Book(title.value, author.value, pages.value, read.value)
    console.log(read.value);
    myLibrary.push(newBook)
    updateLibrary(newBook);


    e.preventDefault();
    form.reset();
    closeTheForm();


}



add.addEventListener('click', openTheForm);

form.addEventListener('submit', getData)