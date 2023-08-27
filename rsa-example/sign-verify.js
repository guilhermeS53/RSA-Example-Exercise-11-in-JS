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

// função para gerar um certificado assinado
function gerarCertificado(mensagem, secretKey) {
    return assinarMensagem(mensagem, secretKey);
}

// função para validar uma mensagem com um certificado
function validarMensagem(mensagem, certificado, publicKey) {
    return verificarAssinatura(mensagem, certificado, publicKey);
}

// Exportar as funções
module.exports = {
    gerarCertificado,
    validarMensagem
};