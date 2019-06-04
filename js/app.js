/* eslint-disable no-console */
'use strict';

alert(
  ' The following is a series of questions that I will ask you to answer about me. You are allowed to answer Yes or No only and you do not get to ask any questions back. You are quessing whether or not I have done what I am claiming.'
);

var userName = prompt(
  'You know who I am, who are you. Please enter your name.'
);

var ruleBreaker =
  userName +
  'You have a tough time following rules don\'t you? You now don\'t get this piece of information. In the future please limit your answers to Yes or No!';

var exparte = userName + ' I hate you we aren\'t friends anymore';

var Hiking = prompt('Have I ever: Hiked the Pacific Crest Trail?');
console.log('hiking: ' + Hiking.toLowerCase());

if (Hiking.toLowerCase() === 'yes' || Hiking.toLowerCase() === 'y') {
  alert(
    'Of course ' +
      userName +
      ' I havn\'t. Where are you getting your information?'
  );
} else if (Hiking.toLowerCase() === 'no' || Hiking.toLowerCase() === 'n') {
  alert(exparte);
} else {
  alert(ruleBreaker);
}

var rockStar = prompt('Have I ever: Hung out regularly with a rock star?');
console.log('rockStar: ' + rockStar.toLowerCase());

if (rockStar.toLowerCase() === 'yes' || rockStar.toLowerCase() === 'y') {
  alert('You are correct ' + userName + ' . And he is cooler than you!');
} else if (rockStar.toLowerCase() === 'no' || rockStar.toLowerCase() === 'n') {
  alert(exparte);
} else {
  alert(ruleBreaker);
}

var singer = prompt('Have I ever: Been fired from singing in my own band?');
console.log('singer: ' + singer.toLowerCase());

if (singer.toLowerCase() === 'yes' || singer.toLowerCase() === 'y') {
  alert(
    'You are correct' +
      userName +
      ' . I hang out with rock stars... of course they\'ve fired me!'
  );
} else if (singer.toLowerCase() === 'no' || singer.toLowerCase() === 'n') {
  alert(exparte);
} else {
  alert(ruleBreaker);
}

var germany = prompt('Have I ever: Spent Christmas in Germany?');
console.log('germany: ' + germany.toLowerCase());

if (germany.toLowerCase() === 'yes' || germany.toLowerCase() === 'y') {
  alert(
    'You are WRONG ' +
      userName +
      ' . It is on my bucket list and may be happening sooner than you would think.'
  );
} else if (germany.toLowerCase() === 'no' || germany.toLowerCase() === 'n') {
  alert('Of course I haven\'t.');
} else {
  alert(ruleBreaker);
}

var dancer = prompt('Have I ever: Performed as a Russian folk dancer?');
console.log('dancer: ' + dancer.toLowerCase());

if (dancer.toLowerCase() === 'yes' || dancer.toLowerCase() === 'y') {
  alert(
    'You are correct ' + userName + ' , 1996 Memorial Collosium, Portland, OR.'
  );
} else if (dancer.toLowerCase() === 'no' || dancer.toLowerCase() === 'n') {
  alert(exparte);
} else {
  alert(ruleBreaker);
}

var hikeResponse = document.createElement('p');
hikeResponse.innerHTML =
  'Have I ever hiked the Pacific Crest Trail? Of course ' +
  userName +
  ' I haven\'t. Where are you getting your information?';
document.getElementById('myList').appendChild(hikeResponse);

var rockStarResponse = document.createElement('p');
rockStarResponse.innerHTML =
  'Have I ever hung out regularly with a rock star? Yes I have ' +
  userName +
  ' . And he is cooler than you!';
document.getElementById('myList').appendChild(rockStarResponse);

var singerResponse = document.createElement('p');
singerResponse.innerHTML =
  'Have I ever been fired from singing in my own band? ' +
  userName +
  ', I hang out with rock stars... of course they\'ve fired me!';
document.getElementById('myList').appendChild(singerResponse);

var germanyResponse = document.createElement('p');
germanyResponse.innerHTML =
  'Have I ever spent a Christmas in Germany? Sadly ' +
  userName +
  ', I have not but it is on my bucket list and may be happening sooner than you would think.';
document.getElementById('myList').appendChild(germanyResponse);

var dancerResponse = document.createElement('p');
dancerResponse.innerHTML =
  'Have I ever performed as a Russian folk dancer? Stop laughing ' +
  userName +
  ', in 1996 at the Memorial Collosium in Portland, OR.';
document.getElementById('myList').appendChild(dancerResponse);
