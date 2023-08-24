const fs = require('fs');
const crypto = require('crypto');

// ler chaves de arquivos
const privateKey = fs.readFileSync('private-key.pem', 'utf8');
const publicKey = fs.readFileSync('public-key.pem', 'utf8');

// função para assinar uma mensagem com a chave privada
function assinarMensagem(mensagem, privateKey) {
    const sign = crypto.createSign('RSA-SHA256');
    sign.update(mensagem);
    return sign.sign(privateKey, 'base64');
}

// função para verificar a assinatura de uma mensagem
function verificarAssinatura(mensagem, assinatura, publicKey) {
    const verify = crypto.createVerify('RSA-SHA256');
    verify.update(mensagem);
    return verify.verify(publicKey, assinatura, 'base64');
}

// mensagem de exemplo
const mensagem = "Esta é uma mensagem íntegra.";

// assinar a mensagem
const assinatura = assinarMensagem(mensagem, privateKey);
console.log("Assinatura:", assinatura);

// verificador da assinatura
const isAssinaturaValida = verificarAssinatura(mensagem, assinatura, publicKey);
console.log("Assinatura válida:", isAssinaturaValida);