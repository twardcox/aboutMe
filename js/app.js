/* eslint-disable no-console */
'use strict';

var guessCount = 0;
var guessCorrectCount = 0;

// This alert notifies the user of what to expect
alert(' The following is a series of questions that I will ask you to answer about me. You are allowed to answer Yes or No only and you do not get to ask any questions back. You are guessing whether or not I have done what I am claiming.');

// sets the username variable
var userName = prompt('You know who I am, who are you. Please enter your name.');

// global response for bad input
var ruleBreaker = userName + ' You have a tough time following rules don\'t you? You now don\'t get this piece of information. In the future please limit your answers to Yes or No!';

// global response for wrong answer
var incorrectResponse = userName + ' you are wrong. I hate you we aren\'t friends anymore';

// array of questions for individual prompts
var promptText = ['Have I ever hiked the Pacific Crest Trail?', 'n', 'Have I ever hung out regularly with a rock star?', 'y', 'Have I ever been fired from singing in my own band?', 'y', 'Have I ever spent Christmas in Germany?', 'n', 'Have I ever performed as a Russian folk dancer?', 'y'];

// array of responses to correct answers
var correctResponse = ['Of course ' + userName + ' I havn\'t. Where are you getting your information?', 'You are correct ' + userName + ' . And he is cooler than you!', 'You are correct ' + userName + ' . I hang out with rock stars... of course they\'ve fired me!', 'Of course I haven\'t.', 'You are correct ' + userName + ' , 1996 Memorial Coliseum, Portland, OR.'];

// validates input
var validateInput = function(input) {
  if (input !== 'yes' && input !== 'y' && input !== 'no' && input !== 'n') {
    console.log('input: ' + input);
    return false;
  }
};

// asks questions and notifies results
var askQuestion = function(question, correct, incorrect, badInput) {
  for (var k = 0; k < correct.length; k++) {
    // retrieves prompt from array
    var questionPrompt = prompt(question[k * 2]).toLowerCase();
    var questAnswer = question[k * 2 + 1];

    console.log('questionPrompt: ', question[k * 2]);
    console.log('questAnswer: ', questAnswer);
    console.log('correct: ', correct[k]);

    // increases total count
    guessCount++;

    // validate input
    while (validateInput(questionPrompt) === false) {
      alert(badInput);
      questionPrompt = prompt(question[k * 2]).toLowerCase();
    }

    // if input incorrect
    if (questionPrompt[0] !== questAnswer) {
      alert(incorrect);
      guessCorrectCount++;

      // if input correct
    } else if (questionPrompt[0] === questAnswer) {
      alert(correct[k]);
    }
  }
};

askQuestion(promptText, correctResponse, incorrectResponse, ruleBreaker);

// number guessing game
// generates random number
var myNumber = Math.floor(Math.random() * (30 - 1 + 1)) + 1;
var guess;

var numGame = function(ranNum) {
  // allows six guesses
  for (var i = 6; i >= 0; i--) {
    console.log('i: ', i);

    // if no guesses remain exit program
    if (i === 0) {
      alert(userName + ' you are the weakest link... GOODBYE!');
      break;
    }

    // increases total count
    guessCount++;

    // prompts for guess
    guess = parseInt(prompt(userName + ' you have ' + i + ' chances to guess the number I\'m thinking of between 1 and 30.'));
    if (guess === ranNum) {
      // increases correct guess
      guessCorrectCount++;

      // alerts user if guess is correct
      alert('HOW DID YOU KNOW... ' + userName.toUpperCase() + ' YOUR A SORCERER!!');
      i = 0;

      // alerts user if guess is greater than answer
    } else if (guess > ranNum) {
      alert('Wrong ' + userName + '!! Lower. You have only ' + (i - 1) + ' guesses remaining.');

      // alerts user if guess is less than answer
    } else if (guess < ranNum) {
      alert('Wrong ' + userName + '!! Higher. You have only ' + (i - 1) + ' guesses remaining.');
    }
  }
};

numGame(myNumber);

// sets an impossible list to guess from
var favActivities = ['riding motorcycles', 'cuddling with my girlfriend', 'writing code', 'kayaking', 'hiking', 'weight training'];

// sets an empty array to contain correct guesses
var correctGuesses = [];
var correctCount = 0;

var guessGame = function() {
  for (var j = 6; j >= 0; j--) {
    console.log('j: ', j);

    // if no guesses remain exit program
    if (j === 0) {
      alert(userName + ' you are out of guesses. You got ' + correctCount + ' out of six. The remaining answers are: ' + favActivities);
      break;
    }

    // increases total count
    guessCount++;

    // prompts for guess
    guess = prompt(userName + ' you have ' + j + ' chances to guess as many of my leisure activities as you can.');

    // logic for guess evaluation
    // if guess is in array
    if (favActivities.includes(guess)) {
      guessCorrectCount++;
      correctCount++;

      // pull guess out of array
      favActivities.splice([favActivities.indexOf(guess)], 1);
      console.log('favActivities.indexOf(guess): ', favActivities.indexOf(guess));
      console.log('favActivities: ', favActivities);

      // push guess into correct array
      // these two steps could be completed in one line:
      // correctGuesses.push(favActivities.splice([favActivities.indexOf(guess)], 1););
      correctGuesses.push(guess);
      console.log('correctGuesses: ', correctGuesses);

      alert(userName + ' you are correct. You have ' + correctCount + ' out of six and ' + (j - 1) + ' guesses remaining');
    } else {
      alert('Wrong ' + userName + '  Try another.');
    }
  }
};

guessGame();

var responseRation = document.createElement('p');
responseRation.innerHTML = userName + ' You guessed ' + guessCorrectCount + ' correct out of ' + guessCount + ' guesses. You know nothing ' + userName;
document.getElementById('myList').appendChild(responseRation);

// promptText
// places elements on page
var results = function(question, response) {
  for (var m = 0; m < response.length; m++) {
    var newElement = document.createElement('p');
    newElement.innerHTML = question[m * 2] + ' ' + response[m];
    document.getElementById('myList').appendChild(newElement);
  }
};

results(promptText, correctResponse);
