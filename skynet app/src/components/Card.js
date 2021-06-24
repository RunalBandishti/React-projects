import React,{} from 'react';
import './Card.css';

const Card = ({name,email,id}) => {
   
    return( 
    <div className='tc bg-light-green dib br2 pa2  ma2 grow bw2 shadow-5 '>
        <img alt='robots' src={`http://robohash.org/${id}?200x200`} />
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>
    
    );
}


export default Card;