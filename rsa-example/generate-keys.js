const fs = require('fs');
const crypto = require('crypto');

// gerarção das chaves RSA
function gerarChavesRSA() {
    const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
        modulusLength: 2048,
        publicKeyEncoding: {
            type: 'spki',
            format: 'pem',
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
        },
    });

    fs.writeFileSync('private-key.pem', privateKey);
    fs.writeFileSync('public-key.pem', publicKey);
    console.log('Chaves geradas e salvas como private-key.pem e public-key.pem');
}

// gerar as chaves
gerarChavesRSA();