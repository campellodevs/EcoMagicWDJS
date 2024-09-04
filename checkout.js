console.log('checkout.js carregado');


function carregarCarrinho() {
    const listaCarrinho = document.getElementById('lista-resumo');
    const totalPrecoElement = document.getElementById('total-preco');
    const itensCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let totalPreco = parseFloat(localStorage.getItem('totalCompra')) || 0;

    
    listaCarrinho.innerHTML = '';

    itensCarrinho.forEach(item => {
        const listaItem = document.createElement('li');
        listaItem.classList.add('list-group-item');
        listaItem.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        listaCarrinho.appendChild(listaItem);
    });

    
    if (totalPrecoElement) {
        totalPrecoElement.textContent = `Total: R$ ${totalPreco.toFixed(2)}`;
    } else {
        console.error('Elemento total-preco não encontrado');
    }
}


function finalizarCompra(event) {
    event.preventDefault();

  
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const endereco = document.getElementById('endereco').value;

    
    if (nome && email && endereco) {
        
        alert(`Compra realizada com sucesso!\n\nNome: ${nome}\nEmail: ${email}\nEndereço: ${endereco}`);

        
        localStorage.removeItem('carrinho');
        localStorage.removeItem('totalCompra');
        
        
        window.location.href = 'index.html';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM completamente carregado e analisado');
    carregarCarrinho();

    const formCheckout = document.getElementById('form-checkout');
    formCheckout.addEventListener('submit', finalizarCompra);
});
