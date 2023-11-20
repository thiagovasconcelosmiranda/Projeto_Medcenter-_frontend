window.onload = function () {
    let menu = document.querySelector('.menu nav ul');
    document.querySelector('.menuMobile').addEventListener('click', () => {
        if (menu.style.display == "flex") {
            menu.style.display = "none";
        } else {
            menu.style.display = "flex";
        }
    });
}
