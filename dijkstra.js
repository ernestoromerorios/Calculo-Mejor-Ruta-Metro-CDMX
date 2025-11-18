// -------- Funciones Auxiliares --------
//Aplicamos un title para normalizar el texto
function title(text) {

  if(text.includes("UAM")) return text;

  let capitalize = true;
  let result = "";
  for (let i = 0; i < text.length; i++) {
    if (/\s/.test(text[i])) {
      capitalize = true;
      result += text[i];
    } else if (capitalize) {
      result += text[i].toUpperCase();
      capitalize = false;
    } else {
      result += text[i].toLowerCase();
    }
  }
  return titleWithUpperParenthesis(result);
}
//Aplicamos un upper para identificar estaciones de transborde
function titleWithUpperParenthesis(text) {
  let capitalize = true;
  let result = "";
  for (let i = 0; i < text.length; i++) {
    if (/\s/.test(text[i])) {
      capitalize = true;
      result += text[i];
    } else if (capitalize) {
      result += text[i].toUpperCase();
      capitalize = false;
    } else {
      result += text[i].toLowerCase();
    }
  }

  //Todo lo que esté dentro de paréntesis se pasa a mayúsculas
  result = result.replace(/\(([^)]+)\)/g, (match, group) => {
    return "(" + group.toUpperCase() + ")";
  });

  return result;
}

class Edge {
  constructor(destino, costo, linea) {
    this.destino = destino;
    this.costo = costo;
    this.linea = linea;
  }
}
// --------- Todas Las Lineas Del Metro CDMX ----------
const linea1 = [

  "Observatorio", "Tacubaya (L1)", "Juanacatlán", "Chapultepec", "Sevilla",
  "Insurgentes", "Cuauhtémoc", "Balderas (L1)", "Salto Del Agua (L1)", "Isabel La Católica",
  "Pino Suárez (L1)", "Merced", "Candelaria (L1)", "San Lázaro (L1)", "Moctezuma",
  "Balbuena", "Blvd. Puerto Aéreo", "Gómez Farias", "Zaragoza", "Pantitlán (L1)"

];

const linea2 = [

  "Cuatro Caminos", "Panteones", "Tacuba (L2)", "Cuitláhuac", "Popotla",
  "Colegio Militar", "Normal", "San Cosme", "Revolución", "Hidalgo (L2)",
  "Bellas Artes (L2)", "Allende", "Zócalo", "Pino Suárez (L2)", "San Antonio Abad",
  "Chabacano (L2)", "Viaducto", "Xola", "Villa De Cortes", "Nativitas",
  "Portales", "Ermita (L2)", "General Anaya", "Tasqueña"

];

const linea3 = [

  "Indios Verdes", "Deportivo 18 De Marzo (L3)", "Potrero", "La Raza (L3)",
  "Tlatelolco", "Guerrero (L3)", "Hidalgo (L3)", "Juárez",
  "Balderas (L3)", "Niños Héroes", "Hospital General",
  "Centro Médico (L3)", "Etiopia/Plaza De La Transparencia",
  "Eugenia", "División Del Norte", "Zapata (L3)", "Coyoacán", "Viveros/Derechos Humanos",
  "Miguel Ángel De Quevedo", "Copilco", "Universidad"

];

const linea4 = [

  "Martín Carrera (L4)", "Talisman", "Bondojito", "Consulado (L4)",
  "Canal Del Norte", "Morelos (L4)", "Candelaria (L4)",
  "Fray Servando", "Jamaica (L4)", "Santa Anita (L4)"

];

const linea5 = [

  "Politécnico", "Instituto Del Petróleo (L5)", "Autobuses Del Norte",
  "La Raza (L5)", "Misterios", "Valle Gómez", "Consulado (L5)",
  "Eduardo Molina", "Aragón", "Oceanía (L5)", "Terminal Aérea",
  "Hangares", "Pantitlán (L5)"

];

const linea6 = [

  "El Rosario (L6)", "Tezozómoc", "Azcapotzalco", "Ferrería/Arena Ciudad De México",
  "Norte 45", "Vallejo", "Instituto Del Petróleo (L6)", "Lindavista",
  "Deportivo 18 De Marzo (L6)", "La Villa-Basílica", "Martín Carrera (L6)"

];

