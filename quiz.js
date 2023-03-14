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
    
            const sumDiv = document.getElementById("summary");

            const title = document.createElement("h2");
            const titleText = document.createTextNode("Summary:");
            title.appendChild(titleText);
            sumDiv.appendChild(title);
    
            const score = document.createElement("p");
            const scoreText = document.createTextNode("Your final score is " + points + "/5");
            score.appendChild(scoreText);
            sumDiv.appendChild(score);

            for (let i=0; i<quiz.length; i++) {
                let sumLine = document.createElement("p");
                if (quiz[i].studentAnswer == quiz[i].answer) {
                    let sumLineText = document.createTextNode((i+1) + ". "+  quiz[i].question + "=" + quiz[i].studentAnswer + 
                    " and the answer is CORRECT!");
                    sumLine.appendChild(sumLineText);
                } else {
                    let sumLineText = document.createTextNode((i+1) + ". "+  quiz[i].question + "=" + quiz[i].studentAnswer + 
                    " and the answer is WRONG! It should have been " + quiz[i].answer);
                    sumLine.appendChild(sumLineText);
                }
                sumDiv.appendChild(sumLine);
            }
    
    
    
        } else {
            randomQuestion();
        }
    }
};

window.onload = randomQuestion;
