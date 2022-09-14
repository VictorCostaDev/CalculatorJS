function Calculator() {

    this.display = document.querySelector('.display');

    this.start = () => {
        this.buttonsClick();
        this.pressEnter();
    };
   
    this.pressEnter = () => {
        this.display.addEventListener('keyup', (event) => {
            if (event.keyCode === 13) this.makeAccount();
        });
    };
    
    this.buttonsClick = () => {
        document.addEventListener('click', event => {
            const element = event.target;
            if (element.classList.contains('btn-num')) this.btnForDisplay(element.innerText);
            if (element.classList.contains('btn-clear')) this.clearDisplay();
            if (element.classList.contains('btn-del')) this.deleteOne();
            if (element.classList.contains('btn-eq')) this.makeAccount();
        });
    };

    this.btnForDisplay = (value) => {
        this.display.value += value;
    };

    this.makeAccount = () => {
        let account = this.display.value;
        try {
            account = eval(account);
            if (!account) {
                alert('Conta inválida');
                return;
            }
            this.display.value = String(account);
        } catch (error) {
            alert('Conta inválida');
            return;
        }
    };

    this.clearDisplay = () => {
        this.display.value = '';
    };
    
    this.deleteOne = () => {
        this.display.value = this.display.value.slice(0, -1);
    };

}

const calculator = new Calculator;
calculator.start();