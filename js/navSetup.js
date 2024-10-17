const burgerBtn = document.getElementById('burgerBtn');
const sideNav = document.getElementById('sideNav');

burgerBtn.addEventListener('click', () => {
  sideNav.classList.toggle('-translate-x-full');
});
