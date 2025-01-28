import CryptoJS from "crypto-js";

const secretKey = "chave-secreta";

const message = "Oiii, Maria Eduarda!";


const encryptedMessage = CryptoJS.AES.encrypt(message, secretKey).toString();
console.log("Mensagem Criptografada:", encryptedMessage);

const bytes = CryptoJS.AES.decrypt(encryptedMessage, secretKey);
const decryptedMessage = bytes.toString(CryptoJS.enc.Utf8);
console.log("Mensagem Descriptografada:", decryptedMessage);
