//39. Implement the Caesar cipher

function ceasarTableGenerator(seed){
    let ceasorTable = new Map();
    for(let i = 97;i<123;i++){
        let char = String.fromCharCode(i);
        let newCode = ((i - 97 + seed) % 26 + 26) % 26;
        ceasorTable.set(char,String.fromCharCode(newCode + 97));
    }
    return ceasorTable;
}

function ceasorEncrypt(text, ceasarTableGenerator, key){
    let map = ceasarTableGenerator(key);
    let encrypted_text = "";
    for(let i = 0;i<text.length;i++){
        if(text.charAt(i)!=" "){
            encrypted_text += map.get(text.charAt(i));
        }else{
            encrypted_text+=" ";
        }
    }
    console.log(`encrypted_text=>${encrypted_text}`);
    console.log(`For Key=>${key}`);
    return encrypted_text;
}

function ceasorDecrypt(encrypted_text, ceasarTableGenerator, key){
    let decryptKey = -key;
    let decryptMap = ceasarTableGenerator(decryptKey);
    let decrypted_text = "";
    for(let i = 0;i<encrypted_text.length;i++){
        if(encrypted_text.charAt(i)!=" "){
            decrypted_text += decryptMap.get(encrypted_text.charAt(i));
        }else{
            decrypted_text+=" ";
        }
    }
    console.log(`decrypted_text=>${decrypted_text}`);
    console.log(`For Key=>${key}`);
    return decrypted_text;
}

let text = "this is fun"
let encrypted_text = ceasorEncrypt(text,ceasarTableGenerator,1);
let decrypted_text = ceasorDecrypt(encrypted_text,ceasarTableGenerator,1);