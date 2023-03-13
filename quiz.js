let qNumber = 0;

let n1 = Math.floor(Math.random() * 10);
let n2 = Math.floor(Math.random() * 10);

function randomQuestion() {
    if (n1 >= n2) {
        document.getElementById("questionLabel").innerHTML = "What is " + n1 + "-" + n2 + "=?";
    } else {
        document.getElementById("questionLabel").innerHTML = "What is " + n2 + "-" + n1 + "=?";
    }
};

let quiz = [
    {question: "What is 10-2=?", answer:8, studentAnswer: 0},
    {question: "What is 22-5=?", answer:17, studentAnswer: 0},
    {question: "What is 7-3=?", answer:4, studentAnswer: 0},
    {question: "What is 15-14=?", answer:1, studentAnswer: 0},
    {question: "What is 13-4=?", answer:9, studentAnswer: 0}
];


function check() {
    if(quiz[qNumber].answer == document.getElementById("answer").value) {
        alert("Your answer is CORRECT!");
    } else {
        alert("Your answer is INCORRECT!");
    }
};

window.onload = randomQuestion;
