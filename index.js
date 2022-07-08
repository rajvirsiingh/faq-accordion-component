let num = document.querySelectorAll(".question").length;
console.log(num);
for (let i = 0; i < num; i++) {
  document
    .querySelectorAll(".question")
    [i].addEventListener("click", function () {
      document.querySelectorAll(".answer")[i].classList.toggle("show");
      document.querySelectorAll(".question")[i].classList.toggle("bold");
    });
}
