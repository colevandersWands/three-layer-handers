// ---- casting function ----
function to_number(a) {
  // write a function that casts a string to a numbers
  // what should happen if it casts to NaN, an error?
  // you decide!
  return a;
}

// ---- add -----

function add(a, b) {
  // write me!
  return "the sum of " + a + ' and ' + b;
}

function add_handler() {
  // read and process user input
  const first = document.getElementById('first-number').value;
  const first_num = to_number(first);
  console.assert(typeof first_num === "number", 'first isn\'t a number, fix to_number!');

  const second = document.getElementById('second-number').value;
  const second_num = to_number(second);
  console.assert(typeof second_num === "number", 'second isn\'t a number, fix to_number!');

  // pass user input through core logic
  const result = add(first_num, second_num);

  // report result to user
  const output_field = document.getElementById('result');
  output_field.innerHTML = result;
}

// ---- subtract ----

function subtract(a, b) {
  return "the difference between " + a + ' and ' + b;
}

function subtract_handler() {
  // read and process user input
  const first = document.getElementById('first-number').value;
  const first_num = to_number(first);
  console.assert(typeof first_num === "number", 'first isn\'t a number, fix to_number!');

  const second = document.getElementById('second-number').value;
  const second_num = to_number(second);
  console.assert(typeof second_num === "number", 'second isn\'t a number, fix to_number!');

  // pass user input through core logic
  const result = subtract(first_num, second_num);

  // report result to user
  const output_field = document.getElementById('result');
  output_field.innerHTML = result;
}

// ---- multiply ---

function multiply(a, b) {
  return "the product of " + a + ' and ' + b;
}

function multiply_handler() {
  // read and process user input
  const first = document.getElementById('first-number').value;
  const first_num = to_number(first);
  console.assert(typeof first_num === "number", 'first isn\'t a number, fix to_number!');

  const second = document.getElementById('second-number').value;
  const second_num = to_number(second);
  console.assert(typeof second_num === "number", 'second isn\'t a number, fix to_number!');

  // pass user input through core logic
  const result = multiply(first_num, second_num);

  // report result to user
  const output_field = document.getElementById('result');
  output_field.innerHTML = result;
}

// --- divide ---

function divide(a, b) {
  return "the quotient of " + a + ' and ' + b;
}

function divide_handler() {
  // read and process user input
  const first = document.getElementById('first-number').value;
  const first_num = to_number(first);
  console.assert(typeof first_num === "number", 'first isn\'t a number, fix to_number!');

  const second = document.getElementById('second-number').value;
  const second_num = to_number(second);
  console.assert(typeof second_num === "number", 'second isn\'t a number, fix to_number!');

  // pass user input through core logic
  const result = divide(first_num, second_num);

  // report result to user
  const output_field = document.getElementById('result');
  output_field.innerHTML = result;
}
