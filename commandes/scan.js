const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "scan", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
 *Tap on the link to get session*
 
https://bugatti-session.onrender.com 
 
 *STEPS TO GET SESSION*
 
 1. Open link above
 2. Enter your whatsapp number with your country code eg : 254,255. And tap submit
 3. 𝐓𝐑𝐄𝐗 𝐌𝐃 will send you a code. Copy that code. Then whatsapp will sent Notification
 4. Tap on that notification then enter in the code that 𝐓𝐑𝐄𝐗 𝐌𝐃 sent you.
 5. It will load for sometime then Tesla will send A long session to your inbox on whatsapp at your own number
 6. Copy that long session and sent it to your deployer.
 
 
 `;
    
let menuMsg = `
> Made by : ® 𝐁𝐄𝐑𝐀™
`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *𝐓𝐑𝐄𝐗 𝐌𝐃*, déveloper 𝐁𝐄𝐑𝐀" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *𝐓𝐑𝐄𝐗 𝐌𝐃*, déveloper 𝐁𝐄𝐑𝐀" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

}); 

                    
