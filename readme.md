## Ejercicio Express: Mostrar el Path en Cada Ruta

- Objetivo
  El objetivo de este ejercicio es construir una aplicación simple en Express donde cada ruta muestre su propio path en la respuesta. Esto ayudará a entender cómo acceder a la información de la URL en Express.

Instrucciones

1. Configuración del Proyecto:
   Instala Express con npm install express.

2. En el archivo llamado app.js comienza tu aplicación Express.

3. Rutas y Mostrar el Path:

- Define una ruta principal (/) que muestre un mensaje indicando que es la ruta principal y muestre el path actual.
- Define otras rutas (/about, /contact, u otras de tu elección) que muestren mensajes específicos para cada ruta y también muestren el path actual.
- Crea una navegación para poder clickar y que vaya en cada ruta. Crealá en cada plantilla de la ruta.
- Utiliza `req.path` para obtener el path actual en cada ruta.

4. Ejecución de la Aplicación:

Ejecuta la aplicación con node app.js y visita las rutas (http://localhost:3000/, http://localhost:3000/about, http://localhost:3000/contact) en tu navegador.
Observa cómo cada ruta muestra su propio mensaje y el path actual.

- Pistas

* En Express, puedes acceder al path actual de la solicitud a través de `req.path`.
* Crea varias rutas en tu aplicación utilizando `app.get`.
* En cada ruta, utiliza `req.path` para obtener el path actual y muestra esa información en la respuesta.
* Ejecuta la aplicación y visita cada ruta en tu navegador para ver el resultado.

Experimenta con diferentes rutas y mensajes para familiarizarte con cómo Express maneja las rutas y accede a la información de la URL

# 3-1-node-express-ejercicio-neb2wcuw

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/AlesandroQG/3-1-node-express-ejercicio-neb2wcuw)
