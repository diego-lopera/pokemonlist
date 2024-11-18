# Guía de inicio de pokemonlist


## Instrucciones para ejecutar la aplicación localmente

Sigue estos pasos para ejecutar la aplicación en tu entorno local:

### 1. Clona el repositorio

Primero, clona este repositorio en tu máquina local usando el siguiente comando:

```bash
git clone https://github.com/diego-lopera/pokemonlist
```

### 2. Instala las dependencias

Accede a la carpeta del proyecto y luego instala las dependencias necesarias utilizando el siguiente comando:

```bash
cd pokemonlist
npm install
```

### 3. Ejecuta la aplicación en modo de desarrollo

Una vez que las dependencias estén instaladas, puedes ejecutar la aplicación en tu entorno local con el siguiente comando:

```bash
npm start
```

Esto iniciará la aplicación en modo de desarrollo. Puedes abrir http://localhost:3000 en tu navegador para ver la aplicación en funcionamiento.

La página se recargará automáticamente cuando realices cambios en los archivos del proyecto. También podrás ver errores de lint en la consola.

### Srcipts disponibles

En el directorio del proyecto, puedes ejecutar los siguientes comandos:

#### npm run build
```bash
npm run build
```
Genera una versión optimizada de la aplicación para producción en la carpeta build.

Este comando optimiza y empaqueta React en modo de producción para obtener el mejor rendimiento posible. El build estará minificado y los nombres de los archivos incluirán los hashes.

Tu aplicación estará lista para ser desplegada.

#### npm run eject
```bash
npm run eject
```

#### Nota: esta operación es irreversible. Una vez que eject sea ejecutado, no podrás volver atrás.

Si no estás satisfecho con la configuración predeterminada, puedes ejecutar eject en cualquier momento. Esto eliminará las dependencias de construcción del proyecto y copiará los archivos de configuración directamente a tu proyecto, dándote control total sobre ellos.

A partir de ese momento, podrás personalizar la configuración de Webpack, Babel, ESLint, entre otras, según lo desees. Sin embargo, si no necesitas esa personalización, no es necesario ejecutar eject, ya que la configuración predeterminada es adecuada para proyectos pequeños y medianos.

### Dependencias y librerías utilizadas

Este proyecto utiliza las siguientes dependencias principales:

- React: Librería para la construcción de interfaces de usuario.
- React-dom: Proporciona métodos para interactuar con el DOM.
- React-scripts: Utilitarios para gestionar las configuraciones y scripts de la aplicación.
- Axios: Para realizar peticiones HTTP.
- React-router-dom: Para manejar la navegación dentro de la aplicación.

Para más detalles sobre las dependencias, puedes consultar el archivo package.json del proyecto.

### Desarrollador por: 
#### Diego Alexis Lopera Moncada