let plusBtn = document.querySelector(".btn_plus");
let resetBtn = document.querySelector('.btn_reset');
let counterText = document.querySelector(".counter");
let counter = 0;

plusBtn.addEventListener("click", function () {
  counter = counter + 1;
  counterText.innerHTML = counter;
});


resetBtn.addEventListener('click', function () {
    counter = 0;
    counterText.innerHTML = counter;
})
