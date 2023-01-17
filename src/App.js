import './App.css';
import React from 'react';
import Header from './component/Header';
import Navbar from './component/Navbar';
import Formation from './component/Formation';
import Formulaire from './component/Formulaire';
import Footer from './component/Footer';

function App() {
  return (
    <main className="gc-container">
    <Header/>
    <Navbar/>
    <Formation/>
    <Formulaire/>
    <Footer/>
   

</main>);
  }
export default App;
