/*
 * Question 1: Button Bunch Toggles
 */

(function () {
  // Create the button elements
  var divElement = document.getElementById("buttons");
  for (var i = 1; i <= 20; i++) {
    var btn = document.createElement("button");
    btn.setAttribute('class', 'button');
    btn.innerHTML = "Button " + i;
    divElement.appendChild(btn);
    if (i % 4 === 0) { // insert a "newline" after every 4th button to simulate a grid
      var br = document.createElement("br");
      divElement.appendChild(br);
    }
  }

  // Add a click listener to every button that was created
  var allButtons = document.querySelectorAll("button");
  allButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (btn.classList.contains('active')) {
        btn.classList.remove('active');
      } else {
        btn.classList.add('active');
      }
    });
  });
})();