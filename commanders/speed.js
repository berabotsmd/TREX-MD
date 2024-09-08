"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "speed", reaction: "🏎️", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '𝐓𝐫𝐞𝐱 𝐌𝐝 𝐍𝐞𝐞𝐝 𝐍𝐨 𝐬𝐩𝐞𝐞𝐝 𝐭𝐞𝐬𝐭𝐬';
    let d = '𝐁𝐞𝐜𝐚𝐮𝐬𝐞 𝐈 𝐚𝐦 𝐓𝐡𝐞 𝐅𝐚𝐬𝐭𝐞𝐬𝐭 𝐁𝐨𝐭 𝐞𝐯𝐞𝐫 𝐌𝐚𝐝𝐞.';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/e359b71ab0fc21d0e6a0a.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *Zokou* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *Djalega++*'
      let varmess=z+d
      var img='https://telegra.ph/file/626e7105422c8908f723d.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
