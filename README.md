# TIEMPO — English Past Tenses (Sistema Didáctico de Gramática)

An elegant, Helvetica-inspired interactive guide to English past tenses for native Spanish speakers, grounded in Renaat Declerck's time-sphere grammar model (*The Grammar of the English Tense System*).

Features:
- **6 Core Learning Modules**: Grammar Guide, Time Sphere Visualizer, 100+ Verbs Explorer, Interactive Flashcards, Quiz Laboratory, and Annotated Readings.
- **Pronunciation & Audio**: Native Web Speech API pronunciation with interactive controls.
- **Declerck Time Spheres**: Clear differentiation between the *Past Sphere* (Simple Past, Past Continuous, Past Perfect) and the *Present Sphere* (Present Perfect, Present Perfect Continuous).
- **100+ Categorized Verbs**: Regular (with `/t/`, `/d/`, `/ɪd/` phonetic ending rules), irregular, and stem-changing verbs with definitions, IPA, and contextual examples.

---

## 🚀 Despliegue en GitHub Pages / GitHub Pages Deployment

Este proyecto está preconfigurado para desplegarse automáticamente en **GitHub Pages** mediante **GitHub Actions**.

### Pasos para activar el despliegue automático:

1. **Sube el repositorio a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - TIEMPO Past Tenses App"
   git branch -M main
   git remote add origin https://github.com/<tu-usuario>/<tu-repositorio>.git
   git push -u origin main
   ```

2. **Habilita GitHub Actions para GitHub Pages:**
   - Entra en tu repositorio en GitHub.
   - Ve a **Settings** (Configuración) → **Pages** (en el menú lateral izquierdo).
   - En la sección **Build and deployment** (Compilación y despliegue):
     - **Source**: Selecciona **GitHub Actions** (en lugar de "Deploy from a branch").

3. **¡Listo!**
   - El workflow en `.github/workflows/deploy.yml` se ejecutará automáticamente en cada `git push` a la rama `main` o `master`.
   - También puedes ejecutarlo manualmente desde la pestaña **Actions** → **Deploy to GitHub Pages** → **Run workflow**.
   - Una vez finalizado el workflow, tu aplicación estará disponible en:
     `https://<tu-usuario>.github.io/<tu-repositorio>/`

---

## 🛠️ Configuración técnica para GitHub Pages

- **Rutas Relativas (`base: './'`)**: En `vite.config.ts`, la configuración utiliza `base: './'`. Esto permite que la aplicación funcione tanto en la raíz de un dominio personalizado como en subcarpetas de repositorios GitHub (`username.github.io/nombre-repo/`) sin errores de carga de archivos CSS/JS.
- **Archivo `.nojekyll`**: Se genera automáticamente en la compilación para evitar que el motor Jekyll de GitHub omita archivos.
- **Fallback 404 (`404.html`)**: El script de construcción genera una copia de `index.html` como `404.html` en la carpeta `dist`, asegurando que no se muestre error 404 al recargar o navegar directamente.

---

## 💻 Desarrollo Local / Local Development

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo local
npm run dev

# Compilar para producción (genera carpeta /dist)
npm run build

# Probar la versión de producción localmente
npm run preview
```
