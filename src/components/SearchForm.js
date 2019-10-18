import React, { useState } from "react";

const SearchForm = (props) => {

  const submit = event => {
    event.preventDefault();
  }
  return (
    <section className="search-form">
     <form onSubmit={submit}>
       <input 
       type='text'
       onChange={props.handleInputChange}
       value={props.query}
       name='name'
       placeholder='search by name'
       autoComplete='off'
       />
     </form>
    </section>
  );
}

export default SearchForm;