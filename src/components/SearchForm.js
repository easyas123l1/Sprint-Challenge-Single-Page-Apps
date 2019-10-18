import React from "react";
import styled from 'styled-components'

const InputText = styled.input`
  margin: 2% 0%;
  text-align: center;
`;

const Container = styled.section`
  text-align: center;
`;

const SearchForm = (props) => {

  const submit = event => {
    event.preventDefault();
  }
  return (
    <Container className="search-form">
     <form onSubmit={submit}>
       <label> Search By Name: <br></br>
       <InputText 
       type='text'
       onChange={props.handleInputChange}
       value={props.query}
       name='name'
       placeholder='search by name'
       autoComplete='off'
       />
       </label>
     </form>
    </Container>
  );
}

export default SearchForm;