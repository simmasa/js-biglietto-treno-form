
const form = document.getElementById('form');

form.addEventListener('submit', ticketMain)

const biglietti=[];

function ticketMain (form) {

    form.preventDefault();

    let kmIn = document.getElementById("kmInput").value;
    let ageIn = document.getElementById('ageInput').value;

    let km = parseFloat(kmIn);
    let age = parseInt(ageIn);

    /* let userPrice;

    const price = 0.21
    const priceUnder = price - ((price/100)*20)
    const priceOver = price - ((price/100)*40)

    if (age<18) {
        userPrice = km*priceUnder;
    }else if (age>60) {
        userPrice = km*priceOver;
    } else {
        userPrice = km*price;
    } */

    let ticketObj ={km:km,
                    age:age,
                    finalPrice:priceCalc(km,age)};

    biglietti.push(ticketObj);
    console.log(biglietti);

    addTableRow(biglietti.length , ticketObj.km, ticketObj.age, ticketObj.finalPrice);

    /* const tr = document.createElement('tr');
    tbo.appendChild(tr);

    const th = document.createElement('th');
    tr.appendChild(th);
    th.innerHTML = biglietti.length;

    const kmtd = document.createElement('td');
    tr.appendChild(kmtd);
    kmtd.innerHTML= ticketObj.km;
    const agetd = document.createElement('td');
    tr.appendChild(agetd);
    agetd.innerHTML = ticketObj.age;
    const pricetd = document.createElement('td');
    tr.appendChild(pricetd);
    pricetd.innerHTML = ticketObj.finalPrice.toFixed(2)+'€'; */
}

function addTableRow (num,km,age,price) {

    const tr = document.createElement('tr');
    tbo.appendChild(tr);

    const th = document.createElement('th');
    tr.appendChild(th);
    th.innerHTML = num;

    const kmtd = document.createElement('td');
    tr.appendChild(kmtd);
    kmtd.innerHTML= km;
    const agetd = document.createElement('td');
    tr.appendChild(agetd);
    agetd.innerHTML = age;
    const pricetd = document.createElement('td');
    tr.appendChild(pricetd);
    pricetd.innerHTML = price.toFixed(2)+'€';

}

function priceCalc (km,age) {
    
    let userPrice;

    const price = 0.21
    const priceUnder = price - ((price/100)*20)
    const priceOver = price - ((price/100)*40)

    if (age<18) {
        userPrice = km*priceUnder;
    }else if (age>60) {
        userPrice = km*priceOver;
    } else {
        userPrice = km*price;
    }
    return userPrice;
}
