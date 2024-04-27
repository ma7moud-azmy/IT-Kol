// creat toole
let Btn = document.querySelector("button");
let nav = document.querySelector("nav");
Btn.addEventListener("click", function () {
    nav.classList.toggle("active");
});

// close toogle when click out side 
document.onclick = function (e) {
    if (!Btn.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove("active");
    }
};


// counter
let nums = document.querySelector(".nums .num");
let section = document.querySelector(".abouT");
function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 3000 / goal);
}
startCount(document.querySelectorAll(".nums .num")[0]);
startCount(document.querySelectorAll(".nums .num")[1]);
startCount(document.querySelectorAll(".nums .num")[2])