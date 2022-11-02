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


function updateLibrary(bookObject){



    let index = myLibrary.length - 1;


    const newBook = document.createElement('div');
    const title = document.createElement('div');
    const author = document.createElement('div');
    const pages = document.createElement('div');
    const read = document.createElement('button');
    const remove = document.createElement('button');


    newBook.classList.toggle('book'); //gives newBook book class so that it can access css style
    read.classList.toggle('read');






    newBook.setAttribute('id', `${index}`); //adds id to remove later if needed
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


    // newBook.textContent = `${bookObject.title} \n ${bookObject.author}`;
    books.appendChild(newBook); //add book to library
    // title.textContent = bookObject.title;
    console.log(bookObject.title);
    // updateRead(bookObject); //problem is that bookObject.read does not get updated within scope
    read.addEventListener('click', () => {
        if(bookObject.read == true){
                        read.style.cssText = "background-color: red";
                        read.textContent = "Not Read";
                        bookObject.read = false; //this shoudl be changed to the index of the bookObject
                    }
                    else{
                        read.style.cssText = "background-color: green";
                        read.textContent = "Read";
                        bookObject.read = true;
                    }
    })

    remove.addEventListener('click', () => {
        myLibrary.splice(index, 1);
        books.removeChild(newBook);
    })
    
}


function getIndexOf(bookObject){
let index = 0;
let size = myLibrary.length;
    if(size == 0)
    {
        return -1;
    }
    
    for(let i = 0; i < size; i++){
        if(myLibrary[i] == bookObject){
            return i;
        }
    }
    return -2;
}



function getData(e){ //creates Book Object from form data
    const newBook = new Book(title.value, author.value, pages.value, read.checked)
    console.log(read.value);
    myLibrary.push(newBook)
    updateLibrary(newBook);


    e.preventDefault();
    form.reset();
    closeTheForm();




}

// function updateRead(bookObject){ //bool read parameter passed to check if the book was read or not

   
//     const allRead = document.querySelectorAll('.read');
//     allRead.forEach((m) => { // I used the .forEach method to iterate through each box

//       // and for each box I add a 'click' listener
//       m.addEventListener('click', () => {
//         let read = bookObject.read; //this is placed here so that read gets redefined after every click
//         let index = getIndexOf(bookObject);
//         console.log(2); //current bug is that it does this action to however many items in front plus current item times and to each item
//         // console.log(bookObject.title);
//         // console.log(bookObject.read);
//         if(read == true){
//             m.style.cssText = "background-color: red";
//             m.textContent = "Not Read";
//             bookObject.read = false; //this shoudl be changed to the index of the bookObject
//         }
//         else{
//             m.style.cssText = "background-color: green";
//             m.textContent = "Read";
//             bookObject.read = true;
//         }
//       });

//     });

// }





add.addEventListener('click', openTheForm);

form.addEventListener('submit', getData)

