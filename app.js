const randButton = document.querySelector("#rand-button");
const randInput = document.querySelector("#rand-input");
const randResult = document.querySelector("#randomize-result");


const flipResult = document.querySelector("#flip-result");
const flipButtons = document.querySelectorAll(".flip-button");

const flipWinsElement = flipResult.querySelector('.wins');
const flipLosssesElement = flipResult.querySelector('.losses');
const flipPercentageElement = document.querySelector('#flip-percentage');


let wins = 0;
let losses = 0;


setContent(randInput.value);

randInput.addEventListener("input", (event) => {
  setContent(event.target.value);
});

function setContent(value) {
    randButton.textContent = `Randomize ${value}%`;
}

randButton.addEventListener('click', () => {
    let randomValue = Math.floor(Math.random() * 101);
    let valueNeeded = +randInput.value;
    randResult.textContent = randomValue;
    if (randomValue >= valueNeeded) {
        randResult.classList.add('success');
        randResult.classList.remove('failed');
    } else {
        randResult.classList.remove('success');
        randResult.classList.add('failed');        
    }

    
});


flipButtons.forEach(button => {
    button.addEventListener('click', (ev) => {
        const type = ev.target.getAttribute('data-type');

        if (type == 'win')
            wins++;
        if (type == 'loose')
            losses++;
        if (type == 'reset') {
            wins = 0;
            losses = 0;
        }
        
        let percentage  = 0;
        const totalCount = wins + losses;
        if (totalCount > 0) {
            percentage = (wins / totalCount) * 100;
        }

        flipWinsElement.textContent = `${wins} wins`;
        flipLosssesElement.textContent = `${losses} losses`;
        flipPercentageElement.textContent = `${Math.floor(percentage)}%`;
    })
});