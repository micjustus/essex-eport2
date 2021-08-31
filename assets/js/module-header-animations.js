function mouseenter(evt) {
  var elm = document.getElementById("header-thing");
  if (!elm) return;

  elm.classList.remove("animate-out");
  elm.classList.add("animate-in");
}

function mouseleave(evt) {
  var elm = document.getElementById("header-thing");
  if (!elm) return;

  elm.classList.remove("animate-in");
  elm.classList.add("animate-out");
}

(function () {
  var elm = document.getElementById("header-thing");
  if (elm) {
      elm.className = "";
  }
})();
