function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function initProposalForm(formSelector = "#proposalForm", outputSelector = "#proposalOutput") {
  const form = document.querySelector(formSelector);
  const output = document.querySelector(outputSelector);
  if (!form || !output) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const colonia = form.querySelector("#colonia").value.trim();
    const jefatura = form.querySelector("#jefatura").value;
    const descripcion = form.querySelector("#descripcion").value.trim();

    output.style.display = "block";
    output.innerHTML = `
      <strong>Propuesta lista para canalización:</strong><br>
      <span><b>Zona:</b> ${escapeHtml(colonia)}</span><br>
      <span><b>Jefatura:</b> ${escapeHtml(jefatura)}</span><br>
      <span><b>Detalle:</b> ${escapeHtml(descripcion)}</span>
    `;
  });
}