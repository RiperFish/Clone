const menu_links = document.querySelectorAll(".menu a");
menu_links.forEach(link => {
    link.addEventListener('mouseover', e => {
        menu_links.forEach(active_link => active_link.classList.remove('on_hover'));
        //link.classList.add('on_hover');
    })
    link.addEventListener('mouseout', e => {
        menu_links.forEach(active_link => active_link.classList.remove('on_hover'));
        //link.classList.add('on_hover');
    })
    link.addEventListener('click', e => {
        menu_links.forEach(active_link => active_link.classList.remove('active'));
        link.classList.add('active');
    })

})

const beauty_link = document.querySelector('.menu__beauty');
const dropdown_menu = document.querySelector('.main-menu__dropdown');
const menu__beauty_link = document.querySelector('.menu__beauty_link');
beauty_link.addEventListener('mouseover', e => {
    console.log("hovered");
    if (!dropdown_menu.classList.contains('dropdown__show')) {
        dropdown_menu.classList.remove('dropdown__hide');
        dropdown_menu.classList.toggle('dropdown__show');
        menu__beauty_link.classList.add('on_hover');
    }

})
beauty_link.addEventListener('mouseout', e => {
    console.log("mouseout");
    if (dropdown_menu.classList.contains('dropdown__show')) {
        dropdown_menu.classList.remove('dropdown__show');
        dropdown_menu.classList.toggle('dropdown__hide');
        menu__beauty_link.classList.remove('on_hover');
    }
})