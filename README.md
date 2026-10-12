# 🐞 Coccinella Dental Studio

Landing page moderna y de alto impacto para consultorio dental, diseñada bajo el framework de diseño premium **F.R.A.M.E.** e inspirada en estéticas contemporáneas de salud y bienestar.

Desarrollada para presentar la apertura de un nuevo consultorio odontológico con una identidad fresca, cálida y profesional, combinando tonos azules serenos, acentos lima y un isotipo distintivo que fusiona la anatomía dental con la delicadeza de una catarina/mariquita (*Coccinella*).

---

## ✨ Características Principales

- **Hero Cinematográfico:** Video continuo en streaming con optimización responsive (encuadre dinámico para móvil con degradado de mezcla y pantalla completa en desktop).
- **Identidad de Marca Única:** Isotipo SVG personalizado combinando silueta dental y detalles de catarina, con favicon propio y paleta de color curada (`#5F9AD1`, `#3D8CD5`, `#EBFA73`).
- **Navegación Fluida:** Header interactivo con animaciones de entrada (`slideDown`, `blurIn`) y menú lateral móvil con desenfoque (`backdrop-blur-md`).
- **Conversión Directa a WhatsApp:** Botones de llamada a la acción (CTA) vinculados a WhatsApp con mensajes pre-redactados para agendar citas sin fricción ni intermediarios.
- **Arquitectura Modular Limpia:** Código desacoplado en componentes atómicos (`ui/`, `layout/`, `sections/`) y configuración de negocio centralizada en `src/config/clinic.ts`.
- **Secciones Informativas:**
  - **Sobre la Doctora:** Enfoque en atención personalizada 1 a 1 y técnicas sin dolor.
  - **Tratamientos Integrales:** Limpiezas ultrasónicas, blanqueamiento LED, resinas biomiméticas y ortodoncia invisible.
  - **Bioseguridad & Esterilización:** Garantía clínica y protocolos de autoclave hospitalario.
  - **Ubicación & Horarios:** Información clara de contacto y enlace directo a Google Maps.

---

## 🛠️ Stack Tecnológico

- **Frontend:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Iconografía:** [Lucide React](https://lucide.dev/)
- **Tipografía:** [Inter (Google Fonts)](https://fonts.google.com/specimen/Inter)
- **Deployment Ready:** Optimizado para [Vercel](https://vercel.com/)

---

## 🚀 Instalación y Desarrollo Local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/ManuelQuiroga03/dentalLab.git
   cd dentalLab
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

4. **Compilar para producción:**
   ```bash
   npm run build
   ```

---

## ⚙️ Configuración Personalizada

Para actualizar el número de WhatsApp, horarios, dirección o nombre del consultorio sin modificar el código de los componentes, edita el archivo:

👉 `src/config/clinic.ts`

---

## 📄 Licencia

Este proyecto es privado y fue desarrollado para el consultorio dental **Coccinella Dental Studio**.
