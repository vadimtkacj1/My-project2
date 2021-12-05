const servicesMenuItems = document.querySelectorAll('.services-menu li');

servicesMenuItems.forEach(servicesMenuItem => {
    servicesMenuItem.onclick = function() {
        servicesMenuItems.forEach(servicesMenuItem => servicesMenuItem.classList.remove('services-menu_item-main'));
        servicesMenuItem.classList.add('services-menu_item-main');
    }
});
