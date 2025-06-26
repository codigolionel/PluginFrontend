import React, { useState } from 'react'
import "./Card.css"

const Card = () => {
  // Estado para manejar los datos del formulario
  // useState es un hook que nos permite manejar estado en componentes funcionales
  const [formData, setFormData] = useState({
    nombre: '',
    tipo: '',
    empresa: '',
    free: false, // boolean para el checkbox
    aplicacion: ''
  });

  // Función para manejar cambios en los inputs del formulario
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Si es checkbox, usamos 'checked', si no, usamos 'value'
    setFormData(prevData => ({
      ...prevData, // spread operator para mantener los datos anteriores
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Función para manejar el botón Editar
  const handleEdit = () => {
    console.log('Editando plugin:', formData);
    alert('Funcionalidad de editar - Ver consola para los datos');
  };

  // Función para manejar el botón Eliminar
  const handleDelete = () => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este plugin?')) {
      console.log('Eliminando plugin:', formData);
      // Limpiar el formulario
      setFormData({
        nombre: '',
        tipo: '',
        empresa: '',
        free: false,
        aplicacion: ''
      });
      alert('Plugin eliminado');
    }
  };

  return (
    <div className='container'>
      {/* Tu imagen original */}
      <img 
        className="imagens" 
        src="https://cdn11.bigcommerce.com/s-hvzya2q3vy/images/stencil/1280x1280/products/48845/132755/sldsdvmr_159202__08999.1688555311.png?c=1&imbypass=on" 
        alt="Plugin" 
      />
      
      {/* Formulario con los campos solicitados */}
      <div className="form-section">
        <h3>Plugin Information</h3>
        
        {/* Campo Nombre Plugin */}
        <div className="field-group">
          <label htmlFor="nombre">Plugin name:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            placeholder="Plugin name.." 
          />
        </div>

        {/* Campo Tipo */}
        <div className="field-group">
          <label htmlFor="tipo">Type:</label>
            <input
            type="text"
            id="tipo"
            name="tipo"
            value={formData.empresa}
            onChange={handleInputChange}
            placeholder="Eq, comp, delay... etc"
          />
        </div>

        {/* Campo Empresa */}
        <div className="field-group">
          <label htmlFor="empresa">Company:</label>
          <input
            type="text"
            id="empresa"
            name="empresa"
            value={formData.empresa}
            onChange={handleInputChange}
            placeholder="Wave, SSL, DDL.. etc"
          />
        </div>
Free?:
    <div style={{ color: 'white', alignItems: 'center', gap: '20px' }}>
  {/* Checkbox para YES */}
  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
    <input
      type="checkbox"
      id="gratis-yes"
      name="gratis"
      checked={formData.gratis === true}
      onChange={() => setFormData(prev => ({ ...prev, gratis: true }))}
    />
    <label htmlFor="gratis-yes" style={{ fontWeight: 'bold' }}>
      Yes
    </label>
  </div>

  {/* Checkbox para NO */}
  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
    <input
      type="checkbox"
      id="gratis-no"
      name="gratis"
      checked={formData.gratis === false}
      onChange={() => setFormData(prev => ({ ...prev, gratis: false }))}
    />
    <label htmlFor="gratis-no" style={{ fontWeight: 'bold' }}>
      No
    </label>
  </div>
</div>

        {/* Campo Aplicación */}
        <div className="field-group">
          <label htmlFor="aplicacion">Aplication:</label>
          <textarea
            id="aplicacion"
            name="aplicacion"
            value={formData.aplicacion}
            onChange={handleInputChange}
            rows="3"
            placeholder="Describe the application of the plugin"
          />
        </div>
      </div>

      {/* Tus botones originales pero con nueva funcionalidad */}
      <div className='but'>
        <button id='editar' onClick={handleEdit}>Edit</button>
        <button id='eliminar' onClick={handleDelete}>Delete</button>
        </div>

      {/* Sección para ver los datos (debug)
      <div className="debug-info">
        <h4>Datos actuales:</h4>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div> */}
    </div>
  )
}

export default Card