const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true){
    this.direct = direct;

  }
  encrypt(message, key) {
    if(message === undefined || key === undefined) {throw new Error('Incorrect arguments!')}

    let msgMachine = message.toUpperCase();
    let keyMachine  = (key.repeat(message.length / key.length +1)).slice(0, msgMachine.length).toUpperCase();
    let res = [];
    let j =0;
    
    for(let i=0; i< msgMachine.length; i++){   
        if (msgMachine[i].charCodeAt() > 64 && msgMachine[i].charCodeAt() < 91) {
          let r = (((msgMachine[i].charCodeAt() - 65) + (keyMachine[j].charCodeAt() - 65)) % 26)
          res.push(String.fromCharCode(r + 65))
          j++;
        }else{
          res.push(String.fromCharCode(msgMachine[i].charCodeAt()))
        }   
    }
    return this.direct ? res.join('') : res.reverse().join('');

  }

  decrypt(encryptedMessage, key) {
    if(encryptedMessage === undefined || key === undefined) {throw new Error('Incorrect arguments!')}
    
    let msgMachine = encryptedMessage.toUpperCase();
    let keyMachine  = (key.repeat(encryptedMessage.length / key.length +1)).slice(0, msgMachine.length).toUpperCase();
    let res = [];
    let j =0;
    
    for(let i=0; i< msgMachine.length; i++){   
        if (msgMachine[i].charCodeAt() > 64 && msgMachine[i].charCodeAt() < 91) {
          let r = (((msgMachine[i].charCodeAt() - 65) - (keyMachine[j].charCodeAt() - 65)) % 26)
          if (r < 0){
            res.push(String.fromCharCode((r +26)%26 + 65));
          }else{ 
            res.push(String.fromCharCode(r + 65));
          }
          j++;
        }else{
          res.push(String.fromCharCode(msgMachine[i].charCodeAt()))
        }   
    }
    return this.direct ? res.join('') : res.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
