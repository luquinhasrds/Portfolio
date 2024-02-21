//agrupa as classe 'item-menu' em uma variavel
var menuItem = document.querySelectorAll('.item-menu');
var sections = document.querySelectorAll('.corpo');


//funcao
function selectLink() {
    // Remove a classe 'ativo' de todos os itens do menu
    menuItem.forEach((item) => item.classList.remove('ativo'));
    
    // Adiciona a classe 'ativo' apenas ao item de menu clicado
    this.classList.add('ativo');

    // Oculta todas as seções
    sections.forEach((section) => section.style.display = 'none');

    // Obtém o ID da seção correspondente ao link clicado
    var targetId = this.getAttribute('data-target');
    
    // Exibe a seção correspondente
    document.getElementById(targetId).style.display = 'block';
}

// Adiciona um listener de evento de clique a cada item do menu
menuItem.forEach((item) => item.addEventListener('click', selectLink));

// Exibe a seção 'Sobre' ao carregar a página
document.getElementById('sobre').style.display = 'block';
