---
id: pruebas
title: Plan de pruebas
---

**Version:** Draft  
**Date:** 5 de Diciembre, 2024  
**Authors:** Cappiello, Leonel  

---

## Tabla de contenido
1. [Introducción](#1-introducción)  
    1.1 [Propósito del Plan de pruebas](#11-resumen-del-proyecto)  
    1.2 [Alcance del Testing](#12-entregables-del-proyecto)  
    1.3 [Objetivos del Testing](#13-materiales-de-referencia)    


---

| Version      | Autor            | Descripcion                                            | Fecha |
|--------------|--------------------|----------------------------------------------------------|----------------|
| Draft        | Cappiello Leonel| Primera version sujeta a revisiones                | 5/12/2024  |


| Empresa                |                                          |
|------------------------|------------------------------------------|
| Proyecto               | Ecommerce Mega Store                     |
| Fecha de preparación   | 5/12/2024                               |
| Cliente                | Mega Store S.A                          |
| Patrocinador principal | Juan José Vanzetti - Laura Toselli      |
| Gerente del proyecto    | Cappiello Leonel                        |

---


## 1. Introducción

---

### 1.1 Propósito del Plan de pruebas
El objetivo principal de este plan de pruebas es documentar los casos de prueba en el desarrollo de MegaStore, una plataforma ecommerce, de manera que
se  puedan sistematizar las pruebas de calidad y verificar la funcionalidad del sistema.

---

### 1.2 Alcance del Testing
Las pruebas cubriran ciertas funcionalidades especificadas en el backlog dentro del alcance del proyecto, asegurando el funcionamiento de cada 
componente.

---

### 1.3 Objetivos del Testing

El principal objetivo busca garantizar calidad sobre las funcionalidades desarrolladas para el ecommerce, validando elementos claves, 
evitando errores y posibles fallas a futuro.

---

## 2. Alcance de las pruebas

---

### 2.1 Elementos de pruebas

Modulos que aborda este plan de pruebas:

 * Gestion de Usuarios
Incluye el inicio de sesion, registro, recuperacion de contraseña y roles.

 * Gestion de Productos
Incluye la visualizacion de productos en el panel principal de la aplicacion.

---

### 2.2 Funcionalidades a probar

 * Gestion de usuarios: Crear, visualizar y recuperar usuarios.

 * Gestion de productos: Crear, visualizar y eliminar productos.

---

### 2.3 Enfoque de pruebas

Se realizaran:

 * Pruebas unitarias: Para validar componentes individuales
 * Pruebas del Sistema: Evaluar el sistema completo mediante pruebas automatizadas E2E.

---

## 3. Criterios de aceptacion o rechazo

### 3.1 Criterios de Aceptación o Rechazo

Las pruebas serán consideradas exitosas y cumplidas cuando los casos de prueba sean superados sin errores
validando las funcionalidades del sistema.

---

## 4. Entregables

---
<a href="/docs/casosDePrueba/">Casos de prueba</a>

---

## 5. Recursos

---

### 5.1 Herramientas de pruebas

---
Herramientas utilizadas para testing en Megastore:

 - Jest para pruebas unitarias
 - Selenium y Cucumber para pruebas automatizadas E2E
 - Postman e interfaz de usuario para pruebas manuales

---

### 5.2 Personal

---
 * El equipo de pruebas está compuesto por:
    * Analista de pruebas, encargado de crear pruebas automaticas y manuales
---

## 6. PLANIFICACION Y ORGANIZACION

---

### 6.1 Procedimientos para las pruebas
---

 * Las pruebas manuales y automatizadas se ejecutan de acuerdo con lo establecido en el plan
 de pruebas.
 Las pruebas automatizadas buscando asegurar la estabilidad de los modulos principales utilizando Jest y Selenium con Cucumber.
 Las pruebas manuales se centran en verificar la funcionalidad de la interfaz empleando Postman y la interfaz de usuario del sistema.

---

### 6.2 Premisas y metricas
---

 * Premisas:
Las pruebas automatizadas cubrirán el 60% de las funcionalidades críticas de la
 plataforma, mientras que el 40% restante se cubrirá mediante pruebas
 manuales.

 * Metricas:
Se considerara que el plan de pruebas ha cumplido su objetivo si:
    * Alcanza un 50% de cobertura de pruebas unitarias y de intregracion.
    * Mas del 30% de los casos dep rueba criticos se ejecutan sin errores.

---

### 6.3 Dependencias y riesgos

 * Dependencias con desarrollos: Referido a la necesidad de que ciertos modulos o funciones esten completamente desarrollados
 para que otros puedan avanzar.
    * Riesgo: Si el desarrollo de un modulo se retrasa, se demora el inicio de pruebas o el desarrollo de otro modulo.
    * Mitigacion: Planificar entregas iterativas y asegurar que los modulos que poseen dependencias sean priorizados frente
    a otros mas independientes.

 * Disponibilidad de recursos
    *  Riesgo: El numero reducido de integrantes y la falta de habilidades especificas puede generar demoras en las pruebas.
    *  Mitigacion: Capacitar a los miembros del equipo y considerar el incremento de integrantes en caso de ser necesario.