const linea7 = [

  "El Rosario (L7)", "Aquiles Serdán", "Camarones", "Refinería",
  "Tacuba (L7)", "San Joaquín", "Polanco", "Auditorio",
  "Constituyentes", "Tacubaya (L7)", "San Pedro De Los Pinos",
  "San Antonio", "Mixcoac (L7)", "Barranca Del Muerto"

];

const linea8 = [

  "Garibaldi (L8)", "Bellas Artes (L8)", "San Juan De Letrán",
  "Salto Del Agua (L8)", "Doctores", "Obrera", "Chabacano (L8)",
  "La Viga", "Santa Anita (L8)", "Coyuya", "Iztacalco",
  "Apatlaco", "Aculco", "Escuadrón 201", "Atlalilco (L8)",
  "Iztapalapa", "Cerro De La Estrella", "UAM-I", "Constitución De 1917"

];

const linea9 = [

  "Tacubaya (L9)", "Patriotismo", "Chilpancingo", "Centro Médico (L9)", "Lázaro Cárdenas", 
  "Chabacano (L9)", "Jamaica (L9)", "Mixiuhca", "Velódromo", "Ciudad Deportiva", "Puebla",
  "Pantitlán (L9)"

];

const lineaA = [

  "Pantitlán (LA)", "Agrícola Oriental", "Canal De San Juan",
  "Tepalcates", "Guelatao", "Peñón Viejo", "Acatitla",
  "Santa Marta", "Los Reyes", "La Paz"

];

const lineaB = [

  "Buenavista", "Guerrero (LB)", "Garibaldi (LB)",
  "Lagunilla", "Tepito", "Morelos (LB)", "San Lázaro (LB)",
  "Ricardo Flores Magón", "Romero Rubio", "Oceanía (LB)",
  "Deportivo Oceanía", "Bosque De Aragón", "Villa De Aragón",
  "Nezahualcóyotl", "Impulsora", "Rio De Los Remedios",
  "Muzquiz", "Ecatepec", "Olímpica", "Plaza Aragón", "Ciudad Azteca"

];

const linea12 = [

  "Mixcoac (L12)", "Insurgentes Sur", "Hospital 20 De Noviembre", "Zapata (L12)", 
  "Parque De Los Venados", "Eje Central", "Ermita (L12)", "Mexicaltzingo", "Atlalilco (L12)", 
  "Culhuacán", "San Andrés Tomatlán", "Lomas Estrella", "Calle 11", "Periférico Oriente",
  "Tezonco", "Olivos", "Nopalera", "Zapotitlán", "Tlaltenco", "Tláhuac"

];

// ------- Lista global "estaciones" --------
const estaciones = [];
const grafo = Array.from({ length: 195 }, () => []);
const idx = new Map();

// -------- Función Para Agregar Conexiones --------
function agregarConexion(a, b, linea, costo = 1) {
  grafo[a].push(new Edge(b, costo, linea));
  grafo[b].push(new Edge(a, costo, linea));
}

// -------- Transbordes --------
function cargarTransbordes() {
  function T(a, b) {
    if (!idx.has(a)) {
      console.error("No existe en idx:", a);
      return;
    }
    if (!idx.has(b)) {
      console.error("No existe en idx:", b);
      return;
    }
    agregarConexion(idx.get(a), idx.get(b), 0, 5);
  }
  // No es necesario repetir transbordes, la conexión es bidireccional
  T("Pantitlán (L1)", "Pantitlán (L5)");
  T("Pantitlán (L1)", "Pantitlán (L9)");
  T("Pantitlán (L1)", "Pantitlán (LA)");
  T("San Lázaro (L1)", "San Lázaro (LB)");
  T("Candelaria (L1)", "Candelaria (L4)");
  T("Pino Suárez (L1)", "Pino Suárez (L2)");
  T("Salto Del Agua (L1)", "Salto Del Agua (L8)");
  T("Balderas (L1)", "Balderas (L3)");
  T("Tacubaya (L1)", "Tacubaya (L7)");
  T("Tacuba (L2)", "Tacuba (L7)");
  T("Hidalgo (L2)", "Hidalgo (L3)");
  T("Bellas Artes (L2)", "Bellas Artes (L8)");
  T("Chabacano (L2)", "Chabacano (L8)");
  T("Chabacano (L2)", "Chabacano (L9)");
  T("Ermita (L2)", "Ermita (L12)");
  T("Deportivo 18 De Marzo (L3)", "Deportivo 18 De Marzo (L6)");
  T("La Raza (L3)", "La Raza (L5)");
  T("Guerrero (L3)", "Guerrero (LB)");
  T("Centro Médico (L3)", "Centro Médico (L9)");
  T("Zapata (L3)", "Zapata (L12)");
  T("Martín Carrera (L4)", "Martín Carrera (L6)");
  T("Consulado (L4)", "Consulado (L5)");
  T("Morelos (L4)", "Morelos (LB)");
  T("Jamaica (L4)", "Jamaica (L9)");
  T("Santa Anita (L4)", "Santa Anita (L8)");
  T("Instituto Del Petróleo (L5)", "Instituto Del Petróleo (L6)");
  T("Oceanía (L5)", "Oceanía (LB)");
  T("El Rosario (L6)", "El Rosario (L7)");
  T("Mixcoac (L7)", "Mixcoac (L12)");
  T("Tacubaya (L7)", "Tacubaya (L9)");
  T("Garibaldi (L8)", "Garibaldi (LB)");
  T("Atlalilco (L8)", "Atlalilco (L12)");
}

