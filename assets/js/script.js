/**
 * Unique global variable representing the object
 */
const quiz = {
    1024: 'What is the earliest record of money made from paper?',
    1385: "When was the first monetary union in the world, called the 'RHENISH Monetary union', created?",
    1602: "When was the first-joint-stock company in the world, called  the 'Dutch Est India Company', created?",
    1634: "When did the 'tulip mania' start, known as the first speculative economic bubble?",
    1668: 'When was the first central bank created?',
    1844: 'When was the first gold standard introduced, money backed by gold?',
    1929: "When did the 'Great Depression' start, following the Wall Street Crash?",
    1933: "When did the 'Great Depression' end, following the Wall Street Crash?",
    1944: 'When was the Bretton Woods monetary system set up?',
    1971: "When did the 'International Gold standard' stopped?",
    1987: "When did the 'Black Monday' happen, which is the most spectacular global stock-market crash?",
    1994: "When did the 'Celtic Tiger' start, rapid economic growth of Ireland?",
    1999: "When did the 'Argentine great depression' happen?",
    2000: 'When did the Dotcom Buble occur?',
    2001: 'When did the Enron Scandal happen?',
    2002: 'When was the Euro introduced as cash in Europe?',
    2007: "When did the 'Subprime Crisis' in the USA occur?",
    2008: "When did The 'Global Financial Crisis' occur?",
    2010: "When did The 'Sovereign Debt Crisis' start?",
    2016: 'When did the Brexit occur?'
  };
  
  /**
   * The function below will be loading the page
   */
  document.addEventListener('DOMContentLoaded', function() {
    let formElement = document.getElementById("createAccountForm");
    formElement.addEventListener('submit', handleSubmit);
    document.getElementById('question').innerHTML = `<span style="color: red">To start the game, validate a name above.</span>`;
  
    //Bring the cursor into the "Full Name field" and reset the field
    document.getElementById('fullname').value = '';
    document.getElementById('fullname').focus();
  
    function handleSubmit(e) {
        e.preventDefault();
        let formData = e.target;
        let fullName = formData.fullNameField.value;
        let feedbackName = document.getElementById('feedbackName');
        let fullNameForm = document.getElementById('createAccountForm');
        const specialChars = /[`!@#$%^&*()_\+=\[\]{};':"\\|,.<>\/?~]/;
  
        if (!specialChars.test(fullName) && (fullName !== ' ')) {
            feedbackName.innerHTML = `Welcome <strong>${fullName}</strong> to the <strong>Money Quiz</strong>`;
            fullNameForm.remove();
            displayQuestion();
            checkAnswer();
        } else {
            feedbackName.innerHTML = '<span style="color: red">The name can not include <strong>special characters</strong>.<br><strong>Space</strong> may be used for composed names.</span>';
        }
    }
  
  
  });
  
  /**
  * The function will pick randomly a question from the Object Quiz
  */
  function selectRandomQuestion() {
    //Check if the object contains key/value pairs
    if (Object.keys(quiz).length !== 0) {
        let randomIndexOfObject = parseInt(Object.keys(quiz)[Math.floor(Math.random() * Object.keys(quiz).length)]);
        let valueOfTheRandomIndex = quiz[randomIndexOfObject];
        return [randomIndexOfObject, valueOfTheRandomIndex];
    } else {
        quizEnd();
        alert(`You have been through all the questions`);
    }
  
  }
  
  /**
  * The function will interact with the Button "Display Question"
  */
  function displayQuestion() {
    //Bring the cursor into "Answer field" and reset the field
    document.getElementById('answer-box').value = '';
    document.getElementById('answer-box').focus();
  
    let displayQuestionButton = document.getElementById("display-question");
    let RandomArray = selectRandomQuestion();
    document.getElementById('question').innerText = RandomArray[1];
    document.getElementById('question').value = RandomArray[0];
  
  }
  
  /**
  * The function will interact with the Button "Check Answer"
  */
  function checkAnswer() {
  
    let checkAnswerButton = document.getElementById("check-answer");
    checkAnswerButton.addEventListener("click", function() {
        let valueRandomQuestion = parseInt(document.getElementById('question').value);
        let userAnswer = parseInt(document.getElementById("answer-box").value);
        let isCorrect = userAnswer === valueRandomQuestion;
  
        if (isCorrect) {
            incrementRightAnswer();
        } else {
            incrementWrongAnswer();
        }
  
        // Delete the key/value pair used from the Object to avoid being used again.
        delete quiz[valueRandomQuestion];
  
        //Bring the cursor into the "Answer field" and reset the field
        document.getElementById('answer-box').value = '';
        document.getElementById('answer-box').focus();

        displayQuestion();
    });
  }
  
  /**
  * Gets the current score from the DOM and increments it by 1
  */
  function incrementRightAnswer() {
  
    let oldScore = parseInt(document.getElementById("rightAnswer").innerText);
    document.getElementById("rightAnswer").innerText = ++oldScore;
  
  }
  
  /**
  * Gets the current tally of incorrect answers from the DOM and increments it by 1
  */
  function incrementWrongAnswer() {
  
    let oldScore = parseInt(document.getElementById("wrongAnswer").innerText);
    document.getElementById("wrongAnswer").innerText = ++oldScore;
  
  }
  
  /**
  * Outcome of the quiz
  */
  function quizEnd() {
    let winner = parseInt(document.getElementById("rightAnswer").innerText);
    let looser = parseInt(document.getElementById("wrongAnswer").innerText);
    if (winner > looser) {
        document.getElementById('question').innerHTML = `<span style="color: red">You Won!</span>`;
    } else if (winner < looser) {
        document.getElementById('question').innerHTML = `<span style="color: red">You Lost!</span>`;
    } else if (winner === looser) {
        document.getElementById('question').innerHTML = `<span style="color: red">Take the quiz again!</span>`;
    } else {
        alert('An unexpected error occurred');
    }
  }