document.addEventListener("DOMContentLoaded", function() {
    function printHighscores() {
        let highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
        console.log("Retrieved highscores from localStorage:", highscores);  

        highscores.sort(function(a, b) {
            return b.score - a.score;
        });

   
        highscores.forEach(function(score) {
            let liTag = document.createElement("li");
            liTag.textContent = score.name + " - " + score.score;

            let olEl = document.getElementById("highscores");
            olEl.appendChild(liTag);
        });
    }

    function clearHighscores() {
        window.localStorage.removeItem("highscores");
        window.location.reload();
    }

    document.getElementById("clear").onclick = clearHighscores;


    printHighscores();
});