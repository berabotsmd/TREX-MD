const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0N0RlVkNnNEL0ozSTRiSGJHbGI3bFlHK28wNUNDaUtuOHFwUmpGMHhrMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXJ2bmZHRXIyMllCbGRCUW1TenhnQ09KWFNlTmtyNGt1dWc2NVU0bnBHQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLQnFMeElkWlhUYjFwRWJPS3NXRDE5TStzM3UzMUZucjgrZng5cm9NUG5zPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQMmtvZUhqNkE2NXh3amlxZTFWRE81LzBZTW9oMnAxb1NYSldhZjRqTWtrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVJTnl6dkVkMlQ1b1p3azF2VDlOSk9mWWdqVTJRRmI4TmRsbGxaUGp0bnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjcxK2NoaTZNWWRFRUdna21OMHJXVkFubXFvS3hJcTRYUVp1SVRTOGdYQzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0Y4bk8wVTVRdXNTMjVMU2FhK0QzQUNJbUxWQ0FDMEFMWERwdCtuT1NWTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaXdmK0NIcElDWG5TMUFOamV4SHhXZnhibjF2N2JqQTFDZUhWOTFZS1d5WT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkordGxOanVJVWI2WTUyaDU0RWdsdmpUYWpVNnRqVFF3a2VLUk1LUGhiN04yM2plQVNudUMxd29UeDkxdHBPbW9nT2h1OVQvU1gwVVlkK2h1YVFPakN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEsImFkdlNlY3JldEtleSI6IktjVHNnNE4xRXExMUNhSVN3VG5IeXVFTnFEOEpDdVR4WUdGOEg5NUQwdmc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InVudF9TUVJrUy1TRTk5aDVzLWNoUmciLCJwaG9uZUlkIjoiMTliNGQ4ZmMtODk0MC00NzQzLTk0ZmUtODFlMWVhOGQzZTYyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImN3NytUK2RKeWVUdnRlbjNHbHpBZ2NDdEFLWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLY0IxVjlEd0lHVUN5TE5EWDBOVk40UUxkblE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWFRQR0VZNjMiLCJtZSI6eyJpZCI6IjI1NDc4NzUyNzc1Mzo5QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNbjlsMmtRcFBPVHRnWVlDQ0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJKZHdxRzhVUWZrL0d4d1lkdldwdTYrMWhMTGJyZXNaT3UvYnBWV0xkM2lJPSIsImFjY291bnRTaWduYXR1cmUiOiIrTjhHTmgyYmE0NEtCVFBMSTBlVzVQNkw0QTZFb1BnUFBRSUhZOEJCZkxLYmhQMlNpZmdRczNxVngxTlNCQmgwKzByOGtIcHZkRFdVcElqYmduWWVEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRFNyTStYUithV0k1cytFb3dsV3pVSnRFenJaV2o4ekpWUlBqTi9uWUR3RmUzUG1GVkx4bm5xbDFjTlNxekY3OXVjVk9oRW1WRmFpaUNQdDBKOHg3Q3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3ODc1Mjc3NTM6OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTWGNLaHZGRUg1UHhzY0dIYjFxYnV2dFlTeTI2M3JHVHJ2MjZWVmkzZDRpIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI0MTg1MDEwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFnRyJ9',
    PREFIXE: process.env.PREFIX || "+",
    OWNER_NAME: process.env.OWNER_NAME || "𝗕𝗲𝗿𝗮",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "254743982206",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "non",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    BOT : process.env.BOT_NAME || '𝗧𝗿𝗲𝘅 𝗠𝗱',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/1774326c63cc0b0e87680.jpg,https://telegra.ph/file/2e5cb1ec0619781c9fa41.jpg,https://telegra.ph/file/91e4fd1e8ce0fe6bb2253.jpg,https://telegra.ph/file/19df783b5751341a78780.jpg,https://telegra.ph/file/56dfb94e0f8b32fab33a7.jpg,https://telegra.ph/file/fe8a25fb17af3926e6048.jpg',
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
