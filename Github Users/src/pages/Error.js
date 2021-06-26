import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Error = () => {
  return <Wrapper>
      <div>
          <h1>404</h1>
          <h3>Sorry,the page you tried reaching is not available.</h3>
          <Link to='/' className='btn'>
          back home
        </Link>
      </div>
  </Wrapper>
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #000000;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    color: white;
    margin-bottom: 1.5rem;
  }
`;
export default Error;


// var(--clr-primary-10)
// var(--clr-grey-3)