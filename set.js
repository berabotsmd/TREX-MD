const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUdOZnBLSHZLQjBXNWpPRVhnYmdNcjQ5eWFEK29qaDNzKzJ1VzlVSTBWQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRTNQUWVtakRqU2prVmo2V0paa1ZmWTg0NUtITGp2ZXNadWd5b1NzVmlWaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHS0x4aURoWjlYbXJoNmFlQmhVcGtnL0VNaFJ0bnlrYjlGM3dIL1o2TzFZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUTGV6TlJ2V05uU0xMNk1MdzZPNnZEMWM0Q0RQbVFUSVh0TkJsTVRIQkhZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitNd1VvR29zOFltTUNqcUdyRnN1MkVtTW55ZlNJRVFFd0t6VnQvdHg5R2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJvWnY0MU9OTWlUNitTbitVV3RzVVdXWmM1Uzl3SWJiZ2lpQ2NCcEoyM289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUdzRTVjOHlYd0Y4cnlFU1I5Q2lOMFlITE5meW9QR1pTbWNWZ3ByUFYxND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN3RFTFgyNks0MThZS29NelAySkw0bWtBNEpUTVNQRkorQ2FKZ0FpR0xXdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZjKy90TVZDWk8wSGZWK1V4UUhNdTJnRVEzUlRSdTFkRGZNakJwaEJ0WEhQSExSYllpNE5OUFVXY3d6Y1hFRGZESFhFdm5Yaklpb3VkS3I0YTF6cEJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE2LCJhZHZTZWNyZXRLZXkiOiIzVDdHaXA5RkpESkFNdWNIZW5wazk4Z0xyZkJyd3NNQTRkRmhkOFNoZlYwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJEek1YYXhhclQwcTVTSzlZVC1xR2hnIiwicGhvbmVJZCI6ImE5NmI4NjU4LWQ2N2ItNGE2My1hNmM3LWIwM2EzYWUyZDU5NiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHUUxIbkQva2c4RUdzMGhBT0hUUmFkZGNwNDQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFVEbHluaE81Um1TdHI5ZjlsUzVsSGlRT1lNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjI5WDczUlk4IiwibWUiOnsiaWQiOiIyNTY3MDM0NjcwNzU6NUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUHFEN3Q0Q0VMM2UyN1lHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTGlMVWFoT1Q4NlpocTlYVzNVeURVRjczbzloUTRHOVdEVmd0dEwxR1JqTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVlFndWFvODdBa21TempkaGE5a3pRZDZjd05FN0IzRGh6VnkvVjZRNldoV1R1ODJPQTNLd1hJWnpPek9nQW8wZmczbWxVSjliRURCajFsUDR5bnhlQXc9PSIsImRldmljZVNpZ25hdHVyZSI6IlYzOWxhbVNvMC82T3gvTXN1Vyt2azRCTnJXK1J0U3NTc3Q0K2ZvQ2Zpdlh4M3lrUU0xbGNZOEJWZmxmQy9XZnhzYnQwUFA4alNrTDZ4aHpHZWFFYUNnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU2NzAzNDY3MDc1OjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUzRpMUdvVGsvT21ZYXZWMXQxTWcxQmU5NlBZVU9CdlZnMVlMYlM5UmtZeiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTM2MTk5NX0=',
    PREFIXE: process.env.PREFIX || "+",
    OWNER_NAME: process.env.OWNER_NAME || "𝗕𝗲𝗿𝗮",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "254743982206",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "non",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    BOT : process.env.BOT_NAME || 'MTV',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/e883c3cc22b0ded5e380e.jpg,https://telegra.ph/file/eca1a1dffe21dba0bc7bc.jpg,https://telegra.ph/file/5d3631dccfd838f49a9a8.jpg,https://telegra.ph/file/23df275c8026b7a1f1746.jpg',
    MODE: process.env.PRIVATE_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '1',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
