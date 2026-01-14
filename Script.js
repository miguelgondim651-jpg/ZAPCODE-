function executar() {
  const codigo = document.getElementById("editor").value;
  const iframe = document.getElementById("preview");
  iframe.srcdoc = codigo;
}
