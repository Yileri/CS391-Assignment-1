let qNumber = 0;
let points = 0;

let n1, n2;

let quiz = [
    {question: "", answer:0, studentAnswer: 0},
    {question: "", answer:0, studentAnswer: 0},
    {question: "", answer:0, studentAnswer: 0},
    {question: "", answer:0, studentAnswer: 0},
    {question: "", answer:0, studentAnswer: 0}
];

function randomQuestion() {
    randomNumbers();
    document.getElementById("questionNumber").innerHTML = "Question " + (qNumber+1) + ":";
    document.getElementById("questionLabel").innerHTML = "What is " + n1 + "-" + n2 + "=?";
    quiz[qNumber].question=n1 + "-" + n2;
    quiz[qNumber].answer=n1-n2;
};

function randomNumbers() {
    n1 = Math.floor(Math.random() * 10);
    n2 = Math.floor(Math.random() * 10);
    if (n1 < n2) {
        let temp = n1;
        n1 = n2;
        n2 = temp;
    }
}

function check() {
    let studentInput = document.getElementById("answer").value;
    quiz[qNumber].studentAnswer = studentInput;
    if(n1-n2 == studentInput) {
        alert("Your answer is CORRECT!");
    } else {
        alert("Your answer is INCORRECT!");
    }
    qNumber++;
    randomQuestion();
    if(qNumber == 4) {
        document.getElementById("Check").remove();
    }
};

window.onload = randomQuestion;
