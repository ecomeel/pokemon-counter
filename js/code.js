let plusBtn = document.querySelector('.plus-btn');
let counterText = document.querySelector('.counter');
let counter = 0;
plusBtn.addEventListener('click', function() {
    counter = counter + 1;
    counterText.innerHTML = counter;
})

