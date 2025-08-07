// var myNum = 25

// if ( myNum <= 45){
//     document.write ("yes is correct")
// }else if (myNum == 20){
//     document.write ("this is the right number")
// } else if ()

// if ( myNumb >= 20 && myNum <= 15) {
//     document.write (" yes correct number")
// } else {
//     console.log("error")
// }
// if ( myNum >= 20 || myNum <= 15){
// document.write
// ( "yes correct number")
// }else {
//       console.log( "error")
// }

var age = 5;

while (age < 10){
    console,log ("your age is less then 10");
    age++;
}
document.write ("you are now over 10")

var age = 10; 

for(age = 10; age < 20; age++){
console.log ("your age is less than 20");
}
document.write ("you are over 20");

for (i = 0; i < 10; i++){
if(i === 4|| i === 5){
    continue;
}

console.log(i) 

if (i === 7){
    break;
}
}
console.log ("i have broken out of the loop");

function getAverage ( a, b, c, d,){
//    varAverage = (a + b + c + d) / 4; local variable
   console.log (average);
   return average;
}

// var myResult = getAverage(10,20,16,40); global variable
console.log("the average is" + myResult);

function logResult (){
    console.log("the average is " + myResult + "but inside a function")
}
logResult();
