"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "channel", reaction: "😌", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Salut je m\'appelle *𝐓𝐑𝐄𝐗 𝐌𝐃* \n\n ' + 'je suis un bot Whatsapp Multi-appareil voici la chaîne';
    let d = ' developpé par *𝐩𝐨𝐰𝐞𝐫𝐝 𝐛𝐲 𝐁𝐄𝐑𝐀☆*';
    let varmess = z + d;
    var lien = 'https://whatsapp.com/channel/0029VajJoCoLI8YePbpsnE3q';  // Remplacez cet URL par le lien que vous souhaitez envoyer
    await zk.sendMessage(dest, { text: varmess + "\n" + lien });
});

console.log("mon test");

});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *𝐓𝐑𝐄𝐗 𝐌𝐃* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *𝐁𝐄𝐑𝐀*'
      let varmess=z+d
      var img='https://telegra.ph/file/7113ddc85a26a69a7a437.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
