---
id: software-development-plan
title: 📓 IEEE Software Development Plan
---

**Version:** Draft  
**Date:** 29 de Septiembre, 2024  
**Authors:** Cappiello, Leonel  

---

## Revision Chart
| Version      | Primary Author(s) | Description of Version                                    | Date Completed |
|--------------|--------------------|----------------------------------------------------------|----------------|
| Draft        | Cappiello Leonel                | Initial draft  | 28/09/2024            |

---

1. [Introducción](#1-introducción)  
    1.1 [Resumen del Proyecto](#11-resumen-del-proyecto)  
    1.2 [Alcance del Proyecto](#12-alcance-del-proyecto)  
    1.3 [Entregables del Proyecto](#13-entregables-del-proyecto)  
    1.4 [Materiales de Referencia](#14-materiales-de-referencia)    
2. [Organización del Proyecto](#2-organización-del-proyecto)  
   2.1 [Modelo de Proceso](#21-modelo-de-proceso)  
   2.2 [Estructura Organizativa](#22-estructura-organizativa)  
   2.3 [Límites Organizativos e Interfaces](#23-límites-organizativos-e-interfaces)  
   2.4 [Roles y responsabilidades del Proyecto](#24-roles-y-responsabilidades-del-proyecto)  
3. [Proceso de Gestión](#3-proceso-de-gestión)  
   3.1 [Objetivos y Prioridades de Gestión](#31-objetivos-y-prioridades-de-gestión)  
   3.2 [Suposiciones, Dependencias y Restricciones](#32-suposiciones-dependencias-y-restricciones)  
   3.3 [Mecanismos de Seguimiento y Control](#33-mecanismos-de-seguimiento-y-control)  
   3.4 [Plan de Personal](#34-plan-de-personal)  
4. [Proceso Técnico](#4-proceso-técnico)  
   4.1 [Métodos, Herramientas y Técnicas](#41-métodos-herramientas-y-técnicas)  
   4.2 [Documentación de Software](#42-documentación-de-software)  
   4.3 [Funciones de Apoyo al Proyecto](#43-funciones-de-apoyo-al-proyecto)  
5. [Paquetes de Trabajo, Cronograma y Presupuesto](#5-paquetes-de-trabajo-cronograma-y-presupuesto)  
   5.1 [Paquetes de Trabajo](#51-paquetes-de-trabajo)  
   5.2 [Dependencias](#52-dependencias)  
   5.3 [Requisitos de Recursos](#53-requisitos-de-recursos)  
  

---

## 1. Introducción

---

### 1.1 Resumen del Proyecto
Este proyecto tiene como objetivo el desarrollo de una plataforma de comercio electrónico que permita a los clientes realizar compras en línea, gestionar su información personal, acceder a su historial de pedidos y recibir asistencia mediante un sistema de atención al cliente. Además, proporciona herramientas avanzadas para la gestión de productos, pedidos, inventarios, promociones y pagos, tanto para administradores como para auditores y equipos de soporte.

---

### 1.2 Alcance del Proyecto

El sistema se encuentra enfocado en funcionalidades basicas de gestion de usuarios, productos, marcas, categorias y stock.

---

### 1.3 Entregables del Proyecto

Modulos a desarrollar:
 - Gestion de usuarios y cuentas
 - Gestion de productos y pedidos
 - Gestion de inventarios y stock
 - Gestion de promociones y descuentos
 - Informes y estadisticas
 - Soporte y atencion al cliente

---


### 1.4 Materiales de Referencia

Plantilla IEEE 1058.  
Requerimientos e historias de usuario de MegaStore  


---

## 2. Organización del Proyecto

---

### 2.1 Modelo de Proceso
El proyecto seguirá un modelo de ciclo de vida iterativo, en el cual el desarrollo se realiza a través de ciclos repetidos o "iteraciones". Cada iteración se centrará en mejorar y expandir el producto, permitiendo la integración temprana de módulos y la validación continua de requisitos con el cliente. Esto garantiza que los requisitos evolucionen y el software se refine progresivamente con cada ciclo.

 * Hito 1: Presentación de una primera versión del software que integre las funcionalidades básicas.
 * Hito 2: Pruebas completas de los módulos integrados, asegurando que todas las partes del sistema se comunican correctamente.
 * Hito 3: Versión del software con todas las funcionalidades implementadas y lista para pruebas de usuario con el cliente.
 * Hito 4: Realización de pruebas de aceptación con el cliente para verificar que el software cumple con todos los requisitos definidos.
 * Hito 5: Entrega Final del Proyecto

---

### 2.2 Estructura Organizativa

La estructura organizativa del proyecto estará diseñada para asegurar una comunicación clara y eficiente, con roles definidos y responsabilidades específicas para cada miembro del equipo.  

Roles:
 - Gerente del proyecto
 - Desarrolladores de Software (Backend, Frontend)
 - Analista de pruebas
 - Analista de sistemas
---

### 2.3 Límites Organizativos e Interfaces
El proyecto interactuara directamente con el equipo y este a su vez se relacionara directamente con el cliente.
  
Relaciones externas:
 * APIs de terceros
   * Servicio de mensajeria empleado para enviar correos a los usuarios finales.
 * Cliente
   * Proporciona requisitos, feedback y validacion del producto final.

---

### 2.4 Roles y responsabilidades del Proyecto

* **Gerente del proyecto:** Responsable de la planificación general, seguimiento y cumplimiento de los objetivos del proyecto
* **Desarrollador backend:** Encargado de desarrollar el apartado relacionado con la logica de negocio, bases de datos, endpoints y su documentacion correspondiente.
* **Desarrollador frontend:** Encargado de desarrollar el apartado relacionado a la interfaz visual, diseño, experiencia de usuario y su documentacion correspondiente.
* **Analista de sistemas:** Responsable de capturar, analizar y definir requisitos del sistema que seran procesados y detallados en especificaciones tecnicas utilizadas por los desarrolladores.
* **Analista de pruebas:** Realiza la verificacion y validacion de funcionalidad en el software escribiendo pruebas (unitarias, de integracion) que facilitan la revision del producto desarrollado.
* **Cliente:** Provee retroalimentacion sobre los distintos entregables y realiza una validacion sobre las funcionalidades, el cumplimiento de las expectativas y objetivos pactados.

---

## 3. Proceso de Gestión

---

### 3.1 Objetivos y Prioridades de Gestión
**Objetivos del proyecto:**
 - <ins>Entrega a tiempo</ins>: Cumplir con el cronograma establecido, garantizando las principales fases y entregables del proyecto completados dentro de las fechas previstas.

 - <ins>Calidad del producto</ins>: Asegurar que el software desarrollado cumpla con los estandares de calidad acordados, ofreciendo un producto robusto, seguro y con bajo indice de defectos.

 - <ins>Cumplimiento de requisitos</ins>: Garantizar que el software cuente con todas las funciones solicitadas por el cliente, cumpliendo tanto requisitos funcionales como no funcionales especificados.

 - <ins>Satisfaccion del cliente</ins>: Proporcionar un producto que no solo cumplas con las especificaciones tecnicas, sino que tambien satisfaga las expectativas de los usuarios finales y clientes.

---

### 3.2 Suposiciones, Dependencias y Restricciones

 * Suposiciones:
   * Estabilidad de los requisitos: Se asume que los requisitos funcionales y no funcionales del software no cambiarán significativamente durante el desarrollo del proyecto, salvo por ajustes menores que se gestionarán dentro del alcance original.

   * Se asume que el equipo de desarrollo posee las habilidades y experiencia suficientes para poder afrontar todas las dificultades que puedan presentarse a la hora de implementar las distintas funcionalidades del producto.

 * Dependencias:
   * Integración con sistemas de terceros: El software deberá integrarse con otros sistemas existentes de terceros, lo que depende de que estos sistemas estén operativos y bien documentados.

   * Feedback del cliente: El equipo de desarrollo depende de recibir retroalimentación oportuna y precisa del cliente para realizar ajustes durante las fases de pruebas e iteración.

 * Restricciones:
   * Recursos humanos limitados: El equipo de desarrollo está limitado a un número fijo de personas, lo que implica que el proyecto no puede escalar fácilmente en caso de retrasos o problemas técnicos.
   * Restricciones de seguridad: El software debe cumplir con requisitos y políticas de seguridad, lo que puede afectar el diseño y la implementación de ciertas funcionalidades.

---

### 3.3 Mecanismos de Seguimiento y Control

 * Herramientas de gestion de proyectos como Jira para monitorear tareas asignadas y plazos para poder hacer seguimiento del proyecto y alertar posibles desviaciones del cronograma.

 * Reuniones de seguimiento para revisar el estado de tareas y hitos, utilizando herramientas como el diagrama de Gantt para verificar el progreso real contra el planificado.

 * Pruebas continuas para garantizar el funcionamiento correcto del producto.
 
 * Se utilizará el sistema de gestión de configuración Git para controlar las versiones del software y garantizar que los cambios estén documentados y se realicen en un entorno controlado. Las versiones y revisiones del software se rastrearán para asegurar la coherencia y evitar errores.

---

### 3.4 Plan de Personal

El equipo estara conformado por:

 - Gerente de proyecto (1 persona)
 - Desarrollador backend (1 persona)
 - Desarrollador frontend (1 persona)
 - Analista de sistemas (1 persona)
 - Analista de pruebas (1 persona)

---

## 4. Proceso Técnico

---

### 4.1 Métodos, Herramientas y Técnicas

 * <ins>Entorno de desarrollo</ins>:
   *  Backend: Nestjs como framework de desarrollo backend con Typescript/Javascript.
   *  Frontend: React con Vite.
   *  Base de datos: MySQL utilizando el ORM de Prisma para integracion con el backend.
 * <ins>Control de versiones</ins>:
   * Git y Github: Para el control de versiones y almacenamiento del repositorio de manera remota.
 * <ins>Metodologia de desarrollo</ins>:
   * Iterativa e incremental: El enfoque iterativo e incremental permitira el desarrollo en ciclos repetitivos proporcionando una version funcional del sistema al final de cada ciclo, facilitando la gestion.
 * <ins>Pruebas</ins>:
   * Jest, Selenium y Cucumber: Frameworks para crear pruebas tanto unitarias como de aceptacion permitiendo validar tanto backend como frontend de manera automatizada.
   * Postman: Para validacion de la API Rest en fases de pruebas.

---

### 4.2 Documentación de Software

 * **Plan de desarrollo de software** (El documento presente).
 * **Plan de comunicaciones:** <a href="/docs/communicationPlanning" >Plan de Comunicaciones</a>
 * **Listado de User stories:** <a href="/docs/us" >Listado de US</a>

---

### 4.3 Funciones de Apoyo al Proyecto

 * Gestion de la configuracion: La gestion de configuracion asegura que todos los artefactos del proyecto esten controlados, de manera organizada.
 Se emplearan herramientas como Git.

 * Gestion de la calidad: Utilizando herramientas como Cucumber, Selenium y Jest para poder crear procesos de revision, pruebas y auditorias para cumplir con lo estandares de calidad y requisitos establecidos.

---

## 5. Paquetes de Trabajo, Cronograma y Presupuesto

---

### 5.1 Paquetes de Trabajo

Se organizo el trabajo en torno a User Stories que representan las funcionalidades desde el punto de vista del usuario. Estas historias son la base par aplanificar el desarrollo de software, asegurando que el producto final cumpla con las expectatvias del usuario.

<a href="">User Stories</a>

---

### 5.2 Dependencias
Detallar las dependencias entre paquetes de trabajo y eventos externos.

 - El <b>modulo de Pedidos</b> posee dependencia del modulo de Productos y Usuarios para poder realizar sus funciones correctamente.
 - El <b>modulo de Pago y Facturacion</b> tiene dependencia del modulo de pedidos para poder asociar el pago al cliente responsable del pedido.
 - El <b>modulo de Notificaciones</b> depende de eventos como el cambio de estado en los pedidos.
 - El <b>modulo de Informe y Estadisticas</b> depende del modulo de pedidos para poder realizar metricas y analizar los datos.
---

### 5.3 Requisitos de Recursos
 * Recursos humanos
   * Desarrolladores, Analistas, etc.
 * Recursos tecnologicos
   * Herramientas de desarrollo, control de versiones, pruebas, BBDD.
 * Recursos fisicos
   * Servidores, Ambiente de desarrollo y pruebas.
 * Recursos financieros
---

### Control de cambios
---
El Control de Cambios asegura que cualquier modificación en el proyecto se gestione de forma controlada y documentada, minimizando su impacto en el alcance, cronograma, recursos y calidad del producto final.

#### Procedimiento de Control de Cambios
 * Identificación del Cambio:
El cambio puede ser solicitado por cualquier miembro del equipo o cliente. Debe incluir una descripción, justificación y el impacto esperado en el proyecto (alcance, tiempo, costos, recursos).

 * Solicitud de Cambio:
Formalización mediante una solicitud escrita que detalla el cambio solicitado y su justificación.

 * Evaluación:
El comité de control de cambios evalúa el impacto técnico, de recursos, costos y tiempo de implementar el cambio. También se revisa su prioridad.

 * Aprobación o Rechazo:
El comité decide si aprobar o rechazar el cambio basado en la evaluación. Si se aprueba, se actualizan los documentos del proyecto (plan, cronograma, etc.).

 * Implementación:
El cambio aprobado se implementa, y se realizan pruebas para asegurar que no afecte otras áreas del proyecto.

 * Documentación:
Todos los cambios deben ser registrados detalladamente, incluyendo la solicitud, evaluación, decisión y ejecución.

 * Comunicación:
El cambio y su impacto deben ser comunicados a todas las partes involucradas, incluidos el cliente y el equipo.

### Herramientas de Soporte
 * Jira para seguimiento de solicitudes de cambio.
 * Git para control de versiones y gestión de código.
 * Reuniones periódicas para revisión y validación de cambios.

El control de cambios asegura que el proyecto mantenga su alineación con los objetivos, cronograma y calidad, permitiendo una gestión eficaz de modificaciones a lo largo del ciclo de vida del proyecto.

---

### Control de calidad
---
No Aplica