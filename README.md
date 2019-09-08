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
* Modelo
* Vista
* Controlador

<a name="dependences"></a>
## Dependencias
* React
* Redux
* Office UI Fabric
* React-Localization
* SASS-Loader
* React-Number-Format

<a name="compile"></a>
## Descargar y compilar el proyecto

### Requerimientos previos
* NodeJS LTS 10.4

### Paso a paso

[azurewebsite]: https://melisearch.azurewebsites.net