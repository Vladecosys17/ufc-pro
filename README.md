# Unión Fuerza Cambio — Frontend MVP

Frontend del sitio web de **Unión Fuerza Cambio**, una asociación de desarrollo comunitario.
Este proyecto corresponde a la **fase MVP**, diseñado como un **embudo de conversión**
para donadores individuales.

El objetivo único del sitio es:
> Que el visitante comprenda el propósito y **contacte con intención de donar**.

---

## 🎯 Objetivo del proyecto

- Informar de forma clara y honesta sobre el trabajo comunitario
- Reducir fricción para el donador individual
- Priorizar contacto directo sobre exploración de contenido
- Validar intención real antes de escalar funcionalidades

Este sitio **no es institucional** ni un portal informativo tradicional.
Está diseñado como un **embudo simple**.

---

## 🧭 Alcance actual (MVP)

### Funcionalidades implementadas

- Home con mensaje principal y CTA único
- Flujo de contacto optimizado para móvil
- Formulario de contacto con:
  - Nombre
  - Email
  - Teléfono (opcional)
  - Consentimiento explícito para WhatsApp
- Integración opcional con WhatsApp mediante mensaje prellenado
- Estructura de rutas mínima y clara
- Estilos globales mobile-first
- Arquitectura de componentes orientada a conversión

### Rutas activas

| Ruta | Propósito |
|-----|----------|
| `/` | Activar interés |
| `/contact` | Capturar intención |

---

## 🧱 Stack tecnológico

- **React 18**
- **Vite**
- **React Router v6**
- JavaScript (ESM)
- CSS plano (sin frameworks)

> Se priorizó estabilidad y previsibilidad sobre versiones experimentales.

---

## 📁 Estructura del proyecto

```txt
src/
├─ App.jsx
├─ main.jsx
├─ pages/
│  ├─ Home.jsx
│  └─ Contact.jsx
├─ components/
│  ├─ hero/
│  ├─ cta/
│  ├─ contact/
│  ├─ layout/
│  └─ ui/
└─ styles/
   └─ globals.css
