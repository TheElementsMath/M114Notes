document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".chapter > h1, .chapter > h2").forEach(function (el) {
    el.innerHTML = el.innerHTML.replace(/^Chapter (\d+)/, 'Lecture $1');
  });
});