import * as React from 'react';
import { Header } from './components/Header'
import { Card } from './components/Card'
import axios from "axios";
import './App.scss';

function App() {
    const [items, setItems] = React.useState([])

    React.useEffect(() => {
        const getResults = async () => {
            const results = await axios.get(`https://hedvig-staging-rest-api.vercel.app/api/perils?contractType=SE_APARTMENT_RENT&locale=en_SE`)
            setItems(results.data)
        }
        getResults()
    }, [])
  return (
    <div className="App">
        <Header />
        <div className='cards-wrapper'>
            <h3 className='cards-wrapper--title'>our coverage</h3>
            <div className='cards'>
                {items.map(item => (
                    <Card key={item.title} item={item} />
                ))}
            </div>
        </div>
    </div>
  );
}

export default App;
