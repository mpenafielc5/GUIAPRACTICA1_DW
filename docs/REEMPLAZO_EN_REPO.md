# Cómo reemplazar la versión actual

1. Conserva la carpeta oculta `.git` de `GUIAPRACTICA1_DW`.
2. Conserva también `package-lock.json` si ya fue generado en tu computadora con `npm install`.
3. Copia el contenido de este proyecto dentro de `GUIAPRACTICA1_DW` y acepta reemplazar los archivos con el mismo nombre.
4. Si la versión nueva funciona correctamente, las carpetas antiguas `assets/`, `css/` y `js/` de la Práctica 1 pueden eliminarse porque la versión React usa `public/` y `src/`.
5. Ejecuta:

```bash
npm install
npm run dev
```

6. Comprueba la compilación:

```bash
npm run build
```

7. En GitHub configura **Settings → Pages → Source → GitHub Actions**.
8. Sube los cambios:

```bash
git add .
git commit -m "Actualizar FormLab para React Bootstrap y GitHub Pages"
git push
```

9. En **Actions** espera que el workflow `Publicar FormLab en GitHub Pages` finalice correctamente.
