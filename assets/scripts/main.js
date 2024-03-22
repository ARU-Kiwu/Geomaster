/*#########################*/
/*      Game Variables     */
/*#########################*/

let coinNumber = 0;
let currentClickValue = 1;
let item = 0;
let healthPercentage = 100;


/*#########################*/
/*           UI            */
/*#########################*/


const root = document.documentElement;
const style = getComputedStyle(root);
const body = document.querySelector('body');

//Displays
const healthBar = document.querySelector('.health-bar');
const currentClickValueDisplay = document.querySelector('#currentClickValue');

//Buttons 
const coinDisplay = document.querySelector('#coinNumberDisplay');
const clickElement = document.querySelector('#clickSprite');
const closeIcon = document.querySelector('.close-icon');
const inventoryButton =document.querySelector('#inventory-button');
const shopButton = document.querySelector('#shop-button');
const upgradeButton  = document.querySelector('#upgrade-button');
const processButton = document.querySelector('#process-button')
// Panels

const inventoryPanel = document.querySelector('.inventory-panel');
const inventoryPanelContentElement = document.querySelector('.inventory-panel-content');
const rightSection = document.querySelector('#rightSection')

/*#########################*/
/*   Game Logic & Events   */
/*#########################*/

clickElement.addEventListener('click', (e)=> {
    generateTapStone(item)
    console.log(item)
    coinNumber = currentClickValue + coinNumber;
    coinDisplay.innerHTML = coinNumber;
    showCurrentClickValue(e);
    healthBarHandler(item);
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
    }, 800);
}

function healthBarHandler(item) {
    let damage = (100 / items[item].health);
    healthPercentage = healthPercentage - (damage * currentClickValue);
    root.style.setProperty('--heath-bar-progress', `${healthPercentage}%`)
    if(healthPercentage <= 0) {
        item = customRandomizer();
        generateRewards()
        healthPercentage = 100;
    }
    healthBarAnimation()
   
}

function healthBarAnimation() {
    let animations = {
        0: 'translateX(1px) translateY(1px)',
        1: 'translateX(-1px) translateY(-1px)',
        2: 'translateX(-1px) translateY(1px)',
        3: 'translateX(1px) translateY(-1px)'
    }
    let animationIndex = Math.floor(Math.random() * 4)
    root.style.setProperty(`--animation`, animations[animationIndex]);
    healthBar.classList.add('shake')
    setTimeout(()=> {
        healthBar.classList.remove('shake')
    }, 100)
}

function generateTapStone(item) {
   clickElement.style.backgroundImage = `url('${items[item].source}')`
}

