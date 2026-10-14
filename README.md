# FormLab · Prácticas Experimentales 1 y 2

FormLab reúne la evolución de dos prácticas de Desarrollo Web. La Práctica Experimental 1 se desarrolló con HTML5, CSS y JavaScript; en la Práctica Experimental 2 el mismo formulario se integra dentro de una Landing Page construida con React, JSX y Bootstrap, conservando y mejorando sus validaciones, eventos y diseño responsive.

## Tecnologías

- HTML5, CSS3 y JavaScript como base de la Práctica Experimental 1.
- React para componentes funcionales y manejo de estado.
- JSX para estructurar la interfaz dentro de los componentes.
- Bootstrap para grid responsive, navegación, formularios, botones, cards, alertas y utilidades.
- CSS personalizado para conservar la identidad visual de FormLab.
- Vite como entorno de desarrollo y compilación.
- GitHub Actions para compilar y publicar la aplicación en GitHub Pages.

## Componentes principales

- `SiteNavbar`: navegación responsive y selector de tema claro/oscuro.
- `Hero`: explica la evolución de la Práctica 1 a la Práctica 2.
- `Features`: tarjetas informativas creadas desde datos.
- `AuthSection`: cambia dinámicamente entre registro y login.
- `RegisterForm`: formulario controlado con `useState` y validaciones.
- `LoginForm`: inicio de sesión de demostración basado en la cuenta creada durante la sesión.
- `StatusAlert`: mensajes dinámicos de éxito y error.
- `Team`: integrantes del grupo.
- `Footer`: cierre de la landing.

## Validaciones

Registro:
- nombre y apellido;
- correo válido;
- edad entre 18 y 99;
- teléfono de 7 a 15 dígitos;
- selección de perfil;
- contraseña de mínimo 8 caracteres, con mayúscula, minúscula y número;
- confirmación de contraseña;
- aceptación de términos.

El login es una simulación únicamente de frontend. La cuenta se mantiene en el estado de React mientras la aplicación permanece abierta. No existe backend ni autenticación real.

## Instalación local

Requisito: Node.js y npm.

```bash
npm install
npm run dev
```

Vite mostrará una dirección local, normalmente `http://localhost:5173/`.

## Compilación de producción

```bash
npm run build
npm run preview
```

`npm run build` genera la carpeta `dist/`.

## Integración de Bootstrap

Bootstrap está declarado como dependencia del proyecto y se importa desde `src/main.jsx`:

```js
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
```

La landing utiliza `container`, `row`, `col-*`, `navbar`, `card`, `btn`, `form-control`, `form-select`, `alert`, `nav-pills` y utilidades responsive, combinadas con estilos propios en `src/styles.css`.

## GitHub Pages

El repositorio grupal es `GUIAPRACTICA1_DW`. `vite.config.js` utiliza:

```js
base: '/GUIAPRACTICA1_DW/'
```

para que los assets de Vite funcionen correctamente al publicar el proyecto como GitHub Pages.

El workflow `.github/workflows/deploy.yml` compila la aplicación y publica `dist/` automáticamente cuando se hace `push` a `main`.

En GitHub se debe configurar:

**Settings → Pages → Source → GitHub Actions**

No se debe usar `Deploy from a branch` para esta versión React/Vite.

## Integrantes

- Miguel Peñafiel
- Ricardo Landívar
- Danika Reyes
- Carlos Llivisupa
- Jackson Reyes

## Entrega

La guía solicita un PDF que incluya:

1. enlace al video demostrativo en Google Drive (máximo 3 minutos);
2. enlace directo al repositorio GitHub.

Antes de entregar, comprobar ambos enlaces desde una ventana privada y verificar que la página publicada cargue sin errores.

## Nota de publicación en GitHub Pages

La configuración de producción usa `base: './'` en Vite y un workflow de GitHub Actions que compila el proyecto y publica la carpeta `dist`. Para Pages debe utilizarse **Source: GitHub Actions**; `Deploy from a branch` sobre `main / (root)` sirve el código fuente de Vite y no la aplicación compilada.
