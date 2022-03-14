import axios from 'axios';
import React, { useState } from 'react';

const SearchBox = ({setLocation}) => {

      const [search, setSearch] = useState("");

      const searchId = () => {
            axios.get(`https://rickandmortyapi.com/api/location/${search}`)  
           .then(res => {
                  setLocation(res.data)
           })
      }

      return (
            <div className='container-input'>
                  <input type="text" onChange={e => setSearch(e.target.value)} value={search}/>
                  <button onClick={searchId}><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
      );
};

export default SearchBox;