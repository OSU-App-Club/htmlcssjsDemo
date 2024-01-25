document.addEventListener("DOMContentLoaded", function (event) {
    console.log("Hellow World!")

    const body = document.querySelector("body");
    const content = document.getElementById("content");
    const btn = document.getElementById("clickme");
    btn.addEventListener("click", async () => {
        body.classList.toggle("dark");
        
        try {
            let randomWord = document.createElement("p");
            const response = await fetch("https://random-word-api.herokuapp.com/word")
            const data = await response.json();
            randomWord.textContent = data[0];
            content.appendChild(randomWord);

        }catch (err) {
            console.log(err);
        }
        
        
    })
});