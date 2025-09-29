import './App.css'
import Card from './Card.jsx'
import { useState } from 'react'

//import { IoFlame } from "react-icons/io5";
//import { IoRainy } from "react-icons/io5";
//import { IoLeaf } from "react-icons/io5";
import { FiAlertOctagon } from "react-icons/fi";
import { IoRainy, IoFlame, IoLeaf } from "react-icons/io5";

export default function App() {
  const [cardStates, setCardStates] = useState({
    rain: false,
    fire: false,
    forest: false
  });

  var [titulo, setTitulo] = useState("Sons da Vida!");
  
  const toggleCardState = (cardType) => {
    setCardStates(prev => ({
      ...prev,
      [cardType]: !prev[cardType]
    }));
  };

  const playSound = (soundType) => {

    const audio = new Audio();

    switch(soundType) {
      case 'rain':
        // Using a nature sounds API or local file
        console.log('Tocar som de chuva...');
        audio.src = '/ambient-noise.mp3';
        audio.play();
        break;
      case 'fire':
        console.log('Tocar som de fogueira...');
        audio.src = '/ambient-noise-2.mp3';
        audio.play();
        break;
      case 'forest':
        console.log('Tocar som de floresta...');
        audio.src = '/ambient-noise.mp3';
        audio.play();
        break;
    }
  };



  return (
    <div className="app">
      <header className="app-header">
        <h1>{titulo}</h1>
        <p>Relaxe e concentre-se com sons da natureza</p>
      </header>

      <main className="cards-container">
        <Card
          icon={<IoRainy />}
          title="Som de Chuva"
          description="Chuva relaxante para meditação"
          isInverted={false}
          onClick={() => {
            playSound('rain');
            toggleCardState('rain');
            setTitulo("Som de Chuva");
          }}
        />
        <Card
          icon={<IoFlame />}
          title="Som de Fogueira"
          description="Crepitar aconchegante do fogo"
          isInverted={cardStates.fire}
          onClick={() => {
            playSound('fire');
            toggleCardState('fire');
            setTitulo("Som de Fogueira");
          }}
        />
        <Card
          icon={<IoLeaf />}
          title="Som de Floresta"
          description="Sons calmantes da natureza"
          isInverted={cardStates.forest}
          onClick={() => {
            playSound('forest');
            toggleCardState('forest');
            setTitulo("Sons calmantes da natureza");
          }}
        />
      </main>
    </div>
  )
}
