let counter = 0;
let figure = document.querySelector('.figure');
let reset = document.querySelector('.reset');
let increment = document.querySelector('.increase');
let decrement = document.querySelector('.decrease');
increment.addEventListener('click', increaseCounter);
decrement.addEventListener('click', decreaseCounter);
reset.addEventListener('click', resetCounter)



//increment the counter value

function increaseCounter() {
    counter++;
    figure.innerText = counter; 
}


// reset the counter value
function resetCounter() {
    counter = 0
    figure.innerText=  counter
}

// decrement the counter value
function decreaseCounter() {
        counter--
        figure.innerText = counter;
}
       

