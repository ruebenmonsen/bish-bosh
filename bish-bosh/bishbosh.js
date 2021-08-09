let form = document.querySelector('#user-form');
let outputField = document.querySelector('#printed-result');

form.addEventListener('submit', event => {
    event.preventDefault();
    outputField.innerHTML = '';

    console.log(form.elements['loop-number']);

    let loopNumber = Number(form.elements['loop-number'].value);
    let firstDivider = Number(form.elements['first-divider'].value);
    let secondDivider = Number(form.elements['second-divider'].value);

    //ToDo: validation

    let resultArr = ['0'];

    for (let i = 1; i <= loopNumber; i++) {
        if (i % firstDivider == 0 && i % secondDivider == 0) {
            resultArr.push("Bish-Bosh");
        }
        else if (i % firstDivider == 0) {
            resultArr.push("Bish");
        }
        else if (i % secondDivider == 0) {
            resultArr.push("Bosh");
        }
        else {
            resultArr.push(i.toString());
        }
        outputField.innerHTML += resultArr[i] + ' ';
    };


});