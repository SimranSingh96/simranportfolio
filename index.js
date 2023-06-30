"use strict";

var typed = new Typed("#element", {
  strings: ["<i>Web</i> Developer."],
  typeSpeed: 50,
});

// Adding resume
const resumebtn = document.querySelector(".resume");

resumebtn.addEventListener("click", function () {
  var link = document.createElement("a");
  link.href = "/images/resume.pdf";
  link.download = "simran_resume.pdf";
  link.target = "_blank";
  link.click();
});
