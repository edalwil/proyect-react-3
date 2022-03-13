import { useState,useEffect } from 'react';
import axios from 'axios';

const Api = () => {

      const [location, setLocation] = useState([]);
      const [loading, setLoading] = useState(true)

     useEffect(() => {
           const random = Math.floor( Math.random() *126 ) + 1  
           axios.get(`https://rickandmortyapi.com/api/location/${random}`)  
           .then(res => {
                  setLocation(res.data)
                  setLoading(false)
           })
     }, []);

      return [
            location,
            loading,
            setLocation
      ]
};

export default Api;