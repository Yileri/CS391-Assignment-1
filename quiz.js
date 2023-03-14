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

    if (studentInput == "") {
        alert("Please enter a value");
    } else {
        if(n1-n2 == studentInput) {
            alert("Your answer is CORRECT!");
            points++;
        } else {
            alert("Your answer is INCORRECT!");
        }
        qNumber++;
        if (qNumber >= 5) {
            document.getElementById("Check").remove();
            document.getElementById("form").remove();
    
            const title = document.createElement("h2");
            const titleText = document.createTextNode("Summary:");
            title.appendChild(titleText);
    
            const score = document.createElement("p");
            const scoreText = document.createTextNode("Your final score is " + points + "/5");
            score.appendChild(scoreText);
    
            const sumDiv = document.getElementById("summary");
            sumDiv.appendChild(title);
            sumDiv.appendChild(score);
    
    
    
        } else {
            randomQuestion();
        }
    }
};

window.onload = randomQuestion;
