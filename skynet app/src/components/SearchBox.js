import React from 'react';

const SearchBox = ({ searchfield,searchChange }) =>{
    return(
        <div>
            <input 
            className='mb3 pa3 ba b--green bg-lightest-blue'
             type='search' 
             placeholder='Search Cyborgs'
             onChange={searchChange}
              />
    
        </div>
    );
}

export default SearchBox;