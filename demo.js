document.addEventListener("DOMContentLoaded", function (event) {
    console.log("Hellow World!")

    const body = document.querySelector("body");
    const btn = document.getElementById("clickme");
    btn.addEventListener("click", () => {
        body.classList.toggle("dark");
        console.log("click");
    })
});