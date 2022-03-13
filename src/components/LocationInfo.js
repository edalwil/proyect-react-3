import Api from '../hook/Api';
import ResidentsList from './ResidentsList';
import SearchBox from './SearchBox';


const LocationInfo = () => {

      const [ location, loading, setLocation] = Api();

     if (loading) {
           return(
                 <div>
                       LOADING........
                 </div>
           )

     } else {
            return (
                  <div className='container-app'>
                        <div className='contairner-header'>
                              <div className='header'>
                                    <img src="https://i.ibb.co/601qgjb/image-2.png" alt="" />
                              </div>
                              <div className='search-id'>
                                    <SearchBox setLocation={setLocation}/>
                              </div>
                        </div>
                        <div className='locationInfo'>
                              <div>
                                    <h3>{location?.name}</h3>
                              </div>
                              <div>
                                    <p><b>Type: </b>{location?.type}</p>
                                    <p><b>Dimension: </b>{location?.dimension}</p>
                                    <p><b>Popilation: </b>{location?.residents.length}</p>
                              </div>
                        </div>
                        <div className='container-character'>
                                      <ResidentsList locations={location?.residents}/>
                        </div>
                  </div>
            )
     }
}

export default LocationInfo;