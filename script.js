// script.js

const orders = document.querySelectorAll('section'); //selects order sections on html page and assigns it to orders variable to avoid having to create new variables for each order

orders.forEach((order) => { //uses forEach method to loop each item in orders section

    const orderKey = order.querySelector('dl').dataset.key; //extracts data attribute 'key' from dl element 
    const biscuits = order.querySelector('.biscuits dd'); //selects biscuits element + respective dd element from html 
    const donuts = order.querySelector('.donuts dd'); //selects donut element + respective dd element from html
    const pancakes = order.querySelector('.pancakes dd'); //selects pancakes element + respective dd element from html
    const status= order.querySelector('.status dd'); //selects staus elements + respective dd element from html 
    //dd element represents definition/description of element class. 

    biscuits.innerText = order.querySelector('dl').dataset.biscuits;
    donuts.innterText = order.querySelector('dl').dataset.donuts;
    pancakes.innerText = order.querySelector('dl').dataset.pancakes;
    status.innerText = order.querySelector('dl').dataset.delivered === 'true' ? 'Delivered' : 'Pending';
});


//data-* attribute - used to store custom data. Allows us to store extra info on html elements which can later be accessed and changed using js
//dataset property is used to access the custom data attributes







/*
const 1-root = document(order1);
const 1-biscuits: document(biscuits);
const 1-donuts: document(donuts);
const 1-pancakes: document(pancakes);
const 1-status: document(status);

const 2-root = document(order2);
const 2-biscuits: document(biscuits);
const 2-donuts: document(donuts);
const 2-pancakes: document(pancakes);
const 2-status: document(status);

const 3-root = document(order3);
const 3-biscuits: document(biscuits);
const 3-donuts: document(donuts);
const 3-pancakes: document(pancakes);
const 3-status: document(status);

1-biscuits= 1-root.biscuits;
1-donuts = 1-root.donuts;
1-pancakes = 1-root.pancakes;
1-status = 1-root.status ? Delivered : Pending

2-biscuits= 2-root.biscuits;
2-donuts = 2-root.donuts;
2-pancakes = 2-root.pancakes;
2-status = 2-root.status ? Delivered : Pending

3-biscuits= 3-root.biscuits;
3-donuts = 3-root.donuts;
3-pancakes = 3-root.pancakes;
3-status = 3-root.status ? Delivered : Pending
*/