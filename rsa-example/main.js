const { gerarCertificado, validarMensagem } = require('./sign-verify'); // import das funções
const fs = require('fs');
const privateKey = fs.readFileSync('private-key.pem', 'utf8');
const publicKey = fs.readFileSync('public-key.pem', 'utf8');

// caso de teste 1: pessoa A envia uma mensagem integra para pessoa B
const mensagemIntegra = "Esta é uma mensagem íntegra.";
const certificado = gerarCertificado(mensagemIntegra, privateKey);
console.log("Certificado:", certificado);

const isMensagemValida = validarMensagem(mensagemIntegra, certificado, publicKey);
console.log("Mensagem íntegra válida:", isMensagemValida);

// caso de teste 2: pessoa A envia uma mensagem alterada para pessoa B
const mensagemModificada = "Esta é uma mensagem modificada.";
console.log("Certificado (íntegra):", certificado); // Usar o mesmo certificado da mensagem íntegra

const isMensagemModificadaValida = validarMensagem(mensagemModificada, certificado, publicKey); // Validar com o mesmo certificado da mensagem íntegra
console.log("Mensagem modificada válida:", isMensagemModificadaValida);