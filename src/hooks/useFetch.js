import { useState, useEffect } from "react";
import axios from "axios"; // Importamos axios para realizar las peticiones HTTP

/**
 * Hook personalizado para obtener datos de una API de forma asincrónica.
 * Utiliza axios para realizar la petición y maneja el estado de la respuesta, el estado de carga y los errores.
 * 
 * @param {string} url - La URL de la API desde la cual se van a obtener los datos.
 * @returns {Object} - Un objeto que contiene los datos obtenidos, el estado de carga y cualquier error.
 */
export const useFetch = (url) => {
  // Definimos el estado para almacenar los datos, el estado de carga y el error
  const [data, setData] = useState([]); // Los datos que se van a obtener
  const [loading, setLoading] = useState(true); // Estado que indica si los datos están siendo cargados
  const [error, setError] = useState(null); // Estado que contiene el mensaje de error si ocurre algún problema

  // Usamos useEffect para realizar la solicitud cuando se cargue el componente
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Realizamos la solicitud a la API
        const response = await axios.get(url);
        setData(response.data); // Guardamos los datos obtenidos en el estado
      } catch (err) {
        // Si ocurre un error durante la solicitud, lo guardamos en el estado de error
        setError(err.message);
      } finally {
        // Independientemente de si la solicitud fue exitosa o no, cambiamos el estado de carga a falso
        setLoading(false);
      }
    };

    // Llamamos a la función fetchData para realizar la solicitud
    fetchData();
  }, [url]); // El efecto se vuelve a ejecutar cuando cambia la URL

  // Devolvemos los valores de data, loading y error para que el componente los pueda usar
  return { data, loading, error };
};
