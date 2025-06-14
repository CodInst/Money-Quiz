# The Money Quiz

![money-quiz](https://github.com/user-attachments/assets/05e17631-df46-4101-b1e5-63fe83e964fe)

# Table of Contents

1. <a>[About](#about)</a>
2. <a>[Live Project](#live-project)</a>
3. <a>[Deployment](#deployment)</a>
4. <a>[Design](#design)</a>
5. <a>[Colours](#colours)</a> 
6. <a>[Features](#features)</a>
7. <a>[Codes](#codes)</a>
8. <a>[Testing](#testing)</a>
      - <a>[Testing with W3C HTML](#testing-with-w3c-html)</a>
      - <a>[Testing with W3C CSS](#testing-with-w3c-css)</a>
      - <a>[Testing with Chrome Lighthouse](#testing-with-chrome-lighthouse)</a>
      - <a>[Testing JavaScript With Js Hint](#testing-javascript-with-js-hint)</a>
      - <a>[Testing JavaScript With Chrome Console](#testing-javascript-with-chrome-console)</a>
      - <a>[Testing Project With Sandbox](#testing-project-with-sandbox)</a>
9. <a>[Project Revision and Manual Testing](#project-revision-and-manual-testing)</a>
10. <a>[Credits](#credits)</a>

# About

The Money Quiz will test your general knowledge about key historical events that have shaped our modern economic system.<br>
The quiz contains 20 questions displayed randomly.

<a align="right">[Return Top](#table-of-contents)</a>

# Live Project

[Link](https://codinst.github.io/Money-Quiz/)

<a align="right">[Return Top](#table-of-contents)</a>

# Deployment

Using Github and Microsoft Visual Code to deploy my project

### **My Repository**

1. Created a new public local repository on my Github account, and copied the repository locally on my computer using Microsoft Visual Code to start building the website.
2. Regularly and repeatedly, I committed my changes to my local repository with commands below. Each commit has its custom message.
      - <strong>git add .</strong>
      - <strong>git commit -m "Custom message"</strong>
3. Finally pushing my commits to my remote repository by using the command below.
      - <strong>git push</strong>

### **Hosting**

1. To start working on my website, I went onto Github and selected my repository named <strong>Money-Quiz</strong>.
2. I went to Settings > Pages
3. I made sure the following settings were applied:
      - Source: 'Deploy from a branch' on the dropdown menu
      - Branch: 'Main' and 'root' from the dropdown menus
      - Entered save

### **Deployment on Github**

![Deployment Picture 1](https://github.com/user-attachments/assets/7bbe807d-9ee5-46c9-a33b-478ac6af8bc8)
![Deployment Picture 2](https://github.com/user-attachments/assets/4630e194-3b4b-41d5-8830-a3ea7ca1629b)

<a align="right">[Return Top](#table-of-contents)</a>

# Design

![Responsive image for index.html](https://github.com/user-attachments/assets/ceae7110-ca24-4830-8b01-daaba7eaf255)

![Responsive image for quiz.html](https://github.com/user-attachments/assets/376c51f1-79e2-4b43-b1b9-c26d9ee3dead)

<a align="right">[Return Top](#table-of-contents)</a>

# Colours

**-Two main colours to contrast objects of the website, notably the menu and buttons**
  - ![#1a4b82](https://placehold.co/15x15/1a4b82/1a4b82.png) `#1a4b82`
  - ![#ead615](https://placehold.co/15x15/ead615/ead615.png) `#ead615`

**-Background colour**
  - ![#c8c9cc](https://placehold.co/15x15/c8c9cc/c8c9cc.png) `#c8c9cc`

**-Three main colours for fonts**
  - ![#000000](https://placehold.co/15x15/000000/000000.png) `#000000`
  - ![#FFFFFF](https://placehold.co/15x15/FFFFFF/FFFFFF.png) `#FFFFFF`
  - ![#ff0000](https://placehold.co/15x15/ff0000/ff0000.png) `#ff0000`

<a align="right">[Return Top](#table-of-contents)</a>

# Features

**-Logo**<br>
A distinctive and customised logo<br>
![money-quiz](https://github.com/user-attachments/assets/05e17631-df46-4101-b1e5-63fe83e964fe)

**-Menu**<br>
An extensive, responsive and colourful website and menu: The website combined <strong>HTML, CSS and bootstrap</strong>
![Menu bootstrap](https://github.com/user-attachments/assets/4c9701b7-154a-42ab-b84c-4c954aa5cf39)

**-Pages**<br>
The website contains <strong>two pages</strong>:<br>
 - One page describing the rules and the nature of the quiz<br>
![Describe the rules](https://github.com/user-attachments/assets/44c04d94-567a-41a5-bd41-9c62226901d1)<br>

 - One page to run the quiz<br>
![page showing the quiz](https://github.com/user-attachments/assets/a1395042-1a7a-4464-ad1e-a02c9c1276c7)<br>

**-Mobile Responsiveness**<br>
The website is built for mobile users<br>
![Mobile Page 1](https://github.com/user-attachments/assets/6d007f6d-2313-4bdd-ad46-9ccb9d157245)<br>

![Mobile Page 2](https://github.com/user-attachments/assets/dcfba1f3-7e3f-468e-bbbb-5fa4301d67dc)<br>

<a align="right">[Return Top](#table-of-contents)</a>

# Codes

 <strong>script.js</strong> contains:<br>
-  ` const quiz ` is the only <strong>global variable</strong> acting like a database. The type is an object. It includes 20 questions and dates.<br>
-  <strong>Seven functions:</strong><br>
	-  ` document.addEventListener('DOMContentLoaded', function(){}) ` A general function that call the other functions and got loaded with the page.<br>
	-  ` selectRandomQuestion() ` will pick randomly a question from the Object Quiz.<br> 
	-  ` displayQuestion() ` will display a new question.<br>
	-  ` checkAnswer() ` will interact with the Button "Check Answer"<br>
	-  ` incrementRightAnswer() ` will get the current score from the DOM and increments it by 1<br>
	-  ` incrementWrongAnswer() ` will get the current tally of incorrect answers from the DOM and increments it by 1<br>
	-  ` quizEnd() ` will close the quiz<br>
- <strong>Three safe-guards</strong> when populating the fields:<br>
	-  A variable ` specialChars ` to prevent the use of special characters in name field at Line 45.<br>
	-  ` (fullName.trim().length !== 0) ` prevent the validation of the name field when there is only the character space used at Line 45.<br>
	-  ` (!Number.isNaN(userAnswer)) ` only allows the validation of the answer field when a number is used at Line 103.<br>

<a align="right">[Return Top](#table-of-contents)</a>

# Testing

## Testing With W3C HTML

<strong>.The page "index.html" contains no error.</strong><br><br>
![index.html](https://github.com/user-attachments/assets/0f131ba6-51d4-4273-8f6a-5f88c36db867)
<br>
<strong>.The page "quiz.html" contains no error.</strong><br><br>
![quiz.html](https://github.com/user-attachments/assets/8251afb8-0900-4224-92e5-70b953a16a00)

<a align="right">[Return Top](#table-of-contents)</a>

## Testing with W3C CSS

<strong>.The stylesheet contains no error.</strong><br><br>
![CSS Check](https://github.com/user-attachments/assets/e0d2c4f7-769e-42a8-aeb5-1140cc9ed7ea)

<a align="right">[Return Top](#table-of-contents)</a>

## Testing With Chrome Lighthouse

<strong>.The page "index.html"</strong><br><br>
![index.html](https://github.com/user-attachments/assets/f42e5f00-7c12-4dc6-bbc9-87914bee7f6c)<br><br>
Comment: The colors used are intended.

<strong>.The page "quiz.html</strong><br><br>
![quiz.html](https://github.com/user-attachments/assets/073666a8-ba64-4339-9e61-f59dd829b65a)<br><br>
Comment: The colors used are intended.

<a align="right">[Return Top](#table-of-contents)</a>

## Testing JavaScript With Js Hint

No error found, It contains only warnings.
All semi-colons checked.<br><br>
![JavaScript](https://github.com/user-attachments/assets/e555dd78-75c6-4ccc-ba07-96ccd754eaf2)

<a align="right">[Return Top](#table-of-contents)</a>

## Testing JavaScript With Chrome Console

<strong>No error found</strong>

<a align="right">[Return Top](#table-of-contents)</a>

## Testing Project With Sandbox
The project has been tested via a sandbox:

https://codinst.github.io/Money-Q/<br>
https://github.com/CodInst/Money-Q

<a align="right">[Return Top](#table-of-contents)</a>

# Project Revision and Manual Testing

The previous version of the project can be found at [Link](https://codinst.github.io/Money-Q/).<br>
-I proceeded with a manual testing and made multiple <strong>User-Experience</strong> improvements.<br>
The testing brought about the following changes:<br>
  - <strong>Removed 'Display Question' Button and Game Starts automatically</strong><br>
  The purpose of changes below is to start the quiz once the name is entered without having to validate by clicking on a button.<br>
  <strong>Line 89</strong>: removed the line from <em>quiz.html</em>  ` button id="display-question" class="btn btn-primary btn-sm">Display Question /button `<br>
  <strong>Line 49</strong>: removed the line from <em>script.js</em> - Removed HTML input ` document.getElementById('question').innerHTML = .... `<br>
  <strong>Lines 86 & 91 </strong>: removed the line from <em>script.js</em> - Simplified the function to a normal function ` displayQuestionButton.addEventListener("click", function() {})  `<br>
  <strong>Line 118</strong>: added the line from <em>script.js</em> - The function ` displayQuestion(); ` is included within checkAnwser()<br>

  - <strong>Removed Alert Boxes and Included HTML input</strong><br>
  All alert boxes were removed and the feedback was sent to HTML input on the page.<br>
  <strong>Line 104</strong>: removed the line from <em>script.js</em> - Alert Box removed ` alert("The answer is correct."); `<br>
  <strong>Line 107</strong>: removed the line from <em>script.js</em> - Alert Box removed ` alert("You answered ${userAnswer}. The correct answer was ${valueRandomQuestion}."); `<br>
  <strong>Line 71</strong>: removed the line from <em>script.js</em> - Alert Box removed ` alert("You have been through all the questions"); `<br>
  <strong>Line 105</strong>: added the line on <em>script.js</em> - HTML text of previously answered question ` document.getElementById('answerToQuestion').innerHTML = "Correct, the anwser for... `<br>
  <strong>Line 108</strong>: added the line on <em>script.js</em> - HTML text of previously answered question ` document.getElementById('answerToQuestion').innerHTML = "Incorrect, the anwser for... `<br>
  <strong>Lines 92 to 94</strong>: added the line on <em>quiz.html</em> - The question answered will be displayed below "check Answer" button ` <div class="text-center"> <p  id="answerToQuestion"></p> </div> `<br>

  - <strong>Safeguard</strong><br>
  Each of two fields had their code improved to prevent the validation of the fields when only  the character space is used.<br>
 <strong>Line 47</strong>: changed the line on <em>script.js</em> - To check if the 'name' field contains only space ` if (!specialChars.test(fullName) && (fullName.trim().length !== 0)) {} `<br>
   <strong>Line 103</strong>: added the line on <em>script.js</em> - To check if the 'answer-box' field contains only a number ` if (!Number.isNaN(userAnswer)){} `<br>
   <strong>Lines 120</strong>: added the line on <em>script.js</em> - Else condition added<br>
   <strong>Lines 121</strong>: added the line on <em>script.js</em>- HTML text if number is missing ` document.getElementById('answerToQuestion').innerHTML =... `<br>

<a align="right">[Return Top](#table-of-contents)</a>

# Credits

.All pictures displayed and used are property of @TheCreativeNerds.ie (Me).<br>
.Initially purchased with a commercial licence and re-worked graphically for consumption.<br>
.Incrementscore functions, in the project, have been borrowed from the <strong>Love Math</strong> project.<br>

<a align="right">[Return Top](#table-of-contents)</a>
