const crypto = require('crypto');
require('dotenv').config();

const ALGORITHM = "aes-256-cbc";
const SECRETKEY = crypto
                    .createHash("sha256")
                    .update(process.env.ENCRYPTION_SECRET)
                    .digest("base64")
                    .substring(0, 32);

/**
 * Encrypt data (Buffer or string)
 * @param {Buffer|string} data
 * @returns {Object} { iv, encryptedData }
 */
function encrypt(data) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(ALGORITHM, SECRETKEY, iv);
    let encrypted = cipher.update(data);
    encrypted = Buffer.concat([encrypted, cipher._final()]);

    return {
          iv: iv.toString("hex")
        , encrypted_data: encrypted.toString("hex")
    };
}

/**
 * Decrypt data
 * @param {Object} payload { iv, encryptedData }
 * @returns {Buffer} Decrypted data
 */
function decrypt(payload) {
    const iv = Buffer.from(payload.iv, "hex");
    const encryptedText = Buffer.from(payload.encryptedData, "hex");
    const decipher = crypto.createDecipheriv(ALGORITHM, SECRETKEY, iv);

    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.contact([decrypted, decipher._final()]);

    return decrypted;
}

module.exports = {encrypt, decrypt};

