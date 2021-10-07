import * as React from 'react';
import { Header } from './components/Header';
import { Card } from './components/Card';
import { Overlay } from './components/Overlay';
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import './App.scss';

function App() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [items, setItems] = React.useState([])
    const [activeItem, setActiveItem] = React.useState(0)

    const handleClose = () => {
        setIsOpen(false)
    }

    const handleOpen = () => {
        setIsOpen(true)
    }

    const handleNext = () => {
        setActiveItem(previousActive => previousActive + 1)
    }
    const handleBack = () => {
        setActiveItem(previousActive => previousActive - 1)
    }

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
                    <div key={uuidv4()}>
                        <Card key={item.title} item={item} handleClick={handleOpen} />
                        <Overlay items={items} activeItem
                        ={activeItem} open={isOpen} closeOverlay={handleClose} goBack={handleBack} toNext={handleNext} />
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default App;
