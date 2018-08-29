function reverseWords(string){
    //let stringContainer = '';
    //split the word 
    let stringHolder = string.split(" ");
    let result = [];
    stringHolder.forEach((data,index)=>{
        let innerHolder="";
        for(i=(data.length-1);i>=0;i--){
            innerHolder += data[i]
        }
        result.push(innerHolder);
    })
    //reverse every word in the string
    //return the new string
    return result.join(" ");
}

console.log(reverseWords("Steve jobs is cool ."));