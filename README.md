# FormLab · Práctica Experimental 2

Landing Page desarrollada con React y Bootstrap para la asignatura Desarrollo Web. El proyecto evoluciona el formulario realizado en la Guía Práctica N.º 1 y lo integra dentro de una interfaz organizada por componentes funcionales.

## Tecnologías

- React
- JSX
- Vite
- Bootstrap
- CSS personalizado
- JavaScript ES Modules

## Componentes principales

- `SiteNavbar`: navegación responsive y selector de tema.
- `Hero`: presentación de la landing y llamados a la acción.
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

## Instalación

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

Bootstrap se instala como dependencia del proyecto y se importa desde `src/main.jsx`:

```js
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
```

La landing utiliza `container`, `row`, `col-*`, `navbar`, `card`, `btn`, `form-control`, `form-select`, `alert`, `nav-pills` y utilidades responsive, combinadas con estilos propios en `src/styles.css`.

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

Antes de entregar, comprobar ambos enlaces desde una ventana privada.
