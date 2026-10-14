# GitHub y GitHub Pages · Práctica Experimental 2

Este proyecto reemplaza la versión estática anterior del formulario por una versión React + Bootstrap dentro del mismo repositorio `GUIAPRACTICA1_DW`.

## 1. Probar localmente

Desde la carpeta donde se encuentran `package.json`, `src` y `vite.config.js`:

```bash
npm install
npm run dev
```

Para detener Vite:

```text
Ctrl + C
```

Comprobar la compilación:

```bash
npm run build
npm run preview
```

## 2. Archivos importantes para GitHub Pages

`vite.config.js` usa:

```js
base: '/GUIAPRACTICA1_DW/'
```

El workflow está en:

```text
.github/workflows/deploy.yml
```

Este workflow instala dependencias, ejecuta `npm run build`, genera `dist/` y publica esa carpeta mediante GitHub Actions.

## 3. Configurar Pages

En el repositorio abrir:

**Settings → Pages → Build and deployment → Source → GitHub Actions**

No dejar `Deploy from a branch`, porque GitHub intentaría servir directamente los archivos fuente de React en vez de la compilación de Vite.

## 4. Subir cambios

```bash
git status
git add .
git commit -m "Migrar formulario a React y Bootstrap"
git push
```

Después entrar a **Actions** y esperar que `Publicar FormLab en GitHub Pages` termine en verde.

## 5. Si la página aparece en blanco

1. Confirmar que **Settings → Pages** usa **GitHub Actions**.
2. Revisar **Actions** y abrir el último workflow.
3. Confirmar que `npm run build` terminó correctamente.
4. Verificar que el repositorio siga llamándose exactamente `GUIAPRACTICA1_DW`; si cambia el nombre, también debe cambiarse `base` en `vite.config.js`.
5. Hacer una recarga fuerte con `Ctrl + F5` o probar en incógnito.

## 6. Archivos que no deben subirse

`node_modules/` y `dist/` están excluidos mediante `.gitignore`. `package-lock.json` sí debe mantenerse en el repositorio.
