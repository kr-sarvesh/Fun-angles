const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputE1 = document.querySelector("#output");

const calculateSumOfSquares = (a, b) => {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
};

const calculateHypotenuse = (event) => {
  const sumOfSquares = calculateSumOfSquares(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  const lengthOfHypotenuse = Math.sqrt(sumOfSquares);

  outputE1.innerText = "The Length of hypotenuse is" + lengthOfHypotenuse;
};

hypotenuseBtn.addEventListener("click", calculateHypotenuse);
