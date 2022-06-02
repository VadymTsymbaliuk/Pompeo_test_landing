const showNavBtn = document.querySelector(".navbar-toggler")

showNavBtn.addEventListener("click", () => {
    let navbar = document.querySelector('.navbar-menu')
    document.querySelector('.navbar-menu').classList.toggle('menu__showed')
    console.log(navbar.classList)
})



