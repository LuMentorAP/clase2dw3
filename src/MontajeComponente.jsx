import React, { useEffect, useState } from "react";

const MontajeComponente = ()=> {
     // Estado para almacenar datos
  const [datos, setDatos] = useState(null);

   
     // Efecto que se ejecuta después del montaje
  useEffect(() => {
    // Simulando una llamada a una API
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(data => setDatos(data));

    // Cleanup: Este return se ejecuta al desmontar el componente
    return () => {
      console.log('Componente desmontado');
    };
  }, []); // El segundo parámetro [] asegura que solo se ejecute una vez al montar

    


    return(
        <>
        <h1>Este es el componente de montaje</h1>
        {datos && <p>Datos cargados: {datos[0].title}</p>}

        </>
    )

}
export default MontajeComponente;