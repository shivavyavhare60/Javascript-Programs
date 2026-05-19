
let str= "Shivshankar Vyavhare"
let count = {}
for(let element of str){
    if(element!==" "){
        if(count[element]){
          count[element]++
        }
        else{
            count[element]=1
        }
    }
}
console.log(count)


// let count = { S: 1, h: 3, i: 1, v: 2, s: 1, a: 4, n: 1, k: 1, r: 2, V: 1, y: 1, e: 1}
//for find out Repetative count
console.log("Repetative count as follows")
for(let keys in count){
    if(count[keys]>1){
     console.log(keys)
    }
}

//for find out non -Repetative count
console.log("Non-Repetative count as follows")
for(let keys in count){
    if(count[keys]==1){
     console.log(keys)
    }
}


