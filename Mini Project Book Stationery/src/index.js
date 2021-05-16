//Imports
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {books} from './Books';
import {Book} from './Book';


//Functions
function BookList(){
    return(
        <section className="booklist">
            {
            books.map((book)=>
            {   
                return (
                    <Book key={book.id} book={book}></Book>
                )
            })}
            

        </section>
    );
}

ReactDOM.render(<BookList />,document.getElementById('root'));

