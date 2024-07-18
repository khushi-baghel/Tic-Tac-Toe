let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let newGameBtn = document.querySelector("#new-btn");
let newGameBtn2 = document.querySelector("#new-btn2");
let msgContainer = document.querySelector(".msg");
let msg = document.querySelector("#msg");

let draw = document.querySelector(".draw");

let winner = false;

let count = 0;

let turn0 = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const checkDraw = () => {
    if (count == 9) {
        draw.classList.remove("hide");
        console.log("Game Draw");
    }
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            box.style.color = "chocolate";
            turn0 = false;
            count++;
        } else {
            box.innerText = "X";
            turn0 = true;
            box.style.color = "brown";
            count++;
        }
        box.disabled = true;
        checkWinner();
        if (!winner) {
            checkDraw();
        }
        
    })
})
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = ""
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                showWinner(pos1);
                winner = true;
            }
        }
    }
}
newGameBtn.addEventListener("click", () => {
    resetGame();
})
resetBtn.addEventListener("click", () => {
    resetGame();
})
newGameBtn2.addEventListener("click", () => {
    resetGame();
})
