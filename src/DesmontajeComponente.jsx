import React, { useEffect } from "react";

const DesmontajeComponente = () => {
   // Efecto que se ejecuta después del montaje
   useEffect(() => {
    // Cleanup: Este return se ejecuta al desmontar el componente
    return () => {
      console.log('Componente Desmontaje');
    };
  }, []); // El segundo parámetro [] asegura que solo se ejecute una vez al montar

  return (
    <div>
      <h1>Componente Desmontaje</h1>
      <p>Este componente será desmontado pronto.</p>
    </div>
  );
     

}

export default DesmontajeComponente;