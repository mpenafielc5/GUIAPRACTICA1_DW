# FormLab - Registro y Login Dinámico

Práctica grupal de la asignatura **Desarrollo Web**. El proyecto implementa un formulario web responsive de registro e inicio de sesión utilizando HTML5, CSS y JavaScript, con estilos, eventos y validaciones del lado del cliente.

## Integrantes

- Miguel Peñafiel
- Ricardo Landívar
- Mariana Reyes
- Carlos Llivisupa
- Jackson Reyes

## Objetivo

Desarrollar un formulario web utilizando HTML5, CSS y JavaScript, aplicando estilos, eventos y validaciones del lado del cliente para garantizar el ingreso correcto de los datos.

## Tecnologías

- HTML5 semántico
- CSS3
- Flexbox y CSS Grid
- JavaScript (DOM, eventos y validaciones)
- LocalStorage para recordar el tema y simular una cuenta de demostración
- Web Crypto API para comparar la contraseña de la demostración mediante un hash local

## Funcionalidades

- Formulario dinámico con pestañas de **Registro** e **Inicio de sesión**.
- Más de cinco campos diferentes en el registro: nombre, correo, edad, teléfono, perfil, contraseña y confirmación.
- Uso de `form`, `label`, `input`, `select` y `button`.
- Atributos HTML como `required`, `placeholder`, `min`, `max`, `minlength` y `pattern`.
- Validaciones JavaScript mediante eventos `input`, `blur`, `change` y `submit`.
- Validación de correo electrónico.
- Contraseña de mínimo 8 caracteres con mayúscula, minúscula y número.
- Confirmación de contraseña.
- Validación de edad entre 18 y 99 años.
- Validación de teléfono entre 7 y 15 dígitos.
- Mensajes de error y éxito sin recargar la página.
- Botones para mostrar u ocultar contraseñas.
- Indicador visual de fortaleza de contraseña.
- Inicio de sesión simulado contra la cuenta creada en el navegador.
- Tema claro y oscuro con preferencia guardada.
- Diseño responsive para móvil, tablet y escritorio.
- Accesibilidad básica con etiquetas, `aria-live`, estados y foco visible.

## Importante sobre la autenticación

Este proyecto es una **demostración académica front-end**. No existe backend ni base de datos real. La cuenta se guarda únicamente en el navegador para poder demostrar el flujo registro/login; no debe utilizarse este mecanismo en una aplicación real.

## Estructura

```text
formulario-registro-login/
├── assets/
│   └── favicon.svg
├── css/
│   └── styles.css
├── docs/
│   ├── escritorio.png
│   ├── movil.png
│   └── tablet.png
├── js/
│   └── script.js
├── .nojekyll
├── index.html
└── README.md
```

## Ejecución local

No requiere paquetes ni instalación.

1. Abrir la carpeta en Visual Studio Code.
2. Abrir `index.html` directamente en el navegador o utilizar la extensión Live Server.
3. Probar primero el registro y luego el inicio de sesión con la misma cuenta.

## Publicación en GitHub Pages

1. Crear un repositorio público en GitHub.
2. Subir todos los archivos del proyecto.
3. Entrar a **Settings -> Pages**.
4. En **Build and deployment**, seleccionar **Deploy from a branch**.
5. Seleccionar `main` y `/ (root)`.
6. Guardar y esperar el despliegue.

## Entregables pendientes del grupo

Antes de entregar la actividad se deben completar y verificar:

- Enlace público del repositorio de GitHub.
- Video demostrativo grabado desde computador, de máximo 3 minutos.
- Enlace de Google Drive del video con permisos de visualización.
- Documento final/PDF con ambos enlaces.
