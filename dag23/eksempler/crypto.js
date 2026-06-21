import crypto from 'crypto'

//Symmetrisk kryptering

const algorithm = 'aes-256-cbc'
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)
// Encrypt
function encrypt(text) {
    const cipher = crypto.createCipheriv(algorithm, key, iv)
    let encrypted = cipher.update(text, 'utf8', 'hex')
    encrypted += cipher.final('hex')
    return encrypted
}

// Decrypt
function decrypt(encrypted) {
    const decipher = crypto.createDecipheriv(algorithm, key, iv)
    let decrypted = decipher.update(encrypted, 'hex', 'utf8')
    decrypted += decipher.final('utf8')
    return decrypted
}
const enc = encrypt("Nu har jeg købt mig en walkman")
console.log(enc)
console.log(decrypt(enc))

//Asymmetrisk kryptering

// Generate RSA key pair
crypto.generateKeyPair('rsa', {
modulusLength: 2048,
publicKeyEncoding: { type: 'pkcs1', format: 'pem' },
privateKeyEncoding: { type: 'pkcs1', format: 'pem' },
}, (err, publicKey, privateKey) => {
if (err) return console.error('Error generating keys:', err)
// Encrypt with public key
const encrypted = crypto.publicEncrypt(publicKey, Buffer.from('Sensitive Data')) //skal være en buffer som krypteres???
console.log('Encrypted with public key:', encrypted.toString('base64'))
// Decrypt with private key
const decrypted = crypto.privateDecrypt(privateKey, encrypted)
console.log('Decrypted with private key:', decrypted.toString())
})

//Andet eksempel

const fs = require('fs')
const crypto = require('crypto')
const dataToEncrypt = fs.readFileSync('data_to_encrypt.txt', { encoding: 'utf-8' })
const publicKey = Buffer.from(fs.readFileSync('offentlig_noegle.pem', { encoding: 'utf-8' }))
const encryptedData = crypto.publicEncrypt(
{
key: publicKey,
padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
oaepHash: 'sha256',
},
// We convert the data string to a buffer using `Buffer.from`
Buffer.from(dataToEncrypt)
)
fs.writeFileSync('encrypted_data.txt', encryptedData.toString('base64'), { encoding: 'utf-8' })

//Hashing
let data = 'Dette er en simpel sætning som vi skal konvertere til en hash med sha-256'
let hashedData = crypto.createHash('sha256').update(data).digest('hex')
console.log(hashedData)


