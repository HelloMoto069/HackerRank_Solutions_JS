function caesarCipher(s, k) {
    const alphabet = [...'abcdefghijklmnopqrstuvwxyz']
    const crypted = []
    let rotation = k
    if(rotation > 26){
        rotation = rotation % 26
    }
    for(let i in s){
        let position;
        let char = s[i];
        if(char.match(/[a-zA-Z]/i)){
            let isUpperCase = false;
            if(char === char.toUpperCase()){
                isUpperCase = true
                char = char.toLowerCase()
            }
            position = alphabet.indexOf(char) + rotation
            if(position > 25){
                position -= 26
            }
            if(position < 0){
                position += 25
            }
            char = alphabet[position]
            if(isUpperCase){
                char = char.toUpperCase()
            }
        }
        crypted.push(char)
    }
return crypted.join('')
}
