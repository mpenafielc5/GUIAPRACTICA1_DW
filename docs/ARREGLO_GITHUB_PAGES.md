# Publicación de FormLab en GitHub Pages

Este proyecto está configurado para el repositorio:

`mpenafielc5/GUIAPRACTICA1_DW`

La configuración de Vite usa:

```js
base: '/GUIAPRACTICA1_DW/'
```

El workflow `.github/workflows/deploy.yml` compila el proyecto y publica `dist`.

## Configuración obligatoria en GitHub

En el repositorio abre:

**Settings > Pages > Build and deployment > Source > GitHub Actions**

No uses `Deploy from a branch` para esta versión React + Vite.

Después de reemplazar los archivos:

```bash
npm install
npm run build
git add .
git commit -m "Corregir FormLab y despliegue en GitHub Pages"
git push
```

Luego revisa **Actions > Publicar FormLab en GitHub Pages** y comprueba que `build` y `deploy` terminen correctamente.

Página esperada:

`https://mpenafielc5.github.io/GUIAPRACTICA1_DW/`
