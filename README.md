# Examen Componentes

Esta aplicación es un proyecto desarrollado como parteexamen de programacion de componentes. Combina el uso de React.js, Firebase y Cordova para crear una solución completa que incluye autenticación de usuarios, administración de productos y generación de un APK para dispositivos Android.

## Funcionalidades Técnicas

- **React.js**: 
  - Uso de JSX para crear interfaces dinámicas y componentes reutilizables.
  - Componentes funcionales y comunicación entre componentes (padre-hijo e hijo-padre).
  - Gestión de estado utilizando hooks como `useState` y `useEffect`.

- **Firebase**:
  - **Autenticación**: Registro e inicio de sesión de usuarios mediante Firebase Auth.
  - **Firestore**: Base de datos en tiempo real para almacenar y gestionar productos.
  - **Firebase Storage**: Almacenamiento de archivos.

- **Cordova**:
  - Empaquetado y configuración para exportar la aplicación como un APK funcional.
  - Integración con Android Studio para generar y firmar el APK.

- **Diseño**:
  - Uso de **Bootstrap** para un diseño responsivo y moderno.
  - Validación de formularios con bibliotecas como `react-hook-form`.

- **Enrutamiento**:
  - Implementación de `react-router-dom` para la navegación entre pantallas (Registro, Inicio de Sesión y Lista de Productos).

## Instalación Local

### Requisitos Previos
- Node.js (versión 14 o superior).
- NPM o Yarn.
- Android Studio y Gradle (para generar el APK).
- Firebase configurado con tus credenciales.
