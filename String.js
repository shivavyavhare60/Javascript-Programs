let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';

console.log(answer1)
// console.log(answer2)
// console.log(answer3)

//find length of the string
console.log("length of the string is:",answer1.length)
//
let text= 'It\'s alright.';  //'It's alright.'     -->will give error
console.log(text)   //It's alright
let text1 = "The character \ is called backslash.";
console.log(text1) 

//how to find character at speific position
let string = "Shiva"
let string1 = "Vyavhare"
console.log("charcater at second index is : ",string.charAt(2)) // i will return
console.log(string.concat(" ",string1))  //--> Shiva Vyavhare

//Reverse String
let reverseStr = ""
for(let i=string.length-1;i>=0;i-- ){
    reverseStr = reverseStr+string.charAt(i)
}
console.log(reverseStr)

