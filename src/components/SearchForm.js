import React, { useState } from "react";

const SearchForm = () => {
 
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    

    const handleInputChange = event => {
      setQuery(event.target.value)
    }

  return (
    <section className="search-form">
     <form>
       <input 
       type='text'
       onChange={handleInputChange}
       value={query}
       name='name'
       placeholder='search by name'
       autoComplete='off'
       />
     </form>
    </section>
  );
}

export default SearchForm;