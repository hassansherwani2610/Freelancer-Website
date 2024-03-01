var darkBtn = document.querySelector(".dark-img");
var bodyTag = document.querySelector("body");

var divDark = document.querySelector(".testimonial-1");
var divParaDark1 = document.querySelector(".p-para");
var divParaDark2 = document.querySelector(".p-parag");

var divDark2 = document.querySelector(".testimonial-2");
var divParaDark3 = document.querySelector(".p-paragr");
var divParaDark4 = document.querySelector(".p-paragra");

var anchorsDark = document.querySelector(".anc1-dark");
var anchorsDark2 = document.querySelector(".anc2-dark");

var footerParaDark = document.querySelector(".f-para");

var flag = 0;
darkBtn.addEventListener("click", function () {
  if (flag == 0) {
    darkBtn.src = "/assets/19-Day-Icon.png";
    bodyTag.classList.add("dark-body");

    flag = 1;
  } else {
    darkBtn.src = "/assets/20-Night-Icon.png";
    bodyTag.classList.remove("dark-body");

    flag = 0;
  }
});

var start = 0;
darkBtn.addEventListener("click", function () {
  if (start == 0) {
    divDark.style.backgroundColor = "black";
    divDark.style.borderColor = "white";
    divParaDark1.classList.add("par");
    divParaDark2.classList.add("par");

    divDark2.style.backgroundColor = "black";
    divDark2.style.borderColor = "white";
    divParaDark3.classList.add("par");
    divParaDark4.classList.add("par");

    anchorsDark.style.color = "white";
    anchorsDark2.style.color = "white";

    footerParaDark.style.color = "white";

    start = 1;
  } else {
    divDark.style.backgroundColor = "white";
    divDark.style.borderColor = "black";
    divParaDark1.classList.remove("par");
    divParaDark2.classList.remove("par");

    divDark2.style.backgroundColor = "white";
    divDark2.style.borderColor = "black";
    divParaDark3.classList.remove("par");
    divParaDark4.classList.remove("par");

    anchorsDark.style.color = "black";
    anchorsDark2.style.color = "black";

    footerParaDark.style.color = "black";

    start = 0;
  }
});
