import './App.css'
import Card from './Card.jsx'
import { useState } from 'react'

//import { IoFlame } from "react-icons/io5";
//import { IoRainy } from "react-icons/io5";
//import { IoLeaf } from "react-icons/io5";
import { FiAlertOctagon } from "react-icons/fi";
import { IoRainy, IoFlame, IoLeaf } from "react-icons/io5";

export default function App() {
  // Esse estado manipula qual som está ativo no momento
  const [cardStates, setCardStates] = useState({
    rain: false,
    fire: false,
    forest: false
  });

  var [titulo, setTitulo] = useState("Sons da Vida!");

  // Função para alternar o estado do card clicado
  const toggleCardState = (cardType) => {
    
    setCardStates(previous => ({ // previous é o estado anterior de todos os cards
      ...previous, // Mantém os estados dos outros cards
      [cardType]: !previous[cardType] // Alterna o estado do card clicado
      // se rain for true, vira false
      // se rain for false, vira true
    }));
  };

  //var pessoa = "Déborah";
  var pessoa = {
    nome: "Déborah",
    idade: 21,
    cidade: "São Paulo",
    local_nascimento: "Pernambuco",
    linkedin: "https://www.linkedin.com/in/deborah-mayra-2a156329a/",
    profissao: "Desenvolvedora Front-End",
    proane: true,
    cabelo: "pretos",
    olhos: "castanhos",
    altura: 1.59,
    livros: ["O Senhor dos Anéis", "A Revolução dos Bichos", "Heidi", "Diário de um Banana"]
  };

  const playSound = (soundType) => {

    const audio = new Audio();

    switch (soundType) {
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
          isInverted={cardStates.rain}
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
