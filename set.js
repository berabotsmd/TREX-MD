const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUlVSEs2SThmdUpvQTVFSjdaTWFMcG5YZ3FrMng0VkYzSHBwMW5qTkYzbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidmVtTk5UcWd0UjBkcStLZ2VyWkFsOXNYRm1jdGU1NzZlcDEzaHdrVEJYYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhSUxyMjZqWTBiZFYxRXBvL3ptNE51aHhHZlRrRzExUWl6QmdscWVFbDAwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJeTRGNXA3V2VSTXNaN1VXczJCc1dtQmdhZm5aZjZBcFRIRkxENXR6L3hVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlIQ2hKdVdTbHh3ZFZiaWRja1NuOUxHNnk4Nk9iMGN6QmJkd2NIUlNzRmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxOeFRHdHhEckxNb2lUcExqQmJxd3k3dEFtUVZWUWxRMEZJSnVYdHNBeDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0ovSWxMSkdxRENkV0dsL2kwWlJaaTlGNzUwOVc2aVRFQVR0bUhjVk1HYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidXFkYXVnSFlRSzhCUEJYSnZ4VTRrc0FNVVZ6WDR5dGJLU013VlVmMlFnND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJ6VHhzdkRnL1NkZVcrSlNBeXFzcUFjTTBTSEZibjdjVlh5cTZFdGlUcmtmT2c0U3d0LzNaS09YdTNjWHVpbzZJZDJJNEFIbXdnZ1E5SStlM3VMaWhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYxLCJhZHZTZWNyZXRLZXkiOiJnQkM5cDQ3WnNhSjFERmE2WTJRUjRHYnFycG0zQXJWUGYvelcrU2tUSzNVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI2aWdETGotSVFQYXNFYUJPZGFzMjZBIiwicGhvbmVJZCI6IjQ0MDJmZGRlLTlkNGYtNDVmZi05MWY5LTQ3MjExZWYwZDFlMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKYVdlcXFIOEVJSm5xV29XVXRZblEvTi9uRzQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieFV0ODhCNmFacit2Q2xpczlPOTRlMmV6d25JPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxLMVlMMVdHIiwibWUiOnsiaWQiOiIyMzQ5MDY5MDQ1NTA0OjIzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlRvcCBOb3RjaCBUdiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTCt1cWNFQkVNQ3AxYllHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUTNJSzRTbWFTNlNmTE9xZm04anNtTW1xL0N3Ui9LUFRnSWE2dmNueW14ST0iLCJhY2NvdW50U2lnbmF0dXJlIjoib0o5YU9LWVFtQWFWUktKSlRTdHdlUmJPRE9mY2hhM0dmb0wvejkwQWtEaWZZYW53VGxxRERaQU1UQXJ3Szl0NkZ3bXJ6L0NZbENSTlFOU2haYjF5QVE9PSIsImRldmljZVNpZ25hdHVyZSI6InV0QjIwS1VQR2l0cGFmcUJObGZINWkzVU9ISWtUQ0V1M042NFBqcm1yanBSN0N1RSthK2QwTkVMcXdxTWh5dXhjbVFDd0NGbFdxMW9aYWx3M0xpUGdRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTA2OTA0NTUwNDoyM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVTnlDdUVwbWt1a255enFuNXZJN0pqSnF2d3NFZnlqMDRDR3VyM0o4cHNTIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1MjU2OTA5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVVcyJ9',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "𝗕𝗲𝗿𝗮",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "2349069045504",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "non",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    BOT : process.env.BOT_NAME || '𝗧𝗿𝗲𝘅 𝗠𝗱',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/e883c3cc22b0ded5e380e.jpg,https://telegra.ph/file/eca1a1dffe21dba0bc7bc.jpg,https://telegra.ph/file/5d3631dccfd838f49a9a8.jpg,https://telegra.ph/file/23df275c8026b7a1f1746.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
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
