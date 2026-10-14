# GitHub y entrega

## Primera ejecución

Desde la carpeta que contiene `package.json`:

```bash
npm install
npm run dev
```

`npm install` creará `node_modules/` y `package-lock.json`. El archivo `package-lock.json` sí debe incluirse en GitHub; `node_modules/` está excluido mediante `.gitignore`.

Para comprobar producción:

```bash
npm run build
npm run preview
```

## Crear repositorio nuevo

```bash
git init
git branch -M main
git add .
git commit -m "Crear practica experimental 2 con React y Bootstrap"
git remote add origin https://github.com/TU-USUARIO/NOMBRE-REPOSITORIO.git
git push -u origin main
```

Para cambios posteriores:

```bash
git add .
git commit -m "Describir el cambio"
git push
```

## Entrega

El documento final debe incluir:

- enlace accesible al repositorio GitHub;
- enlace al video demostrativo de Google Drive;
- video grabado desde computador y con duración máxima de 3 minutos.

Antes de exportar el Word a PDF, reemplaza los dos campos `[PEGAR ENLACE ...]` del informe.
