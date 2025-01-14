//area do menu-hamburger

// Seleciona os elementos
const menuHamburger = document.getElementById('menu-hamburger');
const menuLateral = document.getElementById('menu-lateral');

// Adiciona evento de clique ao ícone do hambúrguer
menuHamburger.addEventListener('click', () => {
  // Alterna a classe 'active' no menu lateral
  menuLateral.classList.toggle('active');
});