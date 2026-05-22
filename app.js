const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');
const menuOverlay = document.getElementById('menuOverlay');

/* TODOS LOS LINKS DEL MENÚ */
const menuLinks = document.querySelectorAll('.menu-links a');

/* ABRIR / CERRAR MENÚ */
menuToggle.addEventListener('click', () => {

  sideMenu.classList.toggle('active');
  menuOverlay.classList.toggle('active');

});

/* CERRAR AL DAR CLICK EN OVERLAY */
menuOverlay.addEventListener('click', closeMenu);

/* CERRAR AL DAR CLICK EN CUALQUIER OPCIÓN */
menuLinks.forEach(link => {

  link.addEventListener('click', () => {

    closeMenu();

  });

});

/* CERRAR SI DAN CLICK FUERA DEL MENÚ */
document.addEventListener('click', (e) => {

  const clickedInsideMenu = sideMenu.contains(e.target);
  const clickedButton = menuToggle.contains(e.target);

  if (
    sideMenu.classList.contains('active') &&
    !clickedInsideMenu &&
    !clickedButton
  ) {

    closeMenu();

  }

});

/* FUNCIÓN PARA CERRAR */
function closeMenu(){

  sideMenu.classList.remove('active');
  menuOverlay.classList.remove('active');

}