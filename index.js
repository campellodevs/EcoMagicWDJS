

function adicionarAoCarrinho(productId) {
  
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || {};

  
  if (carrinho[productId]) {
    carrinho[productId] += 1;
  } else {
    carrinho[productId] = 1;
  }

  
  localStorage.setItem('carrinho', JSON.stringify(carrinho));

  
  atualizarContadorCarrinho();

  
  window.location.href = 'carrinho.html';
}


function atualizarContadorCarrinho() {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || {};
  let contador = 0;
  for (let id in carrinho) {
    contador += carrinho[id];
  }
  document.querySelector('.badge').textContent = contador;
}


function filtrarProdutosPorPreco() {
  const filtro = document.getElementById('priceFilter').value;
  const produtosContainer = document.querySelectorAll('.custom-margin-top .row > div, .mt-5 .row > div, .container.mb-5 .row > div');

  
  let produtosArray = Array.from(produtosContainer);

  
  produtosArray.sort((a, b) => {
    let priceA = parseFloat(a.getAttribute('data-price'));
    let priceB = parseFloat(b.getAttribute('data-price'));

    if (filtro === 'asc') {
      return priceA - priceB;
    } else if (filtro === 'desc') {
      return priceB - priceA;
    } else {
      return 0;
    }
  });

  
  produtosArray.forEach(produto => {
    produto.parentNode.appendChild(produto);
  });
}


document.getElementById('priceFilter').addEventListener('change', filtrarProdutosPorPreco);

document.querySelectorAll('.container .row > div').length


document.addEventListener('DOMContentLoaded', atualizarContadorCarrinho);


function adicionarAoCarrinho(id, nome, preco) {
  
  const cartCounter = document.getElementById('cart-counter');
  
 
  let itemCount = parseInt(cartCounter.textContent);
  itemCount += 1;
  cartCounter.textContent = itemCount;

 
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.push({ id, nome, preco });
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}


document.addEventListener('DOMContentLoaded', function () {
  const cartCounter = document.getElementById('cart-counter');
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  cartCounter.textContent = carrinho.length;
});