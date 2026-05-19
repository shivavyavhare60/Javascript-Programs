let num = [32,45,12,9.3,11,23]
let temp ;
for(let i=0;i<num.length;i++){
    for(let j=i+1;j<num.length;j++){
     if(num[i]>num[j]){
        temp = num[i]
        num[i] =num[j]
        num[j]=temp;
     }
    }
    console.log(num[i])
}
//highest number 
console.log("Largest number from the arry is :",num[num.length-1])
//second Largest number is 
console.log("Largest number from the arry is :",num[num.length-2])
//smallest number is
console.log("Largest number from the arry is :",num[0])