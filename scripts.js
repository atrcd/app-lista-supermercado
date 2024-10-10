var items = [];

document.querySelector('input[type=submit]')
.addEventListener('click', () => {
  var nomeProduto = document.querySelector('input[name="nome_produto"]');
  var precoProduto = document.querySelector('input[name="valor_produto"]');

  // Input validation (optional)
  if (!nomeProduto.value || !precoProduto.value) {
    alert("Por favor, preencha o nome e o preço do produto.");
    return; // Exit function if validation fails
  }

  // Add product to array
  items.push({
    nome: nomeProduto.value,
    valor: precoProduto.value
  });

  // Update product list and calculate sum
  let listaProdutos = document.querySelector('.lista-produtos');
  let soma = 0;
  listaProdutos.innerHTML = "";

  items.forEach(item => {
    soma += parseFloat(item.valor);
    listaProdutos.innerHTML += `
      <div class="lista-produto-single">
        <h3>${item.nome}</h3>
        <span class="price-produto">R$ ${item.valor}</span>
      </div>
    `;
  });

  // Format sum and update element
  soma = soma.toFixed(2);
  let elementoSoma = document.querySelector('.soma-produto h1');
  elementoSoma.innerHTML = 'R$ ' + soma;

  // Clear input fields
  nomeProduto.value = "";
  precoProduto.value = "";
});

document.querySelector('button[name="limpar"]')
.addEventListener('click', ()=>{
  items = [];

  document.querySelector('.lista-produtos').innerHTML = "";
  document.querySelector('.soma-produto h1').innerHTML = "R$0";
});