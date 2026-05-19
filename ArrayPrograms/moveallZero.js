
let num = [0,12,0,32,34,9,34,0,32]
let arr =[]

//move non zero ekements
for(let i =0;i<num.length;i++){
    if(num[i]!== 0){
        arr.push(num[i])
    }
}
//sort array 
arr.sort((a,b) => a - b);
//move  all zero to the last
for(let i =0;i<num.length;i++){
    if(num[i]=== 0){
        arr.push(num[i])
    }
}
console.log(arr)

let num1 = [0,12,100,32,34,9,34,0,32]

num1.sort((a,b) => a-b)
console.log(num1)