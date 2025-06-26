import React, { useState } from 'react';
import Nav from './components/navegation/Nav.jsx';
import Card from './components/card/Card.jsx';
import CrearPluginPage from './components/home/CrearPluguin.jsx';
import "./app.css"

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch(currentPage) {
      case 'crear-plugin':
        return <CrearPluginPage navigateTo={navigateTo} />;
      case 'home':
      default:
        return (
          <div>
            <Nav navigateTo={navigateTo} />
            {/* CONTENEDOR PADRE PARA ALINEAR LAS TARJETAS AUTOMÁTICAMENTE */}
            <div className="cards-container">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="App">
      {renderCurrentPage()}
    </div>
  );
}

export default App;