
import { useState } from 'react';
import './App.css';
import NavBar from './components/Navbar';
import ImageCard from './components/ImageCard';

function App() {

  const [imgNo, setImgNo] = useState(1);

  const [cards, setCards] = useState([]);

  const changeNumberOfCards = (numberOfImages) => {
    const tempCards = [];
    for(let i = 1; i <= numberOfImages; i++){
      tempCards.push({url: `https://picsum.photos/id/${i}/500`, imgNo: i});
    }
    setCards(tempCards);
  }

  const setNumberOfImages = (numberOfImages) => {
    setImgNo(numberOfImages);
    changeNumberOfCards(numberOfImages);
  }

  return (
    <div>
      <NavBar selectedImgNo={imgNo} setImgNo={setNumberOfImages}/>
      <div className="imgCardContainer">
        {cards.map((card, i) =>{
          return (<ImageCard imgURL={card.url} imgNo={card.imgNo} key={i}/>)
        })}
      </div>
      
    </div>
    
  );
}

export default App;
