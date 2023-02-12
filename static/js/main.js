document.querySelector("a[href='#home']").addEventListener("click", function(event) {
  // event.preventDefault();
  document.querySelector("#home").classList.add("active");
});

window.addEventListener("hashchange", function() {
  document.querySelector("#home").classList.remove("active");
});