// -------- Cargar Todas Las Lineas --------
function cargarLineasMetro() {
  function L(v, num) {
    for (let i = 0; i < v.length - 1; i++) {
      const costo = 1;
      agregarConexion(idx.get(v[i]), idx.get(v[i + 1]), num, costo);
    }
  }
  L(linea1, 1);
  L(linea2, 2);
  L(linea3, 3);
  L(linea4, 4);
  L(linea5, 5);
  L(linea6, 6);
  L(linea7, 7);
  L(linea8, 8);
  L(linea9, 9);
  L(lineaA, 10);
  L(lineaB, 11);
  L(linea12, 12);

  cargarTransbordes();
}

// --------- Algoritmo Dijkstra ----------
function dijkstra(inicio, fin) {
  const n = estaciones.length;
  const dist = Array(n).fill(Infinity);
  const previo = Array(n).fill(-1);

  const pq = [];
  dist[inicio] = 0;
  pq.push([0, inicio]);

  while (pq.length > 0) {
    pq.sort((a, b) => a[0] - b[0]); // Prioridad mínima
    const [d, u] = pq.shift();
    if (d > dist[u]) continue;

    for (const e of grafo[u]) {
      const v = e.destino;
      const peso = e.costo;
      if (dist[u] + peso < dist[v]) {
        dist[v] = dist[u] + peso;
        previo[v] = u;
        pq.push([dist[v], v]);
      }
    }
  }

  const ruta = [];
  for (let v = fin; v !== -1; v = previo[v]) {
    ruta.push(v);
  }
  ruta.reverse();
  return ruta;
}

// -------- Índices --------
function cargarIndices() {
  let k = 0;
  function cargar(v) {
    for (const s of v) {
      idx.set(s, k++);
      estaciones.push(s);
    }
  }
  cargar(linea1); cargar(linea2); cargar(linea3); cargar(linea4);
  cargar(linea5); cargar(linea6); cargar(linea7); cargar(linea8);
  cargar(linea9); cargar(lineaA); cargar(lineaB); cargar(linea12);
}

// -------- Inicialización Para Navegador --------
(function init() {
  cargarIndices();
  cargarLineasMetro();
})();

window.getRoute = function(origen, destino) {
  const o = title(origen.trim());
  const d = title(destino.trim());

  if (!idx.has(o) || !idx.has(d)) {
    return [`Error: estación desconocida (${origen} o ${destino}).`];
  }

  const ini = idx.get(o);
  const fin = idx.get(d);
  const rutaIdx = dijkstra(ini, fin);

  const pasos = [];
  for (let i = 0; i < rutaIdx.length; i++) {
    const id = rutaIdx[i];
    pasos.push(estaciones[id]);

    if (i < rutaIdx.length - 1) {
      const nextId = rutaIdx[i + 1];
      const edge = grafo[id].find(e => e.destino === nextId);
      if (edge && edge.linea === 0) {
        pasos.push(">>> Transbordo aquí <<<");
      }
    }
  }
  return pasos;
};
