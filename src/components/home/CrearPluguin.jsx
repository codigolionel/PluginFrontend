import React, { useState } from 'react';

function CrearPluginPage({ navigateTo }) {
  const [formData, setFormData] = useState({
    id: '',
    nombre: '',
    tipo: '',
    empresa: '',
    gratis: false,
    fechaAplicacion: ''
  });

  const handleInputChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del plugin:', formData);
    alert('Plugin created successfully!');
    
    setFormData({
      id: '',
      nombre: '',
      tipo: '',
      empresa: '',
      gratis: false,
      fechaAplicacion: ''
    });
    
    navigateTo('home');
  };

  const handleVolver = () => {
    navigateTo('home');
  };

  return (
    <div style={{ height: '70%'}}>
      <h1 style={{margin:'0', paddingTop:'20px'}}>Create New Plugin</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
        
        {/* Nombre Plugin */}
        <div>
          <label htmlFor="nombre" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Plugin name:
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            placeholder="Plugin name"
            style={{ 
              width: '50%', 
              padding: '8px', 
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
        </div>

        {/* Tipo */}
                <div>
          <label htmlFor="tipo" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            type:
          </label>
          <input
            type="text"
            id="tipo"
            name="tipo"
            value={formData.tipo}
            onChange={handleInputChange}
            placeholder="Type"
            style={{ 
              width: '50%', 
              padding: '8px', 
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
        </div>

        {/* Empresa */}
        <div>
          <label htmlFor="empresa" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Company:
          </label>
          <input
            type="text"
            id="empresa"
            name="empresa"
            value={formData.empresa}
            onChange={handleInputChange}
            placeholder="Company name"
            style={{ 
              width: '50%', 
              padding: '8px', 
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
        </div>

        {/* Free (Sí o No) */}Free?:
       <div style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '20px', margin: 'auto'
        }}>
  {/* Checkbox para YES */}
  <div style={{ display: 'flex', alignItems: 'center', gap: '5px',  }}>
    
    <input
      type="checkbox"
      id="gratis-yes"
      name="gratis"
      checked={formData.gratis === true}
      onChange={() => setFormData(prev => ({ ...prev, gratis: true }))}
    />
    <label htmlFor="gratis-yes" style={{ fontWeight: 'bold'}}>
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
    <label htmlFor="gratis-no" style={{ fontWeight: 'bold'}}>
      No
    </label>
  </div>
</div>

        {/* Aplicación a: */}
        <div>
          <label htmlFor="fechaAplicacion" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Application to:
          </label>
          <input
            id="fechaAplicacion"
            name="fechaAplicacion"
            value={formData.fechaAplicacion}
            onChange={handleInputChange}
            placeholder="Aplication"
            style={{ 
              width: '50%', 
              padding: '8px', 
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
        </div>

        {/* Botones */}
        <div style={{ display: 'flex', margin:'auto' }}>
          <button 
            onClick={handleSubmit}
            style={{
              margin:'10px',
              padding: '10px 20px',
              backgroundColor: 'blue',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Create Plugin
          </button>
          
          <button 
            onClick={handleVolver}
            style={{margin:'10px',
              padding: '10px 20px',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Return
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default CrearPluginPage;
