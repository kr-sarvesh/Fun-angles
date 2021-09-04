const inputBox = document.querySelectorAll(".inputBox");
const checkArea = document.querySelector("#check-area-btn");
const outputE1 = document.querySelector("#output");

const calculateArea = () => {
  const b = Number(inputBox[0].value);
  const h = Number(inputBox[1].value);

  outputE1.innerText =
    "The Area of a Triangle is " + (b * h) / 2 + " square centimeter";
};

checkArea.addEventListener("click", calculateArea);
