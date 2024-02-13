// looping through an array
const fruits = ["Banana", "Orange","Apple","Mango"];
let fruitLen = fruits.length;

let text= "<ul>";
for (let i = 0; i < fruitLen; i++){
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("demo").innerHTML = text;

// an easier way is through the Array.forEach() function

let text1 = "<ul>";
fruits.forEach(myFunction);
text1 += "</ul>";

function myFunction(value){
    text1 += "<li>" + value + "</li>"
}
document.getElementById("demo1").innerHTML = text1;

// easiest way to add an element is fruits.push

fruits.push("lemon");

//also they can be added through the length pro
const time = new Date();
document.getElementById("time").innerHTML = time.getTime();;
