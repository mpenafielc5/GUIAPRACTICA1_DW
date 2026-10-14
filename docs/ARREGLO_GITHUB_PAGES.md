# Arreglo de GitHub Pages para FormLab

Esta versión usa la misma estrategia de despliegue que la landing React de TechLab:

- `vite.config.js` utiliza `base: './'` para generar rutas relativas.
- `.github/workflows/deploy.yml` compila React con Vite y publica `dist` mediante GitHub Actions.
- La pestaña del navegador muestra únicamente `FormLab`.

## Importante

El código fuente React/Vite NO debe publicarse directamente con `main / (root)`.
La carpeta que debe llegar a GitHub Pages es `dist`, generada por `npm run build`.
El workflow incluido hace esto automáticamente.

En GitHub usar:

**Settings > Pages > Source > GitHub Actions**

Luego hacer un nuevo push o ejecutar manualmente el workflow:

**Actions > Publicar FormLab en GitHub Pages > Run workflow**

## Comprobar localmente

```bash
npm install
npm run build
npm run preview
```

Si el preview funciona, el build es válido.
