const burgerBtn = document.getElementById('burgerBtn');
const sideNav = document.getElementById('sideNav');
const mainContentDiv = document.getElementById('mainContentDiv');

// Toggle sidebar when clicking the burger button
burgerBtn.addEventListener('click', () => {
  sideNav.classList.toggle('-translate-x-full');
});

// Hide sidebar when clicking/tapping on main content
mainContentDiv.addEventListener('click', () => {
  if (!sideNav.classList.contains('-translate-x-full')) {
    sideNav.classList.add('-translate-x-full');
  }
});
