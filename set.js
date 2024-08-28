const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUh1VHVQdDVpdkhZeWVOSVI2R3RoSURCNjdJNXQ2RjhwOVE1bGtDZUtsaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0xmd0lrTkY3dmlUOGJYNVFOdWd0ajRBWG96ZkhuR0hMQVZkejZHenozaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5THNra0ozMDljNm1ycUNncTFXZ0sybDJ5U2t4b0Q1Ymg1Tlc0bVNFVlZFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzclBhSCtzTUFMVlgxTE5yVlF1TXplTFFVREFDSWhlemYrRlRTa0tLblhBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklOL2tWWGhKK1NHa0xlSDJiZThqRjVCdW1ZRHRBbXJJVFp3R2VseHlNRW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdXbjc0V2lQOXQ2cHk2czF2MVF6RmlycExpazVCTE5xRlVGdmJqUzRiM1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibURySnRZM0tYRUF6bUpKcmlDSkxWS2wvbGJHaWkxRlFUcnFXY3ZEZklFRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTWt0WmJZTzZ5RlV6Wlo0d2I5SWZVSklkaEMvc3VobE82QnVSa282Z3h6dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndLeWRzak9NL1ExSzQ4dkdnL3NuU1JHZjcvdTZ1d3RqNE1GMzk1K1FFWjhLdVRaWW1sS2NhckpDSjRlRFpHaCtYajI1TkhyS1FmZnlLN05qdXNUaEJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAwLCJhZHZTZWNyZXRLZXkiOiJoZWp0NTZyR2NuTnc2ODRBdUdwdmtvQTd5SW1Mbmp2ZUU5Rm80QSs3WXJNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI4WFA4SHRqeFNYZTFkeGVMdzFFT2lRIiwicGhvbmVJZCI6IjFlYWIxZmQzLTczNzgtNGRiYS1hYjc3LTAwNTY0OGZkNzA0ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaVEN4YSthV2psbVhpV2NEdzF5WWJoLzhndk09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTDJzd2pKUXFoVzVTZzlwN1NLMk1STTFjM1VNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkJKV1ZLVFRZIiwibWUiOnsiaWQiOiIyMzQ5MDIxMDM1NTQ0OjEzQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNcTkyL01GRU9HQnU3WUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI0cGdxM1ozcEVvNHRZSStJVzNjNktGMDdYT1lRNXNRclhDdldxV2M3aGlRPSIsImFjY291bnRTaWduYXR1cmUiOiJOTHg1ZmFFMmQrS2xwRHJTWUFjc1MyZlQ5a2hoRHhqOGIyKzgvd1l1ekE3WTc2c3RydjhkTGZVbi9wSmJnaVpxdUl3bTlPUVgvSE5BR3hLeDdKL21DQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoibU0zSlJVMVhLWjByWVh2UlBnYkVFUXNuWCtmd216a0Rjc1kwbEg1WmtaNDkvQ1NmViswWjZGa2J2MWdnTXZYLzd1L01QdTYwUGVnc0QvdHpRQjRZQVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDIxMDM1NTQ0OjEzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVLWUt0MmQ2UktPTFdDUGlGdDNPaWhkTzF6bUVPYkVLMXdyMXFsbk80WWsifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjQ4MjU4MzgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBREU1In0=',
    PREFIXE: process.env.PREFIX || "+",
    OWNER_NAME: process.env.OWNER_NAME || "𝗕𝗲𝗿𝗮",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "2349021035544",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "non",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    BOT : process.env.BOT_NAME || '𝗧𝗿𝗲𝘅 𝗠𝗱',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/e883c3cc22b0ded5e380e.jpg,https://telegra.ph/file/eca1a1dffe21dba0bc7bc.jpg,https://telegra.ph/file/5d3631dccfd838f49a9a8.jpg,https://telegra.ph/file/23df275c8026b7a1f1746.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
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
