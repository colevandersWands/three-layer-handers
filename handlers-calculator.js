function add() {
  // read and process user input
  var first = document.getElementById('first-number').value;        
  var second = document.getElementById('second-number').value;        

  // pass user input through core logic
  
  /* write a script to cast & add two numbers */
  /* if either one casts to NaN, 
    assign a friendly message to a variable named 'result' */
  /* otherwise assign the result to a variable named 'result' */
  var result = "the sum of " + first + ' and ' + second; // place-holder, delete this and start over

  // report result to user
  var output_field = document.getElementById('result');
  output_field.innerHTML = result;
}

function subtract() {
  // read and process user input
  var first = document.getElementById('first-number').value;        
  var second = document.getElementById('second-number').value;        

  // pass user input through core logic
  
  /* write a script to cast & subtract two numbers */
  /* if either one casts to NaN, 
    assign a friendly message to a variable named 'result' */
  /* otherwise assign the result to a variable named 'result' */
  var result = "the difference between " + first + ' and ' + second; // place-holder, delete this and start over

  // report result to user
  var output_field = document.getElementById('result');
  output_field.innerHTML = result; 
}

function multiply() {
  // read and process user input
  var first = document.getElementById('first-number').value;        
  var second = document.getElementById('second-number').value;        

  // pass user input through core logic
  
  /* write a script to cast & multiply two numbers */
  /* if either one casts to NaN, 
    assign a friendly message to a variable named 'result' */
  /* otherwise assign the result to a variable named 'result' */
  var result = "the product of " + first + ' and ' + second; // place-holder, delete this and start over

  // report result to user
  var output_field = document.getElementById('result');
  output_field.innerHTML = result; 
}

function divide() {
   // read and process user input
  var first = document.getElementById('first-number').value;        
  var second = document.getElementById('second-number').value;        

  // pass user input through core logic
  
  /* write a script to cast & divide two numbers */
  /* if either one casts to NaN, 
    assign a friendly message to a variable named 'result' */
  /* otherwise assign the result to a variable named 'result' */
  var result = "the quotient of " + first + ' and ' + second; // place-holder, delete this and start over

  // report result to user
  var output_field = document.getElementById('result');
  output_field.innerHTML = result;
}