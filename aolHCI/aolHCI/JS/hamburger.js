const hamburger = document.querySelector(".hamburger");
const nav_link = document.querySelector(".nav_link");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav_link.classList.toggle("active");
})

document.querySelectorAll(".nav_link").forEach(n => n.
    addEventListener("click", ()=>{
        hamburger.classList.remove("active");
        nav_link.classList.remove("active");
    }))