function generateRewards(){
    let reward = document.createElement('div');
    reward.innerHTML = `
    <div class="inventory-item">
        <div class="item-icon">
            <img src="" alt="">
        </div>
        <div class="info-wrapper">
            <div class="iw-left-section">
                <div class="name"></div>
                <div class="quantity">
                   
                </div>
            </div>
            <div class="iw-right-section">
                <div class="price">
                    <span class="">
                    
                    </span>
                    <div>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.5 2.00982C24.7803 3.32635 26.6739 5.21992 27.9904 7.50021C29.3069 9.7805 30 12.3672 30 15.0002C30 17.6333 29.3069 20.2199 27.9903 22.5002C26.6738 24.7805 24.7802 26.674 22.4998 27.9905C20.2195 29.307 17.6328 30 14.9998 30C12.3667 30 9.78003 29.3068 7.49975 27.9903C5.21948 26.6737 3.32593 24.7801 2.00945 22.4998C0.69297 20.2195 -6.68845e-05 17.6328 4.84148e-09 14.9997L0.00750018 14.5137C0.0915048 11.9232 0.845322 9.39871 2.19546 7.18628C3.5456 4.97384 5.44598 3.14899 7.71134 1.88965C9.9767 0.630303 12.5297 -0.020566 15.1215 0.000495365C17.7133 0.0215568 20.2554 0.71383 22.5 2.00982ZM15 5.99979C14.6022 5.99979 14.2206 6.15783 13.9393 6.43913C13.658 6.72043 13.5 7.10196 13.5 7.49978C12.3065 7.49978 11.1619 7.97389 10.318 8.81779C9.47411 9.6617 9 10.8063 9 11.9998C9 13.1932 9.47411 14.3378 10.318 15.1817C11.1619 16.0256 12.3065 16.4997 13.5 16.4997V19.4997C13.2513 19.513 13.0031 19.4655 12.7768 19.3615C12.5505 19.2575 12.3529 19.1001 12.201 18.9027L12.099 18.7512C11.8938 18.4202 11.5679 18.182 11.1902 18.087C10.8125 17.992 10.4127 18.0476 10.0753 18.242C9.73787 18.4364 9.48928 18.7545 9.38211 19.1289C9.27493 19.5033 9.31757 19.9047 9.501 20.2482C9.88386 20.9122 10.43 21.4674 11.0876 21.8611C11.7451 22.2549 12.4924 22.4742 13.2585 22.4982H13.5C13.4997 22.8658 13.6344 23.2208 13.8786 23.4957C14.1227 23.7705 14.4594 23.9461 14.8245 23.9892L15 23.9997C15.3978 23.9997 15.7794 23.8416 16.0607 23.5603C16.342 23.279 16.5 22.8975 16.5 22.4997L16.764 22.4922C17.9334 22.4246 19.0304 21.9037 19.8218 21.0401C20.6132 20.1766 21.0368 19.0385 21.0024 17.8677C20.968 16.6968 20.4785 15.5855 19.6377 14.7699C18.797 13.9543 17.6714 13.4986 16.5 13.4997V10.4998C17.037 10.4818 17.5065 10.7098 17.799 11.0968L17.901 11.2483C18.1062 11.5792 18.4321 11.8174 18.8098 11.9124C19.1875 12.0075 19.5873 11.9519 19.9247 11.7575C20.2621 11.563 20.5107 11.245 20.6179 10.8706C20.7251 10.4962 20.6824 10.0948 20.499 9.75127C20.1163 9.087 19.5703 8.5315 18.9127 8.13747C18.2551 7.74344 17.5077 7.52394 16.7415 7.49978H16.5C16.5 7.10196 16.342 6.72043 16.0607 6.43913C15.7794 6.15783 15.3978 5.99979 15 5.99979ZM16.5 16.4997C16.8978 16.4997 17.2794 16.6578 17.5607 16.9391C17.842 17.2204 18 17.6019 18 17.9997C18 18.3975 17.842 18.7791 17.5607 19.0604C17.2794 19.3417 16.8978 19.4997 16.5 19.4997V16.4997ZM13.5 10.4998V13.4997C13.1022 13.4997 12.7206 13.3417 12.4393 13.0604C12.158 12.7791 12 12.3976 12 11.9998C12 11.6019 12.158 11.2204 12.4393 10.9391C12.7206 10.6578 13.1022 10.4998 13.5 10.4998Z" fill="#FFEC43"/>
                            </svg>        
                    </div>
                </div>
                <div id="buttons">
                   <sell-button></sell-button>
                </div>
            </div>
        </div>
    </div>
    `
    inventoryPanelContentElement.appendChild(reward);
}

function customRandomizer() {
    const randomNumber = Math.random();
    
    // Define the probability ranges
    const range0 = 0.05; // 5% chance
    const range1 = range0 + 0.13; // 13% chance
    const range2 = range1 + 0.05; // 5% chance
    
    // Determine the output based on the random number
    if (randomNumber < range0) {
      return item = 1;
    } else if (randomNumber < range1) {
      return item = 2;
    } else if (randomNumber < range2) {
      return item = 3;
    } else {
      // If the random number is greater than all ranges, return -1 or handle as per your requirement
      return item = 0;
    }
  }
  
/*#############*/
/*   Buttons  */
/*############*/

closeIcon.addEventListener('click', ()=> {
    if(closeIcon.parentElement.parentElement.className == 'inventory-panel show') {
       inventoryPanel.classList.remove('show')
       if(window.innerWidth < 1000)
       rightSection.style.display = 'none';
    }
})

inventoryButton.addEventListener('click', ()=> {
    inventoryPanel.classList.add('show')
    rightSection.style.display = 'flex';
})

shopButton.addEventListener('click', ()=> {
    
})


