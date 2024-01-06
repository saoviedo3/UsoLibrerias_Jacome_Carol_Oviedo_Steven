// Importar la librería React y ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// Crear el primer componente con estilos
class ComponenteUno extends React.Component {
  render() {
    return <h1 style={{ color: 'purple', textAlign: 'center' }}>Este es el Componente 1</h1>;
  }
}

// Crear el segundo componente con estilos
class ComponenteDos extends React.Component {
  render() {
    return <h1 style={{ color: 'green', textAlign: 'center' }}>Este es el Componente 2</h1>;
  }
}

// Crear la aplicación que utiliza ambos componentes
class App extends React.Component {
  render() {
    return (
      <div style={{ 
        fontFamily: 'Arial', 
        padding: '10px', 
        backgroundColor: 'lightblue', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        height: '100vh' 
      }}>
        <ComponenteUno />
        <ComponenteDos />
      </div>
    );
  }
}

// Exportar la aplicación
export default App;
