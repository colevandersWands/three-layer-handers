function sort_characters(str) {
  // write me!
  return str;
}

function sort_handler() {

  // read and process user input
  const to_sort = document.getElementById('to-sort').value;

  // pass user input through core logic

  /* write a logic function to sort characters in a string */
  /* assign the result to a variable named 'sorted' */
  const sorted = sort_characters(to_sort);

  // report result to user
  const output_field = document.getElementById('sorted');
  output_field.innerHTML = sorted;
};
