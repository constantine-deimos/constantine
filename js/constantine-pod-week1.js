// https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-11.php
//1.Write a JavaScript program to generate a random color when a button is clicked (using es6)
function colorChange() {
    let hexColors = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];
    let newColor = "#";

    for (let i = 0; i <6; i++){
        let x = Math.round(Math.random()*14);
        var y = hexColors[x];
        newColor +=y
    }
    // document.getElementById('#color').style.backgroundColor = newColor;
    // document.getElementById('#colors').innerHTML = newColor;
}
colorChange();


//got the api from this website:
//https://www.programmableweb.com/api/ron-swanson-quotes
//2.make a random quote generator (refactor later)
    //link to the ron api

const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
const quoteDiv = document.getElementById("randomQuote");
const button = document.querySelector("#quoteBtn");
var currentQuote = '';



function generateQuote() {
    //first get the url then do something with that url
    fetch(url)

    //quotes.json will convert non-objects like null and undefined to valid json
         //essentially thats what the then is saying:
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
