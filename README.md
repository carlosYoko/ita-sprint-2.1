# Debounce Function

Aplicación debounce function utilizando TypeScript y el patrón MVC.
Incluye interfaz CLI, testing y frontend básico en HTML.<br>
#####Trabajo del Sprint 2.1 de IT-Academy en la especialización de Node.js.<br>

Una función de debounce es una técnica para controlar la frecuencia de ejecución de una función en respuesta a eventos como clics, desplazamientos u otras acciones del usuario. El objetivo de esta función es evitar que se ejecute demasiado rápida y repetidamente, especialmente cuando los eventos ocurren con mucha frecuencia.

Básicamente, la función de debounce retrasa la ejecución hasta que ha transcurrido un cierto tiempo sin que ocurra ningún otro evento.

- La función debe ser implementada utilizando TypeScript y TDD.

⭐ Nivel 1
Utiliza pruebas para verificar la funcionalidad de la función de debounce.

⭐⭐ Nivel 2
Crea una interfaz de línea de comandos (CLI) para verificar la funcionalidad de la función de debounce.

⭐⭐⭐ Nivel 3
Crea un front-end para verificar la funcionalidad de la función de debounce.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

## Instalación

Para clonar el repositorio e instalar las dependencias necesarias, usa los siguientes comandos:

```bash
git clone https://github.com/carlosYoko/ita-sprint-2.1.git
cd ita-sprint-2.1
npm install
```

## Comandos

### Para transpilar el proyecto:

Para transpilar el proyecto, usa el siguiente comando:

```bash
npm run build
```

### Ejecutar la aplicacion por CLI

Para ejecutar la aplicacion mediante CLI, usa el siguiente comando:
Este comando ejecuta el CLI del proyecto compilado.

```bash
npm run start
```

### Ejecutar tests

Para ejecutar los tests, usa el siguiente comando:

```bash
npm run test
```

## Frontend

## Funcionalidades adicionales

En el frontend, he incluido salidas por la consola para proporcionar información sobre las siguientes acciones:

- **Número de clicks:** Cada vez que se hace un click se mostrará tambien por consola.

- **Número de veces que se ha ejecutado la funcion:** Si se llama a la función antes de que haya acabado el timer, no se sumaran los clicks y mostrara un mensaje por consola.

## Licencia

Este proyecto está bajo la Licencia MIT - consulta el archivo LICENSE.md para más detalles.
