const ENERGY_SCENARIOS = {
  actual: {
    summary: "Mayor carga en alumbrado tradicional y bombeo; mayores pérdidas y emisiones.",
    items: [
      { label: "Alumbrado público y edificios municipales", value: 78 },
      { label: "Bombeo y distribución de agua", value: 72 },
      { label: "Hogares, comercios y transporte", value: 85 }
    ]
  },
  optimizado: {
    summary: "Menor gasto energético, ahorro económico familiar/municipal y menos emisiones con LED, solar y eficiencia hídrica.",
    items: [
      { label: "Alumbrado público y edificios municipales (LED + solar)", value: 38 },
      { label: "Bombeo y distribución de agua (eficiencia y fugas)", value: 44 },
      { label: "Hogares, comercios y transporte (eficiencia + verde)", value: 56 }
    ]
  }
};

export function initEnergySimulator({
  barsId = "energyBars",
  summaryId = "energySummary",
  actualBtnId = "btnActual",
  optimizedBtnId = "btnOptimizado"
} = {}) {
  const barsContainer = document.getElementById(barsId);
  const summaryEl = document.getElementById(summaryId);
  const btnActual = document.getElementById(actualBtnId);
  const btnOptimizado = document.getElementById(optimizedBtnId);

  if (!barsContainer || !summaryEl || !btnActual || !btnOptimizado) return;

  function renderScenario(key) {
    const data = ENERGY_SCENARIOS[key];
    barsContainer.innerHTML = data.items
      .map(
        (item) => `
        <div class="bar-row">
          <div class="bar-label">
            <span>${item.label}</span>
            <span>${item.value}%</span>
          </div>
          <div class="bar-track">
            <div class="bar-fill" style="width: ${item.value}%;"></div>
          </div>
        </div>
      `
      )
      .join("");
    summaryEl.textContent = data.summary;
  }

  btnActual.addEventListener("click", () => {
    btnActual.classList.add("active");
    btnOptimizado.classList.remove("active");
    renderScenario("actual");
  });

  btnOptimizado.addEventListener("click", () => {
    btnOptimizado.classList.add("active");
    btnActual.classList.remove("active");
    renderScenario("optimizado");
  });

  renderScenario("actual");
}