 var link = document.querySelector(".offers-button");
  var popup = document.querySelector(".search");

  link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
  });
 		