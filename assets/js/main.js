function createCalculator() {
    return {
        display: document.querySelector('.display'),

        start() {
            this.buttonsClick();
            this.pressEnter();
        },

        pressEnter() {
            this.display.addEventListener('keyup', (event) => {
                if (event.keyCode === 13) this.makeAccount();
            });
        },

        buttonsClick() {
            document.addEventListener('click', event => {
                const element = event.target;
                if (element.classList.contains('btn-num')) this.btnForDisplay(element.innerText);
                if (element.classList.contains('btn-clear')) this.clearDisplay();
                if (element.classList.contains('btn-del')) this.deleteOne();
                if (element.classList.contains('btn-eq')) this.makeAccount();
            });
        },

        btnForDisplay(value) {
            this.display.value += value;
        },

        makeAccount() {
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
        },

        clearDisplay() {
            this.display.value = '';
        },

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1);
        }
    };
}

const calculator = createCalculator();
calculator.start();