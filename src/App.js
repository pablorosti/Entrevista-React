import {useState} from 'react';
import styled from 'styled-components';
import {FilterCard} from './components/FilterCard';
import {Card} from './components/Card';
import {useDB} from './context/Provider';

function App() {

  const data = useDB();
  const db = data.postings;

  const [search, setSearch] = useState(null);
  
  console.log(search)
  console.log(db)

  return (
    <Container>
      <aside>
        <FilterCard setSearch={setSearch}/>
      </aside>
      <main>
        <div>
          {
            
            db.map((data) => {
              return <Card 
                        key={data.posting_id}
                        id={data.posting_id}
                        publication={data.publication_plan}
                        title={data.title}
                        location={Object.values(data.posting_location)}
                        description={data.posting_description}
                        image={data.posting_picture}
                        price={data.posting_prices}
                        publish_date={data.publish_date}
                        
                      />
            })
          }
        </div>
      </main>
    </Container>
  );
}

const Container = styled.div`
  margin:1rem;

  @media(min-width:768px){
    max-width:900px;
    margin:1rem auto;
    
    display:grid;
    gap:1rem;
    grid-template-columns:2fr 5fr;
  }
  
`;

export default App;
