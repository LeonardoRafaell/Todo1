//Criando Função adicionar
function adicionarTarefa() {
  let li = document.createElement("LI");
  let input = document.formPrincipal.tarefa.value;
  let inputTexto = document.createTextNode(input);

  li.appendChild(inputTexto);

  document.querySelector("ul").appendChild(li);
  document.formPrincipal.tarefa.value = "";

  criarBotaoFechar(li);
}
function criarBotaoFechar(li) {
  let Rotulo = document.createElement("SPAN");
  let Fechar = document.createTextNode("\u00D7");

  Rotulo.className = "close";
  Rotulo.appendChild(Fechar);
  li.appendChild(Rotulo);

  Rotulo.onclick = () => {
    Rotulo.parentElement.style.display = "none"
  }
}

document.querySelectorAll('li').forEach(criarBotaoFechar)
document.querySelector('ul').addEventListener('click', (e) => { 
    if(e.target.tagName === "LI") {
        e.target.classList.toggle('checked')
    }
    
})
