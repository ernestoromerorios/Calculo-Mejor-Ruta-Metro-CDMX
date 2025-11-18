function attachAutocomplete(inputId, listId) {
  const input = document.getElementById(inputId);
  const list = document.getElementById(listId);

  input.addEventListener("input", () => {
    const val = input.value.toLowerCase();
    list.innerHTML = "";
    if (!val) return;
    const matches = estaciones.filter(e => e.toLowerCase().includes(val));
    matches.forEach(m => {
      const li = document.createElement("li");
      li.textContent = m;
      li.addEventListener("click", () => {
        input.value = m;
        list.innerHTML = "";
      });
      list.appendChild(li);
    });
  });
}

attachAutocomplete("origen","sug-origen");
attachAutocomplete("destino","sug-destino");

const form = document.getElementById("form");
const msg = document.getElementById("msg");
const routeBox = document.getElementById("route");
const limpiarBtn = document.getElementById("limpiar");

form.addEventListener("submit", e => {
  e.preventDefault();
  msg.hidden = true;
  routeBox.hidden = true;
  routeBox.innerHTML = "";

  const origen = document.getElementById("origen").value.trim();
  const destino = document.getElementById("destino").value.trim();

  if (!origen || !destino) {
    showMsg("Completa origen y destino.", true);
    return;
  }
  if (origen === destino) {
    showMsg("El origen y destino son la misma estación.", true);
    return;
  }

  // Grafo
  const ruta = window.getRoute(origen, destino);
  renderRoute(ruta);
});

limpiarBtn.addEventListener("click", () => {
  form.reset();
  msg.hidden = true;
  routeBox.hidden = true;
  routeBox.innerHTML = "";
});

function showMsg(text, isError=false) {
  msg.textContent = text;
  msg.classList.toggle("error", isError);
  msg.hidden = false;
}

function renderRoute(steps) {
  routeBox.hidden = false;
  routeBox.innerHTML = "";

  steps.forEach((s) => {
    const div = document.createElement("div");

    if (s === ">>> Transbordo <<<") {
      div.className = "step transbordo";
      div.textContent = s;
    } else {
      let claseLinea = "";

      // Detectar la línea a partir del texto de la estación
      console.log(s + " -> " + s.includes("(L1)"));
      if (s.includes("(L1)") || linea1.includes(s)) claseLinea = "linea1";
      else if (linea2.includes(s)) claseLinea = "linea2";
      else if (linea3.includes(s)) claseLinea = "linea3";
      else if (linea4.includes(s)) claseLinea = "linea4";
      else if (linea5.includes(s)) claseLinea = "linea5";
      else if (linea6.includes(s)) claseLinea = "linea6";
      else if (linea7.includes(s)) claseLinea = "linea7";
      else if (linea8.includes(s)) claseLinea = "linea8";
      else if (linea9.includes(s)) claseLinea = "linea9";
      else if (lineaA.includes(s)) claseLinea = "lineaA";
      else if (lineaB.includes(s)) claseLinea = "lineaB";
      else if (linea12.includes(s)) claseLinea = "linea12";
      else claseLinea = "transbordo";

      div.className = `step ${claseLinea}`;
      div.textContent = s;
    }

    routeBox.appendChild(div);
  });
}