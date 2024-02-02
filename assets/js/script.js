function game() {
    const actions = ["rock", "paper", "scissors", "lizard", "spock"];
    window.addEventListener("load", () => {
        let userChoice = "";


        document.querySelectorAll(".user-choice .game-card").forEach(card => {
            card.addEventListener("click", (ev) => {
                userChoice = getUserChoice(ev.target);
                console.log(getComputerChoice());

                startGame();
            })
        })

        function startGame() {

        }
    })


    function getUserChoice(target) {
        if (target.nodeName === "IMG") {
            return target.parentElement.classList[1]
        }
        return target.classList[1]
    }

    function getComputerChoice() {
        return actions[Math.floor(Math.random() * 5)];
    }
}

game()