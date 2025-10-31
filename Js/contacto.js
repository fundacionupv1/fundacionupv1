document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  this.reset();

  const msg = document.getElementById("form-success");
  msg.style.display = "block";

  setTimeout(() => {
    msg.style.display = "none";
  }, 3000);
});
