---
id: retro
title: 🔙 Retro
---

**Version:** Draft  
**Date:** 28 de Septiembre, 2024  
**Authors:** Cappiello, Leonel  

---
## Retrospective
---

## <span class="good">Lo que salió bien</span>  
 * La implementación del formulario de inicio de sesión fue completada satisfactoriamente y sin problemas.
 * La integración del envío de correos electrónicos para la verificación de cuentas funcionó correctamente en los distintos entornos.
 * La generación de códigos para la autenticación de dos factores (2FA) se implementó de manera exitosa y se integró con la interfaz de usuario.
 * El uso de un framework backend robusto, optimizado para la creación rápida de APIs REST, permitió un desarrollo ágil y eficiente de los módulos clave.

---
## <span class="bad">Lo que no salió tan bien</span>  
 * Los modelos de la base de datos tuvieron que ser rediseñados debido a errores en la planificación inicial, lo que causó retrasos en la implementación.
 * La implementación inicial de la autenticación mediante JWT (JSON Web Tokens) presentó errores que requirieron una refactorización para garantizar su correcto funcionamiento.
 * Hubo problemas con el contenido de los tokens de autenticación, que no incluían el rol de los usuarios, lo que obligó a modificar el sistema para facilitar la identificación de roles en el frontend.

---

## <span class="opportunity">Oportunidades de mejora</span>  
 * Implementar un sistema de integración continua (CI) para automatizar las pruebas y despliegues de nuevas actualizaciones. Herramientas como Jenkins o GitHub Actions pueden ayudar a detectar problemas en el código antes de que lleguen a producción.
 * Revisar el diseño de los modelos de la base de datos en fases más tempranas para evitar errores en la estructura y relaciones entre tablas.
 * Mejorar la comunicación entre el frontend y el backend, definiendo una convención clara para los tokens de autenticación, asegurando que contengan toda la información relevante (como el rol del usuario).
 * La UI puede ser mejorada para ser mas atractiva para el usuario.

---

## <span class="actions">Acciones a tomar</span>  
 * Iniciar el desarrollo de pruebas unitarias para los módulos más críticos, como la autenticación, la gestión de usuarios y la generación de códigos 2FA.
 * Implementar revisiones de diseño de base de datos con el equipo antes de cualquier implementación para reducir la probabilidad de errores en la estructura y evitar retrasos.
 * Optimizar el manejo de tokens de autenticación: Modificar los tokens JWT para incluir datos adicionales, como los roles de usuario, y garantizar que el frontend pueda acceder fácilmente a esta información sin afectar la seguridad.
 * Analizar opciones de mejora y consistencia de la UI.