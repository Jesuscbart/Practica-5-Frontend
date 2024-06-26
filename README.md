# Práctica 5 - C - She's leaving home

**Author:** Jesús Cuesta Bartolomé

**Date:** 17/05/2024

------

Bienvenidos a la última práctica de la asignatura.  

Se centrará en el uso de cookies en servidor para el guardado de datos; también se dederán/podrán utilizar a la par muchos otros conceptos de la asignatura como hooks de estado, efecto, señales, componentes, páginas dinámicas y más.  

Se debe crear una aplicación web con la cual, buscar, filtrar y guardar películas fotográficas para nuestros proyectos fílmicos.

Mediante el uso del API  https://filmapi.vercel.app/api/films se obtendrá información de todas las películas disponibles en el mercado.

En nuestra página web dispondrá de las siguientes funcionalidades:
* Filtro de peli por marca (debo de poder seleccionar una marca, no escribirla)
* Filtro por sensibilidad ISO (seleccionar)
* Filtro por formato (seleccionar)
* Filtro por color o blanco&negro (seleccionar)
* Filtro por nombre (escribiendo)
* Todos los anteriores filtros en una página reactiva sin navegación que actualice el listado de películas mostradas según añado filtros. (En el listado, cada película tendrá que tener un resumen de sus datos e imagen de la misma)
* Página única de cada película con todos sus datos al completo.

------> LAS IMPORTANTES
* En el listado debo de poder añadir cada película de forma individual a un proyecto. Se podrán crear diferentes proyectos en los que guardar listados de películas. (Todos estos datos se guardarán de manera local en cookies accesibles tanto desde cliente como servidor)
* Al dar a la opción de añadir una peli, tendrá que salir un modal  https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal desde el cual se pueda.
    * Crear un proyecto
    * Añadir dicha peli seleccionada a un proyecto en concreto
* Debe existir una página a parte en la que ver todos nuestros proyectos con sus respectivas películas. Todos los datos de esta página se obtendrán de una cookie (o varias) y será completamente renderizda en servidor, excepto por dos islas que me permitan en un MODAL seleccionar (no escribir) un proyecto y eliminarlo, y en otro MODAL eliminar películas de un proyecto en concreto.
* Como último punto opcional podréis añadir middleware a la página de proyectos mostrandola solo en caso de que exista al menos uno de estos, en caso contrario redirigir a una página de error indicando la falta de proyectos y botón de redirección a la página principal.
--------
La práctica será desarrollada en el framework Fresh.

La página web se tendrá que desplegar en Deno deploy. En la entrega tendré que ver una url a visitar y un link al repositorio de GitHub donde hayáis subido el código con su respectiva release.

Más avisos para caminantes, antes de ver nada de vuestro código abriré la página en mi navegador de confianza (el cuál no es netscape, tranquilos). La primera visualización gráfica afectará gravemente a mi opinión sobre el código que leeré Y EJECUTARÉ LOCALMENTE posteriormente.
