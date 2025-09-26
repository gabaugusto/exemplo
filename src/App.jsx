import './App.css'
import Card from './Card.jsx'

//import { IoFlame } from "react-icons/io5";
//import { IoRainy } from "react-icons/io5";
//import { IoLeaf } from "react-icons/io5";
import { FiAlertOctagon } from "react-icons/fi";
import { IoRainy, IoFlame, IoLeaf } from "react-icons/io5";

export default function App() {
  const playSound = (soundType) => {
    const audio = new Audio();
    switch(soundType) {
      case 'rain':
        // Using a nature sounds API or local file
        console.log('Tocar som de chuva...');
        break;
      case 'fire':
        console.log('Tocar som de fogueira...');
        break;
      case 'forest':
        console.log('Tocar som de floresta...');
        break;
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Sounds</h1>
        <p>Relaxe e concentre-se com sons da natureza</p>
      </header>

      <main className="cards-container">
        <Card
          icon={<IoRainy />}
          title="Som de Chuva"
          description="Chuva relaxante para meditação"
          onClick={() => playSound('rain')}
        />
        <Card
          icon={<IoFlame />}
          title="Som de Fogueira"
          description="Crepitar aconchegante do fogo"
          onClick={() => playSound('fire')}
        />
        <Card
          icon={<IoLeaf />}
          title="Som de Floresta"
          description="Sons calmantes da natureza"
          onClick={() => playSound('forest')}
        />
      </main>
    </div>
  )
}
