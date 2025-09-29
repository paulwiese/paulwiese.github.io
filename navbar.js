fetch("/navbar.html")
.then(res => res.text())
.then(html => {
const container = document.getElementById("navbar");
container.innerHTML = html;

const hamburger = container.querySelector(".hamburger");
const links     = container.querySelector(".links");

if (hamburger && links) {
    hamburger.addEventListener("click", () => {
    links.classList.toggle("active");
    });
}
});