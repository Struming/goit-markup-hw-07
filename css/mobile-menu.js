openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

// Закрываем мобильное меню на более широких экранах
// в случае изменения ориентации устройства.
// Close the mobile menu on wider screens if the device orientation changes
window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
if (!e.matches) return;
mobileMenu.classList.remove('is-open');
openMenuBtn.setAttribute('aria-expanded', false);
bodyScrollLock.enableBodyScroll(document.body);
});

(() => {
    const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
    body: document.querySelector("body"),
    menuList: document.querySelector("mobile-list"),
    };

    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
    refs.menuList.addEventListener("click", removeMenu);
    
    function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
    }

    function removeMenu() {
        refs.menu.classList.add("is-hidden");
        refs.body.classList.remove("no-scroll");
        }
})();