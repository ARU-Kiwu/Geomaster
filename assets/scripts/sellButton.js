export class sellButton extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="sell-button">
        <div class="red-icon">1/2</div>
        <div class="red-icon">MAX</div>
        <div class="red-icon">
          <svg width="25" height="7" viewBox="0 0 25 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.90062 0.751978C2.26153 0.602371 2.64838 0.525375 3.03907 0.525375H21.9578C22.3493 0.525372 22.737 0.602686 23.0985 0.752885C23.46 0.903084 23.7883 1.1232 24.0646 1.40061C24.3408 1.67803 24.5595 2.00726 24.7082 2.36943C24.8569 2.7316 24.9325 3.11956 24.9309 3.51105C24.9309 4.29954 24.6176 5.05575 24.0601 5.6133C23.5025 6.17085 22.7463 6.48408 21.9578 6.48408C9.96784 6.48408 13.2181 6.47461 3.03907 6.47461C2.25057 6.47461 1.49437 6.16137 0.936818 5.60382C0.379265 5.04627 0.06604 4.29007 0.06604 3.50157C0.0656265 3.11088 0.142207 2.72393 0.29143 2.36286C0.440653 2.00179 0.659586 1.67368 0.935699 1.39727C1.21181 1.12086 1.53971 0.901585 1.90062 0.751978Z" fill="#A91108"/>
              </svg>
        </div>
      </div>
        `
      for(let i = 0; i< this.children[0].children.length; i++) {
        this.children[0].children[i].addEventListener('click', ()=> {

          // 1/2 Button
          if(i === 0 && ((((this.parentNode).parentNode).parentNode).parentNode).id === 'Stone') {
              let half = Math.floor(items[0].quantity / 2);
              items[0].quantity = items[0].quantity - half;
              coinNumber += (half * items[0].sellValue)
              updateScreenValues(0)
              coinDisplay.innerHTML = coinNumber;
          } else if (i === 0 && ((((this.parentNode).parentNode).parentNode).parentNode).id === 'Raw Copper') {
            let half = Math.floor(items[1].quantity / 2);
            items[1].quantity = items[1].quantity - half;
            coinNumber += (half * items[1].sellValue)
            updateScreenValues(1)
            coinDisplay.innerHTML = coinNumber;
          } else if (i === 0 && ((((this.parentNode).parentNode).parentNode).parentNode).id === 'Raw Iron') {
            let half = Math.floor(items[2].quantity / 2);
            items[2].quantity = items[2].quantity - half;
            coinNumber += (half * items[2].sellValue)
            updateScreenValues(2)
            coinDisplay.innerHTML = coinNumber;
          } else if (i === 0 && ((((this.parentNode).parentNode).parentNode).parentNode).id === 'Quartz') {
            let half = Math.floor(items[3].quantity / 2);
            items[3].quantity = items[3].quantity - half;
            coinNumber += (half * items[3].sellValue)
            updateScreenValues(3)
            coinDisplay.innerHTML = coinNumber;
          }

          //Max Button
          if(i === 1 && ((((this.parentNode).parentNode).parentNode).parentNode).id === 'Stone') {
            let max = items[0].quantity;
            items[0].quantity = items[0].quantity - max;
            coinNumber += (max * items[0].sellValue)
            updateScreenValues(0)
            if(items[0].quantity === 0) {
              ((((this.parentNode).parentNode).parentNode).parentNode).remove();
            }
            coinDisplay.innerHTML = coinNumber;
          } else if(i === 1 && ((((this.parentNode).parentNode).parentNode).parentNode).id === 'Raw Copper') {
            let max = items[1].quantity;
            items[1].quantity = items[1].quantity - max;
            coinNumber += (max * items[1].sellValue)
            updateScreenValues(1)
            if(items[1].quantity === 0) {
              ((((this.parentNode).parentNode).parentNode).parentNode).remove();
            }
            coinDisplay.innerHTML = coinNumber;
          } else if(i === 1 && ((((this.parentNode).parentNode).parentNode).parentNode).id === 'Raw Iron') {
            let max = items[2].quantity;
            items[2].quantity = items[2].quantity - max;
            coinNumber += (max * items[2].sellValue)
            updateScreenValues(2)
            if(items[2].quantity === 0) {
              ((((this.parentNode).parentNode).parentNode).parentNode).remove();
            }
            coinDisplay.innerHTML = coinNumber;
          } else if(i === 1 && ((((this.parentNode).parentNode).parentNode).parentNode).id === 'Quartz') {
            let max = items[3].quantity;
            items[3].quantity = items[3].quantity - max;
            coinNumber += (max * items[3].sellValue)
            updateScreenValues(3)
            if(items[3].quantity === 0) {
              ((((this.parentNode).parentNode).parentNode).parentNode).remove();
            }
            coinDisplay.innerHTML = coinNumber;
          }

          // Minus Button
          if(i === 2 && ((((this.parentNode).parentNode).parentNode).parentNode).id === 'Stone') {
            items[0].quantity--
            coinNumber+= (1 *items[0].sellValue)
            updateScreenValues(0)
            if(items[0].quantity === 0) {
              ((((this.parentNode).parentNode).parentNode).parentNode).remove();
            }
            coinDisplay.innerHTML = coinNumber;
          } else if(i === 2 && ((((this.parentNode).parentNode).parentNode).parentNode).id === 'Raw Copper') {
            items[1].quantity--
            coinNumber+= (1 *items[1].sellValue)
            updateScreenValues(1)
            if(items[1].quantity === 0) {
              ((((this.parentNode).parentNode).parentNode).parentNode).remove();
            }
            coinDisplay.innerHTML = coinNumber;
          } else if(i === 2 && ((((this.parentNode).parentNode).parentNode).parentNode).id === 'Raw Iron') {
            items[2].quantity--
            coinNumber+= (1 *items[2].sellValue)
            updateScreenValues(2)
            if(items[2].quantity === 0) {
              ((((this.parentNode).parentNode).parentNode).parentNode).remove();
            }
            coinDisplay.innerHTML = coinNumber;
          } else if(i === 2 && ((((this.parentNode).parentNode).parentNode).parentNode).id === 'Quartz') {
            items[3].quantity--
            coinNumber+= (1 *items[3].sellValue)
            updateScreenValues(3)
            if(items[3].quantity === 0) {
              ((((this.parentNode).parentNode).parentNode).parentNode).remove();
            }
            coinDisplay.innerHTML = coinNumber;
          }

        })

      }
    }  
}

customElements.define('sell-button', sellButton)