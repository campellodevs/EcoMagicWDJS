# EcoMagic - Mercado Sustentável

**EcoMagic** é uma loja virtual de produtos ecológicos, construída com HTML, CSS, JavaScript e Bootstrap. O site permite que os usuários naveguem pelos produtos, adicionem itens ao carrinho e concluam a compra por meio de uma funcionalidade de checkout. O armazenamento de dados é feito localmente, usando o `localStorage`.

## Funcionalidades

- **Página inicial**: Exibe os produtos disponíveis, com opções de filtro.
- **Carrinho de Compras Dinâmico**: Usuários podem adicionar e remover itens.
- **Checkout**: Finalização da compra com confirmação de dados.
- **Responsividade**: Layout adaptado para dispositivos móveis e desktop.
- **Armazenamento Local**: O estado do carrinho de compras é salvo usando `localStorage`.

## Tecnologias Utilizadas

- HTML5
- CSS3
- Bootstrap 5
- JavaScript (ES6+)

## Estrutura de pastas
**index.html**: Página principal que exibe os produtos e permite adicionar itens ao carrinho.
**carrinho.html**: Página do carrinho de compras, onde o usuário pode visualizar os itens selecionados, remover itens e avançar para o checkout.
**checkout.html**: Simulação da página de checkout.
**index.js**: Arquivo responsável por adicionar funcionalidades à página principal, como adicionar produtos ao carrinho e filtrar produtos por preço.
**carrinho.js**: Arquivo com a lógica para exibir, atualizar e limpar o carrinho de compras.
**produtos.json**: Arquivo JSON que simula a resposta de uma API contendo os produtos da loja.
**styles.css**: Arquivo CSS para estilização customizada da aplicação.


## Como Usar
Na página inicial (index.html), você verá os produtos divididos em categorias. Selecione um produto e clique em Comprar para adicioná-lo ao carrinho.
O contador de carrinho no canto superior direito é atualizado automaticamente.
Vá até a página do carrinho (carrinho.html) para revisar os itens, remover produtos ou limpar o carrinho.
O botão Ir para Checkout redireciona você para a página de checkout (checkout.html), onde o total da compra é exibido.

## Simulação da API
Os produtos são carregados a partir de um arquivo JSON que simula uma API. Para modificar os produtos exibidos na loja, edite o arquivo produtos.json. Exemplo de estrutura de um produto no arquivo:

{
  "id": 1,
  "nome": "EcoMagic - Vestido",
  "categoria": "Roupas",
  "preco": 120.00,
  "imagem": "src/vestido.png"
}


## Integrantes:
- Gabriel de Mello
- Lucca Campello
- Victório Bastelli
