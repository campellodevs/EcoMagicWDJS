document.addEventListener('DOMContentLoaded', function () {
    const listaCarrinho = document.getElementById('lista-carrinho');
    const totalCompra = document.getElementById('total-compra');
    const btnLimpar = document.getElementById('btn-limpar');
    const btnCheckout = document.getElementById('btn-checkout');
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    function atualizarCarrinho() {
        listaCarrinho.innerHTML = '';
        let total = 0;

        carrinho.forEach((item, index) => {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            li.innerHTML = `
                <div>
                    <h5>${item.nome}</h5>
                    <p class="mb-0">Preço: R$${item.preco}</p>
                </div>
                <button class="btn btn-danger btn-sm" onclick="removerDoCarrinho(${index})">Remover</button>
            `;
            listaCarrinho.appendChild(li);
            total += parseFloat(item.preco);
        });

        totalCompra.textContent = `Total: R$${total.toFixed(2)}`;
        localStorage.setItem('totalCompra', total.toFixed(2)); 
    }

    atualizarCarrinho();

    btnLimpar.addEventListener('click', function () {
        localStorage.removeItem('carrinho');
        listaCarrinho.innerHTML = '';
        totalCompra.textContent = 'Total: R$0.00';
    });

    btnCheckout.addEventListener('click', function () {
        localStorage.setItem('totalCompra', totalCompra.textContent.replace('Total: R$', ''));
    });
});

function removerDoCarrinho(index) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    window.location.reload(); 
}