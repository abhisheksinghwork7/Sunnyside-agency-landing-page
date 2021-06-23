const navButton = document.body.querySelector(".nav_bars");
let clicked = true;

navButton.addEventListener("click", (event) => {
    if (document.documentElement.clientWidth < 992) {
        if (clicked === false) {
            document.getElementById('nav_links').className = 'nav_links';
            clicked = true;
        } else {
            document.getElementById('nav_links').className = 'nav_links nav_links_open';
            clicked = false;
        }
    }
})