
const form = document.getElementById('form');

form.addEventListener('submit', Ticket)

function Ticket (form) {

    form.preventDefault();

    let kmIn = document.getElementById("kmInput").value;
    let ageIn = document.getElementById('ageInput').value;

    let km = parseFloat(kmIn);
    let age = parseInt(ageIn);

    const price = 0.21
    const priceUnder = price - ((price/100)*20)
    const priceOver = price - ((price/100)*40)

    let userPrice;
    if (age<18) {
        userPrice = km*priceUnder;
    }else if (age>60) {
        userPrice = km*priceOver;
    } else {
        userPrice = km*price;
    }

    console.log(userPrice);
}
