import styled from 'styled-components';
import {FilterCard} from './components/FilterCard';
import {Card} from './components/Card';
import {useDB} from './context/Provider';

function App() {

  const data = useDB();
  const db = data.postings;
  
  return (
    <Container>
      <aside>
        <FilterCard/>
      </aside>
      <main>
        {
          db.map((data, i) => {
            return <Card 
                      key={i}
                      publication={data.publication_plan}
                      title={data.title}
                      location={Object.values(data.posting_location)}
                      description={data.posting_description}
                      image={data.posting_picture}
                      price={data.posting_prices}
                  />
          })
        }
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
