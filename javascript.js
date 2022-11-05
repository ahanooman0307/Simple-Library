const add = document.querySelector("#add");
const books = document.querySelector("#books"); //library
const form = document.querySelector("#createBook");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");


let myLibrary = []; //array to store the book objects

function Book(title, author, pages, read){ //book class
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        const output = `${title} by ${author} and has ${pages} pages.`;
        return output;
    }
}

function openTheForm() { //function to open the form 
    document.getElementById("popupForm").style.display = "block";
  }

function closeTheForm() {//function to close the form
    document.getElementById("popupForm").style.display = "none";
  }


function updateLibrary(bookObject){ //function to add book to library and removed later on and allow read value to be changed 

    let index = myLibrary.length - 1;


    const newBook = document.createElement('div');//new Book object to be appended to the library
    const title = document.createElement('div'); //given title
    const author = document.createElement('div');//given author
    const pages = document.createElement('div');
    const read = document.createElement('button');
    const remove = document.createElement('button');


    newBook.classList.toggle('book'); //gives newBook book class so that it can access css style
    read.classList.toggle('read');


    title.textContent = `"${bookObject.title}"`;
    author.textContent = `by ${bookObject.author}`;
    pages.textContent = `${bookObject.pages} pages`;
    remove.textContent = "Remove";
    newBook.appendChild(title);//adds new title element to book element
    newBook.appendChild(author);//adds new author element to book element
    newBook.appendChild(pages);//adds new pages element to book element
    newBook.appendChild(read);//adds new read element to book element
    newBook.appendChild(remove);

    if(bookObject.read == true){ //if statement to check if the book was read or not
        read.textContent = "Read";

        read.style.cssText = "background-color: green";
    }
    else{
        read.textContent = "Not Read";

        read.style.cssText = "background-color: red";

    }


    books.appendChild(newBook); //add book to library
    console.log(bookObject.title);
   
    read.addEventListener('click', () => { //event listener to change the value of the read 
        if(bookObject.read == true){
                        read.style.cssText = "background-color: red";
                        read.textContent = "Not Read";
                        bookObject.read = false; 
                    }
                    else{
                        read.style.cssText = "background-color: green";
                        read.textContent = "Read";
                        bookObject.read = true;
                    }
    })

    remove.addEventListener('click', () => { //event listener to remove the book from the library
        myLibrary.splice(index, 1); //removes bookObject from array
        books.removeChild(newBook); //remove bookObject from interface
    })
    
}

function getData(e){ //creates Book Object from form data

    const newBook = new Book(title.value, author.value, pages.value, read.checked)
    console.log(read.value);
    myLibrary.push(newBook)
    updateLibrary(newBook);//function to add book to library and removed later on and allow read value to be changed 
    e.preventDefault();
    form.reset();
    closeTheForm();

}



add.addEventListener('click', openTheForm);

form.addEventListener('submit', getData)


















// function getIndexOf(bookObject){
    // let index = 0;
    // let size = myLibrary.length;
    //     if(size == 0)
    //     {
    //         return -1;
    //     }
        
    //     for(let i = 0; i < size; i++){
    //         if(myLibrary[i] == bookObject){
    //             return i;
    //         }
    //     }
    //     return -2;
    // }
    

