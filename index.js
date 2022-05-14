const valor = document.querySelector("#formularios");
function enviarFormulario() {
  console.log(`Nome: ${valor.nome.value}`);
  console.log(`Endereco: ${valor.endereco.value}`);
  console.log(`Cidade: ${valor.cidade.value}`);
  console.log(`Estado: ${valor.estado.value}`);
  console.log(`Natureza do cargo: ${valor.cargo.value}`);
  console.log(`Mini-curriculo: ${valor.curriculo.value}`);

  const interessesEscolhidos = [];
  for (const boxInteresse of valor.interesses) {
    if (boxInteresse.checked) {
      interessesEscolhidos.push(boxInteresse.value);
    }
  }
  if (interessesEscolhidos.length === 0) {
    alert("Escolha pelo menos uma área de interesse");
  }
  console.log(`Área de interesse: ${interessesEscolhidos}`);
}
