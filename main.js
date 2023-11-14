var displayedImage = document.querySelector(".displayed-img");
var thumbBar = document.querySelector(".thumb-bar");

btn = document.querySelector("button");
var overlay = document.querySelector(".overlay");

/* Looping through images */
for (let i = 1; i <= 5; i++) {
  var newImage = document.createElement("img");
  newImage.setAttribute("src", "images/pic" + i + ".jpg");
  thumbBar.appendChild(newImage);
}

thumbBar.onclick = function (event) {
  displayedImage.setAttribute("src", event.target.src);
};

// thumbBar.addEventListener = ('click', function(event) {
//   displayedImage.setAttribute('src', event.target.src)
// });

/* the Darken/Lighten button */

btn.onclick = function () {
  if (btn.getAttribute("class") === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Светлее";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Темнее";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
};
