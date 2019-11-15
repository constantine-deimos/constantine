// https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-11.php
//1.Write a JavaScript program to generate a random color when a button is clicked (using es6)
    //target the second button using [1]
const Colorbutton = document.getElementsByTagName('button')[1];
Colorbutton.addEventListener('click', () => {
    //set the color of the body to colors (which calls the function colors
    document.body.style.backgroundColor = colors();
});

//get a random color function
function colors() {
    let colorArray = [];

    for(let i =0; i < 3 ; i++){
        colorArray.push(Math.floor(Math.random() * (255 - 0) + 0));
    }
    // rgb -> hex
    let color = colorArray
        .map( x => x.toString(16))
        .join('');

    return `#${color}`;
}


//got the api from this website:
//https://www.programmableweb.com/api/ron-swanson-quotes
//2.make a random quote generator (refactor later)
    //link to the ron api

const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
const quoteDiv = document.getElementById("randomQuote");
const button = document.querySelector("#quoteBtn");
let currentQuote = '';



function generateQuote() {
    //first get the url then do something with that url
    fetch(url)

    //quotes.json will convert non-objects like null and undefined to valid json
         //essentially that's what the then is saying:
                //function(res){
                    // return res.json();
                // }
        //using the es6

        .then(quotes => quotes.json())
        .then(function (quote) {
            //put the quotes after so that the random quote will have the quotation marks
            quoteDiv.innerHTML = `"${quote}"`;
            currentQuote = `${quote}`;

        })
        //add a catch so that if something unexpected happens you get an error
        .catch(function (error) {
            console.log(error)
        })
}

//call the function to make it work
generateQuote();
//when you click the button call the function to generate a new quote
button.onclick = generateQuote;
