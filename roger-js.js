"use strict";
$('#submit').click(function (e) {
    e.preventDefault();
    let val = $('input').val().toLowerCase();
    val = val.replace(/\s/g, '');
    console.log(val);
    if (typeof val === 'string') {
        $('body').css('background-color', `${val}`);
    } else {
        $('h1').html('I dont know that color');
    } //need to figure out how to return something if color is not available
});

$('#submitTwo').click(function (e) {
    e.preventDefault();
    let z = $('.pushTwo').val();
    z = Number(z);
    console.log(z);
    $('h2').html("");
    if (typeof z === 'number' && z > 0 && z <= 10) {
        let x, y;
        let chr = "";
        for (x = 1; x <= z + 1; x++) {
            for (y = 1; y < x; y++) {
                chr = chr + ("*");
            }
            $('h2').append(`${chr} <br>`);
            chr = '';
        }

    } else {
        $('h2').html('That is not a number between one and ten');
    }
});

//Given an array, find the int that appears an odd number of times.
function findOdd(numbers) {
    var count = 0;
    for(var i = 0; i<numbers.length; i++){
        for(var j = 0; j<numbers.length; j++){
            if(numbers[i] == numbers[j]){
                count++;
            }
        }
        if(count % 2 != 0 ){
            return numbers[i];
        }
    }
};

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])); //5
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1])); //10
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1])); //10
//return array with smallest number removed

function removeSmallest(numbers) {
    var outputArr = []; //created bucket
    var smallest = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
            smallest = numbers[i]; //get index of smallest number
        }
    }
    for (var j = 0; j < numbers.length; j++) {
        if (j !== numbers.indexOf(smallest)) {
            outputArr.push(numbers[j]); //create array not including index of smallest number
        }
    }

    return outputArr;
}

console.log(removeSmallest([5, 3, 2, 1, 4]));


