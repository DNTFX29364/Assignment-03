"use strict";

const submitBTN = document.querySelector(".submit");

document.querySelector("body").computedStyleMap.backgroundColor = "#60b347";
document.querySelector(".hidden-info").style.display = "none";
// create click event for sbmit btn
submitBTN.addEventListener("click", function (e) {
  const input = document.querySelector("input").value;

  // function to check valid email address
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // Condition to show info
  if (validateEmail("test@example.com") == validateEmail(input)) {
    document.querySelector(".hidden-info").style.display = "block";
  }
  return false;
});

const viewMore = document.querySelectorAll(".view-btn");

for (let i = 0; i <= viewMore.length; i = i + 1) {
  viewMore[i]?.addEventListener("click", function (btn) {
    const viewInfo = btn.target.nextElementSibling;
    viewInfo.style.display = "grid";
    btn.target.style.opacity = 0;
  });
}

const viewLess = document.querySelectorAll(".view-btn-less");

for (let i = 0; i <= viewLess.length; i = i + 1) {
  viewLess[i]?.addEventListener("click", function (btn) {
    const viewInfo = btn.target.parentElement;
    viewInfo.style.display = "none";
    let viewMore = viewInfo.previousElementSibling;
    viewMore.style.opacity = 1;
  });
}
