const sidebar = document.querySelector(".sidebar");
const grid = document.querySelectorAll(".grid");
const topbar = document.querySelector(".top-bar");

function setWidth() {
    grid.forEach(grid => {
        const sidebarWidth = sidebar.offsetWidth + 50;
        grid.style.marginLeft = `${sidebarWidth}px `;
        topbar.style.marginLeft = `${sidebarWidth - 50}px`

        grid.style.width = `calc(100% - ${sidebarWidth}px)`;
        topbar.style.width = `calc(100% - ${sidebarWidth - 50}px)`;
    });
}

window.addEventListener("DOMContentLoaded", () => {
    setWidth();
})

window.onload = setWidth;
window.onresize = setWidth;