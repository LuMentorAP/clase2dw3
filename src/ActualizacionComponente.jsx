import React, { useEffect, useState } from "react";

const ActualizacionComponente = () => {

 // Estado para almacenar un contador
 const [contador, setContador] = useState(0);

 // Efecto que se ejecuta después de cada actualización
 useEffect(() => {
   console.log('Componente actualizado:', contador);

   // Cleanup: Este return se ejecuta antes de la siguiente actualización
   return () => {
     console.log('Limpiando antes de la próxima actualización');
   };
 }, [contador]); // El segundo parámetro [contador] hace que se ejecute cuando el contador cambia

 const handleIncrement = () => {
   setContador(prevContador => prevContador + 1);
 };

 return (
   <div>
     <h1>Componente Actualización</h1>
     <p>Contador: {contador}</p>
     <button onClick={handleIncrement}>Incrementar</button>
   </div>
 );
};



export default ActualizacionComponente;