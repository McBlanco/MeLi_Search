# Aplicación: Meli Search

Tabla de contenidos:
1. [ Introducción ](#introduction)
1. [ Arquitectura de la aplicación](#architecture)
    1. [ Patrones de diseño ](#designPatterns)
    1. [ Dependencias ](#dependences)
    1. [ Descargar y compilar el proyecto ](#compile)

- - -

<a name="introduction"></a>
# Introducción
[Meli Search][azurewebsite] es una aplicación web que se alimenta de la API pública de Mercado Libre de búsqueda de ítems.

Mi desarrollo está basado en mis últimos aprendizajes desde el 16 de Julio de 2019, día en que llegué a Barcelona (España) para aprender sobre la tecnología de Microsoft SharePoint Framework (SPFX), para crear componentes webs para intranets en la nube con SharePoint Online. En resumen, una aplicación de SPFX está creada principalmente con los lenguajes y herramientas: TypeScript, SCSS, React, NodeJS, Gulp.

Una vez que los comprendí y dominé, trabajé en el desarrollo de nuevas features de un componente de SPFX existente. Y como tengo los conocimientos frescos, he optado por hacer mi aplicación web con React y publicarla en un host en la nube de Microsoft, Azure.

La aplicación está disponible en https://melisearch.azurewebsites.net

<a name="architecture"></a>
# Arquitectura de la aplicación
A partir del requerimiento:
>_desarrollar una app utilizando las APIs de
MercadoLibre, que le permita a un usuario ver los detalles de un producto"_

he procedido con la creación de una nueva aplicación en React con NodeJS y el lenguaje compilado TypeScript.
>       npx create-react-app meli_search

<a name="dessignPatterns"></a>
## Patrones de diseño
ReactJS es una librería de JavaScript para desarrollar interfaces de usuario, con manejo de estados, basado en la creación de componentes (que pueden hacer de vistas o controles de usuario). Sin embargo cuando la aplicación crece, se vuelve complejo y tedioso el manejo de estados, ya que deben transferirse de componentes padres a hijos; por ello he integrado la App con Redux, un manejador de estados que se pueden acceder globalmente desde todos los componentes conectados. Gracias a esto, también he implementado con facilidad la localización de literales e idiomas para convertirla en una aplicación multi-idioma.
* Modelo
    * Mi idea era utilizar modelos o clases a partir de las definiciones de los métodos de la API de Mercado Libre, aunque por falta de tiempo he aprovechado la flexibilidad en el tipado que ofrece TypeScript para trabajar con objetos de tipo genérico. Si bien esto puede elevar la cantidad de errores producidos, he añadido las validaciones correspondientes para evitarlos; además el uso de interfaces o contratos en el código contribuye a evitar errores no controlados y mejora su legibilidad y entendimiento.
* Vista
    * Las vistas de React son 'componentes de React', y cada uno tiene su propia definición de propiedades y métodos. He creado los componentes para el buscador, los resultados, el detalle y el selector de idiomas. Me valí mayormente de los controles de usuario open-source de Microsoft Office UI Fabric, y también de otras utilidades para las aplicaciones React. Con Redux he adaptado las pantallas para soportar la característica multi-idioma y el refresco de datos.
* Controlador
    * En la capa de 'providers' (o servicios) están los controladores para hacer las llamadas a los módulos de Search e Items de la API de Mercado Libre. De nuevo Redux tiene un papel principal en la conexión con las vistas al despachar desde allí las acciones para obtener los datos y luego procesarlos con los 'reducers' y volcarlos finalmente por pantalla. En este caso los controladores son 'searchProvider' e 'itemProvider'.

    También era mi idea implementar los tests de la interfaz, básicamente comprobar que no hay errores en el renderizado de los componentes, y de las acciones de Redux, y los métodos de los providers. Aunque durante los primeros 4 días del ejercicio tuve una carga laboral muy pesada y sólo pude dedicar 1 o 2 horas cada día. En los días 5 y 6 los he dedicado por completo a terminar el ejercicio, pero aún así no fue suficiente para todos los detalles por lo que prioricé lo que es crítico para que la aplicación se pueda entregar y probar. Aunque habiendo planificado minuciosamente la arquitectura desde un principio, y desarrollando con prolijidad en cada momento y con versionado de la resolución de cada tarea (ver el historial de commits), se pueden evitar en gran medida los errores a posterior. Para el tema de manejo de errores desde el lado del desarrollador: Redux permite una trazabilidad visible desde la consola de Chrome con la extensión de Redux DevTools, para conocer el historial de los cambios de estados, despacho de acciones, o errores producidos, también lo he implementado en el código. Desde el lado del usuario no lo he trabajado casi, solamente en el caso de que una búsqueda devuelva 0 resultados.

    Entiendo que el objetivo del ejercicio es desarrollar una aplicación para móviles, pero nunca lo he hecho antes. Conociendo los paradigmas de React y Redux, es 'prácticamente lo mismo' el desarrollo de Apps para móviles con 'React Native' y 'Expo'. Necesitaba entregar una aplicación que sea responsiva y se vea bien desde un teléfono, se puede acceder al sitio web de Azure desde un navegador y probarlo en una pantalla pequeña. 
    También esto servirá para consolidar mis conocimientos y forma de trabajar.

<a name="dependences"></a>
## Dependencias
* [React][reactjs]
* [Redux][reduxjs]
* [Office UI Fabric][office-ui-fabric]
* React-Localization
* React-Number-Format
* React-Responsive-Carousel
* Moment
* Jest

<a name="compile"></a>
## Descargar y compilar el proyecto

### Requerimientos previos
* NodeJS LTS 10.4

### Paso a paso
1. Descargar o clonar el código del repositorio.
2. Ejecutar el comando 'npm install' estado ubicado en el directorio donde se descargó el código para descargar todas las dependencias.
3. Ejecutar el comando 'npm start' para inciar la aplicación.

[azurewebsite]: https://melisearch.azurewebsites.net
[reactjs]: https://reactjs.org/
[reduxjs]: https://redux.js.org/
[office-ui-fabric]: https://developer.microsoft.com/en-us/fabric#/controls/web
