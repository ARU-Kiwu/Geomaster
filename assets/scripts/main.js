let coinNumber = 0;
let currentClickValue = 1;
let item = 0;
let healthPercentage = 100;
// UI
let root = document.documentElement
let style = getComputedStyle(root)
let coinDisplay = document.querySelector('#coinNumberDisplay');
let clickElement = document.querySelector('#clickSprite');
let body = document.querySelector('body');
let currentClickValueDisplay = document.querySelector('#currentClickValue');
let healthBar = document.querySelector('.health-bar');
coinDisplay.innerHTML = coinNumber;

clickElement.addEventListener('click', (e)=> {
    coinNumber = currentClickValue + coinNumber;
    coinDisplay.innerHTML = coinNumber;
    showCurrentClickValue(e);
    healthBarHandler(0);
})

function showCurrentClickValue(e) {
    let currentClickValueDisplay = document.createElement('div')
    currentClickValueDisplay.classList.add('currentClickValue')
    currentClickValueDisplay.classList.add('clickValueAnimation')
    currentClickValueDisplay.style.top = `${e.clientY}px`;
    currentClickValueDisplay.style.left = `${e.clientX}px`;
    currentClickValueDisplay.innerHTML = `+${currentClickValue}`;
    body.appendChild(currentClickValueDisplay)
    setTimeout(() => {
        body.removeChild(currentClickValueDisplay)
    }, 1000);
}

function healthBarHandler(item) {
    let damage = (100 / items[item].health);
    healthPercentage = healthPercentage - damage;
    root.style.setProperty('--heath-bar-progress', `${healthPercentage}%`)
    if(healthPercentage <= 0) {
        healthPercentage = 100
    }
    healthBarAnimation()
   
}

function healthBarAnimation() {
    let animations = {
        0: 'translateX(3px) translateY(3px)',
        1: 'translateX(-3px) translateY(-3px)',
        2: 'translateX(-3px) translateY(3px)',
        3: 'translateX(3px) translateY(-3px)'
    }
    let animationIndex = Math.floor(Math.random() * 4)
    root.style.setProperty(`--animation`, animations[animationIndex]);
    console.log(root.style.getPropertyValue('--animation'))
    healthBar.classList.add('shake')
    setTimeout(()=> {
        healthBar.classList.remove('shake')
    }, 100)
}






