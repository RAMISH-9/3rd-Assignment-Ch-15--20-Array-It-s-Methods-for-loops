// Simple Alert 
function simpleAlert() {
    alert("I'm an alert")
}

// Print my name
function printMyName() {
    let myName = document.getElementById("inputText").value;

    if (myName === "") {
        alert ("Please type your name")
        return
    }
    document.getElementById("output").innerHTML = myName
}

let cities = ['Faisalabad', 'Lahore', 'Karachi', 'Islamabad', 'Burewala', 'Sialkot'];

// Print All Cities 

function printAllCitites() {
    document.getElementById("output").innerHTML = "";
    // console.log(document.getElementById("output").innerHTML.length)
    for (let i = 0; i < cities.length; i++) {
        // console.log(cities[i])
        let num = i + 1;
        // document.getElementById("output").innerHTML += num + ')' + cities[i] + '<br>'
        document.getElementById("output").innerHTML += num + ')' + cities[i] + '<br>'

    }
}


// Add city into the list

function addCity() {
    let city = document.getElementById("inputText").value;
    
    if (!city) {
        alert('Please type your city name.');
        return;
    }

    cities.push(city);
    document.getElementById('output').innerHTML += '<li>' + city + '</li>';
}


// Generate Table 

function generateTable() {
    let number = document.getElementById("inputText").value;

    if (!number){
        alert('Please enter a number.')
        return
    }
    let limit = +prompt("Give a number")
    document.getElementById('output').innerHTML = "";
    for (let index=1; index <= limit; index++) {
        document.getElementById("output").innerHTML += number + " * " + index + " = " + number * index + "<br>";
    }
}


// Clear Input Button
function clearInput() {
    let inputField = document.getElementById('inputText');
    inputField.value = '';
}

// Clear Output Button
document.getElementById("clearOutPutButton").onclick = function () {
    document.getElementById("output").innerHTML= '';
}
