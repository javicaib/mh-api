
# Monsters API

Este proyecto es una API construida con Node.js y Express que permite acceder a información sobre monstruos almacenada en una base de datos MongoDB. Proporciona varios endpoints para obtener todos los monstruos o realizar búsquedas específicas basadas en su nombre, debilidad o tipo.

## Características

- **Endpoint `/all`**: Devuelve una lista de todos los monstruos disponibles en la base de datos. Permite paginación a través del parámetro de consulta `page`.
- **Endpoint `/search`**: Permite realizar búsquedas filtradas de monstruos utilizando los parámetros `name`, `weak` o `type`.

## Cómo funciona

1. **Paginación en `/all`**: Puedes utilizar el parámetro `page` para paginar los resultados de los monstruos.
2. **Búsqueda por filtro en `/search`**:
    - `name`: Filtra los monstruos por nombre.
    - `weak`: Filtra los monstruos por su debilidad.
    - `type`: Filtra los monstruos por su tipo.
    - Si no se proporciona un parámetro válido, se devuelve un error 400.

## Requisitos

- Node.js
- MongoDB
- Dependencias de Node.js (`cors`, `express`)

## Ejecución

1. Clona el repositorio y navega hasta la carpeta del proyecto.
2. Instala las dependencias necesarias:
   ```
   npm install
   ```
3. Asegúrate de tener MongoDB configurado y corriendo.
4. Ejecuta el servidor:
   ```
   npm start
   ```

## Variables de entorno

- `PORT`: El puerto en el que correrá el servidor (por defecto 3001).
