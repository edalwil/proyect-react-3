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
            <div>
                  <input type="text" onChange={e => setSearch(e.target.value)} value={search}/>
                  <button onClick={searchId}>search</button>
            </div>
      );
};

export default SearchBox;