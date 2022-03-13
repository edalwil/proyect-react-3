import ResidentInfo from './ResidentInfo';

const ResidentsList = ({locations}) => {

      return (
            <div className='container-character-card'>
                  {
                        locations?.map(location => (
                              <ResidentInfo characterUrl={location} key={location}/>
                        ))
                  }
            
            </div>
      );
};
export default ResidentsList;