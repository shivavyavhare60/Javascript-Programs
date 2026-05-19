
let str = 'ssstpp pnnnm mmghrrr'  //s3tp3n3m3ghr3
let key={}
let result =""

for(let char of str){
    if(char!== " "){
        if(key[char]){
          key[char]++
        }
        else{
            key[char]=1
        }
    }
}
console.log(key)

//iterating lop on the object { s: 3, t: 1, p: 3, n: 3, m: 3, g: 1, h: 1, r: 3 }
for(let char in key){
    result = result + char;
  if(key[char]>1){
     result = result + key[char]
  }
}
console.log(result)