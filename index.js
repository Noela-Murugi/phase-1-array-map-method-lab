const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {

//have charAt and toUpperCase method
//-specify the indexed character and upper case it

const titleCased = () =>{
  return tutorials.map(function(tutorials) {
    return tutorials.split(' ').map(function (sentenceSting){
     return sentenceSting.toUpperCase().charAt(0) + sentenceSting.slice(1)}).join(' ')

    });
  };


