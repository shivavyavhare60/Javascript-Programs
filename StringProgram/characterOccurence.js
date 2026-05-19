
let str = "Shiva Vyavhare";
let count = {}; //Empty object created here  

//created for each loop
for(let char of str){
    if(char !==" "){
        if(count[char]){
          count[char]++;
        }

        else{
            count[char]=1
        }
    }
}

console.log(count);
console.log("Repetitive Characters:");

for(let element in count){

    if(count[element] > 1){

        console.log(element);

    }
}
console.log("Non-Repetitive Characters:");

for(let key in count){

    if(count[key] === 1){

        console.log(key);

    }
}