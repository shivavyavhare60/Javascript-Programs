
//program to Reverse each word 
let str = "Shiva vyavhare";

let words = str.split(" ")
let RevString = " "
for(let word of words){
    let revWord=''
    for(let i =word.length-1;i>=0;i--){
      revWord = revWord + word.charAt(i)
    }
    RevString = RevString +revWord;
}
console.log("Reverse String is ", RevString)