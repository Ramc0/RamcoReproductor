# RamcoReproductor
---

# 🎵 RamcoReproductor- Reproductor multimedia personalizado en HTML5, CSS3 y JavaScript

---

## 📌 Descripción general

**RamcoReproductor** es un reproductor de audio personalizado desarrollado en HTML, CSS y JavaScript puro, que extiende el reproductor multimedia por defecto del navegador para crear una experiencia visual y funcional avanzada.

El proyecto implementa:

* Carga dinámica de canciones desde JSON
* Playlist interactiva
* Navegación circular (loop automático)
* Barra de progreso personalizada con waveform
* Control de volumen estilizado
* Control de velocidad de reproducción
* Modo oscuro
* Animaciones visuales durante la reproducción

El objetivo del proyecto es aplicar conceptos de:

* Manipulación avanzada del DOM
* Consumo de datos mediante `fetch`
* Gestión dinámica de estados
* Diseño UI moderno con CSS
* Arquitectura modular frontend

---

## 🧠 Filosofía del proyecto

RamcoReproductor se basa en los siguientes principios:

* **Separación de responsabilidades** (HTML / CSS / JS / Datos)
* **Carga dinámica de contenido**
* **Experiencia de usuario mejorada**
* **Código escalable**
* **Interfaz moderna con glassmorphism**
* **Persistencia estructurada mediante JSON**

No se trata simplemente de reproducir audio, sino de construir una **mini aplicación multimedia completa en frontend puro**.

---

## 📂 Estructura del proyecto

```
RamcoReproductor
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── player.js
├── data/
│   └── tracks.json
└── assets/
    ├── audio/
    │   ├── Track 1.mp3
    │   ├── Track 2.mp3
    │   └── Track 3.mp3
    └── images/
        └── waveform.png
```

---

## 🚀 Funcionalidades implementadas

### 🎵 1. Carga dinámica desde JSON

Las canciones se almacenan en `data/tracks.json` y se cargan mediante:

```js
fetch("data/tracks.json")
```

Permite modificar la playlist sin alterar el código.

---

### 📃 2. Playlist interactiva

* Renderizada dinámicamente
* Click para cambiar pista
* Indicador visual de canción activa
* Scroll personalizado

---

### 🔁 3. Navegación circular automática

Cuando termina la última canción:

* Se reproduce automáticamente la primera
* Implementación mediante control del índice del array
* Autoplay activado con:

```js
audio.addEventListener("ended", nextTrack);
```

---

### 🎚 4. Barra de progreso personalizada

* `progress` + `input range` superpuestos
* Máscara dinámica sobre waveform
* Actualización en tiempo real

---

### 🔊 5. Control de volumen estilizado

* Slider completamente personalizado
* Thumb con animación hover
* Estilo coherente con la paleta visual

---

### ⚡ 6. Control de velocidad

Permite modificar el `playbackRate` del audio:

* 0.5x
* 0.75x
* Normal
* 1.25x
* 1.5x
* 2x

---

### 🌙 7. Modo oscuro

* Toggle dinámico
* Cambio de clase `dark`
* Adaptación completa de colores

---

### ✨ 8. Animación durante reproducción

El botón de play genera un efecto de pulso mientras el audio está activo mediante:

```css
@keyframes pulse
```

---

## 🏗 Arquitectura técnica

El proyecto sigue una estructura modular:

| Capa | Función                    |
| ---- | -------------------------- |
| HTML | Estructura del reproductor |
| CSS  | Diseño avanzado + efectos  |
| JS   | Lógica de negocio          |
| JSON | Persistencia de datos      |

Separación clara entre:

* Datos
* Interfaz
* Lógica

---

## ▶️ Cómo ejecutar el proyecto

⚠️ Importante: usar servidor local (no abrir con file://)

Ejemplo con Live Server (VSCode):

1. Abrir carpeta del proyecto
2. Click derecho en `index.html`
3. "Open with Live Server"

---

## 🛠 Tecnologías utilizadas

* HTML5
* CSS3 
* JavaScript 
* Fetch API
* JSON
* DOM API

---

## 🎯 Objetivos académicos cumplidos

✔ Modificaciones estéticas significativas
✔ Modificaciones funcionales de gran calado
✔ Manipulación dinámica del DOM
✔ Gestión de estructuras de datos
✔ Arquitectura frontend organizada
✔ Aplicación real de eventos multimedia

---

## 📌 Posibles mejoras futuras

* Modo shuffle
* Persistencia de preferencias en localStorage
* Ecualizador con Web Audio API
* Soporte para carátulas dinámicas por pista
* Sistema de favoritos
* Barra de progreso interactiva con preview

---

## 👨‍💻 Autor

Proyecto desarrollado como trabajo académico dentro del módulo de **Programación Multimedia y Dispositivos Móviles**.

---
