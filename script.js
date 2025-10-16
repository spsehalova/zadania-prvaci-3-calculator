const form = document.querySelector('form')

let history = [
    {
        number1: 5,
        operator: '*',
        number2: 7,
        result: 35
    }
];

function calculate(e) {
    e.preventDefault()

    const number1 = form.number1.value;
    const operator = form.operator.value;
    const number2 = form.number2.value;

    console.log(number1, operator, number2)

    // check what is the operation, then based on that calculate the result

    //

    // them insert the current calculation into the history array

    render();
}

function render() {
    // put the history array into the history element in html
}

render();