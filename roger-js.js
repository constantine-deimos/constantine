"use strict";
$('#submit').click(function(e) {
    e.preventDefault();
    let val = $('input').val().toLowerCase();
    val = val.replace(/\s/g,'');
    console.log(val);
    if (typeof val === 'string') {
        $('body').css('background-color', `${val}`);
    } else {
        $('h1').html('I dont know that color');
    } //need to figure out how to return something if color is not available
});

// $('#submitTwo').click(function(e) {
//     e.preventDefault();
//     let z = $('.pushTwo').val();
//     z = Number(z);
//     console.log(z);
//     if (typeof z === 'number' && z > 0 && z <=10) {
//             let x,y,chr;
//             for(x=1; x <=z + 1; x++)
//             {
//                 for (y=1; y < x; y++)
//                 {
//                     chr= chr+("*");
//                 }
//                 $('h2').html(chr);
//                 chr='';
//             }
//
//     } else {
//         $('h2').html('That is not a number between one and ten');
//     }
// });

var z = parseInt(prompt("how long would you like your triangle?"));
var x,y,chr;
function pyramid(z) {

    for(x=1; x <= z + 1 ; x++)
    {
        for (y=1; y < x; y++)
        {
            chr=chr+("*");
        }
        console.log(chr);
        chr='';
    }
}

console.log(pyramid(z));