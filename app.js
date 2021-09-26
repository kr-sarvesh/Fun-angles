//check Area of a Triangle
const inputBox = document.querySelectorAll('.inputBox');
const checkArea = document.querySelector('#check-area-btn');
const outputE1 = document.querySelector('#output');

const calculateArea = () => {
  if (inputBox[0].value >= 0 && inputBox[1].value >= 0) {
    const b = Number(inputBox[0].value);
    const h = Number(inputBox[1].value);

    outputE1.innerText =
      'The Area of a Triangle is ' + (b * h) / 2 + ' square centimeter';
  } else if (inputBox[0].value < 0 || inputBox[1].value < 0) {
    outputE1.innerText = 'Please Enter all values in Positive ';
  }
};

checkArea.addEventListener('click', calculateArea);
