# 🚇 Metro CDMX - Buscador de Rutas

Aplicación web que permite buscar rutas entre estaciones del Metro de la Ciudad de México.  
El sistema calcula el camino más corto usando el algoritmo de Dijkstra y muestra la secuencia de estaciones con sus colores correspondientes.

---

## ✨ Características

- Autocompletado de estaciones al escribir origen y destino.
- Cálculo de la ruta más corta entre dos estaciones.
- Identificación de transbordos.
- Colores de cada línea aplicados automáticamente desde `styles.css`.
- Soporte para líneas numéricas y líneas A y B.
- Interfaz simple y responsiva.

---

## 🛠️ Tecnologías utilizadas

- **HTML5** y **CSS3** para la interfaz.
- **JavaScript (ES6)** para la lógica de rutas.
- **Algoritmo de Dijkstra** implementado en `dijkstra.js`.
- **DOM Manipulation** para renderizar resultados en `formulario.js`.

---

## 📂 Estructura del proyecto

. ├── index.html # Página principal 
. ├── styles.css # Estilos (colores de cada línea) 
. ├── dijkstra.js # Algoritmo y arreglos de estaciones por línea 
. └── formulario.js # Lógica de formulario y renderizado de rutas
