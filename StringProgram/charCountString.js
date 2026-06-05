let str = "ssssvnnnttj";  //-->s3vn3t2j
let result = "";
let count = 1;

for(let i = 0; i < str.length; i++){

    if(str[i] === str[i+1]){
        count++;  //4
    }else{
        result = result+ str[i] + count; //s

        // if(count > 1){
        //     result = result+count;
        // }

         count = 1;
    }
}

console.log(result);