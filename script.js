var currentQuestion = 0;
var score = 0;
var totalQuestions = questions.length;

var container = document.getElementById("quizContainer");
var questionEl = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");

var nextButton = document.getElementById("nextButton");
var resultCont = document.getElementById("result");

//Load question
function loadQuestion(questionIndex) {
  var q = questions[questionIndex];
  questionEl.textContent = questionIndex + 1 + ". " + q.question;
  opt1.textContent = q.option1;
  opt2.textContent = q.option2;
  opt3.textContent = q.option3;
  opt4.textContent = q.option4;
}

function loadNextQuestion() {
  //If no radio option is selected, return an alert message
  var selectedOption = document.querySelector("input[type=radio]:checked");
  if (!selectedOption) {
    alert("Please select your answer!");
    return;
  }
  //Comparing the answer value, if true add 10 to the score
  var answer = selectedOption.value;
  if (questions[currentQuestion].answer == answer) {
    score += 10;
  }
  //Uncheck the current option, increment currentQuestion and load next question
  selectedOption.checked = false;
  currentQuestion++;
  if (currentQuestion == totalQuestions - 1) {
    nextButton.textContent = "Finish";
  }
  //Hide the container to reveal the score after final question
  if (currentQuestion == totalQuestions) {
    container.style.display = "none";
    resultCont.style.display = "";
    resultCont.textContent = `Your Score: ${score}/100`;
    return;
  }
  loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);
