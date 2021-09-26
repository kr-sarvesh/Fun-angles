const inputs = document.querySelectorAll('.angel-input');
const isTriangleBtn = document.querySelector('#is-triangle-btn');
const outputEl = document.querySelector('#output');

const calculateSumOfAngels = (a, b, c) => {
  const sumOfAngels = a + b + c;
  return sumOfAngels;
};
const isTriangle = () => {
  if (inputs[0].value >= 0 && inputs[1].value >= 0 && inputs[2].value >= 0) {
    const sumOfAngels = calculateSumOfAngels(
      Number(inputs[0].value),
      Number(inputs[1].value),
      Number(inputs[2].value)
    );
    if (sumOfAngels === 180) {
      outputEl.innerText = 'Your angel form a Traingle';
    } else outputEl.innerText = "sorry, your angles don't form Traingle";
  } else if (
    inputs[0].value < 0 ||
    inputs[1].value < 0 ||
    inputs[2].value < 0
  ) {
    outputEl.innerText = 'Please Enter All Positive Values';
  }
};

isTriangleBtn.addEventListener('click', isTriangle);
