import React from 'react'
import "./nav.css";

export const Nav = ({ navigateTo }) => {  // Recibe navigateTo como prop
  
  const handleCrearPlugin = () => {
    if (navigateTo) {  // Verificamos que la función existe
      navigateTo('crear-plugin');
    }
  };

  const handleEliminar = () => {
    alert('Función eliminar - pendiente de implementar');
  };

  return (
    <div className='navegation'>
      <img className="logo" src="./sound-svgrepo-com.svg" alt="speak" />
      <h1 className='theplugin'> The P1ugin</h1>
      <button 
        className="crea" 
        onClick={handleCrearPlugin}  // Agregamos onClick
      >
         Create   🎚️  
      </button>
      <button 
        className="elimina" 
        onClick={handleEliminar}  // Agregamos onClick
      >
        Delete 🔥
      </button>           
    </div>
  )
}

export default Nav