import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResidentInfo = ({characterUrl}) => {

      const [ character, setCharacter ] = useState({})

      useEffect(() => {
            axios.get(characterUrl)
            .then(res =>{ 
                  setCharacter(res.data)  
            }   )
      }, []);

    
      return (
            <div className='card-character'>
                  <div className='container'>
                        <div className='cointainer-status'>
                              {
                                    character?.status === "Dead" ? (
                                          <>
                                                <p>Muerto</p>
                                                <p className='bg-red'></p>
                                          </>
                                    ) : (character?.status === "Alive" ? (
                                          <>
                                                <p>Vivo</p>
                                                <p className='bg-green'></p>
                                          </>
                                    ) : (
                                          <>
                                                <p>Desconocido</p>
                                          </>
                                    ))  
                              } 
                           
                        </div>
                  <div className='container-principal'>
                        <img src={character?.image} alt="" />
                        <h3>{character?.name}</h3>
                        <h5>raza</h5>
                        <p>{character?.species}</p>
                        <h5>origen</h5>
                        <p>{character?.origin?.name}</p>
                        <h5>aparecion de episodios</h5>
                        <p>{character?.episode?.length}</p>
                  </div>
                  </div>
            </div>
      );
};
 
export default ResidentInfo;